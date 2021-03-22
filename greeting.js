const form=document.querySelector(".js-form"),
    input = form.querySelector("input");//gets any selector in a css way. class/ tag/ id...
    greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
    SHOWING_CN="showing";


function paintGreeting(text){
    form.classList.remove(Showing_CN);
    greeting.classList.add(Showing_CN);
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUswer=localStorage.getItem(USER_LS);
    if(currentUser===null){

    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();