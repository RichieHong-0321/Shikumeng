<template>
    <div class="districtPoints">
        <img
            v-for="(item,index) in props.ponitsJSON"
            :key = index
            class="districtPoints-btn"
            :style="{   marginTop:props.ponitsJSON[index].top,
                        marginLeft:props.ponitsJSON[index].left,
                        width:props.ponitsJSON[index].width,
                        height:props.ponitsJSON[index].height
                    }"
            
            :src="props.buttonIcon"
            @click="showInfoDialog(index)"
        />
        <!-- src="@/assets/linong/images/district/btnIcons/HuangPuPoints.png" -->
       <!--  <LinongInfoCard
            ref="linongInfoCard"
            v-show="isShow"
            :districtArea="props.districtArea"
        ></LinongInfoCard> -->
    </div>
</template>
<script setup>
//import { ref } from "vue";
import { defineProps,defineEmits } from "vue";
//import LinongInfoCard from '@/components/Linong/LinongInfoCard/LinongInfoCard.vue';

const props = defineProps({
    ponitsJSON:{
        type:Array,
    },
    districtArea:{
        type:Number,
    },
    buttonIcon:{
        type:String
    }
})
const emit = defineEmits(["showInfoCard"])
//const isShow = ref(false)
//const linongInfoCard = ref(null)

const showInfoDialog = (index) => {
    //console.log(index)
    //linongInfoCard.value.pointIndex = index
    //
    emit("showInfoCard",index)
}



</script>

<style lang="less" scoped>
.districtPoints{
    position:absolute;
    width: 100%;
    height: 100%;
}
.districtPoints-btn{
    position: absolute;
    opacity: 0.5;
    cursor: pointer;
}
</style>