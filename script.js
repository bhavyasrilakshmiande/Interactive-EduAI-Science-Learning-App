function askAI(){

let question =
document.getElementById("question").value;

let result =
document.getElementById("result");

if(question==""){
result.innerHTML =
"Please enter a question.";
return;
}

result.innerHTML =
"AI Answer for: " + question;

}
