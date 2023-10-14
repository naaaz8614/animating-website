var a = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
  document.addEventListener("mousemove",function(dets){
    a.style.left = dets.x+30+"px"
      a.style.top = dets.y+"px"
  })
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x-200 +"px"
      blur.style.top = dets.y-200 +"px"
}) 

var h4all = document.querySelectorAll("#nav h4")
 h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    a.style.scale = 3
    a.style.border = "1px solid #ffff"
    a.style.backgroundColor = "transparent"
  })
   elem.addEventListener("mouseleave",function(){
    a.style.scale = 1
    a.style.border = "0px solid #95c11e"
    a.style.backgroundColor = "#95c11e"
  })
})
    
gsap.to("#nav",{
 backgroundColor : "black",
   height : "80px",
 Duration : 0.5,
   scrollTrigger :{
     trigger:"#nav",
     scroller:"body",
     markers: true,
     start: "top -10%",
     end: "top -11%",
     scrub: 3,
   }
})

gsap.to("#main",{
  background: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  }
})

gsap.from("#about-us",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 55%",
    scrub:1,
  }
})

// gsap.from(".card",{
//   scale:0.8,
//   opacity:0,
//   duration:1,
//   stagger:0.4,
//   scrollTrigger:{
//     trigger:".card",
//     scroller:"body",
//     markers:true,
//     start:"top 60%",
//     end:"top 55%",
//     scrub:1,
//   }
// })

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    markers:true,
    start:"top 50%",
    end:"top 45%",
    scrub:4,
  }
})

gsap.from("#colon2",{
  y:-70,
  x:-100,
  scrollTrigger:{
    trigger:"#colon2",
    scroller:"body",
    markers:true,
    start:"top 65%",
    end:"top 65%",
    scrub:4,
  }
})

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
   //markers:true,
  start:"top 75%",
    end:"top 70%",
    scrub:4,
  }
})