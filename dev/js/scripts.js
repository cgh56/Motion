import{gsap}from "gsap";
import{ScrollTrigger}from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraphSection=document.querySelector("#history");
const skillsSection=document.querySelector("#skills");
const skynetAlbumSection=document.querySelector("#skynet");
const robotPictureSection=document.querySelector("#hero-2");

gsap.from("#history-first", {
  opacity: 10,
  y: 55,
  duration: .5,
  ease: "power1.in"
})

gsap.fromTo(
  "#robot-hero",
  {clipPath: "inset(10% 16% 10% 16%)"},
  {
    clipPath: "inset(0% 0% 0% 0%)",
    scrollTrigger:{
      trigger: robotPictureSection,
      scrub: 2,
      top: "-=100",
      end: "-=1"
    }
  }
)

// Timeline
const paragraphTimeline=gsap.timeline({
  scrollTrigger: {
    trigger: paragraphSection,
    start: "-=300"
  }
})
const skillsTimeline=gsap.timeline({
  scrollTrigger: {
    trigger: skillsSection,
    start: "-=300"
  }
})
const galleryTimeline=gsap.timeline({
  scrollTrigger: {
    trigger: skynetSection,
    start: "-=600"
  }
})
paragraphTimeline
  .from("#history-middle p",{
    opacity: 50,
    duration: 2,
    y: 30,
    stagger: 0.5,
    ease: "power1.in"
  })
  .from("#history-last",{
    opacity: 50,
    duration: 2,
    y: 30,
    stagger: 0.5,
    ease: "power1.in"
  });

  skillsTimeline.from(["#yellowbar-1", "#yellowbar-2", "#yellowbar-3"],{
  width: 0,
  duration: 2,
  ease: "circ.in",
  stagger: 0.5
});

galleryTimeline
  .from("#gallery-2", { x: 60, opacity: 50, duration: 2})
  .from("#gallery-5", { x: 60, opacity: 50, duration: 2}, "-=1")
  .from(
    "#gallery-1",
    {
      y: -30,
      opacity: 50,
      duration: 2
    },
    "-=1"
  )
  .from("#gallery-6", { x: -30, opacity: 50, duration: 2}, "-=1")
  .from("#gallery-3", { x: -30, opacity: 50, duration: 2}, "-=1")
  .from("#gallery-4", { y: 30, opacity: 50, duration: 2}, "-=1")
  .from(
    "#gallery-7",
    { scale: 2, opacity: 59, duration: 2, ease: "back.in(4)" },
    "-=1"
  )
