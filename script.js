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

async function askAI() {

const question =
document.getElementById("question").value;

const result =
document.getElementById("result");

if(question === ""){
result.innerHTML =
"Please enter a question.";
return;
}

result.innerHTML =
"Loading AI response...";

const API_KEY =
"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";

try {

const response = await fetch(
"https://api.groq.com/openai/v1/chat/completions",
{
method: "POST",

headers: {
"Authorization": `Bearer ${API_KEY}`,
"Content-Type": "application/json"
},

body: JSON.stringify({

model: "llama3-8b-8192",

messages: [
{
role: "user",
content: question
}
]

})

}
);

const data = await response.json();

console.log(data);

result.innerHTML =
data.choices[0].message.content;

}

catch(error){

console.log(error);

result.innerHTML =
"AI connection failed.";

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
