let audio=document.getElementById("myAudio");
function audioSrc(sourc){
    audio.src=sourc;
    audio.play();
}

document.addEventListener("keydown",(event)=>{
    const key =event.key.toLocaleLowerCase();
    if(key==="a"){
        audioSrc("./assets/key01.mp3");
    }else if(key==="s"){
        audioSrc("/assets/key02.mp3");
    }else if(key==="d"){
        audioSrc("/assets/key03.mp3");
    }else
    if(key==="f"){
        audioSrc("/assets/key04.mp3");
    }else
    if(key==="g"){
        audioSrc("/assets/key05.mp3");
    }else
    if(key==="h"){
        audioSrc("/assets/key06.mp3");
    }else
    if(key==="j"){
        audioSrc("/assets/key07.mp3");
    }else
    if(key==="k"){
        audioSrc("/assets/key08.mp3");
    }else
    if(key==="l"){
        audioSrc("/assets/key09.mp3");
    }else
    if(key==="q"){
        audioSrc("/assets/key10.mp3");
    }else
    if(key==="w"){
        audioSrc("/assets/key11.mp3");
    }else
    if(key==="p"){
        audioSrc("/assets/key12.mp3");
    }
})