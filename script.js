function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smoothMobile: true,
    smartphone: {
      smooth: true,
    },
    smooth: true,
    getDirection: true,
    mobile: {
      breakpoint: 0,
      smooth: false,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: false,
      getDirection: true,
    },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
var videoMain = document.querySelector(".main video");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr.animate(
    {
      left: `${dets.x}px`,
      top: `${dets.y}px`,
    },
    { duration: 1250, fill: "forwards" }
  );
});

videoMain.addEventListener("mouseenter", function () {
  crsr.innerHTML = "MADE BY TULIPJANI";
});
videoMain.addEventListener("mouseleave", function () {
  crsr.innerHTML = "";
});

gsap.from(".page1 h1, .page1 h2", {
  y: 30,
  rotate: 3,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 2,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
    duration: 1,
  },
  "ai"
);

tl.to(
  ".page1 h2",
  {
    x: 100,
    duration: 1,
  },
  "ai"
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "ai"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -375%",
    end: "top -500",
    scrub: 2,
  },
});

tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

var boxes = document.querySelectorAll("#box");

boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    console.log(att);
    crsr.style.opacity = "1";
    crsr.style.width = "300px";
    crsr.style.height = "250px";
    crsr.style.borderRadius = "50px";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.opacity = "0";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `url(none)`;
  });
});
