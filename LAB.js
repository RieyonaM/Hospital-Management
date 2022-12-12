function validate() {
var s=0;
    
    try {
        let name = document.getElementById("name").value;
        let namepattern="[a-zA-Z]";
    if (!name.match(namepattern))
    {s=1;
        alert("invalid name");
        return;
    }

    let phone = document.getElementById('phone').value;
    let pattern = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";

    if(!phone.match(pattern)) {s=1;
        alert('Invalid phone number');
        return;
    }

        
            let mailpattern = "[a-z0-9]+@mca.christuniversity.in";
        var mail = document.getElementById('email').value;

        if(!mail.match(mailpattern)) {
            s=1;
            alert("invalid mail id");
            return;
        }

        var age = document.getElementById('age').value;
        let agepattern="[0-9]{1,3}";
        if(!age.match(agepattern)) {
            s=1;
            alert("invalid age");
            return;
        }

       

        var passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        var password = document.getElementById('password').value;
        var cpassword = document.getElementById('cpassword').value;

        if(password!=cpassword)
        {
            s=1;
            alert("Passwords dont match");
            return;
        }
        if(!password.match(passpattern)) {
            s=1;
            alert("invalid Password");
            return;
        }


       if(s==0){

        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("name",name,2);
    setCookie("phone",phone,2);
    setCookie("email",mail,2);
    setCookie("color","#ce56ea",2);
    setCookie("images","cc.jpeg",2);

    localStorage.setItem("age1",String(age));
    alert("Successfully logged in");
    window.open("lab7.html");
       }

        

        
    } catch (err) {

    }
    
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  