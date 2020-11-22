jQuery(document).ready(function() {

  $('.open-setting, .overlay').on('click', function(e) {
      e.preventDefault();
      $('.sidebar').toggleClass('active');
      $('.overlay').toggleClass('active');
  });

  /* other code */

});