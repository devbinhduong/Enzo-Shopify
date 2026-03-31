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

  renderAddressBook();
  renderWishlist();
}
eventLoad();


function handleAccountTags() {
  const tabs = document.querySelectorAll('.accountTabs__item');
  const contents = document.querySelectorAll('.accountTabs__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      contents.forEach((c) => c.classList.remove('active'));
      tab.classList.add('active');
      contents[index].classList.add('active');
    });
  });
}

function renderAddressBook() {
  const container = document.querySelector('#address-loader-container');
    
    fetch('/account/addresses?section_id=main-addresses')
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const sectionHtml = doc.querySelector('.shopify-section').innerHTML;
        
        container.innerHTML = sectionHtml;

        // Kích hoạt lại các tính năng JS (như bấm Sửa/Xóa/Thêm mới)
        if (typeof CustomerAddresses !== 'undefined') {
          new CustomerAddresses();
        }
      })
      .catch(e => console.error('Lỗi tải địa chỉ:', e));
}

function renderWishlist() {
  const container = document.querySelector('#wishlist-loader-container');
  if (!container) return;
  
  // Use current page path or /search to fetch independent sections
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