var tl=gsap.timeline();
tl.from(".nav h3",{
    y:-40,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.3 //ek ek karke layega h3 ke elements ko jo nav mai rakhe hue hai!!
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    delay:0

})
tl.from("img",{
    x:100,
    rotate:50,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
tl.from(".credit h3",{
    y:40,
    opacity:0,
    duration:1,
    stagger:0.3 //ek ek karke layega h3 ke elements ko jo nav mai rakhe hue hai!!
})