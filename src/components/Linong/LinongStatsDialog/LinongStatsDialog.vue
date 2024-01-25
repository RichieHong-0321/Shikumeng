<template>
    <transition
        v-show="linongStatsVisible"
        class="animate__animated animate__faster" 
        enter-active-class="animate__fadeIn"
        leave-active-class="animate__fadeOut">
        <div 
            class="linongStatsDialogLayout"
            @click="closeLinongStas">
               
                <div class="linongStatsDialog" @click.stop>
                   
                    <div class="linongStatsDialog-decoration01"></div>
                    <div class="linongStatsDialog-decoration02"></div>

                    <div class="linongStatsDialog-content">
                        <div class="leftTitle ">
                            <div class="leftTitle-text vertical">
                                {{ $t('linong.statsDialog.title') }}
                            </div>
                        </div>
                        <div class="rightContext">
                            <div class="rightContext-title">
                                <div class="rightContext-title-text">
                                    {{ $t('linong.statsDialog.subTitle') }}
                                </div>
                                <div class="rightContext-title-imgFrame">
                                    <div class="imgFrame-frame"
                                        v-for="(item,index) in shikumengLayout" 
                                        :key="index">
                                        <img 
                                            class="imgFrame-img"
                                            :src=item.imgurl
                                        />
                                        <div class="imgFrame-text">
                                            {{ $t(item.name) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rightContext-Stats">
                                <div
                                    v-for="(item,index) in statsData"
                                    :key="index">
                                    <StatsCircle
                                        :ref="el => getStatsCircle(el,index)"
                                        :background="item.background"
                                        :backgroundF="item.backgroundF"
                                        :backgroundImg="item.backgroundImg"
                                        :districtImg="item.districtImg"
                                        :statsImg="item.statsImg"
                                        :text="item.text"
                                        :number="item.number"
                                        :myleft="item.myleft"
                                        :mytop="item.mytop"
                                        :mywidth="item.mywidth"
                                        :myfontSize="item.myfontSize"
                                        :smallleft="item.smallleft"
                                        :smalltop="item.smalltop"
                                        :smallwidth="item.smallwidth"
                                        :smallfont-size="item.smallfontSize"
                                        :focusleft="item.focusleft"
                                        :focustop="item.focustop"
                                        :focuswidth="item.focuswidth"
                                        :focusfontsize="item.focusfontsize"
                                        @click="zoomStatsData(index)"
                                        >
                                    </StatsCircle>
                                </div>
                                <div class="rightContext-Stats-btnGroup">
                                    <div 
                                        class="btnChange"
                                        @click="districtClick">
                                        <transition 
                                            class="animate__animated animate__faster"
                                            enter-active-class="animate__fadeIn"
                                            leave-active-class="animate__fadeOut">
                                            <img
                                                v-show="districtShow"
                                                class="imgDistrict"
                                                src="@/assets/linong/stats/icon/district.svg"
                                            />
                                            
                                        </transition>
                                        <transition 
                                            class="animate__animated animate__faster"
                                            enter-active-class="animate__fadeIn"
                                            leave-active-class="animate__fadeOut">
                                            <img
                                                v-show="!districtShow"
                                                class="imgDistrict"
                                                src="@/assets/linong/stats/icon/districtWhite.svg"
                                            />
                                            
                                        </transition>
                                        <div class="btnChange-text">{{ $t('linong.statsDialog.districtBtn') }}</div>
                                    </div>
                                    <div 
                                        class="btnChange"
                                        @click="nongClick">
                                        <transition 
                                            class="animate__animated animate__faster"
                                            enter-active-class="animate__fadeIn"
                                            leave-active-class="animate__fadeOut">
                                        <img
                                            v-show="nongShow"
                                            class="imgNong"
                                            src="@/assets/linong/stats/icon/nong.svg"
                                        />
                                        </transition>
                                        <transition 
                                            class="animate__animated animate__faster"
                                            enter-active-class="animate__fadeIn"
                                            leave-active-class="animate__fadeOut">
                                        <img
                                            v-show="!nongShow"
                                            class="imgNong"
                                            src="@/assets/linong/stats/icon/nongWhite.svg"
                                        />
                                        </transition>
                                        <div class="btnChange-text">{{ $t('linong.statsDialog.nongBtn') }}</div>
                                    </div>
                                    <div 
                                        class="btnChange"
                                        @click="liClick">
                                        <transition 
                                            class="animate__animated animate__faster"
                                            enter-active-class="animate__fadeIn"
                                            leave-active-class="animate__fadeOut">
                                        <img
                                            v-show="liShow"
                                            class="imgLi"
                                            src="@/assets/linong/stats/icon/li.svg"
                                        />
                                        </transition>
                                        <transition 
                                            class="animate__animated animate__faster"
                                            enter-active-class="animate__fadeIn"
                                            leave-active-class="animate__fadeOut">
                                        <img
                                            v-show="!liShow"
                                            class="imgLi"
                                            src="@/assets/linong/stats/icon/liWhite.svg"
                                        />
                                        </transition>
                                        <div class="btnChange-text">{{ $t('linong.statsDialog.liBtn') }}</div>
                                    </div>

                                </div>
                                <div class="rightContext-Stats-footer">
                                    <span>
                                        {{ $t('linong.statsDialog.references') }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
        </div>
        
    </transition>
</template>

<script setup>
import { ref } from 'vue'
import { defineExpose } from 'vue'
import StatsCircle from "@/components/Linong/LinongStatsDialog/LinongStatsCircle.vue"

const shikumengLayout = [
    {
        imgurl:require('@/assets/linong/stats/icon/typeImplant.png'),
        name:"linong.statsDialog.shikumengLayout[0]"
    },
    {
        imgurl:require("@/assets/linong/stats/icon/typeTShaped.png"),
        name:"linong.statsDialog.shikumengLayout[1]"
    },
    {
        imgurl:require("@/assets/linong/stats/icon/typeIntegrate.png"),
        name:"linong.statsDialog.shikumengLayout[2]"
    },
    {
        imgurl:require("@/assets/linong/stats/icon/typeNeighborCorner.png"),
        name:"linong.statsDialog.shikumengLayout[3]"
    },
    {
        imgurl:require("@/assets/linong/stats/icon/typeScattered.png"),
        name:"linong.statsDialog.shikumengLayout[4]"
    },
    {
        imgurl:require("@/assets/linong/stats/icon/typeComb.png"),
        name:"linong.statsDialog.shikumengLayout[5]"
    },
]
const statsData = [
    {
        background:"rgba(76, 63, 58, 0.47)",
        backgroundF:"rgba(76, 63, 58, 0.8)",
        backgroundImg:require("@/assets/linong/stats/images/XuHui/XuHuiShikumeng.png"),
        districtImg:require("@/assets/linong/district/XuHui/XuHui.png"),
        statsImg:require("@/assets/linong/stats/images/XuHui/XuHuiStats.png"),
        text:"linong.districtArea[4].districtName",
        number:"4",
        myleft:14,
        mytop:106,
        mywidth:135,
        myfontSize:13,
        smallleft:233,
        smalltop:182,
        smallwidth:81,
        smallfontSize:7.8,
        focusleft:90,
        focustop:81,
        focuswidth:202,
        focusfontsize:19.5,
    },
    {
        background:"rgba(112, 96, 91, 0.47)",
        backgroundF:"rgba(112, 96, 91, 0.8)",
        backgroundImg:require("@/assets/linong/stats/images/JingAn/JingAnShikumeng.png"),
        districtImg:require("@/assets/linong/district/JingAn/JingAn.png"),
        statsImg:require("@/assets/linong/stats/images/JingAn/JingAnStats.png"),
        text:"linong.districtArea[1].districtName",
        number:"21",
        myleft:191,
        mytop:28,
        mywidth:233,
        myfontSize:18,
        smallleft:340,
        smalltop:132,
        smallwidth:140,
        smallfontSize:10.8,
        focusleft:214,
        focustop:40,
        focuswidth:349,
        focusfontsize:27,
    },
    {
        background: "rgba(175, 145, 107, 0.47)",
        backgroundF: "rgba(175, 145, 107, 0.8)",
        backgroundImg:require("@/assets/linong/stats/images/HuangPu/HuangPuShikumeng.png"),
        districtImg:require("@/assets/linong/district/HuangPu/HuangPu.png"),
        statsImg:require("@/assets/linong/stats/images/HuangPu/HuangPuStats.png"),
        text:"linong.districtArea[0].districtName",
        number:"31",
        myleft:659,
        mytop:36,
        mywidth:292.126,
        myfontSize:24,
        smallleft:620,
        smalltop:122,
        smallwidth:175,
        smallfontSize:14.4,
        focusleft:587,
        focustop:53,
        focuswidth:438,
        focusfontsize:36,
    },
    {
        background: "rgba(85, 77, 82, 0.47)",
        backgroundF: "rgba(85, 77, 82, 0.8)",
        backgroundImg:require("@/assets/linong/stats/images/HongKou/HongKouShikumeng.png"),
        districtImg:require("@/assets/linong/district/HongKou/HongKou.png"),
        statsImg:require("@/assets/linong/stats/images/HongKou/HongKouStats.png"),
        text:"linong.districtArea[2].districtName",
        number:"36",
        myleft:3,
        mytop:293,
        mywidth:291.227,
        myfontSize:26,
        smallleft:227,
        smalltop:291,
        smallwidth:175,
        smallfontSize:15.6,
        focusleft:6,
        focustop:148,
        focuswidth:437,
        focusfontsize:39,
    },
    {
        background: "rgba(129, 77, 87, 0.31)",
        backgroundF: "rgba(129, 77, 87, 0.8)",
        backgroundImg:require("@/assets/linong/stats/images/ShiNan/ShiNanShikumeng.png"),
        districtImg:require("@/assets/linong/district/ShiNan/ShiNan.png"),
        statsImg:require("@/assets/linong/stats/images/ShiNan/ShiNanStats.png"),
        text:"linong.districtArea[3].districtName",
        number:"53",
        myleft:335,
        mytop:210,
        mywidth:399.089,
        myfontSize:40,
        smallleft:426,
        smalltop:241,
        smallwidth:240,
        smallfontSize:24,
        focusleft:267,
        focustop:73,
        focuswidth:524,
        focusfontsize:60,
    },
    {
        background: "rgba(86, 111, 124, 0.46)",
        backgroundF: "rgba(86, 111, 124, 0.8)",
        backgroundImg:require("@/assets/linong/stats/images/LuWan/LuWanShikumeng.png"),
        districtImg:require("@/assets/linong/district/LuWan/LuWan.png"),
        statsImg:require("@/assets/linong/stats/images/LuWan/LuWanStats.png"),
        text:"linong.districtArea[5].districtName",
        number:"26",
        myleft:868,
        mytop:293,
        mywidth:254.374,
        myfontSize:20,
        smallleft:746,
        smalltop:291,
        smallwidth:153,
        smallfontSize:12,
        focusleft:590,
        focustop:146,
        focuswidth:381,
        focusfontsize:20,
    },
]
const linongStatsVisible = ref(false)

const districtShow = ref(true)
const nongShow = ref(true)
const liShow = ref(true)

const statsCirlce = ref([])
const getStatsCircle = (el,index) => {
    if(el){
        statsCirlce.value[index] = el
    }
}


const closeLinongStas = () => {
    linongStatsVisible.value = false
}
const districtClick = () => {
    districtShow.value = !districtShow.value
    nongShow.value = true
    liShow.value = true
    for(let i = 0 ;i< statsCirlce.value.length; i ++){
        if(districtShow.value == true){
            statsCirlce.value[i].districtClicked = true
            statsCirlce.value[i].nongClicked = true
            statsCirlce.value[i].liClicked = false
            zoomCircleBack(i);
        }else{
            statsCirlce.value[i].districtClicked = false
            statsCirlce.value[i].nongClicked = true
            statsCirlce.value[i].liClicked = false
            zoomCircleBack(i);
        }
        
    }
}
const nongClick = () => {
    nongShow.value = !nongShow.value
    districtShow.value = true
    liShow.value = true
    //console.log(statsCirlce.value.length)
    for(let i = 0 ;i< statsCirlce.value.length; i ++){
        if( nongShow.value == true){
            statsCirlce.value[i].nongClicked = true
            statsCirlce.value[i].districtClicked = true
            statsCirlce.value[i].liClicked = false
            zoomCircleBack(i);
        }else{
            statsCirlce.value[i].nongClicked = false
            statsCirlce.value[i].districtClicked = true
            statsCirlce.value[i].liClicked = false
            zoomCircleBack(i);
        }
       
    }
    
}
const liClick = () => {
    liShow.value = !liShow.value
    nongShow.value = true
    districtShow.value = true
    for(let i = 0 ;i< statsCirlce.value.length; i ++){
        if(liShow.value == true){
            statsCirlce.value[i].liClicked = false
            statsCirlce.value[i].districtClicked = true
            statsCirlce.value[i].nongClicked = true
            zoomCircleBack(i);
        }else{
            statsCirlce.value[i].liClicked = true
            statsCirlce.value[i].districtClicked = true
            statsCirlce.value[i].nongClicked = true
            zoomCircleBack(i);
        }
       
    }
}

const currentOne = ref(-1)

const zoomCircleBack = () => {
    for(let i = 0 ;i < statsCirlce.value.length; i ++){
        statsCirlce.value[i].orignalCircle =  true
        statsCirlce.value[i].samllCircle =false
        statsCirlce.value[i].zoomCircle = false
    }
    currentOne.value = -1
}


const zoomStatsData = (index) => {
    //console.log(index)
    for(let i = 0 ;i < statsCirlce.value.length; i ++){
        statsCirlce.value[i].orignalCircle = false
        if(index != i){
            statsCirlce.value[i].samllCircle = true
            statsCirlce.value[i].zoomCircle = false
        }
    }
    if(currentOne.value == -1){
        statsCirlce.value[index].zoomCircle = true
        statsCirlce.value[index].samllCircle = false
        currentOne.value = index
        return;
    }
    if(currentOne.value == index){
        for(let i = 0 ;i< statsCirlce.value.length; i ++){
            statsCirlce.value[i].orignalCircle =  true
            statsCirlce.value[i].samllCircle =false
            statsCirlce.value[i].zoomCircle = false
        }
        currentOne.value = -1
        return
    }
    if(currentOne.value != -1 && currentOne.value != index){
        statsCirlce.value[index].zoomCircle = true
        statsCirlce.value[index].samllCircle = false
        currentOne.value = index
    }

    

}

defineExpose({
    linongStatsVisible
})
</script>

<style scoped lang="less">
@font-face{
    src:url('@/assets/fonts/SweiSpringSugar-Bold.ttf');
    font-family:"Swei Spring CJKtc Bold";
}
.linongStatsDialogLayout{
    position: absolute;
    top:0;
    width: 100vw;
    z-index:1000;
    height: 100vh;
    
}
.linongStatsDialog{
    width: calc(1514 / 1920 * 100vw);
    height: calc(940 / 1080 * 100vh);
    margin-top:calc(70 / 1080 * 100vh);
    border-radius: calc(13 / 1080 * 100vh);
    margin-left: calc(329 / 1920 * 100vw);
    background: #E2E2E2;
    position: relative;
    z-index: 2500;
    &-decoration01{
        position: absolute;
        width: 100%;
        background-color: #C8C6C5;
        height: calc(179 / 1080 * 100vh);
        top:0;
        border-top-right-radius: calc(13 / 1080 * 100vh);
        border-top-left-radius: calc(13 / 1080 * 100vh);
    }
    &-decoration02{
        position: absolute;
        width: 100%;
        top:calc(222 /1080 * 100vh);
        background-color: #C8C6C5;
        height: calc(33 / 1080 * 100vh);
    }
}


.linongStatsDialog-content{
    width: 100%;
    height: 100%;
    display:flex;
    .leftTitle{
        width: calc(247 / 1920 * 100vw);
        height:100%;
        z-index: 5000;
        &-text{
            width: calc(55 / 1920 * 100vh);
            height: calc(640 / 1080 * 100vh);
            margin-top: calc(183 / 1080 * 100vh);
            margin-left: calc(84 / 1920 * 100vw);
            color: #4A3939;
            font-family: Swei Spring CJKtc Bold;
            font-size: calc(50 / 1080 * 100vh);
            font-style: normal;
            font-weight: 700;
            line-height: 130%; /* 65px */
            letter-spacing: calc(10 / 1080 * 100vh);
            white-space:nowrap;
        }
    }
}
.rightContext{
    width:calc(1267 / 1920 * 100vw);
    &-title{
        position:absolute;
        margin-left: calc(230 / 1920 * 100vw);
        width:calc(1037 / 1920 * 100vw);
        height: (246 / 1080 * 100vh);
        margin-top: calc(39 / 1080 * 100vh);
        background-color: #999797;
        border-top-left-radius: calc(47 / 1920 * 100vw);
        border-bottom-left-radius: calc(47 / 1920 * 100vw);
        &-text{
            color: #FFF;
            font-family: Swei Spring CJKtc Bold;
            font-size: calc(30 / 1080 * 100vh);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-left:calc(81 / 1920 * 100vw);
            margin-top:calc(34 / 1080 * 100vh);
        }
        &-imgFrame{
            display: flex;
            width: calc(938.4 / 1920 * 100vw);
            margin-left: calc(55.3 / 1920 * 100vw);
            margin-top: calc(12 / 1080 * 100vh);
        }
    }
    .imgFrame{
        &-frame{
            width:calc(156.4 / 1920 * 100vw);
            height: calc(140 / 1080 * 100vh);
            position: relative;
        }
        &-img{
            position: absolute;
            left:50%;
            top:41%;
            transform: translate(-50%,-50%);
            height: 80%;
        }
        &-text{
            position: absolute;
            bottom: 0;
            color: #473535;
            font-family: Inter;
            font-size: calc(20 / 1080 * 100vh);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            width: 100%;
            text-align: center;
        }
    }
    .imgFrame-frame:nth-of-type(3){
        .imgFrame-img{
            position: absolute;
            left:50%;
            top:47%;
            transform: translate(-50%,-50%);
            height: 60%;
        }
    }
    .imgFrame-frame:nth-of-type(1),
    .imgFrame-frame:nth-of-type(2){
        .imgFrame-img{
            position: absolute;
            left:50%;
            top:41%;
            transform: translate(-50%,-50%);
            height: 50%;
        }
    }
}
.rightContext-Stats{
    width:100%;
    height: (655 / 1080 * 100vh);
    margin-top: (285 / 1080 * 100vh);
    position: relative;
    &-footer{
        color: #000;
        font-family: Swei Spring CJKtc;
        font-size: calc(20 / 1920 * 100vw);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: calc(370 / 1920 * 100vw);
        height: calc(24 / 1080 *100vh);
        position: absolute;
        left:calc(861 / 1920 * 100vw);
        top:calc(578 / 1080 * 100vh);
    }
    &-btnGroup{
        width: calc(194.362 / 1920 * 100vw);
        height: calc(181 / 1080 * 100vh);
        position: absolute;
        top:calc(81 / 1080 * 100vh);
        left:calc(1059 / 1920 * 100vw)
    }
}
.btnChange{
    color: #000;
    font-family: Inter;
    font-size: calc(24 / 1080 * 100vh);
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    opacity: 0.5;
    height: calc(50 / 1080 * 100vh);
    margin-bottom: calc(15 / 1080 * 100vh);
    display: flex;
    cursor: pointer;
    .imgDistrict{
        height: calc(48.591 / 1080 * 100vh);
        position: absolute;
    }
    .imgNong{
        height: calc(36.443 / 1080 * 100vh);
        padding-left: calc(3.5 / 1920 * 100vw);
        padding-right: calc(3.5 / 1920 * 100vw);
        position: absolute;
    }
    .imgLi{
        height:calc(38.872 / 1080 * 100vh);
        padding-left: calc(9 / 1920 * 100vw);
        padding-right: calc(9 / 1920 * 100vw);
        position: absolute;
    }
    &-text{
        margin-top:(5 / 1080 * 100vh);
        margin-left:(56 / 1920 * 100vw);
        color: #000;
        font-family: Inter;
        font-size: calc(24 / 1080 * 100vh);
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
}

</style>