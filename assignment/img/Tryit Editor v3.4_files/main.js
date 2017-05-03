'use strict';
var APP = window.APP = window.APP || {};

APP.banner = (function(){

    var tl;

    //INITIALIZE
    function init(){
        
        tl = new TimelineLite();

        addListeners();
        
        animate();
    }


    //LISTENERS
    function addListeners(){

        CTA.addEventListener('mouseover',function(){
            CTA.style.backgroundColor="#ff8d6d";
        })

        CTA.addEventListener('mouseout', function(){
            CTA.removeAttribute("style");
        })

    }


    //ANIMATE
    function animate(){

        tl
        .set([accelerating_gray, accelerating_darkgray, bg2, bg3, bg4, accelerating_next, CTA, copyf3, copyf4, ef_bg, ef_copy], {alpha:0})
        .set(logo,{scale:.65, transformOrigin:"100% 100%", rotationZ:0.01, z:0.01, force3D:true}) /* Avoid Shake on IE while animating */
        
        .set(green_rect_top, {clip:"rect(0px 0px 7px 0px)"})
        .set(green_rect_right, {clip:"rect(0px 7px 0px 0px)"})
        .set(green_rect_bottom, {clip:"rect(0px 129px 7px 129px)"})
        .set(green_rect_left, {clip:"rect(36px 7px 36px 0px)"})


        .addLabel("frame1")
        .to(container, .5, {autoAlpha:1}, "frame1")

        .addLabel("frame2")
        .to(green_rect_top,.3,{clip:"rect(0px 129px 7px 0px)"}, "frame2")
        .to(green_rect_right,.3,{clip:"rect(0px 7px 36px 0px)"},"-=.1")
        .to(green_rect_bottom,.3,{clip:"rect(0px 129px 7px 0px)"},"-=.1")
        .to(green_rect_left,.3,{clip:"rect(0px 7px 36px 0px)"},"-=.1")
        .to(bg2, 1, {alpha:1, ease:Power0.easeNone}, "frame2+=.5")

        .addLabel("frame3", "+=.2")
        .to(accelerating, .5, {opacity:0}, "frame3")
        .to(accelerating_gray, .5, {opacity:1}, "frame3+=.2")
        .to(copyf3, .5, {opacity:1}, "frame3+=.3")
        .to(bg3, 1.5, {alpha:1, ease:Power0.easeNone}, "frame3+=.3")

        .addLabel("frame4", "+=1.5")
        .to(accelerating_gray, .5, {opacity:0},"frame4")
        .to(accelerating_darkgray, .5, {opacity:1}, "frame4+=.2")
        .to(copyf3, .5, {opacity:0}, "frame4")
        .to(bg4, 1.5, {alpha:1, ease:Power0.easeNone}, "frame4")
        .to(accelerating_gray, .5, {opacity:.3}, "frame4+=.2")
        .to(copyf4, .5, {opacity:1}, "frame4+=.3")
        
        .addLabel("endFrame", "+=2")
        .to(ef_bg, .5, {opacity:1}, "endFrame")
        .to(logo,.5,{scale:.8, x:-2, left:602, width:114, top:21},"endFrame+=.2")
        .to(accelerating_next,.5,{opacity:1},"endFrame+=.7")
        .to([ef_copy, CTA],.5,{opacity:1},"endFrame+=.7")
    }

    return {
        init: init
    };
}());

window.addEventListener('load', APP.banner.init);

