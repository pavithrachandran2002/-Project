function formValidation()
{
    var uemail = document.registration.email;
    var passid = document.registration.psw;
if(ValidateEmail(uemail))
{
    if(passid_validation(passid,6)){
        return true;

}
}
return false;
}




function passid_validation(passid,x)
{
    var passid_len=passid.value.length;
    if (passid_len == 0 || passid_len > x || passid_len < x)
    {
        document.getElementById("pass").innerHTML = "Enter valid password";
        alert("enter valid password,pass should contain only 6 !!!");
        passid.focus();
        return false;
    }
    return true;
}



function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
document.getElementById("mail").innerHTML = "Enter valid email";
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}