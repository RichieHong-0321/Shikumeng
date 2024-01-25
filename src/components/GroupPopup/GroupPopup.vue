<template>
  <div class="group-popup animate__animated" v-if="props.isVisible" :class="props.isVisible?'animate__fadeInRight':'animate__fadeOutRight'">
    <div class="flex popup-body">
        <div class="flex popup-title">
            <div>{{ $t("lang.groupPopup.title") }}</div>
            <img class="close-btn" src="@/assets/images/close.png" alt="close" @click="closePopup">
        </div>
        <div class="group-member flex">
            <div class="group-item">
                <div>{{ $t("lang.groupPopup.content.designerGroup.title") }}</div>
                <ul class="subgroup flex">
                    <li v-for="(item,index) in designerGroupRef" :key="item.img">
                        <img :src="item.img" alt="avator">
                        <div>{{ $t('lang.groupPopup.content.designerGroup.data['+index+'].name') }}</div>
                    </li>
                </ul> 
            </div>
            <div class="group-item">
                <div>{{ $t("lang.groupPopup.content.developerGroup.title") }}</div>
                <ul class="subgroup developer flex">
                    <li v-for="(item,index) in developerGroupRef" :key="item.img">
                        <img :src="item.img" alt="avator">
                        <div>{{ $t('lang.groupPopup.content.developerGroup.data['+index+'].name')}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="resource-refrence">
            <div class="popup-title flex">{{ $t("lang.groupPopup.content.refrenceGroup.title") }}</div>
            <div class="group-member">
                <div class="subtitle">{{ $t("lang.groupPopup.content.refrenceGroup.subtitle") }}</div>
                <div class="group-member flex">
                    <div class="group-item">
                        <ul class="subgroup flex">
                            <li v-for="(item,index) in refrenceGroup1Ref" :key="item.img">
                                <div>{{ $t('lang.groupPopup.content.refrenceGroup.data1['+index+'].content') }}</div>
                            </li>
                        </ul>
                    </div>
                    <div class="group-item">
                        <ul class="subgroup flex">
                            <li v-for="(item,index) in refrenceGroup2Ref" :key="item.img">
                                <div>{{ $t('lang.groupPopup.content.refrenceGroup.data2['+index+'].content') }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(["close"]);

const closePopup = () => {
    emit('close', true)
}

const designerGroup = [{
    img: require('@/assets/images/group-longjuanjuan.png')

}, {
    img: require('@/assets/images/group-xiaotong.png')
},{
    img: require('@/assets/images/group-zanganqi.png')
}];

const designerGroupRef = ref(designerGroup);

const developerGroup = [{
    img: require('@/assets/images/group-fanghan.png')
}, {
    img: require('@/assets/images/group-ricky.png')
}, {
    img: require('@/assets/images/group-hongjunjie.png')
}, {
    img: require('@/assets/images/group-lizijian.png')
}, {
    img: require('@/assets/images/group-zhaochuandong.png')
}, {
    img: require('@/assets/images/group-zhouwu.png')
}]
const developerGroupRef = ref(developerGroup);

const refrenceGroup1 = [{
    index: 0
},{
    index: 1
},{
    index: 2
},{
    index: 3
}];

const refrenceGroup1Ref = ref(refrenceGroup1);

const refrenceGroup2Ref = ref(refrenceGroup1);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.group-popup {
    width: 73vw;
    // height: 370px;
    padding: 2.5rem 4.3rem;
    background-color: rgba(217, 217, 217, 1);
    color: rgba(56, 56, 56, 1);
    font-family: 'simkai';
    position: relative;
    z-index: 2;
    left: -2vw;
    top: 3vh;
    height: 60vh;

    &:after {
        content: '';
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
    }

    .popup-body {
        flex-direction: column;
        position: relative;
        z-index: 6;
    }

    .popup-title {
        width: 100%;
        font-size: 3.6rem;
        font-weight: 700;
        justify-content: space-between;
        margin-bottom: 1rem;

        .close-btn {
            width: 2rem;
            height: 2rem;
            cursor: pointer;
        }
    }

    .group-member {
        justify-content: space-between;
    }
    .group-item {
        // margin-top: 1rem;
        font-size: 2rem;
    }

    .subgroup {
        li {
            width: 8.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
            font-size: 1.4rem;
            margin-right: 0.8rem;

            img {
                width: 9rem;
                margin-bottom: 1.5rem;
            }
        }

        &.developer {
            li {
                img {
                    margin-top: 1.2rem;
                    height: 7.8rem;
                    object-fit: contain;
                }
            }
        }
        
    }

    .resource-refrence {
        margin-top: 2rem;
        .subtitle {
            font-size: 2rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        .group-item {
            width: 50%;
        }
        .subgroup {
            width: 100%;
            flex-direction: column;

            li {
                width: 100%;
                font-size: 1.4rem;
                align-items: flex-start;
                margin-bottom: 1rem;
                text-align: left;
            }
        }
    }
}
</style>
