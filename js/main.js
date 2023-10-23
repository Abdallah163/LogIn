var userName = document.getElementById('enterYourName');
var userPass = document.getElementById('enterYourPass');
var userdet=[];




function login(){
    var det={
        uName :userName.value,
        uPass :userPass.value
    
       }
       userdet.push(det);
    localStorage.setItem('det',JSON.stringify(userdet));
    empty()
       reset()
       console.log(userdet);
}

function reset(){
    userName='';
    userPass='';
}
function empty(){
if(userName.value==""||userPass==""){
    document.getElementById('required').innerHTML='All inputs is required';
}
}
function uNameValidation(){
    var uNameRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var userName = userName;
if(uNameRegex.test(userName)){
    return true;
}else{
    return false;
}
}