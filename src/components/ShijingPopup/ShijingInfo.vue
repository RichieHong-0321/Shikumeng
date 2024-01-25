<template>
<div class="popupinfo" :style="{left:props.left,top:props.top}">
      <div class="title">{{ title }}</div>
      <div class="content"><slot></slot></div>
  </div>
</template>
<script setup>
import { defineProps } from "vue"
// import { stringifyQuery } from "vue-router";

const props = defineProps({
    title:{
      type:String,
    },
    content:{
      type:String,
    },
    left:{
      type:String,
    },
    top:{
      type:String,
    }
})

</script>
<style>
.popupinfo{
    position: absolute; 
    /* left: 8rem;
    top: 21rem;  */
    display: flex;
    /* width: 518px; */
    width: 32.375rem;
    /* height: 169px; */
    padding: 13px 41px 20px 41px;
    flex-direction: column;
    
    align-items: center;
    gap: 9px;
    flex-shrink: 0;
    background: rgba(217, 217, 217, 0.70);

    .title{
        color: #000;
        text-align: center;
        font-family: "Swei Spring Sugar-Regular";
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; /* 44.8px */
        letter-spacing: -2.8px;
    }
    .content{
        /* width: 436px; */
        /* height: 124px; */
        flex-shrink: 0;
        color: #000;
        text-align: justify;
        font-family: "QingNingYouYuan";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 28.8px */
    }
}
</style>