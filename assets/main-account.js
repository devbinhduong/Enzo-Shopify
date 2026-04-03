var check_JS_load = true;

function loadFunction() {
  if (check_JS_load) {
    check_JS_load = false;
    handleAccountTags();
  }
}

function eventLoad() {
  ['keydown', 'mousemove', 'touchstart'].forEach((event) => {
    document.addEventListener(event, () => {
      loadFunction();
    });
  });

  // Eagerly load the address book (default active tab)
  renderAddressBook();
}
eventLoad();


function handleAccountTags() {
  const tabs = document.querySelectorAll('.accountTabs__item');
  const contents = document.querySelectorAll('.accountTabs__content');

  const loaded = {
    wishlist: false,
    ksGlowieClub: false,
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      contents.forEach((c) => c.classList.remove('active'));
      tab.classList.add('active');
      contents[index].classList.add('active');

      // Lazy-load wishlist on first click
      if (index === 2 && !loaded.wishlist) {
        loaded.wishlist = true;
        renderWishlist();
      }

      // Lazy-load KS Glowie Club on first click
      if (index === 3 && !loaded.ksGlowieClub) {
        loaded.ksGlowieClub = true;
        renderKsGlowieClub(contents[index]);
      }
    });
  });
}

/* -------------------------------------------------------
   ORDER ACCORDION – custom lightweight accordion
   Avoids AccordionCustom / Motion.js which break when
   Swiper content is inside (height calc issue + can't
   reopen after close due to leftover inline styles).
------------------------------------------------------- */
function handleOrderAccordions() {
  document.querySelectorAll('.order-accordion').forEach((accordion) => {
    const btn     = accordion.querySelector('.order-accordion__summary');
    const panel   = accordion.querySelector('.order-accordion__products');
    const inner   = accordion.querySelector('.order-accordion__products-inner');
    if (!btn || !panel || !inner) return;

    btn.addEventListener('click', (e) => {
      // ORDER AGAIN button is nested inside – don't toggle accordion for it
      if (e.target.closest('.order-again-btn')) return;

      const isOpen = accordion.classList.contains('order-accordion--open');

      if (!isOpen) {
        _openOrderAccordion(accordion, btn, panel, inner);
      } else {
        _closeOrderAccordion(accordion, btn, panel);
      }
    });
  });
}

function _openOrderAccordion(accordion, btn, panel, inner) {
  // 1. Remove hidden so the element becomes visible (display:block)
  panel.hidden = false;

  // 2. Measure natural height AFTER making visible
  const targetHeight = inner.scrollHeight;

  // 3. Start from 0 and animate to natural height
  panel.style.overflow  = 'hidden';
  panel.style.height    = '0px';
  panel.style.transition = 'height 0.28s ease';

  // rAF to let the browser paint the 0 height before transitioning
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panel.style.height = targetHeight + 'px';
    });
  });

  // 4. After transition: set height to auto so swiper resize works
  panel.addEventListener('transitionend', function onEnd() {
    panel.removeEventListener('transitionend', onEnd);
    panel.style.height   = 'auto';
    panel.style.overflow = '';

    // Init or update Swiper now that content is fully visible
    const swiperComp = accordion.querySelector('swiper-component');
    if (swiperComp) {
      if (!swiperComp._orderSwiperReady) {
        swiperComp._orderSwiperReady = true;
        if (typeof swiperComp.initializeSwiper === 'function') {
          swiperComp.initializeSwiper();
        }
      } else {
        const sw = swiperComp.initSwiper;
        if (sw && !sw.destroyed) sw.update();
      }
    }
  });

  accordion.classList.add('order-accordion--open');
  btn.setAttribute('aria-expanded', 'true');
}

function _closeOrderAccordion(accordion, btn, panel) {
  // Fix current height explicitly before collapsing (auto → px)
  panel.style.height    = panel.scrollHeight + 'px';
  panel.style.overflow  = 'hidden';
  panel.style.transition = 'height 0.25s ease';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panel.style.height = '0px';
    });
  });

  panel.addEventListener('transitionend', function onEnd() {
    panel.removeEventListener('transitionend', onEnd);
    panel.hidden = true;
    panel.style.height   = '';
    panel.style.overflow = '';
    panel.style.transition = '';
  });

  accordion.classList.remove('order-accordion--open');
  btn.setAttribute('aria-expanded', 'false');
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  handleOrderAccordions();
  handleOrderAgainButtons();
});

/* -------------------------------------------------------
   ORDER AGAIN – add all line items to cart, update
   the CartDrawer via renderContents(), then open it.
   Mirrors the exact pattern used by product-form.js.
------------------------------------------------------- */
function handleOrderAgainButtons() {
  document.querySelectorAll('.order-again-btn').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation(); // Don't trigger accordion toggle

      const variantIds = btn.dataset.lineItems
        ? btn.dataset.lineItems.split(',').filter(Boolean)
        : [];

      if (!variantIds.length) return;

      // Locate the CartDrawer element
      const cartDrawer = document.querySelector('cart-drawer');

      // Button loading state
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Adding...';

      try {
        const items = variantIds.map((id) => ({ id: parseInt(id, 10), quantity: 1 }));

        // Build body — include sections so CartDrawer can re-render itself
        const bodyData = { items };
        if (cartDrawer && typeof cartDrawer.getSectionsToRender === 'function') {
          bodyData.sections = cartDrawer.getSectionsToRender().map((s) => s.id);
          bodyData.sections_url = window.location.pathname;
        }

        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyData),
        });

        const parsedState = await response.json();

        if (!response.ok || parsedState.status) {
          // Shopify returns { status, message, description } on error
          console.error('Order Again error:', parsedState.message || parsedState.description);
          btn.textContent = 'Error';
          setTimeout(() => {
            btn.disabled = false;
            btn.textContent = originalText;
          }, 2500);
          return;
        }

        btn.textContent = '✓ Added!';

        // Update + open CartDrawer using the theme's built-in method
        if (cartDrawer && typeof cartDrawer.renderContents === 'function') {
          cartDrawer.renderContents(parsedState);
        }

      } catch (err) {
        console.error('Order Again fetch error:', err);
        btn.textContent = 'Error';
      } finally {
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = originalText;
        }, 3000);
      }
    });
  });
}

function renderAddressBook() {
  const container = document.querySelector('#address-loader-container');
  if (!container) return;

  fetch('/account/addresses?section_id=main-addresses')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const sectionHtml = doc.querySelector('.shopify-section').innerHTML;
      
      container.innerHTML = sectionHtml;

      // Re-activate address form JS
      if (typeof CustomerAddresses !== 'undefined') {
        new CustomerAddresses();
      }
    })
    .catch(e => console.error('Lỗi tải địa chỉ:', e));
}

function renderWishlist() {
  const container = document.querySelector('#wishlist-loader-container');
  if (!container) return;
  
  fetch('/?section_id=main-wishlist-page')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const section = doc.querySelector('.shopify-section');
      if (section) {
        container.innerHTML = section.innerHTML;
      }
    })
    .catch(e => console.error('Lỗi tải wishlist:', e));
}

function renderKsGlowieClub(contentElement) {
  const container = contentElement.querySelector('#ks-glowie-club-loader-container');
  const url = contentElement.getAttribute('data-club-page-url');
  
  if (!container || !url) return;
  
  // Show loading state if needed
  container.innerHTML = '<p>Loading KS Glowie Club...</p>';

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Usually, Shopify sections on a page are wrapped inside #MainContent
      const mainContent = doc.querySelector('#MainContent');
      
      if (mainContent) {
        container.innerHTML = mainContent.innerHTML;
      } else {
        // Fallback if there is no #MainContent id
        container.innerHTML = doc.body.innerHTML;
      }
    })
    .catch(e => {
      console.error('Lỗi tải KS Glowie Club:', e);
      container.innerHTML = '<p>Error loading content.</p>';
    });
}
