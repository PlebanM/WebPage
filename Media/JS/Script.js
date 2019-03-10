function validateForm() {
    var x = document.forms["contact-form"]["email"].value;
    
    if (x.trim() == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function validateForms()
{
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
}