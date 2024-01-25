<template>
    <div id="image1" class="shijing">
        <img  class="shijing-backimg" :src="shijingImage" @click="hidePopup">
        <div class="shijing-head">
            <div class="return-button" @click="returnButton">
                <img  src="@/assets/images/return.png" >
            </div>
            <p class="shijing-title">{{ $t('shijing.shijingTitle') }}</p>
            <p class="shijing-sub-title">{{ $t('shijing.shijingSubTitle') }}</p>
        </div>
        <div class="action-button">
            <img class="click-button first-button" src="@/assets/images/shijing/ph_hand-tap-light.png" @click="clickHandButton(1)">
            <img class="click-button second-button" src="@/assets/images/shijing/ph_hand-tap-light.png" @click="clickHandButton(2)">
            <img class="click-button third-button" src="@/assets/images/shijing/ph_hand-tap-light.png" @click="clickHandButton(3)">
            <img class="click-button four-button" src="@/assets/images/shijing/ph_hand-tap-light.png" @click="clickHandButton(4)">
            <img class="click-button five-button" src="@/assets/images/shijing/ph_hand-tap-light.png" @click="clickHandButton(5)">
            <img class="click-button six-button" src="@/assets/images/shijing/ph_hand-tap-light.png" @click="clickHandButton(6)">
            <img class="click-button seven-button" src="@/assets/images/shijing/ph_hand-tap-light.png" @click="clickHandButton(7)">
            <div class="zhangyuan-button" @click="changeSection('zhangyuan')">{{ $t('shijing.zhangyuanButton') }}
                <img class="zhangyuan-image animate__animated" src="@/assets/images/shijing/zhangyuan.png" />
            </div>
            <div class="xindiandi-button" @click="changeSection('xindianti')">{{ $t('shijing.xintiandiButton') }}
                <img class="xindiandi-image animate__animated" src="@/assets/images/shijing/xindiandi.png" />
            
            </div>
        </div>
        <!-- <div class="popupinfo">
            <div class="title">挑绷绷</div>
            <div class="content">从前大人很反对小孩挑绷绷，看到就会说:“不要挑了，明朝要落雨了。”挑绷绷和落雨究竟有什么关联，至今谁也说不清。</div>
        </div> -->
        <!-- <img class="zhangyuan-image" src="@/assets/images/shijing/zhangyuan.png" /> -->
        <ShijingInfo v-if="shijingStatus>0" class="shijing-info" :left="infoList[shijingStatus-1].left" :top="infoList[shijingStatus-1].top" :title="infoList[shijingStatus-1].title" >{{infoList[shijingStatus-1].content}}</ShijingInfo>
        <ShijingPopup class="shijing-popup" v-if="showPopup" :section="popupSection"></ShijingPopup>
    </div>
</template>
<script setup>
import { computed, ref ,onMounted ,getCurrentInstance} from "vue"
import { useRouter } from "vue-router"
import ShijingPopup from "@/components/ShijingPopup/ShijingPopup.vue"
import ShijingInfo from "@/components/ShijingPopup/ShijingInfo.vue"


import defaultBackGroundImage from "@/assets/images/shijing/default-background.jpg"
import shijingOne from "@/assets/images/shijing/shijing-one.jpg"
import shijingtwo from "@/assets/images/shijing/shijing-two.jpg"
import shijingThree from "@/assets/images/shijing/shijing-three.jpg"
import shijingFour from "@/assets/images/shijing/shijing-four.jpg"
import shijingFive from "@/assets/images/shijing/shijing-five.jpg"
import shijingSix from "@/assets/images/shijing/shijing-six.jpg"
import shijingSeven from "@/assets/images/shijing/shijing-seven.jpg"

import music1 from "@/assets/music/shijing/1.mp3"
import music2 from "@/assets/music/shijing/2.mp3"
import music3 from "@/assets/music/shijing/3.mp3"
import music4 from "@/assets/music/shijing/4.mp3"
import music5 from "@/assets/music/shijing/5.mp3"
import music6 from "@/assets/music/shijing/6.mp3"
import music7 from "@/assets/music/shijing/7.mp3"

const musicList = ref([
music1,music2,music3,music4,music5,music6,music7
])

const instance = getCurrentInstance();
const bus = instance.appContext.config.globalProperties.$bus;

const router = useRouter()

const left = ref();
const isDrag = ref(false);
const startX = ref();
var dom1

//4.3125rem
//2.5rem
const infoList = ref([
    {title:"挑绷绷",left:"9.3125rem",top:"27.5rem",content:"从前大人很反对小孩挑绷绷，看到就会说:“不要挑了，明朝要落雨了。”挑绷绷和落雨究竟有什么关联，至今谁也说不清。"}
    ,{title:"白 果",left:"44.3125rem",top:"24.5rem",content:"卖白果的叫卖声更像他手中不断炒动的白果一样糯，你听，“烫手呦!卖糯米暖白果，香又香来糯又糯...”这真是一首绝妙的有很强感染力的诗篇，唱出了“暖白果”那诱人的魅力，磁力般地将人们吸引了过来。"}
    ,{title:"糖 粥",left:"73.3125rem",top:"22.5rem",content:"卖糖粥的摊主，肩担一个担子。他在担子上绑上一个竹筒，手里拿着一根竹棒，很有节奏地先敲出了“笃笃笃”的声音，紧接着喊出:“卖糖粥”，这不轻不重的敲竹声音十分有韵律，敲得你心动而巴不得立刻上前去喝上一碗散发着桂花香味的糖粥。"}
    ,{title:"理发摊",left:"143.3125rem",top:"15.5rem",content:"弄堂里通常都有理发摊。一张凳子，一个脸盆架子，再加剃刀、剪刀，就是一个理发摊了。这些剃头师傅往往还有其他让人享受的技术，有的会按摩，以前上海话中叫“敲背”。还有掏耳朵把细细锋利的绞刀伸进耳朵轻轻一绞，那感觉更是妙不可言。"}
    ,{title:"清早",left:"172.3125rem",top:"21.5rem",content:"大清早，“鸡毛菜小白菜”“卷心菜黄芽菜”，叫卖声振动了耳鼓。这是近郊菜农前来卖菜的，蔬菜新鲜品种很多，部分也许还是从田地里刚采摘下来的。挑担来卖的荤菜不多，拎一两只活鸡求售时而有之，倒是浦东口音“鸡蛋要哦鸡蛋”数十年如一日。"}
    ,{title:"修洋伞",left:"244.3125rem",top:"18.5rem",content:"有时，弄堂里会响起地道上海话:“阿有坏格洋伞修哦。”其实当时的雨伞并不是洋货，倒是完完全全的国货，基本上市竹制骨架的油布伞，于是有人写作阳伞。"}
    ,{title:"初 夏",left:"278.3125rem",top:"25.5rem",content:"“西瓜要哦雪酿西瓜，老虎酿西瓜”，卖瓜的先抱一两个西瓜来门口叫喊，有了主顾，讲明买一担二担和价钱，便去批发市场挑来，当面过秤。"}
    // ,{title:"理发摊",content:"弄堂里通常都有理发摊。一张凳子，一个脸盆架子，再加剃刀、剪刀，就是一个理发摊了。这些剃头师傅往往还有其他让人享受的技术，有的会按摩，以前上海话中叫“敲背”。还有掏耳朵把细细锋利的绞刀伸进耳朵轻轻一绞，那感觉更是妙不可言。"}
])

onMounted(()=>{
    dom1 = document.querySelector("#image1");
    
    dom1.addEventListener("mousedown",mdown);
    dom1.addEventListener("mousemove",mmove);
    dom1.addEventListener("mouseup",onMouseUp);

    var clientHeight = document.querySelector(".shijing-backimg").clientHeight;

    console.log(clientHeight)
    document.querySelector("html").style.fontSize = clientHeight / 58.625 + "px"

    window.addEventListener("resize",function(){
        var imgHeight  = document.querySelector(".shijing-backimg").clientHeight;
        console.log("resize" + imgHeight)
        document.querySelector("html").style.fontSize = imgHeight / 58.625 + "px"
    })

    var elezhangyuan = document.querySelector(".zhangyuan-button");
    var elexindiandi = document.querySelector(".xindiandi-button");
    var img1 = document.querySelector(".zhangyuan-image")
    var img2 = document.querySelector(".xindiandi-image")
    elezhangyuan.addEventListener("mouseover",function(){
        // img1.classList.add("animate__animated");
        img1.classList.add("animate__fadeInUp");
        img1.classList.remove("animate__fadeOutDown");

        setTimeout(() => {
            img1.style.display ="block"
            
        }, 500);
    })
    elezhangyuan.addEventListener("mouseleave",function(){
        // img1.classList.add("animate__animated");
        img1.classList.remove("animate__fadeInUp");
        // console.log("mouseout")
        img1.classList.add("animate__fadeOutDown");
        
    })

    elexindiandi.addEventListener("mouseover",function(){
        // img1.classList.add("animate__animated");
        img2.classList.add("animate__fadeInUp");
        img2.classList.remove("animate__fadeOutDown");

        setTimeout(() => {
            img2.style.display ="block"
            
        }, 500);
    })
    elexindiandi.addEventListener("mouseleave",function(){
        // img1.classList.add("animate__animated");
        img2.classList.remove("animate__fadeInUp");
        // console.log("mouseout")
        img2.classList.add("animate__fadeOutDown");
        
    })


})


//阻止事件冒泡
//不仅仅要stopPropagation，还要preventDefault
function pauseEvent(e){
 if(e.stopPropagation) e.stopPropagation();
 if(e.preventDefault) e.preventDefault();
 e.cancelBubble=true;
 e.returnValue=false;
 return false;
}

const mdown = (e)=>{
    e=e || window.event;
    pauseEvent(e);

    console.log("mdown")
    isDrag.value = true;
    startX.value = e.x;

    // var dom = document.querySelector("#image1");

    left.value = dom1.scrollLeft;
}

const mmove =(e)=>{
    // var dom = document.querySelector("#image1");
    
    if(isDrag.value ==true){
        var l= e.x;
        var lrest = l -startX.value;
        // console.log(lrest);
        dom1.scrollLeft = left.value- lrest
        // left.value =  dom1.scrollLeft
    }
}

const onMouseUp=(m)=>{
    console.log(m)
    isDrag.value = false
}
const shijingImageList = ref([
    defaultBackGroundImage, shijingOne,shijingtwo,shijingThree,shijingFour,shijingFive,shijingSix,shijingSeven
])
const shijingStatus = ref(0)
const showPopup = ref(false)
const popupSection = ref("")
const shijingImage = computed(() => {
    return shijingImageList.value[shijingStatus.value]
})
// const shijingBackground = computed(() => ({
//     "background": `url(${shijingImageList.value[shijingStatus.value]})`
// }))

const returnButton = function () {
    router.back()
}

const changeSection = function (value) {
    popupSection.value = value
    showPopup.value = true
    shijingStatus.value =0 
}

const clickHandButton = function(value){
    shijingStatus.value = value
    // play audio

    bus.emit("audio", {play:true,music:musicList.value[value]});

}
const hidePopup = function () {
    showPopup.value = false
}

</script>
<style lang="less">

@font-face{
    src:url('@/assets/fonts/SweiSpringSugar-Regular.ttf');
    font-family:""Swei Spring Sugar-Regular"";
}
.shijing {
    height: 100vh;
    overflow-x: scroll;
    object-fit: cover;
    overflow-y: hidden;
    user-select: none;
    
    position: relative;

}

.shijing-head {
    position: fixed;
    z-index: 99;
    // top: 1.875rem;

top: calc(83/1080*100vh);
left: calc(90/1920*100vw);

}

//4.3125rem
//2.5rem
.action-button{
    .first-button{
        position:absolute;
        left:31.3125rem;
        top:44.5rem;
        // width: 86px;
        // height:86px;
        transform: rotate(180deg);
    }
    .second-button{
        position:absolute;
        left:57.3125rem;
        top:37.5rem;
        transform: rotate(30deg);
    }
    .third-button{
        position:absolute;
        left: 85.3125rem;
        top: 34rem;
        transform: rotate(30deg);
    }
    .four-button{
        position:absolute;
        left: 162.3125rem;
        top: 37rem;
        transform: rotate(118deg);
    }

    .five-button{
        position:absolute;
        left: 196.3125rem;
        top: 37rem;
        transform: rotate(118deg);
    }
    .six-button{
        position: absolute;
        left: 251.3125rem;
        top: 40rem;
        transform: rotate(-15deg);
    }

    .seven-button{
        position: absolute;
        left: 290.3125rem;
        top: 37rem;
        transform: rotate(0deg);
    }

    .zhangyuan-button{
        position: absolute;
        left: 364rem;
        top: 54rem;
        width:22.9375rem;
        height:5.25rem;
        border-radius: 0.375rem;
        background: #8B8B8B;
        cursor: pointer;
        mix-blend-mode: luminosity;


        background-color: #8B8B8B;
        color: #FFF;
        font-family: "Swei Spring Sugar-Regular";
        font-size: 3rem;
        font-weight: 700;
        line-height: 4.4375rem;
        letter-spacing: 0em;
        text-align: center;
        // color: #FFF;

        // text-align: center;
        // font-family: "Swei Spring Sugar-Regular";
        // font-size: 48px;
        // font-style: normal;
        // font-weight: 700;
        // line-height: normal;

        // &:hover .zhangyuan-image{
        //     display: block;
            // background-color: #fff;
        // }

        .zhangyuan-image{
            position: absolute;
            // left:356rem;
            // top:-1rem;
            left:-4.09375rem;
            top:-53rem;
            width: 31.125rem;
            height: 50.8125rem;
            flex-shrink: 0;
            display: none;
            z-index: 4;
        }

        

    }

    .xindiandi-button{
        position: absolute;
        left: 477rem;
        top: 54rem;
        width:22.9375rem;
        height:5.25rem;
        border-radius: 0.375rem;
        background: #8B8B8B;
        cursor: pointer;

        mix-blend-mode: luminosity;

        .xindiandi-image{
            position: absolute;
            // left:356rem;
            // top:-1rem;
            left:-4.09375rem;
            top:-53rem;
            width: 31.125rem;
            height: 50.8125rem;
            flex-shrink: 0;
            display: none;
            z-index: 4;
        }

    }
}

.shijing-backimg {
    position: relative;
    object-fit: cover;
    height: 100%;
    // margin-bottom: 100px;

    border-top-width: 2.5rem;
    border-top-color: #817C7B;
    box-sizing: border-box;
    border-top-style: solid;
    border-bottom-width: 3.125rem;
    border-bottom-style: solid;
    border-bottom-color: #817C7B;

    border-left-width: 4.3125rem;
    border-left-style: solid;
    border-left-color: #817C7B;

    border-right-width: 4.3125rem;
    border-right-style: solid;
    border-right-color: #817C7B;

}

.return-button {
    margin-left: 1.5625rem;
    margin-bottom: 0.9375rem;

    img{
        width:2.375rem;
        height:1.3125rem;

    }
}

.shijing-title {
    margin-left: 1.0625rem;
    margin-bottom: 0.625rem;
    font-family: Huiwen-mincho;
    font-size: 4.6875rem;
    font-weight: 400;
    line-height: 4.6875rem;
    letter-spacing: 0em;
    text-align: left;
color: rgba(104, 97, 93, 1);

}
::-webkit-scrollbar{
    display: none;
}
.shijing-sub-title {
    margin-left: 1.375rem;
    font-family: "Swei Spring Sugar-Regular";
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: left;
    color:rgba(104, 97, 93, 1);
}

.click-button {
    width: 5.375rem;
    height: 5.375rem;
    padding: 6.05px, 14.1px, 8.73px, 8.72px;
    border-radius: 42px;

}

.fist-button {
    position: absolute;
    left: 250px;
    top: 70%;
}

// .zhangyuan-button {
//     background-color: #8B8B8B;
//     color: #FFF;
//     font-family: "Swei Spring Sugar-Regular";
//     font-size: 3rem;
//     font-weight: 700;
//     line-height: 4.4375rem;
//     letter-spacing: 0em;
//     text-align: center;

// }

.xindiandi-button {
    background-color: #8B8B8B;
    color: #FFF;
    font-family: "Swei Spring Sugar-Regular";
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.4375rem;
    letter-spacing: 0em;
    text-align: center;

}

.shijing-popup {
    position: fixed;
    top: 3.125rem;
    left: 10%;
    z-index: 150;
    // height: 80vh;
    // height: 56.25rem;
    // // width: 80vw;
    // width: 103.125rem;

}

// .popupinfo{
//     position: absolute;
//     left: 8rem;
//     top: 21rem;
//     display: flex;
//     width: 518px;
//     height: 169px;
//     padding: 13px 41px 0px 41px;
//     flex-direction: column;
    
//     align-items: center;
//     gap: 9px;
//     flex-shrink: 0;
//     background: rgba(217, 217, 217, 0.70);

//     .title{
//         color: #000;
//         text-align: center;
//         font-family: "Swei Spring Sugar-Regular";
//         font-size: 28px;
//         font-style: normal;
//         font-weight: 700;
//         line-height: 160%; /* 44.8px */
//         letter-spacing: -2.8px;
//     }
//     .content{
//         width: 436px;
//         height: 124px;
//         flex-shrink: 0;
//         color: #000;
//         text-align: justify;
//         font-family: YouYuan;
//         font-size: 18px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 160%; /* 28.8px */
//     }
// }

// .shijing-info{
//     position: absolute;
//     left:8rem;
//     top:21rem;
// }



</style>