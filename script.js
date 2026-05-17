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

const API_KEY = "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";

try {

const response = await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{
method: "POST",
headers: {
"Authorization": `Bearer ${API_KEY}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
model: "mistralai/mistral-7b-instruct",
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
"AI response failed.";

}

}
