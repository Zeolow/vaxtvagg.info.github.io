function toggle_menu(){
  var toggleButton = document.getElementById("menu-toggle")
  var mainText = document.getElementById("main-text")
  var menu = document.getElementById("menu-list")

  if (menu.style.display === "none" || menu.style.display === ""){
    console.log(toggleButton.display)
    menu.style.display = "block"
    mainText.display = "none"
    toggleButton.display= "none"
    toggleButton.innerText="(⇦)"
  } else {
    menu.style.display = "none"
    mainText.display = "block"
    toggleButton.display="block"
    toggleButton.innerText="(⇨)"
  }
}
