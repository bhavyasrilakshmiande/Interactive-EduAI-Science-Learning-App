const content =
document.getElementById("subject-content");

function showBiology(){

content.innerHTML =

`
<h2>🧬 Biology</h2>

<p>
Biology helps us understand living organisms,
plants, animals, and the human body.
</p>
`;

}

function showPhysics(){

content.innerHTML =

`
<h2>⚡ Physics</h2>

<p>
Physics explains motion, gravity,
energy, and forces.
</p>
`;

}

function showChemistry(){

content.innerHTML =

`
<h2>🧪 Chemistry</h2>

<p>
Chemistry studies atoms,
elements, and chemical reactions.
</p>
`;

}

function askAI(){

let question =
document.getElementById("question").value.toLowerCase();

let result =
document.getElementById("result");

if(question==""){

result.innerHTML =
"Please enter a science question.";

return;

}

if(question.includes("photosynthesis")){

result.innerHTML =
"Photosynthesis is the process by which plants make food using sunlight.";

}

else if(question.includes("gravity")){

result.innerHTML =
"Gravity is the force that attracts objects toward Earth.";

}

else if(question.includes("atom")){

result.innerHTML =
"An atom is the smallest unit of matter.";

}

else if(question.includes("heart")){

result.innerHTML =
"The heart pumps blood throughout the body.";

}

else{

result.innerHTML =
"AI is learning this science topic.";

}

}

function checkAnswer(answer){

let quiz =
document.getElementById("quiz-result");

if(answer=="correct"){

quiz.innerHTML =
"✅ Correct Answer!";

}

else{

quiz.innerHTML =
"❌ Wrong Answer";

}

}
