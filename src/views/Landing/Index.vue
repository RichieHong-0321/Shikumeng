<script setup>
import { computed, ref, getCurrentInstance } from "vue"
import { useRouter } from "vue-router"

const instance = getCurrentInstance();
const bus = instance.appContext.config.globalProperties.$bus;

import voiceOffImage from "@/assets/images/btn-icon-off-music.png"
import voiceOnImage from "@/assets/images/btn-icon-music.png"

const router = useRouter()

const voiceStatus = ref(false);

const clickEnterButton = function () {
    router.push('home');
    bus.emit('audio', true);
}
const changeVoice = function () {
    voiceStatus.value = !voiceStatus.value
    let videoPlayer = document.getElementById("homeVideo")
    videoPlayer.muted = !voiceStatus.value
}

const voiceImage = computed(() => {
    return voiceStatus.value ? voiceOnImage: voiceOffImage
})
// const openVoice = function (){
//     let videoPlayer = document.getElementById("homeVideo")
//     videoPlayer.muted = false
// }

//  onMounted(()=>{
//     openVoice()
// })
</script>
<template>
    <div class="video-box">
        <video class="video-background" id="homeVideo" preload="auto" loop playsinline autoplay
            src="@/assets/videos/start-video.mp4"
            tabindex="-1" muted></video>
        <div class="change-button">
            <img class="voice-img" @click="changeVoice" :src="voiceImage">
        </div>
        <div class="layer">
            <img class="enter" @click="clickEnterButton" src="@/assets/images/enter.png">
        </div>
    </div>
</template>
<style lang="less">
.video {
    height: 100vh;
    width: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}


.video-box {
    position: relative;
    height: 100vh;
    background-color: #C1CFF7;
    /*进行视频裁剪*/
    overflow: hidden;
}

.video-box .video-background {
    position: absolute;
    left: 50%;
    top: 50%;
    /*保证视频内容始终居中*/
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 800px;
}

.layer {
    position: fixed;
    // left: 0;
    bottom: 5%;
    width: 100%;
    // height: 100vh;
    text-align: center;

}

.layer img {
    // margin-bottom: 100px;
}

.voice-img {
    position: fixed;
    right: 5%;
    top: 5%;
    width: 100%;
}

.voice-img {
    height: 50px;
    width: 50px;
}
</style>