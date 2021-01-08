/* eslint-disable func-names, no-mutable-exports, comma-dangle, strict */

'use strict';

(($, Drupal, drupalSettings) => {
  Drupal.behaviors.ginEditForm = {
    attach: function attach() {
      const messagesHeight = document.querySelector('.region-highlighted').offsetHeight;

      // Set offset
      if (messagesHeight > 0) {
        document.querySelector('.layout-node-form__actions').style.marginTop = `calc(-214px - ${messagesHeight}px - 2.5rem)`;
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
