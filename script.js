
gsap.registerPlugin(ScrollTrigger);


gsap.from("#img1", {
    opacity: 0,
    delay: 0.4,
    duration: 1,
    y: 60
});

gsap.from("#img2", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60
});

gsap.from("#img3", {
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: -60
});

gsap.from("#main h1", {
    delay: 0.4,
    opacity: 0,
    duration: 1
});


gsap.from("#page2 h5", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 h5",
        start: "top 80%", 
        end: "top 30%",
        scroller: "body",
        toggleActions: "play none none reverse"
    }
});



gsap.from("#page2 #about-us", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 #about-us",
        start: "top 80%", 
        end: "top 30%",
        scroller: "body",
        toggleActions: "play none none reverse"
    }
});
