if (!customElements.get("add-to-cart-popup")) {
    customElements.define(
      "add-to-cart-popup",
      class AddToCartPopup extends ModalDialog {
        constructor() {
          super();
          this.modalContent = this.querySelector("#AddToCartModal");
          this.productList = this.querySelector("#AddedToCartList");
        }


        close(preventFocus = false) {
          setTimeout(() => (this.modalContent.innerHTML = ""), 500);

          if (preventFocus) this.openedBy = null;
          super.hide();
        }

        open(opener) {
          super.show(opener);
        }

        renderContents(parsedState) {
          this.variantId = parsedState.id;
          const parser = new DOMParser();
          const cartDoc = parser.parseFromString(
            parsedState.sections['cart-drawer'],
            'text/html'
          );

          const cartHTML = cartDoc.querySelector('#CartDrawer');
          const productHTML = cartHTML.querySelector(`#main-cart-items .cart-item[data-variant-id="${this.variantId}"]`);

          if (productHTML) {
            this.productList.replaceChildren(productHTML.cloneNode(true));
          }

          this.getSectionsToRender().forEach((section) => {
            const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
            if (sectionElement && parsedState.sections && parsedState.sections[section.id]) {
              sectionElement.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
            }
          });

          setTimeout(() => {
            this.open();
          });
        }

        getSectionsToRender() {
          return [
            {
              id: 'cart-drawer',
              selector: '#CartDrawer',
            },
            {
              id: 'cart-icon-bubble',
            },
          ];
        }

        getSectionInnerHTML(html, selector = '.shopify-section') {
          return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
        }
      }
    );
}
