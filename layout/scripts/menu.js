function menu(){

  var elMenu = "<div class='wrapper menu_fondo'>";
  elMenu += "<div id='topbar' class='clear'>";
    elMenu += "<!-- ################################################################################################ -->";
    elMenu += "<nav id='mainav' class='fl_left'>";
      elMenu += "<ul class='clear'>";
        elMenu += "<li class='active'><a href='index.html'>Home</a></li>";
        elMenu += "<li><a class='drop' href='servicios.html'>Servicios</a>";
          elMenu += "<ul>";
            elMenu += "<li><a href='#'>Adultos</a></li>";
            elMenu += "<li><a class='drop' href='#'>Infancia y adolescencia</a>";
              elMenu += "<ul>";
                elMenu += "<li><a href='infantil.html'>Terapia infantil y adolescentes</a></li>";
                elMenu += "<li><a href='asesoramientopadres.html'>Asesoramiento a padres</a></li>";
              elMenu += "</ul>";
            elMenu += "</li>";
            elMenu += "<li><a class='drop' href='familia.html'>Familia</a></li>";
            elMenu += "<li><a class='drop' href='perinatal.html'>Perinatal</a>";
              elMenu += "<ul>";
                elMenu += "<li><a href='asesoramientopadres.html'>Asesoramiento a padres</a></li>";
                elMenu += "<li><a href='preparacionmaternidad.html'>Preparación a la maternidad y paternidad</a></li>";
                elMenu += "<li><a href='perinatal.html'>Psicología perinatal</a></li>";
              elMenu += "</ul>";
            elMenu += "</li>";
            elMenu += "<li><a href='pareja.html'>Pareja</a></li>";
            elMenu += "<li><a href='#'>Online</a></li>";
          elMenu += "</ul>";
        elMenu += "</li>";
        elMenu += "<li class=''><a href='biografia.html'>Biografía humana</a></li>";
        elMenu += "<li class=''><a href='perinatal.html'>Psicología perinatal</a></li>";
        elMenu += "<li class=''><a href='quien.html'>Quién soy</a></li>";
        elMenu += "<li class=''><a href='contacto.html'>Contacto</a></li>";
        elMenu += "<li><a class='drop' href='#'>Artículos</a>";
          elMenu += "<ul>";
            elMenu += "<li><a href='./apego.html'>Teoría del apego</a></li>";
          elMenu += "</ul>";
        elMenu += "</li>";
        elMenu += "<li class=''><a href='recursos.html'>Recursos</a></li>";
      elMenu += "</ul>";
    elMenu += "</nav>";
    elMenu += "<!-- ################################################################################################ -->";
  elMenu += "</div>";
elMenu += "</div>";

document.getElementById('menu').innerHTML=(elMenu);
}