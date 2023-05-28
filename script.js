function toggle_menu(){
  var toggleButton = document.getElementById("menu-toggle")
  var mainText = document.getElementById("main-text")
  var menu = document.getElementById("menu-list")
  var toggleButtonInside = document.getElementById("menu-toggle-inside")

  if (menu.style.display === "none" || menu.style.display === ""){
    console.log(toggleButton.display)
    menu.style.display = "block"
    console.log(toggleButton)
    toggleButton.style.display= "none"
    console.log(toggleButtonInside)
    toggleButtonInside.style.display= "block"
  } else {
    menu.style.display = "none"
    toggleButton.style.display="block"
    toggleButtonInside.style.display= "none"
  }
}
