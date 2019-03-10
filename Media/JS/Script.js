function validateForms(){
  var fields = ["name", "email", "message"]

  var i, l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
    if (document.forms["contact-form"][fieldname].value.trim() === "") {
        return document.getElementById("contact-btn").disabled = true;      
    }
  }
  document.getElementById("contact-btn").disabled = false;
  document.getElementById("button-id").classList.replace("error", "no-error");
  document.getElementById("button-id").innerHTML = "";
}

function validateInputEmail(){
    var inpObj = document.getElementById("input-email").value.trim();
    var regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    var element = document.getElementById("button-id");
    if(inpObj.match(regex)){
        document.getElementById("input-email").style.border = "";
        element.innerHTML = "";
        element.classList.replace("error", "no-error");
        alert("Message has been send!");
        
    }else{
        document.getElementById("input-email").style.border = "3px solid #ff0000";
        element.classList.add("error");
        element.innerHTML = "Change your input data!";
        document.getElementById("contact-btn").disabled = true;
        return false;
    }
}