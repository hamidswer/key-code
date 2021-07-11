// const boxMessage=document.querySelector(".main-joke");
// const messagePlaceHolder = document.querySelector(".joke");
// const nextJoke = document.querySelector(".next-joke");
// const getAJoke = async () => 
// 	await (await fetch('https://icanhazdadjoke.com/slack')).json().then(function(data){
//         if (data.attachments[0].fallback = data.attachments[0].text){
//             (data.attachments[0].fallback.match(/\?/g))?  messagePlaceHolder.innerHTML = `${data.attachments[0].text.replace("?", "?<br>")}`: messagePlaceHolder.innerHTML = `${data.attachments[0].text}`;
//         }
//         else {
//           messagePlaceHolder.innerHTML = `${data.attachments[0].fallback}<br>${data.attachments[0].text}`;
//         }
//     }).catch(() => {
//         messagePlaceHolder.innerHTML = `Please wait for a minute and then try again! :)`;
//     });
// getAJoke();
// nextJoke.addEventListener("click", function(e){
//     e.preventDefault();
//         getAJoke();
// });

const eventKey=document.querySelector(".event-key");
const eventKeyCode=document.querySelector(".event-key-code");
const eventCode=document.querySelector(".event-code");
const pressKey=document.querySelector(".press-key");
const keyPanel=document.querySelector(".key-panel");

window.addEventListener("keypress", (e)=> {
console.log(e);
if (pressKey.classList.contains("deactive")) {
}
else {
    pressKey.classList.add("deactive");
};
if (keyPanel.classList.contains("deactive")) {
    keyPanel.classList.remove("deactive");
}
else {
};
if (e.code == "Space") {
    eventKey.innerHTML = "Space";
    eventKeyCode.innerHTML = e.keyCode;
    eventCode.innerHTML = e.code;
}
else {
    eventKey.innerHTML = e.key;
    eventKeyCode.innerHTML = e.keyCode;
    eventCode.innerHTML = e.code;
}
});