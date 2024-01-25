<template>
    <div class="linong container">
        <div class="linong-map">
            
            <div class="leftpart">
                
                <img 
                    class="leftpart-backbtn"
                    src="@/assets/linong/images/linong-back.png"
                    alt="back"
                    @click="goback"
                />
                <div class="leftpart-title">
                    {{ $t('linong.left.linongTitle') }}
                </div>
                <div class="leftpart-subtitle">
                    {{ $t('linong.left.linongSubTitle') }}
                </div>
                <div class="leftpart-back"></div>
                <img
                    class="leftpart-statsCircle"
                    src="@/assets/linong/images/linong-linongCircle.png"
                    alt="statistics"
                    @click="showStatsData"
                />
                <div class="leftpart-statsText">
                    {{ $t('linong.left.linongContext') }}
                </div>
                <div 
                    class="leftpart-district" >
                    
                    <img 
                        v-for="(item,index) in district"
                        :key="index"
                        :class="
                            isActive == index 
                        ? 'leftpart-district-imgselect'
                        : 'leftpart-district-img' "
                        :src="item.imgUrl"
                        @click="showDistrict(index)"
                    />      
                </div>

            </div>
            <div class="map">
                <div
                    :class="isActive == 0 ? 'map-HuangPu' : 'map-HuangPu-empty'"
                    @click="showDistrictImg(0)">
                    <img
                        style="width: 100%;height: 100%;"
                        src="@/assets/linong/district/HuangPu/HuangPu-MAP.png"
                        alt="HuangPu District"
                    />
                    <DistrictPoints
                        v-show="isActive == 0"
                        :districtArea = 0
                        :ponitsJSON="districtPoint.HuangPuDistrict"
                        :buttonIcon="require('@/assets/linong/district/HuangPu/HuangPu-point.svg')"
                        @showInfoCard="getInfoCard"
                    >
                    </DistrictPoints>
                </div>
                
                <div
                    :class="isActive == 1 ? 'map-JingAn' : 'map-JingAn-empty'"
                    @click="showDistrictImg(1)">
                    <img
                        style="width: 100%;height: 100%;"
                        src="@/assets/linong/district/JingAn/JingAn-MAP.png"
                        alt="JingAn District"
                    />
                    <DistrictPoints
                        v-show="isActive == 1"
                        :districtArea = 1
                        :ponitsJSON="districtPoint.JingAnDistrict"
                        :buttonIcon="require('@/assets/linong/district/JingAn/JingAn-point.svg')"
                        @showInfoCard="getInfoCard"
                    >
                    </DistrictPoints>
                </div>


                <div
                    :class="isActive == 2 ? 'map-HongKou' : 'map-HongKou-empty'"
                    @click="showDistrictImg(2)">
                    <img
                        style="width: 100%;height: 100%;"
                        src="@/assets/linong/district/HongKou/HongKou-MAP.png"
                        alt="HongKou District"
                    />
                    <DistrictPoints
                        v-show="isActive == 2"
                        :districtArea = 2
                        :ponitsJSON="districtPoint.HongKouDistrict"
                        :buttonIcon="require('@/assets/linong/district/HongKou/HongKou-point.svg')"
                        @showInfoCard="getInfoCard"
                    >
                    </DistrictPoints>
                </div>
                
                <div
                    :class="isActive == 3 ? 'map-ShiNan' : 'map-ShiNan-empty'"
                    @click="showDistrictImg(3)">
                    <img
                        style="width: 100%;height: 100%;"
                        src="@/assets/linong/district/ShiNan/ShiNan-MAP.png"
                        alt="ShiNan District"
                    />
                    <DistrictPoints
                        v-show="isActive == 3"
                        :districtArea = 3
                        :ponitsJSON="districtPoint.ShiNanDistrict"
                        :buttonIcon="require('@/assets/linong/district/ShiNan/ShiNan-point.svg')"
                        @showInfoCard="getInfoCard"
                    >
                    </DistrictPoints>
                </div>
                
                <div
                    :class="isActive == 4 ? 'map-XuHui' : 'map-XuHui-empty'" 
                    @click="showDistrictImg(4)">
                    <img
                        style="width: 100%;height: 100%;"
                        src="@/assets/linong/district/XuHui/XuHui-MAP.png"
                        alt="HXuHui District"
                    />
                    <DistrictPoints
                        v-show="isActive == 4"
                        :districtArea = 4
                        :ponitsJSON="districtPoint.XuHuiDistrict"
                        :buttonIcon="require('@/assets/linong/district/XuHui/XuHui-point.svg')"
                        @showInfoCard="getInfoCard"
                    >
                    </DistrictPoints>
                </div>
                <div 
                    @click="showDistrictImg(5)"
                    :class="isActive == 5 ? 'map-LuWan' : 'map-LuWan-empty'">
                    <img
                        style="width: 100%;height: 100%;"
                        src="@/assets/linong/district/LuWan/LuWan-MAP.png"
                        alt="LuWan District"
                    />
                    <DistrictPoints
                        v-show="isActive == 5"
                        :districtArea = 5
                        :ponitsJSON="districtPoint.LuWanDistrict"
                        :buttonIcon="require('@/assets/linong/district/LuWan/LuWan-point.svg')"
                        @showInfoCard="getInfoCard"
                    >
                    </DistrictPoints>
                </div>
                
            </div>
            
        </div>
        <LinongInfoCard
            class="linong-cardframe"
            ref="linongInfoCard"
            v-show="isShow"
        ></LinongInfoCard>
        <LinongStats
            ref="linongStats"
        >
        </LinongStats>
    </div>
</template>

<script setup>
import { ref} from 'vue';
import { useRouter } from "vue-router";
import DistrictPoints from "@/components/Linong/LinongPoints/LinongPoints.vue"
import LinongInfoCard from '@/components/Linong/LinongInfoCard/LinongInfoCard.vue';
import LinongStats from '@/components/Linong/LinongStatsDialog/LinongStatsDialog.vue';

const router = useRouter();
const isActive = ref(-1)
const isShow = ref(false)
const linongInfoCard = ref(null)
const linongStats = ref(null)
const currentIndex = ref(-1)


const district = [
    {
        imgUrl:require('@/assets/linong/district/HuangPu/HuangPu.png'),
    },{
        imgUrl:require("@/assets/linong/district/JingAn/JingAn.png"),
    },{
        imgUrl:require("@/assets/linong/district/HongKou/HongKou.png"),
    },{
        imgUrl:require("@/assets/linong/district/ShiNan/ShiNan.png"),
    },{
        imgUrl:require("@/assets/linong/district/XuHui/XuHui.png"),
    },{
        imgUrl:require("@/assets/linong/district/LuWan/LuWan.png"),
    }
]
const districtPoint = require("@/assets/linong/json/districtPoint.json")

const getInfoCard = (val) =>{
    if(currentIndex.value != -1 && currentIndex.value != val){
        closeInfoCard()
    }
    setTimeout(() => {
        linongInfoCard.value.pointIndex = val
        currentIndex.value = val
        isShow.value = true
    }, 500);
}


const closeInfoCard = () => {
    isShow.value = false;
}




const goback = () => {
    router.go(-1)
} 
const showStatsData = () => {
    linongStats.value.linongStatsVisible = true;
    
}

const showDistrict = (index) =>{
    if (isActive.value !== index) {
        isActive.value = index;
        linongInfoCard.value.areaIndex = index
    }
    closeInfoCard()
}

const showDistrictImg = (index) =>{
    if (isActive.value !== index) {
        isActive.value = index;
        linongInfoCard.value.areaIndex = index
    }
    closeInfoCard()
}

const mapWidth = ref(window.innerHeight * 16 / 9)

const getWindowInfo = () => {
	mapWidth.value = window.innerHeight * 16 / 9;
    console.log(mapWidth.value)
};
window.addEventListener('resize', getWindowInfo);

</script>

<style lang="less" scoped>
@font-face{
    src:url('@/assets/fonts/Huiwen-mincho.otf');
    font-family:"Huiwen-mincho";
}
@font-face{
    src:url('@/assets/fonts/SweiSpringSugar-Medium.ttf');
    font-family:"Swei Spring CJKtc";
}


.linong{
    background: url('@/assets/linong/images/linong-background.png') no-repeat;
    background-size: cover;
    overflow: hidden;
    &-map{
        background: url('@/assets/linong/images/linong-map.png') no-repeat center;
        background-size:auto 100vh;
        width: 100vw;
        height: 100vh;
        display:flex;
        overflow: hidden;
    }
    &-cardframe{
        position: fixed;
        overflow: hidden;
        top:0;
        z-index: 2500;
    }
}
.leftpart{
    width:calc(300 / 1920 * 100vw);
    position:relative;
    text-align:left;
    z-index: 1000;
    &-backbtn{
        position:absolute;
        width:calc(38 / 1920 * 100vw);
        margin-left:calc(90 / 1920 * 100vw);
        margin-top:calc(83 / 1080 * 100vh);
        cursor:pointer;
    }
    &-title{
        color: #FFF;
        font-family: Huiwen-mincho;
        font-size:calc(75 / 1080 * 100vh);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        position:absolute;
        width:calc(150 / 1920 * 100vw);
        margin-left: calc(87 / 1920 * 100vw);
        height:calc(75 / 1080 * 100vh);
        margin-top: calc(140 / 1080 * 100vh);
    }
    &-subtitle{
        color: #FFF;
        font-family: Swei Spring CJKtc;
        font-size:calc(28 / 1080 * 100vh);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position:absolute;
        width:calc(168 / 1920 * 100vw);
        margin-left: calc(97 / 1920 * 100vw);
        height:calc(28 / 1080 * 100vh);
        margin-top: calc(223 / 1080 * 100vh);
    }
    &-statsCircle{
        border-radius:50%;
        position:absolute;
        cursor:pointer;
        margin-left: calc(76 / 1920 * 100vw);
        height:calc(189 / 1080 * 100vh);
        margin-top: calc(327 / 1080 * 100vh);
    }
    &-back{
        border-radius:50%;
        position:absolute;
        cursor:pointer;
        width:calc(189 / 1080 * 100vh);
        margin-left: calc(76 / 1920 * 100vw);
        height:calc(189 / 1080 * 100vh);
        margin-top: calc(327 / 1080 * 100vh);
        background-color: lightgray;
    }
    &-statsCircle:hover{
        //mix-blend-mode: exclusion;
        opacity: 0.5;
    }
    &-statsText{
        color: #FFF;
        font-family: Inter;
        font-size: calc(20 / 1080 * 100vh);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        position:absolute;
        width:calc(80 / 1920 * 100vw);
        margin-left: calc(129 / 1920 * 100vw);
        height:calc(20 / 1080 * 100vh);
        margin-top: calc(524 / 1080 * 100vh);
    }
    &-district{
        position:absolute;
        width:calc(134 / 1920 * 100vw);
        margin-left: calc(104 / 1920 * 100vw);
        height:calc(360 / 1080 * 100vh);
        margin-top: calc(645 / 1080 * 100vh);
        background-color: #493b35;
        &-img{
            height:calc(40 / 1080 * 100vh);
            margin-bottom:calc(20 / 1080 * 100vh);
            cursor:pointer;
        }
        &-imgselect{
            height:calc(40 / 1080 * 100vh);
            margin-bottom:calc(20 / 1080 * 100vh);
            cursor:pointer;
            mix-blend-mode: plus-lighter;
            background-color: rgba(0,0,0,0.5);
        }
    }
}
.map{
    width: calc(v-bind(mapWidth) * 1px);
    height:100vh;
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    
    &-HuangPu,
    &-HuangPu-empty{
        display: flex;
        position:absolute;
        margin-left: calc(858 / 1920 * 100%);
        height:calc(340 / 1080 * 100vh);
        margin-top: calc(587 / 1080 * 100vh);
        &-empty{
            opacity: 0;
            cursor: pointer;
        }
    }
    &-JingAn,
    &-JingAn-empty{
        display: flex;
        position:absolute;
        margin-left: calc(820 / 1920 * 100%);
        height:calc(311 / 1080 * 100vh);
        margin-top: calc(254 / 1080 * 100vh);
        &-empty{
            opacity: 0;
            cursor: pointer;
        }
    }
    &-HongKou,
    &-HongKou-empty{
        display: flex;
        position:absolute;
        margin-left: calc(1346 / 1920 * 100%);
        height:calc(285 / 1080 * 100vh);
        margin-top: calc(675 / 1080 * 100vh);
        &-empty{
            opacity: 0;
            cursor: pointer;
        }
    }
    &-ShiNan,
    &-ShiNan-empty{
        display: flex;
        position:absolute;
        margin-left: calc(404 / 1920 * 100%);
        height:calc(268 / 1080 * 100vh);
        margin-top: calc(736 / 1080 * 100vh);
        &-empty{
            opacity: 0;
            cursor: pointer;
        }
    }
    &-XuHui,
    &-XuHui-empty{
        display: flex;
        position:absolute;
        margin-left: calc(364 / 1920 * 100%);
        height:calc(369 / 1080 * 100vh);
        margin-top: calc(95 / 1080 * 100vh);
        &-empty{
            opacity: 0;
            cursor: pointer;
        }
    }
    &-LuWan,
    &-LuWan-empty{
        display: flex;
        position:absolute;
        margin-left: calc(390 / 1920 * 100%);
        height:calc(431 / 1080 * 100vh);
        margin-top: calc(291 / 1080 * 100vh);
        &-empty{
            opacity: 0;
            cursor: pointer;
        }
    }
}
</style>