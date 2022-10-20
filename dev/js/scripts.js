import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraphSection = document.querySelector("#history");
const skillsSection = document.querySelector("#skills");
const skynetAlbumSection = document.querySelector("#skynet");
const robotPictureSection = document.querySelector("#hero-2");


gsap.from("#history-first", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power1.out"
});

gsap.fromTo(
  "#robot-hero",
  { clipPath: "inset(10% 16% 10% 16%)" },
  {
    clipPath: "inset(0% 0% 0% 0%)",
    scrollTrigger: {
      trigger: robotPictureSection,
      // markers: true,
      scrub: 1,
      top: "-=100",
      end: "-=1"
    }
  }
);


// Timelines
const paragraphTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: paragraphSection,
    start: "-=225"
    // markers: true
  }
});

const skillsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: skillsSection,
    start: "-=250"
    // markers: true
  }
});

const galleryTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: skynetAlbumSection,
    start: "-=550"
    // markers: true
  }
});


// Timeline Animations
paragraphTimeline
  .from("#history-middle p", {
    opacity: 0,
    duration: 1.2,
    y: 50,
    stagger: 0.4,
    ease: "power1.out"
  })
  .from("#history-last", {
    opacity: 0,
    duration: 1.2,
    y: 50,
    stagger: 0.4,
    ease: "power1.out"
  });

  skillsTimeline.from(["#yellowbar-1", "#yellowbar-2", "#yellowbar-3"], {
  width: 0,
  duration: 1.5,
  ease: "circ.out",
  stagger: 0.3
});

galleryTimeline
  .from("#gallery-2", { x: 50, opacity: 0, duration: 1.2 })
  .from("#gallery-5", { x: 50, opacity: 0, duration: 1.2 }, "-=1")
  .from(
    "#gallery-1",
    {
      y: -50,
      opacity: 0,
      duration: 1.2
    },
    "-=1"
  )
  .from("#gallery-6", { x: -50, opacity: 0, duration: 1.2 }, "-=1")
  .from("#gallery-3", { x: -50, opacity: 0, duration: 1.2 }, "-=1")
  .from("#gallery-4", { y: 50, opacity: 0, duration: 1.2 }, "-=1")
  .from(
    "#gallery-7",
    { scale: 1.2, opacity: 0, duration: 1.2, ease: "back.out(4)" },
    "-=1"
  );




  // trial and error - Not usable

// ScrollTrigger.create({
//   trigger: "#hero",
//   start: "top top",
//   end: "bottom 50%+=100px",
// }); //  created scroll triggers on timeline objects

// gsap.fromTo("#yellowbar-1", {width: 0},{width: "64%"})
// gsap.fromTo("#yellowbar-2", {width: 0},{width: "78%"})
// gsap.fromTo("#yellowbar-3", {width: 0},{width: "94%"}) // .from To ----------notworking

// gsap.timeline().to("#history-first", {y:40, opacity: 1}).from("#history-second") // ---------------not working

// gsap.to(["#gallery-1", "#gallery-2", "#gallery-3", "#gallery-4", "#gallery-5"], {x: -50, opacity: 0}); // ---------------not wokring

// gsap.to('#history-first', {
//   x: 100,
//   scrollTrigger: {
//     trigger: 'h1',
//     start: 'top bottom',
//     end: 'center center',
//     scrub: true
//   }
// });

// gsap.to('#robot-hero', {
//   x: 200,
//   scrollTrigger: {
//     trigger: page,
//     start: 'center center',
//     end: 'bottom top',
//     scrub: true
//   }
// }); // not working


// // gsap.from("#hero", {duration: 1, alphay:-70})
// gsap.from("#yellowbar", {duration: 1, alphay:-70})


// gsap.to('#imgrobot', {
//   scale: 1.5,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '#imgrobot',
//     markers: true,
//     start: "top center",
//   end: "bottom center"
    

//   }
// })


// gsap.to('#imgrobot', {
//   scale: 1.5,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '#imgrobot',
//     markers: true,
//     start: "top center",
//   end: "bottom center"
    

//   }
// })

// gsap.timeline({
//       scrollTrigger: {
//         trigger: "#skills-content",
//         start: "top center",
//         toggleActions: "play pause resume reverse",
//         scrub: 0.5,
//         markers: true
//       }
//     })
//     .fromTo(
//       "#skills-content",
//       { x: 200, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 3
//       }
//     );


// gsap.to("#history-first", {
//   backgroundPositionX: "0%",
//   stagger: 1,
//   scrollTrigger: {
//     trigger: ".text",
//     markers: true,
//     scrub: 1,
//     start: "top center",
//     end: "bottom center"
//   }
// });



// gsap.from("#yellow", {
//   scrollTrigger: {
//     trigger: ".orange",
//     scrub: true,
//     pin: true,
//     start: "125px 150px",
//     end: "+=100%",
//     markers: true
//   },
//   scaleX: 0, 
//   transformOrigin: "left center", 
//   ease: "none"
// });




// gsap.from("#emotion", {
//   scrollTrigger: {
//     trigger: "#",
//     scrub: true,
//     start: "top bottom",
//     end: "top top",
//     markers: true
//   },
//     scaleX: 0,
//   transformOrigin: "left center", 
//   ease: "none"
// });


//gsap.to("#history-middle", {
//    scrollTrigger:{
 //       trigger: "#history-middle",
  //      start: "botttom center"
  //  }
   // });