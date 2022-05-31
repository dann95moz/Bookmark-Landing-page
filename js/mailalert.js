const mailCheck = document.getElementById('email');

document.addEventListener('keyup', logKey);

function logKey(e) {
  console.log(document.getElementById('email').value)
  if (document.getElementById("email").value.includes("@")&& document.getElementById("email").value.includes(".")) {
    
    document.getElementById("email").setAttribute("style", "border:0px; border-style:solid; border-color:hsl(0, 94%, 66%);")
    document.getElementById("group2").setAttribute("style", "border:0px; border-style:solid; border-color:hsl(0, 94%, 66%);")
    document.getElementById("error").innerHTML=""
  }else{
    
    document.getElementById("error").innerHTML="Whoops, make sure it's an email"
    document.getElementById("error").setAttribute("style","color:white; font-size:14px; ")
    document.getElementById("group2").setAttribute("style", "border:3px; border-style:solid; border-color:hsl(0, 94%, 66%);border-radius: 5px;background-color:hsl(0, 94%, 66%);font-style: italic;height:80px;margin-bottom:10% ")
  }
  
  

 

}
