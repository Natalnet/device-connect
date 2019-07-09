pass = document.querySelector('input[name=password]');
resend = document.querySelector('input[name=respassword]');
function pass(){
    if(pass != resend ){
        alert("Hey, correct the 'confirm password'")
    }else{
        window.location.replace("../LogIn/loginScreen.html")
    }
}