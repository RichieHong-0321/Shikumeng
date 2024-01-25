<template>
  <ul class="btn-group flex">
    <li @click="active('film')">
      <img
        class="btn-icon"
        src="@/assets/images/btn-icon-film.png"
        alt="icon-film"
      />
    </li>
    <li @click="active('music')">
      <img
        v-show="props.isPlayMusic"
        class="btn-icon"
        src="@/assets/images/btn-icon-music.png"
        alt="icon-music"
      />
      <img
        v-show="!props.isPlayMusic"
        class="btn-icon"
        src="@/assets/images/btn-icon-nonmusic.png"
        alt="icon-music"
      />
    </li>
    <li @click="active('group')">
      <img
        class="btn-icon"
        src="@/assets/images/btn-icon-group.png"
        alt="icon-group"
      />
    </li>
    <li @click="switchLang">
      <img
        v-if="$i18n.locale == 'zhCN'"
        class="btn-icon"
        src="@/assets/images/btn-icon-zh.png"
        alt="icon-group"
      />
      <img
        v-if="$i18n.locale == 'enUS'"
        class="btn-icon"
        src="@/assets/images/btn-icon-en.png"
        alt="icon-group"
      />
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  isPlayMusic: {
    type: Boolean,
    default: true,
    required: true
  }
})
const emit = defineEmits(["change"]);

const i18n = useI18n();
console.log(i18n);


const lang = window.localStorage.getItem("lang");
i18n.locale.value = lang ? lang : "zhCN";

const active = (item) => {
  emit("change", item);
};

const switchLang = () => {
  i18n.locale.value == "zhCN"
    ? (i18n.locale.value = "enUS")
    : (i18n.locale.value = "zhCN");
  window.localStorage.setItem("lang", i18n.locale.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.btn-group {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin-right: 2.5rem;
    cursor: pointer;

    .btn-icon {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
}
</style>
