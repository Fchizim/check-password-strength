var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strenght = document.getElementById("strenght");

pass.addEventListener('input', () =>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    if(pass.value.length < 4){
        strenght.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        strenght.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pass.value.length >= 8){
        strenght.innerHTML = "Strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }
})