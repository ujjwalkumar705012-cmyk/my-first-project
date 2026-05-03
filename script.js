gsap.set("#heading h1",{x: -1500});
gsap.to("#heading h1",{
    x:1280,
    duration:10,
    delay:0,
    repeat:-1,
    yoyo:true,
    onRepeat:()=>{
        gsap.set("#heading h1",{
            x:-1500
        });
    }
});
let roles = ["Web developer","Full Stack Developer", "Coder", "Fresher"];
let index = 0;

function animateText() {
  let text = roles[index];
  let clutter = "";

  text.split("").forEach(function(letter){
    clutter += `<span>${letter}</span>`;
  });

  document.querySelector("#dynamic").innerHTML = clutter;

  gsap.from("#dynamic span", {
    y: 50,
    opacity: 0,
    rotateX: 90,
    duration: 0.6,
    stagger: 0.05,
    ease: "back.out(1.7)"
  });

  // Next text change
  setTimeout(() => {
    gsap.to("#dynamic span", {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      onComplete: () => {
        index = (index + 1) % roles.length;
        animateText();
      }
    });
  }, 2000);
}
animateText();

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  let split = SplitText.create(".About_section h2",{
    type:"lines,words,chars"
  });

  let tl = gsap.timeline({
    repeat:-1,
    duration:0.5
  });
  tl.from(".logo a", { y: -100, opacity: 0 })
  .to(".logo a", { scale: 1.2 })
  .to(".logo a", { rotation: 360 });
  gsap.from(split.lines,{
    scrollTrigger:{
      trigger:".About_section h2",
      scroller:'body',
      start:"top 80%",
      end:"top 30%",
      markers:false,
      toggleActions:"restart none restart none"
    },
    y:20,
    opacity:0,
    duration:0.5,
    stagger:0.2,
  });
 });

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  let split = SplitText.create(".hero_section",{
    type:"lines,words,chars"
  });
  gsap.to(".box",{
    y:-20,
    duration:2,
    stagger:0.2,
    repeat:-1,
    yoyo:true
  });

  let tl = gsap.timeline({
    repeat:-1,
    duration:0.5
  });
  tl.from(".logo2 h1", { y: -100, opacity: 0 })
  .to(".logo2 h1", { scale: 1.2 })
  .to(".logo2 h1", { rotation: 360 });

  gsap.from(split.lines,{
    scrollTrigger:{
      trigger:".hero_section",
      scroller:'body',
      markers:false,
      toggleActions:"restart none restart none"
    },
    y:20,
    opacity:0,
    duration:0.5,
    stagger:0.2,
  });
 });

 
