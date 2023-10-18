const $submit =document.getElementById("submit")
      $contraseña =document.getElementById("contraseña")
      $usuario =document.getElementById("usuario")
      $visible =document.getElementById("visible")

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $contraseña.type = "password"
        else $contraseña.type ="text";
    
    }
});

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($contraseña.value !=="" && $usuario.value !== ""){
            e.preventDefault();
            window.location.href ="Dashbord.html"

        }
    }
})