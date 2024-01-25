<template>
  <div class="toView">
    <div class="toView-top">
      <div class="leftInfo">
        <div class="briefIntroduction">
          <div class="name">{{ name }}</div>
          <div class="time">{{ time }}</div>
        </div>
        <div class="detailed">
          {{ props.detailed }}
        </div>
      </div>
      <div class="rightPic" :class="{ hasBottom: topPicNames[1] != '' }">
        <img class="pic1" :src="topPics[0]" />
        <div class="pic1Name" :class="{ notShow: name != '外墙' }">混水墙</div>
        <!-- <div style="width:100%;height:100px"></div> -->
        <img class="pic2" :src="topPics[1]" />
        <div class="tagName">
          <text>{{ topPicNames[0] }}</text>
          <text>{{ topPicNames[1] }}</text>
        </div>
      </div>
    </div>
    <div class="toView-bottom" v-if="props.bottomPics.length == 1">
      <div class="bottomContent">
        <img class="pic1" :src="props.bottomPics[0].url" />
        <div class="picName">{{ props.bottomPics[0].name }}</div>
      </div>
    </div>
    <div class="toView-bottom" v-else>
      <div
        class="bottomContent2"
        v-for="(item, index) in props.bottomPics"
        :key="item"
      >
        <img class="pic1" :class="{ picChange: index == 1 }" :src="item.url" />
        <div class="picName" :class="{ picNameR: index == 1 }">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { defineProps } from "vue";

import shanqiang1 from "@/assets/images/shikumen/shanqiang1.png";
import shanqiang2 from "@/assets/images/shikumen/shanqiang2.png";
import shanqiang3 from "@/assets/images/shikumen/shanqiang3.png";

const props = defineProps({
  name: {
    type: String,
    default: "山墙",
  },
  time: {
    type: String,
    default: "出现于1869年前",
  },
  detailed: {
    type: String,
    default:
      "石库门的山墙位于建筑的侧面，由裙肩、上身和山尖三部分组成。不同的屋顶形式，山墙也不尽相同。它既保留了中国传统建筑要素，又融入了欧洲古典建筑装饰元素，是石库门立面构成的主要特色部位，也是建筑师肯下功夫修饰的部位。",
  },
  topPics: {
    type: Array,
    default: () => {
      return [shanqiang1, shanqiang2];
    },
  },
  topPicNames: {
    type: Array,
    default: () => {
      return ["", ""];
    },
  },
  bottomPics: {
    type: Array,
    default: () => {
      return [
        {
          url: shanqiang3,
          name: "水泥阳台",
        },
        {
          url: shanqiang3,
          name: "水泥阳台",
        },
      ];
    },
  },
});
</script>
  
  
  <style lang="less" scoped>
.toView {
  box-sizing: border-box;
  position: absolute;
  left: (70/19.8vw);
  top: (-55/10.8vh);
  width: (612/10.8vh);
  height: (916/10.8vh);
  padding: (54/10.8vh) (49/10.8vh) (47/10.8vh) (54/10.8vh);
  border-radius: (13/10.8vh);
  text-align: justify;
  z-index: 10;
  background: rgba(218, 210, 205, 0.95);
  transition-property: all;
  transition-duration: 0.5s;
}

.toView-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .leftInfo {
    .briefIntroduction {
      margin-bottom: (30/10.8vh);
      .name {
        color: #645b56;
        font-family: Swei Spring CJKtc;
        font-size: (36/10.8vh);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        // transition-property: all;
        // transition-duration: 0.5s;
      }
      .time {
        margin-top: (6/10.8vh);
        color: #645b56;
        font-family: Jomolhari;
        font-size: (24/10.8vh);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .detailed {
      width: (199.005/10.8vh);
      color: #645b56;
      font-family: YouYuan;
      font-size: (18/10.8vh);
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 28.8px */
    }
  }
  .rightPic {
    position: relative;
    width: (271/10.8vh);
    height: (435/10.8vh);
    text-align: right;
    // background: #fff;
    //   background: rgba(218, 210, 205, 0.95);

    // opacity: 0.6;
    .pic1 {
      width: (271/10.8vh);
      height: (156/10.8vh);
      border-radius: (3/10.8vh);
      // background: lightgray 50% / cover ;

      // opacity:0.4;
      // mix-blend-mode:color-burn;
    }
    .pic1Name {
      // margin-top: (-6/19.2vw);
      color: #645b56;
      text-align: right;
      font-family: Inter;
      font-size: (12/10.8vh);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .pic2 {
      //   width: 269px;
      width: (271/10.8vh);
      height: (254/10.8vh);
      margin-top: (30/10.8vh);
      border-radius: (3/10.8vh);
      //   mix-blend-mode: color-burn;
      //  mix-blend-mode: darken;
    }
    .tagName {
      display: flex;
      justify-content: space-between;
      width: 100%;
      bottom: (-17/10.8vh);
      left: 0;
      color: #645b56;
      text-align: right;
      font-family: Inter;
      font-size: (12/10.8vh);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}

.toView-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: (46/10.8vh);
  .bottomContent {
    .pic1 {
      width: (508/10.8vh);
      // width: 100%;
      height: (322/10.8vh);
      // mix-blend-mode: color-burn;
    }
    .picName {
      color: #645b56;
      font-family: Inter;
      font-size: (12/10.8vh);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .bottomContent2 {
    .pic1 {
      width: (236/10.8vh);
      height: (322/10.8vh);
      // mix-blend-mode: color-burn;
    }
    .pic2 {
      width: (236/10.8vh);
      height: (322/10.8vh);
    }
    .picChange {
      width: (246/10.8vh);
    }
    .picName {
      color: #645b56;
      font-family: Inter;
      font-size: (12/10.8vh);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}

.picNameR {
  text-align: right;
}

//公共样式
.notShow {
  opacity: 0;
}

.hasBottom {
  margin-bottom: (3/10.8vh);
}
</style>