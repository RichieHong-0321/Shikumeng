<template>
    <div class="xinghuo">
        <div class="xinghuo-head">
            <div class="return-button" @click="returnButton">
                <img src="@/assets/images/return.png">
            </div>
            <p class="xinghuo-title" v-if="sectionStatus != 0">{{ $t('xinghuo.title') }}</p>
            <p class="xinghuo-sub-title" v-if="sectionStatus != 0">{{ $t('xinghuo.subTitle') }}</p>
        </div>
        
        <div v-if="sectionStatus == 0" class="section-zero">
            <div class="zero-bg">
                <img class="section-zero-image" src="@/assets/images/xinghuo/section-zero.png">

                <Transition class="animate__animated" enter-active-class="animate__fadeInUp" leave-active-class="animate__fadeOut">
                    <img v-if="!showShine" class="section-star" src="@/assets/images/xinghuo/star.png">
                </Transition>
                <Transition class="animate__animated" enter-active-class="animate__headShake" leave-active-class="animate__fadeOut">
                    <img v-if="showShine" class="section-shine" src="@/assets/images/xinghuo/shine.png">
                </Transition>
            </div>
            
            <img class="section-zero-pagedown" src="@/assets/images/xinghuo/page-down.png" @click="toSection(1)">
        </div>
        
        <div class="section-one slices" :style="{'height': sectionStatus == 1 ? '100vh': '0'}">
            <div class="page-one">
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 0" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <Transition class="animate__animated" enter-active-class="animate__fadeInUp" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 0" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-1.png" alt="huiyi-pic">
                    </Transition>
                    <Transition class="animate__animated" enter-active-class="animate__fadeInDownBig" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 0" class="huiyi-bg" src="@/assets/images/xinghuo/4-1-0.png" alt="huiyi-pic">
                    </Transition>
                    <Transition class="animate__animated" enter-active-class="animate__fadeInBottomLeft" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 0" class="huiyi-bg" src="@/assets/images/xinghuo/4-1-1.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content right"  v-if="selectedNum == 0">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionOne.pageOne.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionOne.pageOne.address') }}</div>
                            <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(0)">
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionOne.pageOne.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionOne.pageOne.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg" @click="affix">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 1" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 1" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-1-2.png" alt="huiyi-pic">
                    </Transition>
                    <Transition class="animate__animated" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 1 && affixStep == 0" class="huiyi-bg" src="@/assets/images/xinghuo/4-1-3.png" alt="huiyi-pic">
                    </Transition>
                    <Transition class="animate__animated" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 1 && affixStep == 1" class="huiyi-bg" src="@/assets/images/xinghuo/4-1-4.png" alt="huiyi-pic">
                    </Transition>
                    <Transition class="animate__animated" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 1 && affixStep == 2" class="huiyi-bg" src="@/assets/images/xinghuo/4-1-5.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page2-content" v-if="selectedNum == 1">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionOne.pageTwo.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionOne.pageTwo.address') }}</div>
                            <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)">
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionOne.pageTwo.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionOne.pageTwo.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 2" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 2" class="inner huiyi-bg-0" src="@/assets/images/xinghuo/4-1-6.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page3-content" v-if="selectedNum == 2">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionOne.pageThree.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionOne.pageThree.address') }}</div>
                            <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(2)">
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionOne.pageThree.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionOne.pageThree.text') }}</div>
                    </div>
                </Transition>
            </div>
        </div>
        
        <div v-if="sectionStatus == 2" class="section-two slices" :style="{'height': sectionStatus == 2 ? '100vh': '0'}">
            <div class="page-one">
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 0" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 0" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-2-1.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 0">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageOne.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageOne.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageOne.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageOne.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 1" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 1" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-2-2.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content" v-if="selectedNum == 1">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageTwo.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageTwo.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageTwo.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageTwo.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 2" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 2" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-2-3.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content page3-content" v-if="selectedNum == 2">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageThree.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageThree.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageThree.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageThree.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 3" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 3" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-2-4.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 3">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageFour.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageFour.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageFour.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageFour.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 4" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 4" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-2-5.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content page3-content" v-if="selectedNum == 4">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageFive.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageFive.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageFive.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageFive.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 5" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 5" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-2-6.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 5">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageSix.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageSix.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageSix.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageSix.text') }}</div>
                    </div>
                </Transition>

                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 6" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 6" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-2-7.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content page3-content" v-if="selectedNum == 6">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageSeven.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageSeven.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageSeven.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageSeven.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 7" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 7" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-2-8.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 7">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageEight.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageEight.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageEight.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageEight.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 8" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 8" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-2-9.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 8">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageNine.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageNine.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageNine.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageNine.text') }}</div>
                    </div>
                </Transition>


                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 9" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 9" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-2-10.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content page3-content" v-if="selectedNum == 9">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionTwo.pageTen.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionTwo.pageTen.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(1)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionTwo.pageTen.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionTwo.pageTen.text') }}</div>
                    </div>
                </Transition>
            </div>
        </div>
        
        <div v-if="sectionStatus == 3" class="section-three slices" :style="{'height': sectionStatus == 3 ? '100vh': '0'}">
            <div class="page-one">
                <!-- Left -->
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 0" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 0" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-3-1.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content page3-content" v-if="selectedNum == 0">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionThree.pageOne.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionThree.pageOne.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(2)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionThree.pageOne.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionThree.pageOne.text') }}</div>
                    </div>
                </Transition>


                <!-- Right -->
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 1" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 1" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-3-2.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 1">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionThree.pageTwo.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionThree.pageTwo.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(2)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionThree.pageTwo.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionThree.pageTwo.text') }}</div>
                    </div>
                </Transition>


                <!-- Left -->
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 2" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 2" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-3-3.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content page3-content" v-if="selectedNum == 2">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionThree.pageThree.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionThree.pageThree.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(2)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionThree.pageThree.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionThree.pageThree.text') }}</div>
                    </div>
                </Transition>


                <!-- Right -->
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 3" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 3" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-3-4.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 3">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionThree.pageFour.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionThree.pageFour.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(2)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionThree.pageFour.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionThree.pageFour.text') }}</div>
                    </div>
                </Transition>


                <!-- Left -->
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 4" src="@/assets/images/xinghuo/left-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 4" class="huiyi-bg-0" src="@/assets/images/xinghuo/4-3-5.png" alt="huiyi-pic">
                    </Transition>
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutLeft">
                    <div class="sub-content page2-content page5-content" v-if="selectedNum == 4">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionThree.pageFive.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionThree.pageFive.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(2)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionThree.pageFive.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionThree.pageFive.text') }}</div>
                    </div>
                </Transition>


                <!-- Right -->
                <div class="page-bg">
                    <img class="huiyi-bg-rect" v-if="selectedNum == 5" src="@/assets/images/xinghuo/right-rect.png" alt="huiyi">
                    <!-- animate__fadeInBottomLeft -->
                    <Transition class="animate__animated" enter-active-class="flip-image" leave-active-class="animate__fadeOut">
                        <img v-if="selectedNum == 5" class="huiyi-bg-0 inner" src="@/assets/images/xinghuo/4-3-6.png" alt="huiyi-pic">
                    </Transition>
                    
                </div>
                <Transition class="animate__animated" enter-active-class="animate__fadeInTopRight" leave-active-class="animate__fadeOutRight">
                    <div class="sub-content page1-content" v-if="selectedNum == 5">
                        <div class="content-title">
                            <div class="content-point"></div>
                            <div class="content-year">{{ $t('xinghuo.sectionThree.pageSix.year') }}</div>
                            <div class="content-address">{{ $t('xinghuo.sectionThree.pageSix.address') }}</div>
                            <!-- <img class="content-video" src="@/assets/images/xinghuo/youtube.png" @click="openVideoPopup(2)"> -->
                        </div>
                        <div class="content-name">{{ $t('xinghuo.sectionThree.pageSix.name') }}</div>
                        <div class="content-text">{{ $t('xinghuo.sectionThree.pageSix.text') }}</div>
                    </div>
                </Transition>
            </div>
        </div>
        <div v-if="sectionStatus != 0" class="left-bar">
            <div class="first-bar menu-bar animate__animated"
                :class="{ 'is-selected-tab animate__fadeInLeft': sectionStatus == 1, 'is-not-selected-tab': sectionStatus !== 1 }"
                @click="toSection(1)">{{ sectionStatus == 1 ? $t('xinghuo.sectionOneName') : '' }}</div>
            <div class="second-bar menu-bar animate__animated"
                :class="{ 'is-selected-tab animate__fadeInLeft': sectionStatus == 2, 'is-not-selected-tab': sectionStatus !== 2 }"
                @click="toSection(2)">{{  sectionStatus == 2 ? $t('xinghuo.sectionTwoName') : '' }}</div>
            <div class="third-bar menu-bar animate__animated"
                :class="{ 'is-selected-tab animate__fadeInLeft': sectionStatus == 3, 'is-not-selected-tab': sectionStatus !== 3 }"
                @click="toSection(3)">{{ sectionStatus == 3 ? $t('xinghuo.sectionThreeName') : '' }}</div>

        </div>
        <div v-if="sectionStatus != 0" class="right-button" @click="next">
            <img src="@/assets/images/xinghuo/double-down.png">
        </div>

        <VideoPopup ref="videoState"/>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import VideoPopup from "@/components/VideoPopup/VideoPopup.vue"

import firstVideo from "@/assets/videos/first-meeting.mp4";
import secondVideo from "@/assets/videos/second-meeting.mp4";
import fourthVideo from "@/assets/videos/fourth-meeting.mp4";

const sectionStatus = ref(0)
const router = useRouter()
const videoState = ref(null)

const selectedNum = ref(999)
const affixStep = ref(0);

const showShine = ref(false);


setTimeout(()=> {
    showShine.value= true;
}, 2000)

const videoList= ref([
    firstVideo,secondVideo,fourthVideo
])

const returnButton = function () {
    if(sectionStatus.value == 0) {
        router.back()
    }
    // router.back()
    sectionStatus.value = 0;
    selectedNum.value = 999;
    affixStep.value = 0;
}

const toSection = function (value) {
    console.log(22222)
    sectionStatus.value = value;
    selectedNum.value = 0;
    affixStep.value = 0;
}

const affix = () => {
    affixStep.value = 1;

    setTimeout(() => {
        affixStep.value = 2;
    }, 2000);
}

const next = () => {

    if(sectionStatus.value == 1 && selectedNum.value == 1 && affixStep.value !== 2) {
        affix();
        return
    }
    switch (sectionStatus.value) {
        case 1:
            if(selectedNum.value == 2) {
                sectionStatus.value = 2;
                affixStep.value = 0;
                selectedNum.value = 0;
                return;
            }
            selectedNum.value += 1;
            break;
        case 2:
            if(selectedNum.value == 9) {
                sectionStatus.value = 3;
                affixStep.value = 0;
                selectedNum.value = 0;
                return;
            }
            selectedNum.value += 1;
            break;
        case 3:
            if(selectedNum.value == 5) {
                sectionStatus.value = 1;
                affixStep.value = 0;
                selectedNum.value = 0;
                return;
            }
            selectedNum.value += 1;
            break;
        default:
            break;
    }
    
}

const openVideoPopup = function(value){
    videoState.value.popupVideoUrl = videoList.value[value];
    videoState.value.showVideoPopup = true;
}


</script>
<style lang="less">
@font-face {
    src: url('@/assets/fonts/SweiSpringSugar-Regular.ttf');
    font-family: "Swei Spring CJKtc";
}

.xinghuo {
    background: linear-gradient(111.16deg, #514B49 65.32%, #615B55 107.95%);
    height: 100vh;
    width: 100vw;
}

.xinghuo-head {
    position: absolute;
    z-index: 99;
    top: 8%;
    left: 5%;
}

.return-button {
    margin-left: 25px;
    margin-bottom: 17px;
    z-index: 99;
    top: 30px;
    cursor: pointer;
}

.xinghuo-title {
    margin-left: 17px;
    margin-bottom: 5px;
    font-family: Huiwen-mincho;
    font-weight: 400;
    font-size: 3.8rem;
    color: rgba(255, 255, 255, 1);

}

.xinghuo-sub-title {
    margin-left: 22px;
    font-family: Swei Spring CJKtc;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);

}

.section-zero {
    background-color: #CDCDCD;
    text-align: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
}

.section-zero-image {
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    object-fit: contain;
    height: 100vh;
}

.zero-bg {
    display: relative;

    img {
        width: 100vw;
        height: 100vh;
        position: absolute;
    }

    .section-star {
        left: 0;
        top: 0;
    }

    .section-shine  {
        top: -7vh;
        left: 0;
        height: 103vh;
    }
}

.section-zero-pagedown {
    width: 101px;
    height: 101px;
    position: fixed;
    bottom: 5%;
    text-align: center;
    cursor: pointer;

}

.video-iron {
    width: 56px;
    height: 56px
}

.slices {
    background-color: rgba(81, 75, 73, 1);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .page-bg {
        position: relative;
    }

    .huiyi-bg {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        z-index: 2;
    }

    .huiyi-bg-0 {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        z-index: 1;
    }

    .huiyi-bg-rect {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        z-index: 1;
    }
}

.sub-content{
    width: 40vw;
    position: absolute;
    right: 0;
    top: 11%;
    z-index: 2;
}

.page2-content {
    left: 10vw;
    top: 25%;

    .content-name {
        padding-left: 4vw;
    }

    .content-text {
        padding-right: calc(100% - 4vw - 31rem);
        padding-left: calc(4vw + 5rem);
        margin-top: 5rem;
    }
}

.page3-content {
    .content-text {
        margin-top: 7rem;
    }
}

.section-two {
    .page1-content {
        width: 60vw;
        left: 15vw;
        top: 14%;

        .content-name {
            margin-top: 1rem;
            padding-right: 33vw;
            margin-left: -4vw;
        }

        .content-text {
            padding-right: 32vw;
            padding-left: 0;
            margin-left: -4vw;
            margin-top: 5rem;
        }
    }

    .page2-content {
        width: 60vw;
        top: 17%;
        left: 45vw;

        .content-text {
            padding-right: calc(100% - 12vw - 38.2rem);
            padding-left: calc(12vw + 5rem);
        }
    }

    .page3-content {
        .content-text {
            padding-right: calc(100% - 5vw - 47rem);
            padding-left: calc(5vw + 5rem);
            margin-top: 3rem;
        }
    }
    
}

.section-three {
    .page1-content {
        width: 60vw;
        left: 15vw;
        top: 14%;

        .content-name {
            margin-top: 1rem;
            padding-right: 33vw;
            margin-left: -4vw;
        }

        .content-text {
            padding-right: 32vw;
            padding-left: 0;
            margin-left: -4vw;
            margin-top: 5rem;
        }
    }

    .page2-content {
        width: 60vw;
        top: 17%;
        left: 50vw;

        .content-text {
            padding-right: calc(100% - 12vw - 38.2rem);
            padding-left: calc(12vw + 5rem);
        }
    }

    .page3-content {
        .content-text {
            padding-right: calc(100% - 54rem);
            padding-left: calc(0vw + 5rem);
            margin-top: 3rem;
        }
    }

    .page5-content {
        left: 58vw;

        .content-text {
            padding-right: calc(100% - 38.2rem);
            padding-left: calc(0vw + 4rem);
        }
    }
}

.content-title {
    display: flex;
    flex-direction: row;
    // vertical-align: bottom;
    align-items: flex-end;
}

.content-point{
    border-radius: 50%;
    background-color: #F5AC3F;
    height: 3.1rem;
    width: 3.1rem;
    align-self: center;
    margin-right: 10px;
}

.content-year {
    color: #F5AC3F;
    font-family: Times New Roman;
    font-size: 6.4rem;
}

.content-address {
    color: #F5AC3F;
    font-family: Inter;
    font-size: 1.8rem;
    letter-spacing: 0.06em;
    // margin-bottom: 14px;
    margin: 0 10px 1.4rem;
}

.content-video {
    height: 2.8rem;
    width: 2.8rem;
    margin-bottom: 1rem;
}

.content-name {
    color: #FFFFFF;
    font-family: KaiTi;
    font-size: 2.1rem;
    font-weight: 400;
    line-height: 67px;
    letter-spacing: 0.06em;
    text-align: left;
    padding-left: 8vw;
}

.content-text {
    // width: calc(242px + 6vh);
    padding-right: calc(100% - 8vw - 28.2rem);
    padding-left: calc(8vw + 5rem);
    color: #FFFFFF;
    font-family: "simkai";
    font-size: 1.9rem;
    font-weight: 400;
    line-height: 3.6rem;
    letter-spacing: 0em;
    text-align: justify;
}


.left-bar {
    position: fixed;
    left: 0%;
    z-index: 3;
}

.menu-bar {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 4.3rem;
    height: 6.4rem;
    font-family: "simkai";
    font-size: 4rem;
    font-weight: 400;
    // line-height: 77px;
    letter-spacing: 0.06em;
    text-align: left;
    cursor: pointer;
}

.first-bar {
    position: fixed;
    top: 35%;
}

.second-bar {
    position: fixed;
    top: 50%;
}

.third-bar {
    position: fixed;
    top: 65%;
}

.is-selected-tab {
    background-color: #AA9C88;
    box-shadow: -1px 11px 8.800000190734863px 0px rgba(160, 92, 92, 0.25);
    width: 11rem;
    line-height: 6.4rem;
}

.is-not-selected-tab {
    background-color: #918C8CB2;
    box-shadow: -1px 11px 8.800000190734863px 0px rgba(160, 92, 92, 0.25);

}

.right-button {
    position: fixed;
    bottom: 5%;
    right: 5%;
    z-index: 3;
    cursor: pointer;
}

.video-popup {
    position: fixed;

}

//Animations======================================================================================
.flip-image {
    animation-name: flip;
    animation-iteration-count: infinite;
    transition-timing-function: linear;
    animation-duration: .6s; 
    transform-style: preserve-3d;
}

@keyframes flip {
  0% {
    transform: rotateY(180deg);
    animation-timing-function: ease-in;
  }

  40% {
    transform: rotateY(235deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotateY(275deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: rotateY(325deg);
    animation-timing-function: ease-in;
  }

  100% {
    transform: rotateY(360deg);
    animation-timing-function: ease-in;
  }
}

</style>