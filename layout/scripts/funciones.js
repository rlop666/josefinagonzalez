function functionReady(){
	
    var altura = $('#cssmenu').offset().top;

    $(window).on('scroll', function(){
      if ( $(window).scrollTop() > altura ){
        $('#cssmenu').addClass('menu-fixed');
      } else {
        $('#cssmenu').removeClass('menu-fixed');
      }
    });
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  var x = document.lastModified;
  document.getElementById("fechamodificacion").innerHTML = "Ultima modificación: " + x;
}