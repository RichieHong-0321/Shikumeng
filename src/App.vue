<template>
  <div :class="$i18n.locale == 'enUS'?'english':'chinese'">
    <router-view></router-view>
  </div>
  

  <audio controls ref="audio" :src="music" type="audio/mpeg" height="100" width="100" class="audio-element">
      <!-- <source :src="music" type="audio/mpeg" /> 
      <embed height="50" width="100" :src="music" />  -->
  </audio>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";

// import musicsource from "@/assets/music/bandicam.mp3"
const musicsource = require("@/assets/music/bandicam.mp3")
const instance = getCurrentInstance();
const bus = instance.appContext.config.globalProperties.$bus;

const audio = ref();
const music = ref(musicsource)

onMounted(() => {
  // setTimeout(() => {
  //   audio.value.play();
  // }, 200);
    // audio.value.play();
  bus.on("audio", (value) => {
  
    if(isObject(value)){
      audio.value.pause();

      if(value.music) music.value=value.music;
      if(value.play){
        setTimeout(() => {
          audio.value.play();

        }, 200);
      } 
      else audio.value.pause();

    }else{
      music.value =musicsource
      if(value) {
        setTimeout(() => {
          audio.value.play();
          
        }, 200);
      }else audio.value.pause();
    }
  });
});

function isObject(obj) {
    return typeof obj === 'object' && !Array.isArray(obj);
}

</script>

<style lang="less">
.audio-element {
  display: none;
}
</style>
