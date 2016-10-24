$(document).ready(function(){

  $(".scroll").click(function (event) {

    // Override Standard Behavior
    event.preventDefault();

    //calculate destination 
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height();
    } else {
      dest = $(this.hash).offset().top;
    }

    //go to destination
    $('html,body').animate({ scrollTop: dest }, 500, 'swing');
  });

  positionButtons();

  $(window).resize(function(){
    positionButtons();
  });


});

$(window).resize(function(){
  positionButtons();
});

function positionButtons(){
  var new_padding = ($(window).height() - $('.like_or_buy').height()) * .45;
  $('.like_or_buy').css('padding-top', new_padding + "px");
}