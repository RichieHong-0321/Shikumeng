<template>
    <div v-if="showVideoPopup" class="popup-layout" @click="closeDialog">
        <div class="popup-dialog" @click.stop>
            <video class="popup-video" :src="popupVideoUrl" preload="auto" loop playsinline autoplay></video>
        </div>
    </div>
</template>
<script setup>
import { ref, defineExpose } from 'vue'

const showVideoPopup = ref(false)
const popupVideoUrl = ref("")

const closeDialog = function () {
    showVideoPopup.value = false
}

defineExpose({
    showVideoPopup,
    popupVideoUrl
})
</script>
<style lang="less">
.popup-layout {
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 100;
    height: 100vh;
}

.popup-dialog {
    width: calc(1190 / 1920 * 100vw);
    height: calc(700 / 1080 * 100vh);
    // top: 34974px;
    // left: 33469px;
    top:20%;
    left:35%;
    border-radius:5px;
    background: #E2E2E2;
    position: relative;
    z-index: 500;
}

.popup-video {
    width: calc(1057 / 1920 * 100vw);
height: calc(594 / 1080 * 100vh);
z-index:600;
margin-left: calc(65 / 1080 * 100vh);
margin-top:  calc(53 / 1080 * 100vh);


}
</style>