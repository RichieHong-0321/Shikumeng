<template>
    <transition 
    class="animate__animated animate__faster" 
    :enter-active-class="animateAction"
    :leave-active-class="animateActionOut"
    >
        <div 
            @click.stop
            :class="$t(oldMap) == 'NULL' ? 'linongInfoCardHalf' : 'linongInfoCard'">
            <div class="topPart">
                <div class="topPart-left">
                    <div class="header">
                        <div class="title">{{ $t(title)}}</div>
                        <div class="time">{{ $t(time)}}</div>
                    </div>
                    
                    <div class="desc">{{ $t(desc)}}</div>
                </div>
                <div class="topPart-right">
                    <img
                        class="photo"
                        :src="$t(photo)"
                    />
                </div>
            </div>
            <div class="enbPart" v-if="$t(oldMap) != 'NULL'">
                <img
                    class="oldmap"
                    :src="$t(oldMap)"
                />
            </div>
        </div>
    </transition>
</template>


<script setup>
import { ref, watch } from 'vue'
import { defineExpose } from 'vue';


const pointIndex = ref(-1)
const areaIndex = ref(0)
const animateAction = ref("animate__fadeInRight")
const animateActionOut = ref("animate__fadeOutRight")

const title = ref("")
const time = ref("")
const desc = ref("")
const photo = ref("")
const oldMap = ref("")

const marginLeftValue = ref(0)

const switchArea = (areaIndex) =>{
    switch(areaIndex){
        case 0: 
            marginLeftValue.value = 1250;
            animateAction.value = "animate__fadeInRight";
            animateActionOut.value = "animate__fadeOutRight";
            break;
        case 1: 
            marginLeftValue.value = 1200;
            animateAction.value = "animate__fadeInRight";
            animateActionOut.value = "animate__fadeOutRight";
            break;
        case 2:
            marginLeftValue.value = 660;
            animateAction.value = "animate__fadeInLeft";
            animateActionOut.value = "animate__fadeOutLeft";
            break;
        case 3:
            marginLeftValue.value = 1125;
            animateAction.value = "animate__fadeInRight";
            animateActionOut.value = "animate__fadeOutRight";
            break;
        case 4:
            marginLeftValue.value = 960;
            animateAction.value = "animate__fadeInRight";
            animateActionOut.value = "animate__fadeOutRight";
            break;
        case 5:
            marginLeftValue.value = 960;
            animateAction.value = "animate__fadeInRight";
            animateActionOut.value = "animate__fadeOutRight";
            break;
    }
}

watch([pointIndex,areaIndex],() =>{
    title.value  = "linong.districtArea[" + areaIndex.value + "].liNongInfo[" + pointIndex.value + "].name"
    time.value   = "linong.districtArea[" + areaIndex.value + "].liNongInfo[" + pointIndex.value + "].time"
    desc.value   = "linong.districtArea[" + areaIndex.value + "].liNongInfo[" + pointIndex.value + "].desc"
    photo.value  = "linong.districtArea[" + areaIndex.value + "].liNongInfo[" + pointIndex.value + "].photo"
    oldMap.value = "linong.districtArea[" + areaIndex.value + "].liNongInfo[" + pointIndex.value + "].oldmap"

    switchArea(areaIndex.value)
})

defineExpose({
    pointIndex,
    areaIndex
})
</script>

<style lang="less" scoped>
.linongInfoCard{
    width: calc( 612 / 1920 * 100vw);
    height: calc( 940 / 1080 * 100vh);
    border-radius:calc(13 / 1920 * 100vw);
    background: rgba(217, 217, 217, 0.95);
    z-index: 5000;
    margin-left:calc(v-bind(marginLeftValue) / 1920 * 100vw);
    margin-top: calc(65 / 1080 * 100vh);
    .topPart{
        padding-top: calc(66 / 1080 * 100vh);
        height: calc(465 / 1080 * 100vh);

        padding-left:calc(47 / 1920 * 100vw);
        padding-right: calc(48 / 1920 * 100vw);
        display: flex;
        &-left{
            width: calc(201 / 1920 * 100vw);
            margin-right:calc(28 / 1920 * 100vw);
            height: 100%;
        }
        &-right{
            width: calc(288 / 1920 * 100vw);
            height: 100%;
            .photo{
                width: 100%;
                height: 100%;
            }
        }
    }
    .header{
        height:calc(103 / 1080 * 100vh);
        .title{
            color: #000;
            font-family: Inter;
            font-size: calc(36 / 1080 * 100vh);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        .time{
            margin-top: calc(12 / 1080 * 100vh);
            color: #000;
            font-family: Jomolhari;
            font-size: calc(24 / 1080 * 100vh);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
    .desc{
        width: calc(180 / 1920 * 100vw);
        margin-top: calc(22 / 1080 * 100vh);
        color: #000;
        text-align: justify;
        font-family: YouYuan;
        font-size: calc(18 / 1080 * 100vh);
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
        letter-spacing: -1.8px;
    }
    .enbPart{
        margin-top: calc(43 / 1080 * 100vh);
        margin-bottom: calc(51 / 1080 * 100vh);
        height:calc(315 / 1080 * 100vh);
        padding-left:calc(47 / 1920 * 100vw);
        padding-right: calc(48 / 1920 * 100vw);
        .oldmap{
            width: 100%;
            height: 100%;
        }
    }
}
.linongInfoCardHalf{
    width: calc( 612 / 1920 * 100vw);
    height: calc( 599 / 1080 * 100vh);
    border-radius:calc(13 / 1920 * 100vw);
    background: rgba(217, 217, 217, 0.95);
    z-index: 5000;
    margin-left:calc(v-bind(marginLeftValue) / 1920 * 100vw);
    margin-top: calc(65 / 1080 * 100vh);

    .topPart{
        padding-top: calc(66 / 1080 * 100vh);
        height: calc(465 / 1080 * 100vh);

        padding-left:calc(47 / 1920 * 100vw);
        padding-right: calc(48 / 1920 * 100vw);
        display: flex;
        &-left{
            width: calc(201 / 1920 * 100vw);
            margin-right:calc(28 / 1920 * 100vw);
            height: 100%;
        }
        &-right{
            width: calc(288 / 1920 * 100vw);
            height: 100%;
            .photo{
                width: 100%;
                height: 100%;
            }
        }
    }
    .header{
        height:calc(103 / 1080 * 100vh);
        .title{
            color: #000;
            font-family: Inter;
            font-size: calc(36 / 1080 * 100vh);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        .time{
            margin-top: calc(12 / 1080 * 100vh);
            color: #000;
            font-family: Jomolhari;
            font-size: calc(24 / 1080 * 100vh);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
    .desc{
        width: calc(180 / 1920 * 100vw);
        margin-top: calc(22 / 1080 * 100vh);
        color: #000;
        text-align: justify;
        font-family: YouYuan;
        font-size: calc(18 / 1080 * 100vh);
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
        letter-spacing: -1.8px;
    }
}

</style>