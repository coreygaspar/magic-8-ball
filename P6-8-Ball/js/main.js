// function clearTextField() {
//     document.getElementById("question").value=""
// }

function getFortune() {
    let shake= document.getElementById("button");
    let ball= document.getElementById("8ball");
    let text= document.getElementById(".message_container");
    
    const fortunes = [ "It is certain.", "Without a doubt.", "You may rely on it.", "Yes, definitely.", "It is decidedly so.", "As I see it, yes.", "Most likely.", "Yes.", "Outlook good.", "Signs point to yes.", "Reply hazy, try again.", "Better not tell you now.", "Ask again later.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it."]
    const random = Math.floor(Math.random() * fortunes.length); 
    message.addEventListener("mousedown", ball.classList.add("img")); 
    setTimeout (() => {
    document.getElementById("message").textContent = fortunes[random]; 
    document.getElementById("button").onclick = null;  
    document.getElementById("message").className = 'messagebox'; 
    shaking = false;  
    },2000);
}

function refreshPage() {
    location.reload()
}

