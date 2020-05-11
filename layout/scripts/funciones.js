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

  var update = new Date(document.lastModified);
  update = new Date(document.lastModified)
  theMonth = update.getMonth() + 1;
  theDate = update.getDate();
  theYear = update.getFullYear();
  theHour = update.getHours();
  theMinutes = (update.getMinutes()<10?'0':'') + update.getMinutes();
  document.getElementById("fechamodificacion").innerHTML = "Ultima modificación: " + theDate + "/" + theMonth + "/" + theYear + " " + theHour + ":" + theMinutes;
	
  if(getCookie('tiendaaviso')!="1"){
    document.getElementById("barraaceptacion").style.display="block";
}	
}

function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}
 
function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function PonerCookie(){
    setCookie('tiendaaviso','1',365);
    document.getElementById("barraaceptacion").style.display="none";
}
