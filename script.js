async function askAI() {

let question =
document.getElementById("question").value;

let result =
document.getElementById("result");

if(question==""){
result.innerHTML =
"Please enter a question.";
return;
}

result.innerHTML = "Loading AI response...";

const API_KEY = "AIzaSyCdOaw7Dj0nT7YaV9AgAt5YCAdlGvAkMPw";

try {

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
contents: [{
parts: [{
text: question
}]
}]
})
}
);

const data = await response.json();

console.log(data);

result.innerHTML =
data.candidates[0].content.parts[0].text;

}

catch(error){

console.log(error);

result.innerHTML =
"AI response failed.";

}

}
