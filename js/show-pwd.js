/*$(document).ready(function(){
    if ($("input[id=pwd]").is(":checked")){
        alert("OK");
    }
    
}); */

       function myFunction() {
    var x = document.getElementById("pwd");
           var z = document.getElementById("cpwd");
    if (x.type === "password") {
        x.type = "text";
        z.type = "text";
    } else {
        x.type = "password";
        z.type = "password";
    }
}
