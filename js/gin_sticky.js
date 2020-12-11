'use strict';

(($, Drupal, drupalSettings) => {
  Drupal.behaviors.ginSticky = {
    attach: function attach() {
      const form = document.querySelector('.region-content form');
      const sticky = document.querySelector('.gin-sticky');
      const newParent = document.querySelector('.layout-region-node-secondary__actions');

      newParent.prepend(...sticky.parentElement.childNodes);

      newParent.querySelectorAll('input[type="submit"]')
          .forEach((el) => el.setAttribute('form', form.id));

      setTimeout(() => {
        sticky.classList.add('gin-sticky--visible');
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
