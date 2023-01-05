
for(var a = 0; a<document.querySelectorAll(".drum").length; a++){
document.querySelectorAll(".drum")[a].addEventListener("click", function(){

  document.querySelector("body").style.backgroundColor ="blue";


  var x =this.innerHTML;
  makesound(x);
  buttonAnimation(x);

});
}


document.addEventListener("keydown",function(e){
  makesound(e.key);
  buttonAnimation(e.key);
});


function makesound(x){
  var soundLink;

  if(x=="w"){
    soundLink = 'sounds/tom-1.mp3'
  }else if(x=="a"){
      soundLink = 'sounds/tom-2.mp3'
  }else if(x=="s"){
      soundLink = 'sounds/tom-3.mp3'
  }else if(x=="d"){
      soundLink = 'sounds/tom-4.mp3'
  }else if(x=="j"){
      soundLink = 'sounds/snare.mp3'
  }else if(x=="k"){
      soundLink = 'sounds/crash.mp3'
  }else if(x=="l"){
      soundLink = 'sounds/kick-bass.mp3'
  }

  var audio = new Audio(soundLink);
  audio.play();
}


function buttonAnimation(x){
  document.querySelector("."+x).classList.toggle("pressed");
}
