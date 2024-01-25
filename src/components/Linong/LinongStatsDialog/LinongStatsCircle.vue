<template>
    <div>
        <transition
            class="animate__animated"
            enter-active-class="linongStatsCircleAniSO"
            leave-active-class="animate_clear"
        >
        <div  
            v-show="orignalCircle"
            class="linongStatsCircle"
            :style="{ background: props.background }"
            
            >
            <transition 
                class="animate__animated animate__faster"
                enter-active-class="animate__fadeIn"
                leave-active-class="animate__fadeOut">
                <div 
                    v-show="!districtClicked"
                    class="linongStatsCircleAnim"
                >
                </div>
            </transition>
            <div 
                class="linongStatsCircleContext"
                :style="{ backgroundImage: 'url(' + props.backgroundImg + ')' , }">
                <div class="district">
                    <img
                        class="district-img"
                        :src="props.districtImg"
                    />
                    <!-- <transition 
                    class="animate__animated animate__faster"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut">
                        <div 
                        class="district-imglay"
                        v-show="zoom"
                        >
                        </div>
                    </transition> -->
                </div>
                
                <div class="stats">
                    <transition 
                        class="animate__animated animate__faster"
                        enter-active-class="animate__fadeIn"
                        leave-active-class="animate__fadeOut">
                        <img
                            v-show="!liClicked"
                            class="stats-img"
                            :src="props.statsImg"
                        />
                    </transition>
                    <transition 
                        class="animate__animated animate__faster"
                        enter-active-class="animate__fadeIn"
                        leave-active-class="animate__fadeOut">
                        <img
                            v-show="liClicked"
                            class="stats-imgDogde"
                            :src="props.statsImg"
                        />
                    </transition>
                </div>
                <transition
                    class="animate__animated animate__faster"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    >
                    <div class="text" v-show="nongClicked">
                        <div>{{$t(props.text)}}</div>
                        <div>{{ props.number }}</div>
                    </div>
                </transition>

                <transition
                    class="animate__animated animate__faster"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    >
                    <div class="textTrans" v-show="!nongClicked">
                        <div>{{$t(props.text)}}</div>
                        <div>{{ props.number }}</div>
                    </div>
                </transition>
            </div>
        </div>
        </transition>

        <transition
            class="animate__animated"
            enter-active-class="linongStatsCircleAniOS"
            leave-active-class="animate_clear"
        >
            <div
                v-show="samllCircle"
                class="linongStatsCircleSmall"
                :style="{ background: props.background }"
                >
                <div 
                    class="linongStatsCircleContext"
                    :style="{ backgroundImage: 'url(' + props.backgroundImg + ')' , }">
                    <div class="district">
                        <img
                            class="district-img"
                            :src="props.districtImg"
                        />
                    </div>
                    <div class="stats">
                        <img
                            class="stats-img"
                            :src="props.statsImg"
                        />
                    </div>
                        <div class="text">
                            <div>{{$t(props.text)}}</div>
                            <div>{{ props.number }}</div>
                        </div>
                </div>
            </div>
        </transition>

        <transition
            class="animate__animated"
            enter-active-class="linongStatsCircleAniOF"
            leave-active-class="animate_clear"
        >
            <div
                v-show="zoomCircle"
                class="linongStatsCircleFocus"
                :style="{ background: props.backgroundF }"
                >
                <div class="linongStatsDialogFocus"></div>
                <div 
                    class="linongStatsCircleContext"
                    :style="{ backgroundImage: 'url(' + props.backgroundImg + ')' , }">
                    <div class="district">
                        <img
                            class="district-img"
                            :src="props.districtImg"
                        />
                    </div>
                    <div class="stats">
                        <img
                            class="stats-imgBig"
                            :src="props.statsImg"
                        />
                    </div>
                    <div class="text">
                        <div>{{$t(props.text)}}</div>
                        <div>{{ props.number }}</div>
                    </div>
                </div>
              
            </div>
            
        </transition>

        
    </div>
</template>

<script setup>
import { ref} from 'vue'
import { defineProps,defineExpose } from 'vue';
const props = defineProps({
    background:{},
    backgroundF:{},
    backgroundImg:{},
    districtImg:{},
    statsImg:{},
    text:{
        type:String
    },
    number:{
        type:String
    },
    myleft:{
        type:Number
    },
    mytop:{
        type:Number
    },
    mywidth:{
        type:Number
    },
    myfontSize:{
        type:Number
    },
    smallleft:{
        type:Number
    },
    smalltop:{
        type:Number
    },
    smallwidth:{
        type:Number
    },
    smallfontSize:{
        type:Number
    },
    focusleft:{
        type:Number
    },
    focustop:{
        type:Number
    },
    focuswidth:{
        type:Number
    },
    focusfontsize:{
        type:Number
    }
})

const orignalCircle = ref(true)
const samllCircle = ref(false)
const zoomCircle = ref(false)

const myleft = ref(props.myleft) 
const mytop = ref(props.mytop) 
const mywidth = ref(props.mywidth) 
const myfontSize = ref(props.myfontSize)

const smallleft = ref(props.smallleft) 
const smalltop = ref(props.smalltop) 
const smallwidth = ref(props.smallwidth) 
const smallfontSize = ref(props.smallfontSize)

const focusleft = ref(props.focusleft) 
const focustop = ref(props.focustop) 
const focuswidth = ref(props.focuswidth) 
const focusfontSize = ref(props.focusfontsize)


const liClicked = ref(false)
const nongClicked = ref(true)
const districtClicked = ref(true)



defineExpose({
    districtClicked,
    liClicked,
    nongClicked,
    orignalCircle,
    samllCircle,
    zoomCircle
})
</script>

<style scoped lang="less">
.linongStatsCircle{
    border-radius: 50%;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    cursor: pointer;
    width: calc(v-bind(mywidth) / 1080 * 100vh);
    height: calc(v-bind(mywidth) / 1080 * 100vh);
    left: calc(v-bind(myleft) / 1920 * 100vw);
    top: calc(v-bind(mytop) / 1080 * 100vh);
    font-size: calc(v-bind(myfontSize) / 1080 * 100vh);
    color: #fff;
    font-family: Inter;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.linongStatsCircleSmall{
    width: calc(v-bind(smallwidth) / 1080 * 100vh);
    height: calc(v-bind(smallwidth) / 1080 * 100vh);
    left: calc(v-bind(smallleft) / 1920 * 100vw);
    top: calc(v-bind(smalltop) / 1080 * 100vh);
    font-size: calc(v-bind(smallfontSize) / 1080 * 100vh);
    color: #fff;
    font-family: Inter;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 50%;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    cursor: pointer;
    z-index: -1;
}
.linongStatsCircleFocus{
    width: calc(v-bind(focuswidth) / 1080 * 100vh);
    height: calc(v-bind(focuswidth) / 1080 * 100vh);
    left: calc(v-bind(focusleft) / 1920 * 100vw);
    top: calc(v-bind(focustop) / 1080 * 100vh);
    font-size: calc(v-bind(focusfontSize) / 1080 * 100vh);
    color: #fff;
    font-family: Inter;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 50%;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    cursor: pointer;
}

.linongStatsCircleAniOS{
    animation: orignSmall 1s;
}
.linongStatsCircleAniSO{
    animation: smallOrigin 1s;
}
.linongStatsCircleAniFO{
    animation: focusOrign 1s;
}
.linongStatsCircleAniOF{
    animation: orignFocus 1s;
}
.animate_clear{
    animation: clear 0.1s;
}

@keyframes orignSmall {
    from{
        width: calc(v-bind(mywidth) / 1080 * 100vh);
        height: calc(v-bind(mywidth) / 1080 * 100vh);
        left: calc(v-bind(myleft) / 1920 * 100vw);
        top: calc(v-bind(mytop) / 1080 * 100vh);
        font-size: calc(v-bind(myfontSize) / 1080 * 100vh);
    }
    to{
        width: calc(v-bind(smallwidth) / 1080 * 100vh);
        height: calc(v-bind(smallwidth) / 1080 * 100vh);
        left: calc(v-bind(smallleft) / 1920 * 100vw);
        top: calc(v-bind(smalltop) / 1080 * 100vh);
        font-size: calc(v-bind(smallfontSize) / 1080 * 100vh);
    }
}
@keyframes smallOrigin {
    from{
        width: calc(v-bind(smallwidth) / 1080 * 100vh);
        height: calc(v-bind(smallwidth) / 1080 * 100vh);
        left: calc(v-bind(smallleft) / 1920 * 100vw);
        top: calc(v-bind(smalltop) / 1080 * 100vh);
        font-size: calc(v-bind(smallfontSize) / 1080 * 100vh);
    }
    to{
        width: calc(v-bind(mywidth) / 1080 * 100vh);
        height: calc(v-bind(mywidth) / 1080 * 100vh);
        left: calc(v-bind(myleft) / 1920 * 100vw);
        top: calc(v-bind(mytop) / 1080 * 100vh);
        font-size: calc(v-bind(myfontSize) / 1080 * 100vh);
    }
}
@keyframes orignFocus {
    from{
        width: calc(v-bind(mywidth) / 1080 * 100vh);
        height: calc(v-bind(mywidth) / 1080 * 100vh);
        left: calc(v-bind(myleft) / 1920 * 100vw);
        top: calc(v-bind(mytop) / 1080 * 100vh);
        font-size: calc(v-bind(myfontSize) / 1080 * 100vh);
    }
    to{
        width: calc(v-bind(focuswidth) / 1080 * 100vh);
        height: calc(v-bind(focuswidth) / 1080 * 100vh);
        left: calc(v-bind(focusleft) / 1920 * 100vw);
        top: calc(v-bind(focustop) / 1080 * 100vh);
        font-size: calc(v-bind(focusfontSize) / 1080 * 100vh);
    }
}
@keyframes focusOrign {
    from{
        width: calc(v-bind(focuswidth) / 1080 * 100vh);
        height: calc(v-bind(focuswidth) / 1080 * 100vh);
        left: calc(v-bind(focusleft) / 1920 * 100vw);
        top: calc(v-bind(focustop) / 1080 * 100vh);
        font-size: calc(v-bind(focusfontSize) / 1080 * 100vh);
    }
    to{
        width: calc(v-bind(mywidth) / 1080 * 100vh);
        height: calc(v-bind(mywidth) / 1080 * 100vh);
        left: calc(v-bind(myleft) / 1920 * 100vw);
        top: calc(v-bind(mytop) / 1080 * 100vh);
        font-size: calc(v-bind(myfontSize) / 1080 * 100vh);
    }
}
@keyframes clear {
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}

.stats{
    width: 100%;
    height: 100%;
    position: absolute;
     &-img{
        height: 80%;
        position: absolute;
        top:50%;
        left:52%;
        transform: translate(-50%,-50%);
        mix-blend-mode: plus-lighter;
    }
    &-imgDogde{
        height: 80%;
        position: absolute;
        top:50%;
        left:52%;
        transform: translate(-50%,-50%);
        mix-blend-mode: color-dodge;
    }
    &-imgBig{
        height: 120%;
        position: absolute;
        top:50%;
        left:52%;
        transform: translate(-50%,-50%);
        mix-blend-mode: plus-lighter;
    }
}
.text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);

}
.linongStatsCircleAnim{
    border-radius: 50%;
    width: calc(v-bind(mywidth) / 1080 * 100vh);
    height: calc(v-bind(mywidth) / 1080 * 100vh);
    position: absolute;
    background-color:rgba(211,211,211,0.5)
}
.linongStatsCircleContext{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 55%;
    position: relative;
}
.district{
    width: 100%;
    height: 100%;
    position: absolute;
    &-img{
        height:7%;
        position: absolute;
        top:50%;
        left:3.5%;
        transform: translateY(-50%);
    }
    &-imglay{
        width: 7%;
        height:7%;
        position: absolute;
        top:50%;
        left:3.5%;
        transform: translateY(-50%);
        background-color: rgba(211,211,211,0.5);
    }
}
.textTrans{
    color: #e76060;
    font-family: Inter;
    text-align: center;
    font-size: calc(v-bind(myfontSize) / 1080 * 100vh);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    mix-blend-mode: screen;
}

.linongStatsDialogFocus{
    background-color: rgba(0,0,0,0.25);
    position: fixed;
    width: calc(1514 / 1920 * 100vw);
    height: calc(940 / 1080 * 100vh);
    top:calc(70 / 1080 * 100vh);
    border-radius: calc(13 / 1080 * 100vh);
    left: calc(329 / 1920 * 100vw);
    mix-blend-mode: multiply;
}
</style>