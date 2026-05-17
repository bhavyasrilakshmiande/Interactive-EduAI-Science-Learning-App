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
