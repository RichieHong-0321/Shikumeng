<template>
    <div class="popup-window">
        <img class="popup-image" :src="popupImage">

        <!-- <div v-if="currentPage == 1" class="pageOne">
            <div class="title">{{ section == "zhangyuan" ? $t('shijing.zhangyuan.title') : $t('shijing.xintiandi.title') }}
            </div>
            <div class="textOne">{{ section == "zhangyuan" ? $t('shijing.zhangyuan.textOne') :
                $t('shijing.xintiandi.textOne') }}
            </div>
            <div class="imgBox">
                <img class="imageOne"
                :src="section == 'zhangyuan' ? zhangyuanImageOne :xintiandiImageOne">
            </div>
            
        </div>
        <div v-else class="pageTwo">
            <div class="textTwo">{{ section == "zhangyuan" ? $t('shijing.zhangyuan.textTwo') :
                $t('shijing.xintiandi.textTwo') }}
            </div>
            <div class="imgBox">
                <img class="imageTwo"
                :src="section == 'zhangyuan' ? zhangyuanImageTwo : xintiandiImageTwo">
            </div>
            
        </div> -->
        <div class="bottom-button">
            <div class="button-left" @click="changePage(1)">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="17.5" :fill="currentPage == 1 ? '#606060' : '#E0E0E0'" stroke="#979797"
                        stroke-width="3" />
                </svg>
                <!-- <div class="pageButton pageOneButton" :class="currentPage == 1 ? 'buttonSelected' : 'buttonNotSelected'"
                    @click="changePage(1)"></div> -->
            </div>

            <div class="button-right" @click="changePage(2)">

                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="17.5" :fill="currentPage !== 1 ? '#606060' : '#E0E0E0'" stroke="#979797"
                        stroke-width="3" />
                </svg>
                <!-- <div class="pageButton pageTwoButton" :class="currentPage !== 1 ? 'buttonSelected' : 'buttonNotSelected'"
                    @click="changePage(2)"></div> -->
            </div>
        </div>

    </div>
</template>
<script setup>
import { onMounted, defineProps, ref, computed } from "vue"
import zhangyuanImageOne from '@/assets/images/shijing/zhangyuan-one.png'
import xintiandiImageOne from "@/assets/images/shijing/xintiandi-one.png"
import zhangyuanImageTwo from '@/assets/images/shijing/zhangyuan-two.png'
import xintiandiImageTwo from "@/assets/images/shijing/xintiandi-two.png"

const props = defineProps(['section'])

const currentPage = ref(1);
const currentSection = ref(props.section)

const changePage = function (value) {
    currentPage.value = value
}

const popupImage = computed(() => {
    if(currentSection.value == "zhangyuan"){
        if(currentPage.value == 1){
            return zhangyuanImageOne;
        }else {
            return zhangyuanImageTwo
        }
    }else {
        if(currentPage.value == 1){
            return xintiandiImageOne;
        }else {
            return xintiandiImageTwo
        }
    }
   
})

onMounted(() => {
    currentPage.value = 1
})
</script>
<style lang="less">
.popup {
    background: #D9D9D9CC;
    opacity: 80%;
}


.popup-image{
    width: calc(1650/1920*100vw);
height: calc(900/1080*100vh);
border-radius: 6px;

}

.pageOne {
    // margin-left: 80px;
    // margin-right: 80px;
    margin-left: 4.75rem;
    margin-right: 4.75rem;
    margin-top: 2.125rem;
}

.pageTwo {
    // margin-left: 80px;
    // margin-right: 80px;
    margin-left: 4.75rem;
    margin-right: 4.75rem;
    margin-top: 2.75rem;
}

.title {
    font-family: Huiwen-mincho;
    font-size: 3.9375rem;
    font-weight: 400;
    line-height: 6.3125rem;
    letter-spacing: 0em;
    text-align: justified;
    white-space: pre-wrap;
}

.textOne {
    font-family: YouYuan;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 3.625rem;
    letter-spacing: 0em;
    text-align: justified;
    white-space: pre-wrap;

}

.textTwo {
    font-family: YouYuan;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 3rem;
    letter-spacing: 0em;
    text-align: justified;
    white-space: pre-wrap;

}

.imgBox{
    display: flex;
    justify-content: center;
}
.imageOne {
//    width: 80%;
//    width: 84.5rem;
   height:29.8125rem;
//      left: 10.9375rem;

margin:0 auto;

}
.imageTwo {
    //    width: 80%;
    //    width: 78.6875rem;
    // width: 84.5rem;
    height:29.8125rem;

}

.bottom-button {
    margin-top: calc(-70/1080*100vh) ;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.button-left .button-right {
    width: 50%;
}
.button-left{
    margin:0 6.5625rem;

}

.button-right {
    margin:0 6.5625rem;

}

.pageButton {
    width: 2.375rem;
    height: 2.375rem;
    border: 0.1875rem;
    border-radius: 100%;
}



.buttonSelected {
    background: linear-gradient(0deg, #606060, #606060),
        linear-gradient(0deg, #979797, #979797);

}

.buttonNotSelected {
    background: linear-gradient(0deg, #979797, #979797),
        linear-gradient(0deg, #E0E0E0, #E0E0E0);
}
</style>