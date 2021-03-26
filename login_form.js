let check = true;
function showPassword(){
    
    if(check){
        document.getElementById('pass').type ="text";
        check = false;
    }else{
        document.getElementById('pass').type ="password";
        check = true;
    }
}