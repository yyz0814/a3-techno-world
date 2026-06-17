/*
Design Statement, Learning Reflection and AI Assistance Declaration

My project is called Techno World: VJ Control Room. For my Assignment 3 prototype, I chose Techno Club as the context and Click as the browser action. My work lets the audience experience Techno World as a VJ or lighting operator. Through the control buttons at the bottom of the page, the user can control the lights, smoke, lasers, strobe, and bass pressure effects in the club scene.

After completing the Interactive Media assignments, my understanding of “interaction” has developed from simple visual planning into more specific web control logic. The earlier assignments made me start thinking about context, audience, style, and how an interface should serve a specific user experience. In Assignment 2, I made a media player interface. The buttons were mainly used to control play, pause, skipping, and tutorial steps. From that project, I learned that interaction can be decorative, but the most important part is still usability and how it connects to the user’s purpose.In Assignment 3, I wanted to turn this kind of functional control into a more atmospheric and emotional form of control. The buttons are still simple, but their role has changed. I chose to use them to trigger mood, rhythm, pressure, and visual intensity, instead of only controlling media playback. Clicking a button becomes closer to pressing a button on a real club lighting desk or VJ controller.

The main JavaScript logic in this project is that each button has a data-effect value, such as lights, smoke, laser, strobe, bass, or reset. When the user clicks a button, JavaScript reads this value and decides which visual effect should be activated. I asked AI for advice on how to call and organise this part. Through this process, I learned that HTML can use a data attribute to store a small piece of interaction information, and JavaScript can read this information through button.dataset.effect. This makes the code clearer because I do not need to write repeated logic for every single button. Instead, I can use one click system to control different effects.

I also learned how classList.toggle() and classList.remove() can connect JavaScript with CSS animation. JavaScript does not need to directly control every colour, opacity, or animation detail. It is responsible for adding or removing classes. The real visual effects are controlled by CSS, such as the colour of the lights, the opacity of the smoke, the position of the lasers, the frequency of the strobe, and the shaking effect of the bass. This helps separate the interaction logic from the visual design. JavaScript and CSS are responsible for different parts: JavaScript controls when something happens, and CSS controls how it looks.

During this process, I used AI as a learning and support tool. AI helped me understand how to organise the JavaScript interaction logic, and it also helped me express the relationship between my context and action more clearly. More specifically, AI helped explain data-effect attributes, querySelector, classList.toggle(), and the method of using CSS classes to trigger different visual states.

However, AI did not directly complete the final work for me. After understanding these suggestions, I wrote and tested the code myself, adjusted the effect names, and checked in the browser whether each button could trigger the correct effect. I also decided the final visual style based on my project direction: a dark background, strong colours, poster-style buttons, lights, smoke, lasers, strobe, and bass movement.

The final concept, visual direction, colour choices, button structure, and interaction method were all selected and edited by me according to the requirements of this assignment. The design intention of my final prototype is to turn a simple browser click into a club visual control action. A small click can become a lighting cue, a smoke release, a laser trigger, a strobe burst, or a physical feeling of bass pressure.

gif Source: socialrehab.tumblr.com
*/


const clubScene=document.querySelector("#clubScene");
const lightLayer=document.querySelector("#lightLayer");
const smokeLayer=document.querySelector("#smokeLayer");
const laserLayer=document.querySelector("#laserLayer");
const strobeLayer=document.querySelector("#strobeLayer");
const buttons=document.querySelectorAll("button[data-effect]");
function clearEffects(){
  lightLayer.classList.remove("active");
  smokeLayer.classList.remove("active");
  laserLayer.classList.remove("active");
  strobeLayer.classList.remove("active");
  clubScene.classList.remove("bass-mode");
}
function triggerEffect(effect){
  if(effect==="reset"){
    clearEffects();
    return;
  }
  if(effect==="lights"){
    lightLayer.classList.toggle("active");
  }
  if(effect==="smoke"){
    smokeLayer.classList.toggle("active");
  }
  if(effect==="laser"){
    laserLayer.classList.toggle("active");
  }
  if(effect==="strobe"){
    strobeLayer.classList.toggle("active");
  }
  if(effect==="bass"){
    clubScene.classList.toggle("bass-mode");
  }
}
buttons.forEach(function(button){
  button.addEventListener("click",function(){
    const effect=button.dataset.effect;
    triggerEffect(effect);
  });
});
