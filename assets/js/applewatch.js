// intro content1 비디오 엔드 이벤트
const video1 = $('#introVideo1');

video1.on('ended', function(){
    $('.sc-intro .content1 .product-logo').addClass('active');
});


// intro content1
let mm1 = gsap.matchMedia();

mm1.add("(min-width: 735px)", () => {
    introTl1 = gsap.timeline({
        scrollTrigger:{
            trigger: ".sc-intro .content1",
            start: "0% 52px",
            end: "100% 100%",
            scrub: 0,
            // markers: true,
            onEnter: function(){
                $('.sc-intro .content1 .tagline').addClass('active')
            },
            onLeaveBack: function(){
                $('.sc-intro .content1 .tagline').removeClass('active')
            }
        }
    });
    
    introTl1.to('.sc-intro .content1 .tagline',{
        'background-image': 'radial-gradient(circle at 50% -47.6226vh, rgb(253, 182, 198) 6.23774vh, rgb(252, 70, 170) 66.1887vh, rgb(116, 47, 120) 101.426vh, rgba(0, 0, 0, 0) 131.426vh)'
    });
    introTl1.to('.sc-intro .content1 .tagline',{
        'background-image': 'radial-gradient(circle at 50% -100vh, rgb(251, 160, 181) 1vh, rgb(252, 70, 170) 40vh, rgb(116, 47, 120) 70vh, rgba(0, 0, 0, 0) 100vh)',
        'mask-image': 'radial-gradient(at 50% -30vh, rgb(0, 0, 0) -10vh, rgba(0, 0, 0, 0) 30vh)'
    },'a');
    
    introTl1.to('.sc-intro .product-logo img',{
        opacity: 0
    },'a');
    introTl1.to('.sc-intro .content1 .video-area',{
        scale: 0.9,
        opacity: 0
    },'a');
    introTl1.to('.sc-intro .content1 .text-wrap .desc',{
        'background-image': 'radial-gradient(circle at 50% 21.6097vh, rgb(255, 197, 210) 9.86439vh, rgb(252, 73, 170) 84.3219vh, rgb(130, 49, 125) 123.186vh, rgba(13, 5, 14, 0.114) 153.186vh)'
    },'a+=0.4');
    introTl1.from('.sc-intro .content1 .text-wrap .link-area',{
        autoAlpha: 0
    },'a+=0.4');
});


// intro content2
ScrollTrigger.create({
    trigger: ".sc-intro .content2 .title-wrap", 
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content2 .title-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content2 .title-wrap').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-intro .content2 .video-area", 
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content2 .video-area').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content2 .video-area').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-intro .content2 .desc", 
    start: "0% 80%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content2 .desc').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content2 .desc').removeClass('active')
    }
});


// intro content3
ScrollTrigger.create({
    trigger: ".sc-intro .content3 .title-wrap", 
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content3 .title-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content3 .title-wrap').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-intro .content3 .highlight", 
    start: "0% 50%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content3 .highlight').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content3 .highlight').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-intro .content3 .desc", 
    start: "0% 80%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content3 .desc').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content3 .desc').removeClass('active')
    }
});

// intro content3 비디오 버튼
const video2 = $('#introVideo2')[0];

$('.sc-intro .btn-play').hide();
$('.sc-intro .btn-replay').hide();

$('.sc-intro .btn-pause').click(function(){
    video2.pause();
    $('.sc-intro .btn-pause').hide();
    $('.sc-intro .btn-play').show();
});

$('.sc-intro .btn-play').click(function() {
    video2.play();
    $('.sc-intro .btn-play').hide();
    $('.sc-intro .btn-pause').show();
});

$('.sc-intro .btn-replay').click(function() {
    video2.currentTime = 0;
    video2.play();
    $('.sc-intro .btn-replay').hide();
    $('.sc-intro .btn-pause').show();
});

$(video2).on('ended', function(){
    $('.sc-intro .btn-play').hide();
    $('.sc-intro .btn-pause').hide();
    $('.sc-intro .btn-replay').show();
});

$('.sc-intro .btn-pause').show();


// intro content4
let mm2 = gsap.matchMedia();

mm2.add("(min-width: 735px)", () => {
    content4 = gsap.timeline({
        scrollTrigger:{
            trigger: ".sc-intro .content4",
            start: "0% 0%", 
            end: "100% 100%", 
            scrub: 0,
            // markers: true,
        },
    });
    
    content4.to('.sc-intro .content4 .text-wrap .text-music',{
        yPercent: -100,
        opacity: 0
    },'a');
    content4.to('.sc-intro .content4 .mask:nth-child(1)',{
        opacity: 0
    },'a');
    
    content4.to('.sc-intro .content4 .text-wrap .text-call',{
        yPercent: -100,
        opacity: 1
    },'b');
    content4.to('.sc-intro .content4 .mask:nth-child(2)',{
        opacity: 1
    },'b');
    
    content4.to('.sc-intro .content4 .text-wrap .text-call',{
        yPercent: -200,
        opacity: 0
    },'c');
    content4.to('.sc-intro .content4 .mask:nth-child(2)',{
        opacity: 0
    },'c');
    
    content4.to('.sc-intro .content4 .text-wrap .text-timer',{
        yPercent: -100,
        opacity: 1
    },'d');
    content4.to('.sc-intro .content4 .mask:nth-child(3)',{
        opacity: 1
    },'d');
    
    content4.to('.sc-intro .content4 .text-wrap .text-timer',{
        yPercent: -200,
        opacity: 0
    },'e');
    content4.to('.sc-intro .content4 .mask:nth-child(3)',{
        opacity: 0
    },'e');
    
    content4.to('.sc-intro .content4 .text-wrap .text-message',{
        yPercent: -100,
        opacity: 1
    },'f');
    content4.to('.sc-intro .content4 .mask:nth-child(4)',{
        opacity: 1
    },'f');
    
    content4.to('.sc-intro .content4 .text-wrap .text-message',{
        yPercent: -200,
        opacity: 0
    },'g');
    content4.to('.sc-intro .content4 .mask:nth-child(4)',{
        opacity: 0
    },'g');
    
    content4.to('.sc-intro .content4 .text-wrap .text-stack',{
        yPercent: -100,
        opacity: 1
    },'h');
    content4.to('.sc-intro .content4 .mask:nth-child(5)',{
        opacity: 1
    },'h');
});


// intro content5
ScrollTrigger.create({
    trigger: ".sc-intro .content5",
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content5 .thumb').addClass('active'),
        $('.sc-intro .content5 .text-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content5 .thumb').removeClass('active'),
        $('.sc-intro .content5 .text-wrap').removeClass('active')
    }
});


// intro content6
ScrollTrigger.create({
    trigger: ".sc-intro .content6", 
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content6 .desc').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content6 .desc').removeClass('active')
    }
});


// intro content7
ScrollTrigger.create({
    trigger: ".sc-intro .content7", 
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content7 .title-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content7 .title-wrap').removeClass('active')
    }
});


// intro content8
ScrollTrigger.create({
    trigger: ".sc-intro .content8", 
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content8 .slide').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content8 .slide').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-intro .content8", 
    start: "0% 20%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-intro .content8 .desc').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-intro .content8 .desc').removeClass('active')
    }
});


// carbon lottie 스크롤
var animation1 = bodymovin.loadAnimation({
    container: $('#lottie')[0],
    path: './assets/js/carbon.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
});

ScrollTrigger.create({
    trigger: ".sc-carbon .intro",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    onUpdate: function(self) {
        var progress = self.progress;
        console.log();
        animation1.goToAndStop(Math.floor(animation1.totalFrames*self.progress),true);
    }
});

// carbon 텍스트 스크롤
carbonTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-carbon .intro",
        start: "0% 0%",
        end: "100% 100%",
        // markers: true,
        scrub: 0
    }
});

carbonTl.to('.sc-carbon .intro .text-wrap .text-first',{
    opacity: 1,
    scale: 1
});
carbonTl.to('.sc-carbon .intro .text-wrap .text-first',{
    opacity: 0,
    scale: 1.2
});
carbonTl.to('.sc-carbon .intro .text-wrap .text-second',{
    opacity: 1,
    scale: 1
});
carbonTl.to('.sc-carbon .intro .text-wrap .text-second',{
    opacity: 0,
    scale: 1.2
});

ScrollTrigger.create({
    trigger: ".sc-carbon .content", 
    start: "0% 50%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-carbon .content').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-carbon .content').removeClass('active')
    }
});


// health top
ScrollTrigger.create({
    trigger: ".sc-health .top", 
    start: "0% 50%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-health .top .title-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-health .top .title-wrap').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-health .top .desc", 
    start: "0% 80%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-health .top .desc').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-health .top .desc').removeClass('active')
    }
});


// 스와이퍼 슬라이드
const swiperSlide = new Swiper('.swiper',{
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode : true,

    navigation:{
        prevEl:".btn-prev",
        nextEl:".btn-next"
    }
});


// sc-commu top
ScrollTrigger.create({
    trigger: ".sc-commu .top",
    start: "0% 50%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-commu .top .title-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-commu .top .title-wrap').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-commu .top .desc", 
    start: "0% 80%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-commu .top .desc').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-commu .top .desc').removeClass('active')
    }
});


// sc-fitness top
ScrollTrigger.create({
    trigger: ".sc-fitness .top .text-wrap",
    start: "0% 50%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-fitness .top .text-wrap .title-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-fitness .top .text-wrap .title-wrap').removeClass('active')
    }
});

ScrollTrigger.create({
    trigger: ".sc-fitness .top .text-wrap",
    start: "0% 30%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-fitness .top .text-wrap .desc').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-fitness .top .text-wrap .desc').removeClass('active')
    }
});


//sc-safety .top
ScrollTrigger.create({
    trigger: ".sc-safety .top",
    start: "0% 60%",
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-safety .top .text-wrap').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-safety .top .text-wrap').removeClass('active')
    }
});


// studio 백그라운드 슬라이드
ScrollTrigger.create({
    trigger: ".sc-studio", 
    start: "0% 50%", 
    end: "100% 100%", 
    scrub: 0,
    // markers: true,
    onEnter: function(){
        $('.sc-studio .slide-area .slide').addClass('active')
    },
    onLeaveBack: function(){
        $('.sc-studio .slide-area .slide').removeClass('active')
    }
});