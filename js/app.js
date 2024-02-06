// SELECTING A PROFILE TO CHAT

let previousElement = null;
function handleChat(element) {
    const profileName = element.querySelector('h3').textContent;
    const imageURL = element.querySelector('img').getAttribute('src');
    const chatIntro = document.getElementById('chat-intro')
    const chatBox = document.getElementById('chat-writing-box')
    if (previousElement !== null) {
        previousElement.classList.remove('selected-chat');
    }
    chatIntro.classList.add('display-none')
    chatBox.classList.remove('display-none')
    element.classList.add('selected-chat');
    previousElement = element;
    userChat.innerHTML = ``
    botChat.innerHTML = ``
    displayChat(profileName, imageURL);
}

// DISPLAY THE SELECTED CHAT PROFILE TO THE CHAT BODY

function displayChat(profileName, imageURL) {
    const selectedProfile = document.getElementById('selected-profile')
    selectedProfile.innerHTML = ``
    const divProfile = document.createElement('div')
    divProfile.innerHTML = `
    <div class="profile-chat">
        <img src="${imageURL}" alt="" />
        <div>
            <h3>${profileName}</h3>
            <p><i class="fa-solid fa-circle" style="color: #33d782;"></i><small>Online</small></p>
        </div>
    </div>
    `
    selectedProfile.appendChild(divProfile)
}

// GETTING MESSAGE FROM THE INPUT

const chatWritingBox = document.querySelector('#chat-writing-box');
const userChat = document.getElementById('user-chat');
const botChat = document.getElementById('bot-chat');

// SOME RANDOM MESSAGE
const botMsg = [
    "Hello how are you? I hope you are doing fine. This is a random text generation. Just to remind you, you are beautiful.", 
    "Hey, what's up? Here this: Why don't scientists trust atoms? Because they make up everything.", 
    "Life is like a roller coaster, with ups and downs that are inevitable. But it's up to us to hold on and enjoy the ride.", 
    "The secret to happiness is not having everything, but finding joy in what you already have.", 
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", 
    "Don't let the fear of striking out keep you from playing the game.",
    "Life is too short to waste time on things that don't matter. Focus on what brings you joy and purpose, and everything else will fall into place.",
    "Happiness is not something ready made. It comes from your own actions.",
    "You don't have to be great to start, but you have to start to be great.",
    "Believe you can and you're halfway there.",
    "Why did the math book look so sad? Because it had too many problems.",
    "Wanna hear a short joke? What do you call an alligator wearing a vest? An investigator."
];
let messages = []
chatWritingBox.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = event.target.msg.value;
    messages.push(message);

    event.target.reset();

    const divUserChat = document.createElement('div');
    divUserChat.classList.add('user-chat');
    divUserChat.innerHTML = `
        <div>
        <p>${message}</p>
        </div>
        <span>
            <i class="fa-sharp fa-solid fa-circle-user"></i>
        </span>
    `;
    userChat.appendChild(divUserChat);
    botChat.scrollIntoView({ behavior: 'smooth', block: 'end' });
    setTimeout(botResponse, 400);
});

// GENERATING RANDOM BOT RESPONSE

function botResponse() {
    const number = Math.floor(Math.random() * 12);
    const profile = document.getElementsByClassName('profile-chat')[0];
    const imageURL = profile.querySelector('img').getAttribute('src');

    const divBotChat = document.createElement('div');
    divBotChat.classList.add('bot-chat');
    divBotChat.innerHTML = `
        <span>
            <img src="${imageURL}">
        </span>
        <div>
            <p>${botMsg[number]}</p>
        </div>
    `;
    userChat.appendChild(divBotChat);
    botChat.scrollIntoView({ behavior: 'smooth', block: 'end' });
}