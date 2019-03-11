function validateForms(){
  let fields = ["inputName", "inputEmail", "inputMessage"];

  let l = fields.length;
  for (let i = 0; i < l; i++) {
    console.log(fields[i]);
    let elementValue = document.getElementById(fields[i]).value;
    if (elementValue === "") {
        return document.getElementById("contact-btn").disabled = true;
    }
  }
  document.getElementById("contact-btn").disabled = false;
  document.getElementById("button-id").classList.replace("error", "no-error");
  document.getElementById("button-id").innerHTML = "";
}

function validateInputEmail(){
    let fields = ["inputName", "inputEmail"];
    let regex = ["\\b[A-Z][a-z]* [A-Z][a-z]*( [A-Z])?\\b", "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"];
    let count=0;

    for (let i = 0; i < fields.length; i++) {
        let inpObj = document.getElementById(fields[i]).value.trim();
        let element = document.getElementById("button-id");
        if(inpObj.match(regex[i])){
            document.getElementById(fields[i]).style.border = "";
            element.innerHTML = "";
            element.classList.replace("error", "no-error");
            count++;
            if (count===2){
                alert("Message has been send!");
            }
        }else{
            element.classList.add("error");
            document.getElementById(fields[i]).style.border = "3px solid #ff0000";
            element.innerHTML = "Change your input data!";
            document.getElementById("contact-btn").disabled = true;
        }
    }




}