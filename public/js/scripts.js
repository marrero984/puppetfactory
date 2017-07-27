$(document).ready(function(){
  $('.collapsed').hide();

  $('.collapsible').on('click', function() {
    $(this).find('.fa').toggleClass('fa-rotate-90');
    var target = $("#" + this.dataset.target);
    target.toggle(200);
  });
});
