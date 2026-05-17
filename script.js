function askAI() {

let question =
document.getElementById("question").value;

let result =
document.getElementById("result");

if(question==""){
result.innerHTML =
"Please enter a science question.";
return;
}

question = question.toLowerCase();

if(question.includes("photosynthesis")){

result.innerHTML =
"Photosynthesis is the process by which plants make food using sunlight, water, and carbon dioxide.";

}

else if(question.includes("gravity")){

result.innerHTML =
"Gravity is the force that attracts objects toward Earth.";

}

else if(question.includes("atom")){

result.innerHTML =
"An atom is the smallest unit of matter.";

}

else{

result.innerHTML =
"AI is generating educational response for your science question.";

}

}
