
function toggle_menu(){
  var toggleButton = document.getElementById("menu-toggle")
  var menu = document.getElementById("menu-list")
  var toggleButtonInside = document.getElementById("menu-toggle-inside")
  

  if (menu.style.display === "none" || menu.style.display === ""){
    menu.style.display = "block"
    toggleButton.style.display= "none"
    toggleButtonInside.style.display= "block"
  } else {
    menu.style.display = "none"
    toggleButton.style.display="block"
    toggleButtonInside.style.display= "none"
  }
}

function on_resize(){
  var toggleButton = document.getElementById("menu-toggle")
  var menu = document.getElementById("menu-list")
  var toggleButtonInside = document.getElementById("menu-toggle-inside")
  
  if(window.innerWidth >= 1000) {
    menu.style.display="block"
    toggleButton.style.display="none"
    toggleButtonInside.style.display= "none"
  } else {
    toggleButtonInside.style.display= "block"
  }
}
