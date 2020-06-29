<template>
  <div class="classic clerfix">
    <div class="classic-left" style="border-bottom:1px solid #f0f0f0;">
      <div class="left-title clerfix">
        <div class="jindian">经典完本</div>
        <div class="more">更多></div>
      </div>
      <div style="border: 1px solid #f0f0f0;border-bottom:none">
        <div class="classic-swiper">
          <swiper
            ref="mySwiper"
            class="sw"
            :options="swiperOptions"
            @mouseenter="mouseenter2"
            @mouseleave="mouseleave2"
          >
            <swiper-slide>
              <div class="swiperss">
                <img src="../../../assets/img/zuiqiang.jpg" alt />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperss">
                <img src="../../../assets/img/zuiqiangs.jpeg" alt />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperss">
                <img src="../../../assets/img/duyi.jpeg" alt />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperss">
                <img src="../../../assets/img/yiping.jpg" alt />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperss">
                <img src="../../../assets/img/fucang.jpeg" alt />
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>

        <div class="swiper-contneirss" v-if="realIndex1===0">
          <div class="text-swiper">
            <div class="title1">最强女婿</div>
            <div class="title2">非艺</div>
            <div class="title3">都市娱乐 | 119.0万 字</div>
            <div class="title4">前世为帝，因一部至强功法，惨遭兄弟背叛，重生华夏。今生，修至强法，他要立于武...</div>
          </div>
        </div>

        <div class="swiper-contneirss" v-if="realIndex1===1">
          <div class="text-swiper">
            <div class="title1">最强妖孽</div>
            <div class="title2">厄夜怪客</div>
            <div class="title3">都市娱乐 | 527.0万 字</div>
            <div
              class="title4"
            >当其他人盲目的追寻真相的时候，记住万物皆虚.当其他的人被道德和法律所束缚，记住万事皆允.我们行走于黑暗，服务于光明。我是徐阳逸，我是……斩妖者...</div>
          </div>
        </div>

        <div class="swiper-contneirss" v-if="realIndex1===2">
          <div class="text-swiper">
            <div class="title1">毒医王妃驭夫有术</div>
            <div class="title2">恬简</div>
            <div class="title3">古代言情 | 65.9万 字</div>
            <div class="title4">
              行走在黑暗边缘的“雇佣兵”，穿越成山里的猎女。
              揍渣男，打猛虎，无意惹上帅哥一枚。
              进京城，归宗祠，且看猎女如何成王妃。...
            </div>
          </div>
        </div>

        <div class="swiper-contneirss" v-if="realIndex1===3">
          <div class="text-swiper">
            <div class="title1">医品宗师</div>
            <div class="title2">步行天下</div>
            <div class="title3">都市娱乐 | 846.2万 字</div>
            <div
              class="title4"
            >他是武林中最年轻的武学宗师，拥有神秘的绝对手感，可他现在却是一名普通的中医大学的大一新生，本想低调的学学医，看看病，恋恋爱，可在一次中秋晚会被迫表演中震惊了全场，注定闪耀的美好大学生活从此开始了</div>
          </div>
        </div>

        <div class="swiper-contneirss" v-if="realIndex1===4">
          <div class="text-swiper">
            <div class="title1">浮沧录</div>
            <div class="title2">会摔跤的熊猫</div>
            <div class="title3">武侠仙侠 | 216.8万 字</div>
            <div class="title4">
              北有大魏，南有齐梁。西夏东关浩瀚，南海北原苍莽。
              四海之内，皆为江湖。
              只因身负天缺绝症的小殿下北上要寻长生。
            </div>
          </div>
        </div>
        <div class="btn">立即阅读</div>
      </div>
    </div>
    <div class="classic-center">
      <div class="shidu">
        <div class="center-title">品书试读</div>
        <div class="books clerfix">
          <div class="list-books clerfix">
            <div class="imgs">
              <img src="../../../assets/img/jianxian.jpeg" alt />
            </div>
            <div class="contents">
              <div class="titles-1">陆地键仙</div>
              <div class="titles-2">天不生我祖安，喷道万古如长夜。键来！被雷劈的少年，醒来发现自己新婚之夜睡在小姨子床上……</div>
              <div class="authrs clerfix">
                <div class="authrs1">六如和尚</div>
                <div class="categiroy">奇幻玄幻</div>
              </div>
            </div>
          </div>
          <div class="list-books clerfix" style="float:right">
            <div class="imgs">
              <img src="../../../assets/img/gaoshou.jpeg" alt />
            </div>
            <div class="contents">
              <div class="titles-1">高手下山</div>
              <div class="titles-2">世上无难事，只怕心上人。</div>
              <div class="authrs clerfix">
                <div class="authrs1">元旦2号</div>
                <div class="categiroy">都市娱乐</div>
              </div>
            </div>
          </div>
          <div class="list-books clerfix">
            <div class="imgs">
              <img src="../../../assets/img/shijie.jpeg" alt />
            </div>
            <div class="contents">
              <div class="titles-1">这个世界很危险</div>
              <div class="titles-2">这个世界，诡怪千变万化，武者肩挑山河，叶青手握长刀，一头闯进了这个波澜壮阔的世界！</div>
              <div class="authrs clerfix">
                <div class="authrs1">叶知风</div>
                <div class="categiroy">武侠仙侠</div>
              </div>
            </div>
          </div>
          <div class="list-books clerfix" style="float:right">
            <div class="imgs">
              <img src="../../../assets/img/cx.jpeg" alt />
            </div>
            <div class="contents">
              <div class="titles-1">尘隙</div>
              <div class="titles-2">
                人如浮尘，时间犹如白驹过隙。每个人都只是这个世界小小一粒，
                却又默默的影响着整个世界。
              </div>
              <div class="authrs clerfix">
                <div class="authrs1">思梦语</div>
                <div class="categiroy">武侠仙侠</div>
              </div>
            </div>
          </div>
          <div class="list-books clerfix">
            <div class="imgs">
              <img src="../../../assets/img/wojia.jpeg" alt />
            </div>
            <div class="contents">
              <div class="titles-1">我家后院通仙界</div>
              <div class="titles-2">失足坠进自家后院古井，当意识里响起恢弘的低喃，杨小乐即是天道！</div>
              <div class="authrs clerfix">
                <div class="authrs1">碳火烤小猪</div>
                <div class="categiroy">都市娱乐</div>
              </div>
            </div>
          </div>
          <div class="list-books clerfix" style="float:right">
            <div class="imgs">
              <img src="../../../assets/img/zhu.jpeg" alt />
            </div>
            <div class="contents">
              <div class="titles-1">神珠传</div>
              <div class="titles-2">好强的力量！啊！终于可以喘息了！狠狠吐出一口浊气，他下意识的向前看去，视野逐渐清晰起来……</div>
              <div class="authrs clerfix">
                <div class="authrs1">从小有个梦想</div>
                <div class="categiroy">奇幻玄幻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="classic-right">
      <div class="right-list">
        <div class="right-title clerfix">
          <div class="title1">新书榜</div>
          <div class="title2">更多></div>
        </div>
        <div class="text-list">
          <ul>
            <li>
              <span class="xuhao1">1</span>渡劫之王
              <span class="yuepiao">352939</span>
            </li>
            <li>
              <span class="xuhao2">2</span>镇墟之主
              <span class="yuepiao">45030</span>
            </li>
            <li>
              <span class="xuhao3">3</span>神探宋飞鹏
              <span class="yuepiao">31529</span>
            </li>
            <li>
              <span class="xuhao">4</span>万界大佬都是我徒弟
              <span class="yuepiao">27113</span>
            </li>
            <li>
              <span class="xuhao">5</span>上阳
              <span class="yuepiao">26209</span>
            </li>
            <li>
              <span class="xuhao">6</span>废土行者
              <span class="yuepiao">25070</span>
            </li>
            <li>
              <span class="xuhao">7</span>我真是地球来的
              <span class="yuepiao">24827</span>
            </li>
            <li>
              <span class="xuhao">8</span>赘婿王者归来
              <span class="yuepiao">23138</span>
            </li>
            <li>
              <span class="xuhao">9</span>御影
              <span class="yuepiao">22760</span>
            </li>
            <li>
              <span class="xuhao">10</span>长安七日
              <span class="yuepiao">22631</span>
            </li>
            <li>
              <span class="xuhao">11</span>诡秘之上
              <span class="yuepiao">21687</span>
            </li>
            <li>
              <span class="xuhao">12</span>仙风魔影
              <span class="yuepiao">18012</span>
            </li>
            <li>
              <span class="xuhao">13</span>骸骨神王
              <span class="yuepiao">17689</span>
            </li>
            <li>
              <span class="xuhao">14</span>万灵天尊
              <span class="yuepiao">16282</span>
            </li>
            <li>
              <span class="xuhao">15</span>魔罗剑神
              <span class="yuepiao">16267</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const _this = this;
    return {
      realIndex1: 0,
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false
        },
        effect: "coverflow",
        initialSlide: 0, //默认显示第二张在中心位置
        slidesPerView: 0,
        centeredSlides: true,
        slidesPerView: "2",
        // initialSlide: 1,
        coverflowEffect: {
          rotate: 0,
          stretch: 58,
          depth: 160,
          modifier: 1,
          slideShadows: true
        },
        loop: true,
        on: {
          slideChangeTransitionEnd: function() {
            _this.realIndex1 = this.realIndex;
          }
        }
        // virtual: {
        //   slides: ["Slide 1"]
        // }
      }
      // swiperOption2: {
      //   autoplay: {
      //     disableOnInteraction: false
      //   },
      //   loop: true,
      //   effect: "fade",
      //   fadeEffect: {
      //     crossFade: true
      //   }
      // }
    };
  },
  created() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  updated() {},
  methods: {
    mouseenter2() {
      this.swiper.autoplay.stop();
    },
    mouseleave2() {
      this.swiper.autoplay.start();
    }
    // nihao() {
    //   console.log(this.swiper.realIndex);
    // }
  },
  watch: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.classic {
  margin-top: 60px;
  .classic-left {
    width: 236px;
    height: 549px;
    float: left;
    background-color: #fafafa;
    .left-title {
      color: #333;
      letter-spacing: 1px;
      line-height: 40px;
      border-bottom: 1px solid #e6e6e6;
      background: #fff;
      .jindian {
        float: left;
        font-weight: 700;
        font-size: 18px;
      }
      .more {
        float: right;
        font-size: 12px;
        color: #999;
        letter-spacing: 1px;
      }
    }
    .btn {
      color: #fff;
      font-size: 14px;
      text-align: center;
      background: #d32f2f;
      border-radius: 2px;
      letter-spacing: 1px;
      margin: 35px auto 0 auto;
      width: 115px;
      height: 30px;
      line-height: 30px;
    }
  }
  .classic-center {
    width: 686px;
    height: 545px;
    float: left;
    margin-left: 22px;
    .shidu {
      .center-title {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #333;
        line-height: 40px;
        border-bottom: 1px solid #e6e6e6;
      }
      .books {
        .list-books {
          float: left;
          width: 332px;
          height: 128px;
          margin: 30px 0 10px;
          .imgs {
            width: 95px;
            height: 126px;
            float: left;
            margin-right: 15px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            img {
              width: 100%;
              height: 100%;
              border-radius: 4px;
            }
          }
          .contents {
            width: 222px;
            height: 126px;
            float: left;
            .titles-1 {
              color: #333;
              line-height: 21px;
              font-size: 16px;
              margin-bottom: 7px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .titles-2 {
              font-size: 13px;
              line-height: 24px;
              color: #666;
              letter-spacing: 0.93px;
              height: 72px;
            }
            .authrs {
              margin-top: 7px;
              color: #999;
              font-size: 13px;
              letter-spacing: 1px;
              .authrs1 {
                float: left;
              }
              .categiroy {
                float: right;
                font-size: 12px;
                line-height: 20px;
                border: 1px solid #e6e6e6;
                border-radius: 2px;
                padding: 0 5px;
              }
            }
          }
        }
      }
    }
  }
  .classic-right {
    width: 236px;
    height: 551px;

    float: left;
    margin-left: 22px;
    border: 1px solid #f0f0f0;
    .right-list {
      width: 236px;
      height: 551px;
      padding: 15px 17px 10px;
      .right-title {
        line-height: 1;
        .title1 {
          font-size: 16px;
          color: #333;
          font-weight: 700;
          float: left;
        }
        .title2 {
          font-size: 12px;
          color: #999;
          letter-spacing: 1px;
          line-height: 16px;
          float: right;
        }
      }
      .text-list {
        margin-top: 10px;
        font-size: 14px;
        display: inline-block;
        ul {
          li {
            line-height: 32px;
            border-bottom: 1px dotted #ccc;
            overflow: hidden;
            width: 200px;
            position: relative;
            span {
              display: inline-block;
            }
            .xuhao1 {
              background: #d32f2f;
              color: #fff;
              height: 16px;
              width: 16px;
              line-height: 16px;
              margin-right: 10px;
              text-align: center;
            }
            .xuhao2 {
              background: #fc7403;
              color: #fff;
              height: 16px;
              width: 16px;
              line-height: 16px;
              margin-right: 10px;
              text-align: center;
            }
            .xuhao3 {
              background: #fc7403;
              color: #fff;
              height: 16px;
              width: 16px;
              line-height: 16px;
              margin-right: 10px;
              text-align: center;
            }
            .xuhao {
              height: 16px;
              width: 16px;
              margin-right: 10px;
              line-height: 16px;
              margin-right: 10px;
              text-align: center;
              color: #a9aeb7;
            }
            .yuepiao {
              font-size: 12px;
              color: #999999;
              position: absolute;
              right: 0;
            }
          }
        }
      }
    }
  }
  .swiper-contneirss {
    .swiperss {
      width: 100px;
      height: 132px;
    }
  }
  .classic-swiper {
    margin-top: 5px;
    height: 200px;
    width: 234px;
    padding: 30px 22px 22px;
    .sw {
    }
    .swiperss {
      width: 100px;
      height: 132px;
      box-shadow: 0 2px 4px 0 rgba(127, 127, 127, 0.5);
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
  }
  .text-swiper {
    .title1 {
      font-size: 18px;
      text-align: center;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #333;
      letter-spacing: 1px;
      margin: 0 0 9px 0;
    }
    .title2 {
      margin-bottom: 12px;
      text-align: center;
      font-size: 13px;
      color: #666;
      letter-spacing: 0.93px;
    }
    .title3 {
      color: #999;
      font-size: 12px;
      text-align: center;
      letter-spacing: 0.86px;
      line-height: 30px;
      margin-bottom: 5px;
    }
    .title4 {
      overflow: hidden;
      word-break: normal;
      text-overflow: ellipsis;
      letter-spacing: 0.93px;
      color: #666;
      font-size: 13px;
      line-height: 25px;
      padding: 0 20px;
      height: 79px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
