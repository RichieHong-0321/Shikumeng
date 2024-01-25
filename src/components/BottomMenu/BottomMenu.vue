<template>
  <ul class="menu-group flex">
    <li class="flex-center" @click="active('linong')">
      <img class="btn-icon" src="@/assets/images/home-icon-linong.png" alt="icon-film" />
      <div class="door animate__animated animate__fadeInUp" @click="enterPage('linong')">
        <img src="@/assets/images/home-popup-linong.png" alt="popup" />
        <div class="door-text uppercase" :class="{'vertical': $i18n.locale == 'zhCN'}">{{ $t('lang.buttonMenu1') }}</div>
      </div>
    </li>
    <li class="flex-center" @click="active('shikumen')">
      <img
        class="btn-icon"
        src="@/assets/images/home-icon-shikumen.png"
        alt="icon-music"
      />
      <div
        class="door animate__animated animate__fadeInUp"
        @click="enterPage('shikumen')"
      >
        <img src="@/assets/images/home-popup-shikumen.png" alt="popup" />
        <div class="door-text uppercase" :class="{'vertical': $i18n.locale == 'zhCN'}">{{ $t('lang.buttonMenu2') }}</div>
      </div>
    </li>
    <li class="flex-center" @click="active('shijing')">
      <img
        class="btn-icon"
        src="@/assets/images/home-icon-shijing.png"
        alt="icon-group"
      />
      <div class="door animate__animated animate__fadeInUp" @click="enterPage('shijing')">
        <img src="@/assets/images/home-popup-shijing.png" alt="popup" />
        <div class="door-text uppercase" :class="{'vertical': $i18n.locale == 'zhCN'}">{{ $t('lang.buttonMenu3') }}</div>
      </div>
    </li>
    <li class="flex-center" @click="active('xinghuo')">
      <img
        class="btn-icon"
        src="@/assets/images/home-icon-xinghuo.png"
        alt="icon-group"
      />
      <div class="door animate__animated animate__fadeInUp" @click="enterPage('xinghuo')">
        <img src="@/assets/images/home-popup-xinghuo.png" alt="popup" />
        <div class="door-text uppercase" :class="{'vertical': $i18n.locale == 'zhCN'}">{{ $t('lang.buttonMenu4') }}</div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["change"]);

const selected = ref("");

const active = (item) => {
  if (!selected.value || selected.value !== item) {
    selected.value = item;
    enterPage(item);
  } else {
    selected.value = "";
  }
};

const enterPage = (item) => {
  emit("change", item);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.menu-group {
  margin: 0;
  padding: 0;
  justify-content: space-between;
  &:has(li:hover)::before {
    content: "";
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }
  li {
    list-style: none; // margin-right: 2.5rem;
    cursor: pointer;
    width: 18.5rem;
    height: 7rem;
    position: relative;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 6px;
      backdrop-filter: blur(20px);
      box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.3);
      z-index: 3;
    }
    &:hover .door {
      display: block;
    }
    .btn-icon {
      //   width: 4rem;
      height: 5rem;
      position: relative;
      z-index: 4;
    }
    .door {
      position: absolute;
      bottom: calc(7vh + 1rem);
      z-index: 4;
      padding: 10px;
      display: none;
      img {
        width: 36rem;
        position: relative;
        z-index: 5;
      }
      .door-text {
        font-family: "ZiKuTangQingKaiTi";
        font-size: 3.2rem;
        position: absolute;
        z-index: 6;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
    }
  }
}
</style>
