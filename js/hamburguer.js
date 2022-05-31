function toggle(){
    var toggler = document.getElementById("hamburguer").getAttribute("aria-expanded"); 
  if (toggler === "false") 
  {
    console.log(toggler)
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("hamburguer").setAttribute("aria-expanded","true")
    document.getElementById("topbar").setAttribute("style","display:none")
  } else if (toggler ==="true") {
    
    console.log(toggler)
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("hamburguer").setAttribute("aria-expanded","false")
    document.getElementById("topbar").setAttribute("style","display:flex")
  }}
 
