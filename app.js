gsap.registerPlugin(ScrollTrigger);

if (window.matchMedia("(min-width: 992px)").matches) {
  

  const tl4 = gsap.timeline();
  tl4
    .fromTo("#section-4 .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
    .fromTo("#section-4 .judul", { y: 100, }, { y: 0, duration: 3 })
    .fromTo("#section-4 .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo("#section-4 .solusibtn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo("#section-4 .slider", { opacity: 0 }, { opacity: 1, duration: 1 })

  ScrollTrigger.create({
    animation: tl4,
    trigger: "#section-4",
    start: "top 30%",
    end: "top 30%",
    toggleActions: "play none none none",
    scrub: 3,
    // markers: true
  });

  const tl5 = gsap.timeline();
  tl5.fromTo(".formSection .imageforForm", { y: 500 }, { y: 0 }).fromTo(".formSection .cardforForm", { x: 1000 }, { x: 0 }, "<");

  ScrollTrigger.create({
    animation: tl5,
    trigger: ".formSection",
    start: "top center",
    end: "top center",
    toggleActions: "play none none none",
    scrub: 1,
    // markers: true,
  });
}

$(".produk").click(function() {
    $(window).scrollTop(0);
});
