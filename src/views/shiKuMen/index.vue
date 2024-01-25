<template>
  <div
    class="shiKuMen"
    @click="
      mirrorShow = false;
      isViewShow = false;
      nowClickName='';
    "
    :class="{ allCanClick: mirrorShow }"
  >
    <div class="shiKuMenAll">
      <img
        class="back"
        @click="router.back()"
        src="@/assets/images/shikumen/sikumen-back.png"
        alt=""
      />
      <div class="content">
        <div class="content-left">
          <img
            class="leftPic"
            src="@/assets/images/shikumen/shikumen-bg.png"
            alt=""
          />
          <div class="title">
            <div class="txt1">石库门</div>
            <div class="txt2">百年民居特色</div>
          </div>
        </div>
        <div class="content-right">
          <div class="background1" :class="{ inner1: isViewShow }">
            <div class="background2" :class="{ inner2: isViewShow }"></div>
          </div>
        </div>

        <ToView
          :class="{ notShowView: !isViewShow || !isOutside }"
          :name="viewData[tagIndex]?.name"
          :time="viewData[tagIndex]?.time"
          :detailed="viewData[tagIndex]?.detailed"
          :topPics="viewData[tagIndex]?.topPics"
          :topPicNames="viewData[tagIndex]?.topPicNames"
          :bottomPics="viewData[tagIndex]?.bottomPics"
        ></ToView>

        <ToView2
          :class="{ notShowView: !isViewShow || isOutside }"
          :name="viewData2[tagIndex]?.name"
          :time="viewData2[tagIndex]?.time"
          :detailed="viewData2[tagIndex]?.detailed"
          :topPics="viewData2[tagIndex]?.topPics"
          :bottomPics="viewData2[tagIndex]?.bottomPics"
        ></ToView2>
      </div>
    </div>
    <div
      class="choice choice1"
      :class="{ borColorChange: isOutside }"
      @click="changeSide(true)"
    >
      <div class="choiceContent">
        <img
          src="@/assets/images/shikumen/shikumen-out-1.png"
          v-show="!isOutside&&!isViewShow"
          alt=""
        />
        <img
          src="@/assets/images/shikumen/shikumen-out-2.png"
          v-show="isOutside&&!isViewShow"
          alt=""
        />
        <img
          src="@/assets/images/shikumen/shikumen-out-black-1.png"
          v-show="!isOutside&&isViewShow"
          alt=""
        />
        <img
          src="@/assets/images/shikumen/shikumen-out-black-2.png"
          v-show="isOutside&&isViewShow"
          alt=""
        />
        <text class="text1">继续外部</text>
      </div>
    </div>
    <div
      class="choice choice2"
      :class="{ borColorChange: !isOutside }"
      @click="changeSide(false)"
    >
      <div class="choiceContent">
        <img
          src="@/assets/images/shikumen/shikumen-in-1.png"
          v-show="isOutside&&!isViewShow"
          alt=""
        />
        <img
          src="@/assets/images/shikumen/shikumen-in-2.png"
          v-show="!isOutside&&!isViewShow"
          alt=""
        />
        <img
          src="@/assets/images/shikumen/shikumen-in-black-1.png"
          v-show="isOutside&&isViewShow"
          alt=""
        />
        <img
          src="@/assets/images/shikumen/shikumen-in-black-2.png"
          v-show="!isOutside&&isViewShow"
          alt=""
        />
        <text class="text2">进入内部</text>
      </div>
    </div>
    <!-- @mousemove="moveInMain($event)" -->
    <!-- 外部 -->
    <div class="model" v-show="isOutside" ref="mainImg">
      <div class="modelContent">
        <img
          v-for="(item, index) in iconData1"
          :key="item"
          :style="{
            left: item.x + 'vh',
            top: item.y + 'vh',
          }"
          class="check"
          src="@/assets/images/shikumen/sikumen-icon-check.png"
          alt=""
          @click="
            toCheck(item.name, index, item.x2, item.y2, item.bigImg, $event)
          "
        />
        <text
          v-for="item2 in nameData1"
          :key="item2"
          :style="{
            left: item2.x + 'vh',
            top: item2.y + 'vh',
          }"
          :class="{notShowView:item2.name==nowClickName&&item2.name!='老虎窗'}"
          class="checkName"
          >{{ item2.name }}</text
        >
        <img
          class="mainImg"
          src="@/assets/images/shikumen/sikumen.png"
          alt=""
        />
        <div class="mirror" :class="{ notShowMir: !mirrorShow }" ref="mirror">
          <img
            v-show="isMove"
            class="mirrorImg"
            ref="mirrorImg"
            src="@/assets/images/shikumen/sikumen.png"
            alt=""
          />
          <img v-if="!isMove" class="glassImg" :src="lastBigImg" alt="" />
        </div>
      </div>
    </div>

    <!-- 内部 -->
    <div
      class="model"
      v-show="!isOutside"
      ref="mainImg2"
      @click="mirrorShow = false"
    >
      <div class="modelContent">
        <img
          v-for="(item, index) in iconData2"
          :key="item"
          :style="{
            left: item.x + 'vh',
            top: item.y + 'vh',
          }"
          class="check"
          src="@/assets/images/shikumen/sikumen-icon-check.png"
          alt=""
          @click="
            toCheck(item.name, index, item.x2, item.y2, item.bigImg, $event)
          "
        />
        <img
          class="mainImg"
          src="@/assets/images/shikumen/sikumen2.png"
          alt=""
        />
        <div class="mirror" :class="{ notShowMir: !mirrorShow }" ref="mirror2">
          <img
            v-show="isMove"
            class="mirrorImg"
            ref="mirrorImg2"
            src="@/assets/images/shikumen/sikumen2.png"
            alt=""
          />
          <img v-if="!isMove" class="glassImg" :src="lastBigImg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ToView from "./shiKuMenComponent/toView.vue";
import ToView2 from "./shiKuMenComponent/toView2.vue";

//引入图片
import shanqiang1 from "@/assets/images/shikumen/shanqiang1.png";
import shanqiang2 from "@/assets/images/shikumen/shanqiang2.png";
import shanqiang3 from "@/assets/images/shikumen/shanqiang3.png";

import chuangHu1 from "@/assets/images/shikumen/chuangHu-1.png";
import chuangHu2 from "@/assets/images/shikumen/chuangHu-2.png";
import chuangHu3 from "@/assets/images/shikumen/chuangHu-3.png";

import geLou1 from "@/assets/images/shikumen/geLou-1.png";
import geLou2 from "@/assets/images/shikumen/geLou-2.png";
// import geLou3 from "@/assets/images/shikumen/geLou-3.png";

import keTang1 from "@/assets/images/shikumen/keTang-1.png";
import keTang2 from "@/assets/images/shikumen/keTang-2.png";

import laoHu1 from "@/assets/images/shikumen/laoHu-1.png";
import laoHu2 from "@/assets/images/shikumen/laoHu-2.png";
import laoHu3 from "@/assets/images/shikumen/laoHu-3.png";

import louTi1 from "@/assets/images/shikumen/louTi-1.png";
import louTi2 from "@/assets/images/shikumen/louTi-2.png";

import menTou1 from "@/assets/images/shikumen/menTou-1.png";
import menTou2 from "@/assets/images/shikumen/menTou-2.png";
import menTou3 from "@/assets/images/shikumen/menTou-3.png";

import qianLou1 from "@/assets/images/shikumen/qianLou-1.png";
import qianLou2 from "@/assets/images/shikumen/qianLou-2.png";

import shaiTai1 from "@/assets/images/shikumen/shaiTai-1.png";
import shaiTai2 from "@/assets/images/shikumen/shaiTai-2.png";
import shaiTai3 from "@/assets/images/shikumen/shaiTai-3.png";

import tianJing1 from "@/assets/images/shikumen/tianJing-1.png";
import tianJing2 from "@/assets/images/shikumen/tianJing-2.png";

import tingZiJian1 from "@/assets/images/shikumen/tingZiJian-1.png";
import tingZiJian2 from "@/assets/images/shikumen/tingZiJian-2.png";

import waiQiang1 from "@/assets/images/shikumen/waiQiang-1.png";
import waiQiang2 from "@/assets/images/shikumen/waiQiang-2.png";
import waiQiang3 from "@/assets/images/shikumen/waiQiang-3.png";
import waiQiang4 from "@/assets/images/shikumen/waiQiang-4.png";

import xiangFang1 from "@/assets/images/shikumen/xiangFang-1.png";
import xiangFang2 from "@/assets/images/shikumen/xiangFang-2.png";

import yangTai1 from "@/assets/images/shikumen/yangTai-1.png";
import yangTai2 from "@/assets/images/shikumen/yangTai-2.png";
import yangTai3 from "@/assets/images/shikumen/yangTai-3.png";

import zhaoPo1 from "@/assets/images/shikumen/zhaoPo-1.png";
import zhaoPo2 from "@/assets/images/shikumen/zhaoPo-2.png";

//引入放大镜最终的图片
import glass1 from "@/assets/images/shikumen/glass1.png";
import glass2 from "@/assets/images/shikumen/glass2.png";
import glass3 from "@/assets/images/shikumen/glass3.png";
import glass4 from "@/assets/images/shikumen/glass4.png";
import glass5 from "@/assets/images/shikumen/glass5.png";
import glass6 from "@/assets/images/shikumen/glass6.png";

import inGlass1 from "@/assets/images/shikumen/inGlass1.png";
import inGlass2 from "@/assets/images/shikumen/inGlass2.png";
import inGlass3 from "@/assets/images/shikumen/inGlass3.png";
import inGlass4 from "@/assets/images/shikumen/inGlass4.png";
import inGlass5 from "@/assets/images/shikumen/inGlass5.png";
import inGlass6 from "@/assets/images/shikumen/inGlass6.png";
import inGlass7 from "@/assets/images/shikumen/inGlass7.png";
import inGlass8 from "@/assets/images/shikumen/inGlass8.png";
import inGlass9 from "@/assets/images/shikumen/inGlass9.png";

const router = useRouter();

const isOutside = ref(true);
const isViewShow = ref(false);
const mirrorShow = ref(false);

const tagIndex = ref(0);
const lastBigImg = ref(glass1);

const mainImg = ref();
const mirror = ref();
const mirrorImg = ref();

const mainImg2 = ref();
const mirror2 = ref();
const mirrorImg2 = ref();
const isMove = ref(true);

const iconData1 = reactive([
  {
    x: 321 / 10.4,
    y: 135 / 11.5,
    x2: 391 / 10.4,
    y2: 200 / 11.5,
    name: "老虎窗",
    bigImg: glass1,
  },
  {
    x: 793 / 10.4,
    y: 86 / 11.5,
    x2: 775 / 10.4,
    y2: 130 / 11.5,
    name: "山墙",
    bigImg: glass2,
  },
  {
    x: 808 / 10.4,
    y: 300 / 11.5,
    x2: 822 / 10.4,
    y2: 308 / 11.5,
    name: "阳台",
    bigImg: glass3,
  },
  {
    x: 874 / 10.4,
    y: 496 / 11.5,
    x2: 800 / 10.4,
    y2: 496 / 11.5,
    name: "窗户",
    bigImg: glass4,
  },
  {
    x: 646 / 10.4,
    y: 577 / 11.5,
    x2: 600 / 10.4,
    y2: 630 / 11.5,
    name: "外墙",
    bigImg: glass5,
  },
  {
    x: 321 / 10.4,
    y: 687 / 11.5,
    x2: 265/ 10.4,
    y2: 710 / 11.5,
    name: "门头",
    bigImg: glass6,
  },
]);

const nameData1 = reactive([
  {
    x: 104 / 10.4,
    y: 135 / 11.5,
    name: "老虎窗",
  },
  {
    x: 834 / 10.4,
    y: 42 / 11.5,
    name: "山墙",
  },
  {
    x: 882 / 10.4,
    y: 229 / 11.5,
    name: "阳台",
  },
  {
    x: 886 / 10.4,
    y: 435 / 11.5,
    name: "窗户",
  },
  {
    x: 630 / 10.4,
    y: 618 / 11.5,
    name: "外墙",
  },
  {
    x: 356 / 10.4,
    y: 714 / 11.5,
    name: "门头",
  },
]);

const iconData2 = reactive([
  {
    x: 435 / 10.5,
    y: 718 / 11.6,
    x2: 435 / 10.5,
    y2: 718 / 11.6,
    name: "天井",
    bigImg: inGlass1,
  },
  {
    x: 593 / 10.5,
    y: 598 / 11.6,
    x2: 593 / 10.5,
    y2: 598 / 11.6,
    name: "客堂",
    bigImg: inGlass2,
  },
  {
    x: 696 / 10.5,
    y: 532 / 11.6,
    x2: 690 / 10.5,
    y2: 555 / 11.6,
    name: "厢房",
    bigImg: inGlass3,
  },
  {
    x: 531 / 10.5,
    y: 458 / 11.6,
    x2: 490 / 10.5,
    y2: 458 / 11.6,
    name: "前楼",
    bigImg: inGlass4,
  },
  {
    x: 706 / 10.5,
    y: 422 / 11.6,
    x2: 706 / 10.5,
    y2: 422 / 11.6,
    name: "楼梯",
    bigImg: inGlass5,
  },
  {
    x: 890 / 10.5,
    y: 446 / 11.6,
    x2: 890 / 10.5,
    y2: 496 / 11.6,
    name: "灶坡间",
    bigImg: inGlass6,
  },
  {
    x: 898 / 10.5,
    y: 351 / 11.6,
    x2: 898 / 10.5,
    y2: 371 / 11.6,
    name: "亭子间",
    bigImg: inGlass7,
  },
  {
    x: 925 / 10.5,
    y: 210 / 11.6,
    x2: 975 / 10.5,
    y2: 210 / 11.6,
    name: "晒台",
    bigImg: inGlass8,
  },
  {
    x: 688 / 10.5,
    y: 228 / 11.6,
    x2: 688 / 10.5,
    y2: 240 / 11.6,
    name: "阁楼",
    bigImg: inGlass9,
  },
]);

//打开左边窗口的数据
const viewData = reactive([
  {
    name: "老虎窗",
    time: "出现于1920年前",
    detailed:
      "石库门的山墙位于建筑的侧面，由裙肩、上身和山尖三部分组成。不同的屋顶形式，山墙也不尽相同。它既保留了中国传统建筑要素，又融入了欧洲古典建筑装饰元素，是石库门立面构成的主要特色部位，也是建筑师肯下功夫修饰的部位",
    topPics: [laoHu1, laoHu2],
    // topPicNames: ["", ""],
    bottomPics: [
      {
        url: laoHu3,
        name: "",
      },
    ],
  },
  {
    name: " 山墙",
    time: "出现于1869年前",
    detailed:
      "石库门的山墙位于建筑的侧面，由裙肩、上身和山尖三部分组成。不同的屋顶形式，山墙也不尽相同。它既保留了中国传统建筑要素，又融入了欧洲古典建筑装饰元素，是石库门立面构成的主要特色部位，也是建筑师肯下功夫修饰的部位。",
    topPics: [shanqiang1, shanqiang2],
    // topPicNames: ["清水墙", "板条墙"],
    bottomPics: [
      {
        url: shanqiang3,
        name: "",
      },
    ],
  },
  {
    name: "阳台",
    time: "出现于1920年",
    detailed:
      "山墙上装置阳台是在新式石库门阶段。由于石库门是砖墙承重结构，钢筋混凝土梁板可挑出墙面，所以阳台装置方法大多是挑出，或坐在底层厢房的突出面上。样式有敞开式、包厢式等。阳台的装置使石库门立面更丰富，居住功能更实用。",
    topPics: [yangTai1, yangTai2],
    topPicNames: ["", "铁木阳台"],
    bottomPics: [
      {
        url: yangTai3,
        name: "铁木阳台",
      },
    ],
  },
  {
    name: "窗户",
    time: "出现于1869年前",
    detailed:
      "老式石库门受中国传统建筑影响较深，门窗一般采用榻扇和支折窗构造。款式有落地长窗、支折窗、木百叶窗。落地长窗一般安装在客堂前面；支折窗一般安装在石库门两厢房；木百叶窗一般安装在石库门外墙上面。",
    topPics: [chuangHu1, chuangHu2],
    // topPicNames: ["清水墙", "板条墙"],
    bottomPics: [
      {
        url: chuangHu3,
        // name: "水泥阳台",
      },
    ],
  },
  {
    name: "外墙", //等待图片中
    time: "出现年代未知",
    detailed:
      "由于石库门是立帖式木构架结构，所以外墙仅起到围护作用，而非承重墙，一般用空斗墙。外墙类型有混水墙、清水墙、板条墙、水泥墙、面砖墙等。",
    topPics: [waiQiang1, waiQiang2],
    topPicNames: ["清水墙", "板条墙"],
    bottomPics: [
      {
        url: waiQiang3,
        name: "水泥墙",
      },
      {
        url: waiQiang4,
        name: "面砖墙",
      },
    ],
  },
  {
    name: "门头",
    time: "出现于1869年前",
    detailed:
      "门头的构思灵感源自江南民居，是石库门住宅最有特色的部位，展现了中西合璧的建筑文化，印刻着近代上海的历史记忆和文化。门头由门楣、门框、木门、门套和门榻及门环等部分组成。",
    topPics: [menTou1, menTou2],
    // topPicNames: ["清水墙", "板条墙"],
    bottomPics: [
      {
        url: menTou3,
        // name: "水泥阳台",
      },
    ],
  },
]);

const viewData2 = reactive([
  {
    name: "天井",
    time: "出现年代未知",
    detailed:
      "石库门天井是中国民居庭院的缩影。其功能是改善石库门的通风和采光，弥补弄堂狭窄的缺点，提供住宅内部露天活动空间，使室内外空间自然过渡。",
    topPics: [
      {
        url: tianJing1,
        top: 0,
        width: 247,
        height: 390,
      },
    ],
    bottomPics: [
      {
        url: tianJing2,
      },
    ],
  },
  {
    name: "客堂",
    time: "出现年代未知",
    detailed:
      "穿过天井迎面即是客堂，是江南民居的厅堂演变而来。走进落地长窗，方正的厅堂屏门前摆着八仙桌和太师椅，左右两侧摆着茶几和椅子。客堂一般在15-20平方米，侧门连着用房，后门连着扶梯间，是整憧房屋的交通枢纽。",
    topPics: [
      {
        url: keTang1,
        top: 0,
        width: 262,
        height: 435,
      },
    ],
    bottomPics: [
      {
        url: keTang2,
      },
    ],
  },
  {
    name: "厢房",
    time: "出现年代未知",
    detailed:
      "前楼位于客堂上面，最初的老式石库门前楼称为客堂楼，相等于起居室的功能。后来由于房屋紧缺，房地产商将客堂楼改为卧室，所以前楼即是二楼正房的卧室，即主人的卧室，阳光充足光线好。",
    topPics: [
      {
        url: xiangFang1,
        top: 0,
        width: 292,
        height: 435,
      },
    ],
    bottomPics: [
      {
        url: xiangFang2,
      },
    ],
  },
  {
    name: "前楼",
    time: "出现年代未知",
    detailed:
      "前楼位于客堂上面，最初的老式石库门前楼称为客堂楼，相等于起居室的功能。后来由于房屋紧缺，房地产商将客堂楼改为卧室，所以前楼即是二楼正房的卧室，即主人的卧室，阳光充足光线好。",
    topPics: [
      {
        url: qianLou1,
        top: 0,
        width: 283,
        height: 435,
      },
    ],
    bottomPics: [
      {
        url: qianLou2,
      },
    ],
  },
  {
    name: "楼梯",
    time: "出现于19世纪中叶",
    detailed:
      "楼梯始称扶梯，因梯陡须用手辅助来爬而得名。后来扶梯坡度变平坦，成为上楼的必经之处。早期石库门多用横向单跑直梯；后期老式石库门有横向单跑直上、曲尺转弯、双跑平行等形式扶梯；新式石库门扶梯演变为楼梯，由横向改为直向。",
    topPics: [
      {
        url: louTi1,
        top: 0,
        width: 249.71,
        height: 435,
      },
    ],
    bottomPics: [
      {
        url: louTi2,
      },
    ],
  },
  {
    name: "灶坡间",
    time: "出现于19世纪中叶",
    detailed:
      "灶披间即厨房间，最早老式石库门厨房是单层披屋，后来叫成灶披间。单层披屋的厨房取消后，改底层为厨房，二层为亭子间。如今上海人仍将厨房间叫作灶披间。",
    topPics: [
      {
        url: zhaoPo1,
        top: 0,
        width: 247,
        height: 380,
      },
    ],
    bottomPics: [
      {
        url: zhaoPo2,
      },
    ],
  },
  {
    name: "亭子间",
    time: "出现于1919年前",
    detailed:
      "灶披间楼上为亭子间，一般在9-10平方米，比前楼错位了半层。由于底下是热气腾腾的灶披间，顶上是太阳晒烤的晒台，居住条件较差。上世纪30年代许多左翼作家居住在亭子间，在小小斗室里写出了一篇篇激昂的文字，就此产生了“亭子间文学”。",
    topPics: [
      {
        url: tingZiJian1,
        top: 0,
        width: 252,
        height: 384,
      },
    ],
    bottomPics: [
      {
        url: tingZiJian2,
      },
    ],
  },
  {
    name: "晒台",
    time: "出现年代未知",
    detailed:
      "石库门住宅里晾晒衣服主要是在晒台。晒台的楼板做泛水地坪，晾晒衣服时即使大量滴水也无妨。早期石库门住宅，灶间为单层披屋，晒衣只能在单披屋上搭建木制晒台。后期石库门住宅厨房上面为亭子间，另在亭子间上面设晒台。",
    topPics: [
      {
        url: shaiTai2,
        top: 41,
        width: 240,
        height: 159,
      },
      {
        url: shaiTai1,
        top: 0,
        width: 239,
        height: 157,
      },
    ],
    bottomPics: [
      {
        url: shaiTai3,
      },
    ],
  },
  {
    name: "阁楼",
    time: "出现年代未知",
    detailed:
      "石库门建筑阁楼以其独特的设计、小巧的空间和传统的建筑元素而脱颖而出，为上海的城市风貌增添了独特的历史和文化韵味。",
    topPics: [
      {
        url: geLou1,
        top: 43,
        width: 253,
        height: 383,
      },
    ],
    bottomPics: [
      {
        url: geLou2,
      },
    ],
  },
]);

function changeSide(jude) {
  isViewShow.value = false;
  isOutside.value = jude;
  tagIndex.value = 0;
  mirrorShow.value = false;
}

const nowClickName=ref("")
function toCheck(name, index, x2, y2, img, event) {
  event.stopPropagation();
  console.log("点击的：", name);
  nowClickName.value=name;
  // if (name!=viewData[tagIndex.value].name) {
  isViewShow.value = true;
  // }
  tagIndex.value = index;
  lastBigImg.value = img;
  if (isOutside.value) {
    moveMirror(
      (x2 / 100) * window.innerHeight,
      (y2 / 100) * window.innerHeight,
      mainImg.value,
      mirror.value,
      mirrorImg.value
    );
  } else {
    moveMirror(
      (x2 / 100) * window.innerHeight,
      (y2 / 100) * window.innerHeight,
      mainImg2.value,
      mirror2.value,
      mirrorImg2.value
    );
  }
}

//先执行一次
onMounted(() => {
  moveInMain(
    (391 / 10.4 / 100) * window.innerHeight,
    (200 / 11.5 / 100) * window.innerHeight,
    mainImg.value,
    mirror.value,
    mirrorImg.value
  );
});

//放大镜效果

function moveInMain(x2, y2, mainImg, mirror, mirrorImg) {
  // let x_left = e.clientX - mainImg.offsetLeft;
  // let y_top = e.clientY - mainImg.offsetTop;
  // console.log(window.innerHeight);
  let x_left = x2;
  let y_top = y2;
  console.log("放大镜启动", mirror);
  mirror.style.left = x_left - mirror.offsetWidth / 2 + "px";
  mirror.style.top = y_top - mirror.offsetHeight / 2 + "px";

  let mirrorImgLeft =
    (mirrorImg.offsetWidth / mainImg.offsetWidth) * x_left -
    mirror.offsetWidth / 2;
  let mirrorImgTop =
    (mirrorImg.offsetHeight / mainImg.offsetHeight) * y_top -
    mirror.offsetHeight / 2;

  mirrorImg.style.left = -mirrorImgLeft + "px";
  mirrorImg.style.top = -mirrorImgTop + "px";
}

//动画函数
// const nowX=ref(391 / 10.4)
// const nowY=ref(200 / 11.5)

function moveMirror(x, y, mainImg, mirror, mirrorImg) {
  if (mirror.timer) {
    clearInterval(mirror.timer);
  }
  console.log(mainImg);
  isMove.value = true;
  let oldMirLeft;
  let nowMirLeft;
  let oldMirTop;
  let nowMirTop;
  let rLeft;
  let rTop;

  if (!mirror.style.left || mirror.style.left == "") {
    rLeft = 0;
  } else {
    rLeft = parseFloat(mirror.style.left.slice(0, -2));
  }

  if (!mirror.style.top || mirror.style.top == "") {
    rTop = 0;
  } else {
    rTop = parseFloat(mirror.style.top.slice(0, -2));
  }
  oldMirLeft = rLeft + mirror.offsetWidth / 2;
  nowMirLeft = rLeft + mirror.offsetWidth / 2;

  oldMirTop = rTop + mirror.offsetHeight / 2;
  nowMirTop = rTop + mirror.offsetHeight / 2;

  console.log(rLeft);
  console.log(mirror.offsetHeight / 2);

  console.log("nowMirLeft", nowMirLeft);
  mirror.timer = setInterval(
    function () {
      // 调整步长
      var step = (x - oldMirLeft) / 10;
      step = x > 0 ? Math.ceil(step) : Math.floor(step);
      var step2 = (y - oldMirTop) / 10;
      step2 = y > 0 ? Math.ceil(step2) : Math.floor(step2);
      // var step2 = parseFloat(((y - oldMirTop) / 10).toFixed(1));
      console.log(step, step2);
      // 开始移动
      // if (step < 0 && step2 < 0) {
      //   console.log("aaa");
      //   if (nowMirLeft >= x || nowMirTop >= y) {
      //     //判断逻辑有bug
      //     nowMirLeft += step;
      //     nowMirTop += step2;
      //     console.log(nowMirLeft, nowMirTop);

      //     moveInMain(nowMirLeft, nowMirTop, mainImg, mirror, mirrorImg);
      //   } else {
      //     isMove.value = false;
      //     mirrorShow.value = true;

      //     clearInterval(mirror.timer);
      //   }
      //   return;
      // }
      // if (step == 0 && step2 < 0) {
      //   console.log("aaa");
      //   if (nowMirTop >= y) {
      //     nowMirLeft += step;
      //     nowMirTop += step2;
      //     console.log(nowMirLeft, nowMirTop);

      //     moveInMain(nowMirLeft, nowMirTop, mainImg, mirror, mirrorImg);
      //   } else {
      //     isMove.value = false;
      //     mirrorShow.value = true;

      //     clearInterval(mirror.timer);
      //   }
      //   return;
      // }
      // if (step < 0 && step2 == 0) {
      //   if (nowMirLeft >= x) {
      //     nowMirLeft += step;
      //     nowMirTop += step2;
      //     console.log(nowMirLeft, nowMirTop);

      //     moveInMain(nowMirLeft, nowMirTop, mainImg, mirror, mirrorImg);
      //   } else {
      //     isMove.value = false;
      //     mirrorShow.value = true;
      //     clearInterval(mirror.timer);
      //   }
      //   return;
      // }

      if (Math.abs(nowMirLeft - x)>10 || Math.abs(nowMirTop - y)>10) {
        //判断逻辑有bug;已解决
        nowMirLeft += step;
        nowMirTop += step2;
        console.log(nowMirLeft,nowMirTop);
        moveInMain(nowMirLeft, nowMirTop, mainImg, mirror, mirrorImg);
      } else {
        isMove.value = false;
        mirrorShow.value = true;
        clearInterval(mirror.timer);
      }
    },
    mirrorShow.value ? 30 : 10
  );
}
</script>
  
  
  <style lang="less">
// html {
// overflow: hidden!important;

// }
// body {
// overflow: hidden!important;

// }
// html, body {
// 	width: 100%;
// 	height: 100%;
// }
body {
  // margin: 0;
  background-color: #645b56;
  overflow: hidden;
}
.shiKuMen {
  // position: relative;
  position: absolute;
  width: 100%;
  // width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  min-height: 550px;
  // height: 1080px;
  // height: 100vh;
  // background-color: #645b56;
  overflow: hidden;
  .back {
    position: absolute;
    left: (90/19.2vw);
    top: (83/10.8vh);
    width: (38/19.2vw);
    height: (21/19.2vw);
    cursor: pointer;
  }
}
.shiKuMen .shiKuMenAll {
  position: relative;
  width: 100%;
  // height: 100%;
  padding: (109/10.8vh) 0 0 (37/19.2vw);
  background-color: #645b56;
}

.choice {
  position: absolute;
  bottom: (33/10.8vh);
  // display: flex;
  // align-items: flex-end;
  // vertical-align: bottom;
  text-align: center;
  width: (78/10.8vh);
  height: (105/10.8vh);
  border: (1/10.8vh) solid #828282;
  z-index: 999;
  cursor: pointer;
  // line-height: 270px;
  opacity: 0.8;
  font-family: Inter;
  font-size: (18/10.8vh);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  .choiceContent {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      // position: absolute;
      width: (78/10.8vh);
      height: (83/10.8vh);
      z-index: -1;
      mix-blend-mode: plus-darker;
    }
    text {
      position: absolute;
      bottom: 0;
      // left:0;
      white-space: nowrap;
    }
    .text1 {
      color: #fff;
      left: (3.5/19.2vw); //后续改
    }
    .text2 {
      color: #fff; //后续改
      left: (3.5/19.2vw); //后续改
    }
  }
}

.choice1 {
  right: (215/10.8vh);
  // border: (1/10.8vh) solid #828282;
  // background: url("@/assets/images/shikumen/shikumen-btn-1.png"),
  //   lightgray -68.122px -49.416px / 273.799% 173.475% no-repeat;
}
.choice2 {
  right: (117/10.8vh);
  // border: (1/10.8vh) solid #656565;
  // background: url("@/assets/images/shikumen/shikumen-btn-2.png"),
  //   lightgray -61.579px -140.301px / 253.846% 344.432% no-repeat;
}
.shiKuMen .content {
  position: relative;
  width: 100%;
  // height: 100%;
}

.shiKuMen .content .content-left {
  // padding: (28/19.2vw) 0 0 (53/19.2vw);//其他方式改
  transform: rotate(0.045deg);
  mix-blend-mode: plus-lighter;
  // background: url("@/assets/images/shikumen/shikumen-bg.png") no-repeat;
  // opacity: 0.3;
  // background: url("@/assets/images/shikumen/shikumen-bg.png"),
  //   lightgray -73.921px -26.764px / 200.156% 103.039% no-repeat;
  // mix-blend-mode: plus-lighter;
  .leftPic {
    position: absolute;
    width: (1258.208/10.8vh);
    // height: 883.947px;
    aspect-ratio: 1258.208/883.947;
  }
  .title {
    // width: 225px;
    // display: flex;
    // flex-direction: column;
    margin: (28/19.2vw) 0 0 (53/19.2vw);
    color: #fff;
    text-align: center;
    .txt1 {
      text-align: left;
      font-size: (75/19.2vw);
      font-family: Huiwen-mincho;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .txt2 {
      text-align: left;
      padding-top: (8/10.8vh);
      padding-left: (10/19.2vw);
      font-family: Swei Spring CJKtc;
      font-size: (28/19.2vw);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}

.shiKuMen .content .content-right {
  position: absolute;
  top: 0;
  right: (-215/19.2vw);
  z-index: 1;
  .background1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: (1016/10.8vh);
    height: (1024/10.8vh);
    border-radius: (76/19.2vw);
    background: #9c9382;
    margin: 0 auto;
    transition-property: all;
    transition-duration: 0.5s;
    .background2 {
      position: relative;
      width: (684/10.8vh);
      height: (784/10.8vh);
      border-radius: (81/19.2vw);
      background: #797366;
      transition-property: all;
      transition-duration: 0.5s;
    }
  }
}

.model {
  position: absolute;
  width: (1287/10.8vh);
  height: (888/10.8vh);
  top: (109/10.8vh);
  right: (-33/19.2vw);
  z-index: 2;
  // overflow: hidden;
  //pointer-events: none;
}

.model .modelContent {
  position: relative;
  .check {
    position: absolute;
    width: (34.808/10.8vh);
    height: (35.509/10.8vh);
    cursor: pointer;
    //pointer-events: auto;
  }
  .checkName {
    position: absolute;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: (30/10.8vh);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity:1;
    transition-property: opacity;
    transition-duration: 0.7;
  }
  .mainImg {
    width: (1287/10.8vh);
    aspect-ratio: 1287/888;
    // height: (888/19.2vw);
    // //pointer-events: none;
  }
  .mirror {
    position: absolute;
    left: 0;
    top: 0;
    width: (393/10.8vh);
    height: (393/10.8vh);
    // background-color: red;
    z-index: 99;
    border-radius: 50%;
    border: (10/10.8vh) solid #d9d9d9;
    overflow: hidden;
    transition-property: opacity;
    transition-duration: 0.4s;
    .mirrorImg {
      position: absolute;
      width: (2954/10.8vh);
      // height: (964/10.8vh);
      aspect-ratio: 1254/964;
      mix-blend-mode: plus-darker;
    }
    .glassImg {
      width: 100%;
      height: 100%;
    }
  }
}

.inner1 {
  background: #4f4949 !important;
}
.inner2 {
  background: #443b3b !important;
  margin-bottom: (35/10.8vh) !important;
}

// :deep(::-webkit-scrollbar) {
//   width: 0 !important;
// }
// :deep(::-webkit-scrollbar) {
//   width: 0 !important;
//   height: 0;
// }
*::-webkit-scrollbar {
  display: none !important;
}
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

// .moveGlass {
//         animation: loadingAni 1.5s linear infinite;
//         animation-play-state: play;
//       }

//       @keyframes loadingAni {
//         0% {
//           transform: translate(0,0);
//         }
//         100% {
//           transform: translate(100px,100px);
//         }
//       }

.notShowMir {
  z-index:-9999!important;
  opacity: 0 !important;
}
.notShowView {
  opacity: 0 !important;
}
.allCanClick {
  cursor: pointer;
}
.borColorChange {
  border-color: rgba(214, 127, 48, 0.33) !important;
}


</style>