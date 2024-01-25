<template>
    <div class="home container" :class="[$i18n.locale == 'enUS'?'english':'chinese', isVisible?'hidden':'scroll']">
        <ButtonGroup class="btns" :isPlayMusic="isPlayMusic" @change="btnChange"></ButtonGroup>
    
        <div class="title-box vertical">
            <p>{{ $t("lang.homeTitle") }}</p>
            <p>{{ $t("lang.homeSubTitle") }}</p>
            <p>{{ $t("lang.homeSubTitle2") }}</p>
        </div>
    
        <!-- <div class="title-bg">
            <img src="@/assets/images/home-flower.png" alt="flower" />
        </div> -->
    
        <div class="content-box animate__animated animate__fadeInUp firstUppercase" :class="{'vertical': $i18n.locale == 'zhCN'}">
            <p :class="{'en-content-title': $i18n.locale != 'zhCN'}">{{ $t("lang.homeContent") }}</p>
            <p :class="{'en-content-text': $i18n.locale != 'zhCN'}">{{ $t("lang.homeDescription") }}</p>
            <p :class="{'en-content-text': $i18n.locale != 'zhCN'}">{{ $t("lang.homeSubDescription") }}</p>
        </div>

        <div>

        </div>
    
        <BottomMenu class="nav" @change="goPage"></BottomMenu>

        <GroupPopup :isVisible="isVisible" @close="closeGroup"></GroupPopup>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

const instance = getCurrentInstance();
const bus = instance.appContext.config.globalProperties.$bus;

import ButtonGroup from "@/components/ButtonGroup/ButtonGroup.vue";
import BottomMenu from "@/components/BottomMenu/BottomMenu.vue";
import GroupPopup from "@/components/GroupPopup/GroupPopup.vue";

const router = useRouter();
const isPlayMusic = ref(true);
const isVisible = ref(false);

const btnChange = (item) => {
    console.log(item);
    switch (item) {
        case "film":
            router.push({
                path: "/",
                query: {},
            });
            break;
        case "music":
            isPlayMusic.value = !isPlayMusic.value;
            bus.emit("audio", isPlayMusic.value);
            break;
        case "group":
            isVisible.value = !isVisible.value;
            break;
    }
};

const goPage = (item) => {
    switch (item) {
        case "linong":
            router.push("linong");
            break;
        case "shikumen":
            router.push("shiKuMen");
            break;
        case "shijing":
            router.push("shijing");
            break;
        case "xinghuo":
            router.push("xinghuo");
            break;
    }
};
const closeGroup = () => {
    isVisible.value = !isVisible.value;
}
</script>

<style lang="less" scoped>
.home {
    background: url("@/assets/images/home-bg.png") no-repeat;
    background-size: cover;
    color: #fff;
    padding: 1vh 12vw;
    width: 100vw;
    box-sizing: border-box;

    &.hidden {
        overflow: hidden;
    }

    &.scroll {
        overflow: auto;
    }
    .btns {
        margin-top: 4vh;
    }
    .nav {
        position: fixed;
        z-index: 2;
        bottom: 6vh;
        width: 76vw;
    }
    .title-box {
        font-size: 6.7rem;
        letter-spacing: 5px;
        display: flex;
        flex-direction: column;
        font-family: "ZiKuTangQingKaiTi";
        position: absolute;
        left: 75vw;
        top: 12vh;
        z-index: 2;
        animation: moveTitle 1s linear;
        p:first-child {
            margin-top: 8rem;
        }
    }
    @keyframes moveTitle {
        0% {
            left: 100vw;
            top: -50%;
        }
        50% {
            left: 87vw;
            top: -20%;
        }
        100% {
            left: 75vw;
            top: 5vh;
        }
    }
    // .title-bg {
    //     position: absolute;
    //     left: 54vw;
    //     top: 5%;
    //     z-index: 1;
    //     animation: moveImage 1s linear;
    //     img {
    //         width: 42.5vw;
    //     }
    // }
    @keyframes moveImage {
        0% {
            left: 100vw;
            top: 30%;
        }
        50% {
            left: 77vw;
            top: 17%;
        }
        100% {
            left: 54vw;
            top: 5%;
        }
    }
    .content-box {
        font-family: "QingNingYouYuan";
        font-size: 1.8rem;
        line-height: 3.6rem;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        position: absolute;
        left: 62vw;
        top: 40vh;
        z-index: 2;
    }
}

.english {
    // .title-box {
    //     font-size: 6.7rem;
    //     // font-family: "AGaramondPro-Semibold"; 
    //     left: 45vw;
    //     text-align: right;
    // }

    .content-box {
        // font-family: "QingNingYouYuan";
        left: 35vw;
        top: 28vh;
        flex-direction: column;
        white-space: pre-wrap;
        align-items: flex-end;
    
    }
}
.en-content-title{
    flex-direction: column;
        white-space: pre-wrap;
        font-family: "AGaramondPro-Bold";
        text-align: right;
        font-size: 60px;
        margin-bottom: 50px;
        color: #EAE3DD;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 3px;

}

.en-content-text{
    flex-direction: column;
        white-space: pre-wrap;
        font-family: "AvenirLTStd-Light";
        text-align: right;
        font-size: 26px;
        font-style: normal;
font-weight: 600;
line-height: 160%; /* 41.6px */
letter-spacing: 1.3px;
color: rgba(255, 255, 255, 0.69);


}
</style>
