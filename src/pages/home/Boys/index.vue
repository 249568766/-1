<template>
  <div class="boys">
    <div class="boys-title">男生频道</div>
    <div class="line2"></div>
    <div class="boys-content clerfix">
      <div class="boys-left">
        <div class="classic-left">
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
                  <img src="../../../assets/img/zaici.jpeg" alt />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiperss">
                  <img src="../../../assets/img/yin.jpeg" alt />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiperss">
                  <img src="../../../assets/img/lei.jpeg" alt />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiperss">
                  <img src="../../../assets/img/yizuo.jpeg" alt />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiperss">
                  <img src="../../../assets/img/nixian.jpeg" alt />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiperss">
                  <img src="../../../assets/img/taigu.jpeg" alt />
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>

          <div class="swiper-contneirss" v-if="realIndex1===0">
            <div class="text-swiper">
              <div class="title1">剑仙在此</div>
              <div class="title2">乱世狂刀</div>
              <div class="title3">奇幻玄幻 | 142.4万 字</div>
              <div class="title4">表面上他是个剑仙。实际上……他是一个挂逼。</div>
            </div>
          </div>

          <div class="swiper-contneirss" v-if="realIndex1===1">
            <div class="text-swiper">
              <div class="title1">时之影刃</div>
              <div class="title2">木依依</div>
              <div class="title3">都市娱乐 | 43.1 万 字</div>
              <div class="title4">
                你年少孤独时，是否也有过一段不愿提起的往事？
                顶尖杀手穆泽明，在一次任务中被组织无情抛弃身亡！
                当穆泽明再次睁眼，竟发现自己携带（异能）穿越回了14年前！
                只有6岁的穆泽明在面临人生中最大的抉择时，义无反顾的当了个普通人？
                且看一名少年杀手如何纵横都市——美女妹妹，军中霸王，商业霸主，美女科学家等一切皆有尽有！
                可当穆泽明再次回到这个舞台上时，他发现一切都变了，这里已经不再是他认知中的那个世界了。
                重生？呵呵，等穆泽明反应过来时，早已陷入这无尽的轮回之中……
                这是我年少时的梦想，也许，是你们每个人年少时都未曾完成的梦想！
                但在这里，我都能帮你“实现”。
              </div>
            </div>
          </div>

          <div class="swiper-contneirss" v-if="realIndex1===2">
            <div class="text-swiper">
              <div class="title1">超级雷修</div>
              <div class="title2">宅男二马</div>
              <div class="title3">都市娱乐 | 21.3万 字</div>
              <div class="title4">
                地球开始灵气复苏…
                郝志走上一条雷修之路…
                得雷法者，驱雷役电，祷雨祈晴，治祟降魔，禳蝗荡疬，炼度幽魂…
                在妖鬼肆虐，巨兽横行的地球上，看主角如何先人一步，冲破险阻，走到修行的极限。
              </div>
            </div>
          </div>

          <div class="swiper-contneirss" v-if="realIndex1===3">
            <div class="text-swiper">
              <div class="title1">我有一座江湖</div>
              <div class="title2">江小六儿</div>
              <div class="title3">奇幻玄幻 | 18.2万 字</div>
              <div class="title4">
                【2020年热血玄幻类独家推荐作品】这江湖，有跛脚侠客仗剑夜行三千里；有年迈夫子一言喝退百万兵；有说书人口中风花雪月；有江湖客眼里刀光剑影。
                一本无字之书，可记载身前事，能预知身后名。
                你有绝世秘籍？我不怕!
                你有万贯家财？我不怕!
                你有满腹经纶？我还是不怕!
                少年提起春秋剑，饮尽杯中酒，
                悠然走向那风雨飘摇的世界。
                “我手中，那可是一整座江湖!”
              </div>
            </div>
          </div>

          <div class="swiper-contneirss" v-if="realIndex1===4">
            <div class="text-swiper">
              <div class="title1">逆仙九问</div>
              <div class="title2">朝阳观主</div>
              <div class="title3">武侠仙侠 | 27.7万 字</div>
              <div class="title4">
                扑街作者是仙逆求魔最忠实的粉丝。现特开逆仙九问，邀家人共同读书品书。
                写心中书，交天下友。我未必能成神，但我必然是最真心的那一位作者！
                一问天何寿？二问地何极？三问人生几何？四问生何欢？五问老何惧？六问死何苦？七问情为何物？八问人世何苦？九问苍生何辜？
                九问问道，一个深山普通私塾先生的孩子，逆天修道，成就通天之境。
              </div>
            </div>
          </div>
          <div class="swiper-contneirss" v-if="realIndex1===5">
            <div class="text-swiper">
              <div class="title1">太古狂修</div>
              <div class="title2">资深咸鱼</div>
              <div class="title3">奇幻玄幻 | 19.3万 字</div>
              <div class="title4">
                一拳破山河，一掌握乾坤。
                纵使你有、天道守护，家族势力，最强血脉，绝世武技，那又如何！
                我、楚逍遥可战之，可胜之，可杀之，可屠之。
                当吾为王，万族臣服...
              </div>
            </div>
          </div>
          <div class="btn">立即阅读</div>
        </div>
      </div>
      <div class="boys-right clerfix">
        <div class="boys-list">
          <div class="list-title clerfix">
            <i class="imgss1"></i>
            <div class="category-title">奇幻玄幻</div>
            <div class="more">更多></div>
          </div>
          <div class="height2"></div>
          <div class="listsss">
            <span>[异世]</span>叫你一声大师兄：盗墓贼
          </div>
          <div class="listsss">
            <span>[争霸]</span>隐沧之吾：剑为镜权为生
          </div>
          <div class="listsss">
            <span>[玄幻]</span>神游天外：挑日月摘北斗
          </div>
          <div class="listsss">
            <span>[玄幻]</span>至尊魔婿：重生天下至尊
          </div>
          <div class="listsss">
            <span>[神话]</span>牧野大荒：开出一片沃土
          </div>
        </div>
        <div class="boys-list">
          <div class="list-title clerfix">
            <i class="imgss2"></i>
            <div class="category-title">都市娱乐</div>
            <div class="more">更多></div>
          </div>
          <div class="height2"></div>
          <div class="listsss">
            <span>[都市]</span>仙界废柴混都市：修真者
          </div>
          <div class="listsss">
            <span>[都市]</span>弑神修罗王：杀该杀之人
          </div>
          <div class="listsss">
            <span>[校园]</span>东大寺考古社日常 ：阴阳
          </div>
          <div class="listsss">
            <span>[都市]</span>破茧为王：破茧出我为王
          </div>
          <div class="listsss">
            <span>[重生]</span>往事如梦2001：兴风作浪
          </div>
        </div>
        <div class="boys-list">
          <div class="list-title clerfix">
            <i class="imgss3"></i>
            <div class="category-title">武侠仙侠</div>
            <div class="more">更多></div>
          </div>
          <div class="height2"></div>
          <div class="listsss">
            <span>[修真]</span>人间妄谈：我是天选之人
          </div>
          <div class="listsss">
            <span>[仙侠]</span>论如何自救成主角：剧透
          </div>
          <div class="listsss">
            <span>[武侠]</span>巅峰武道：改变人生轨迹
          </div>
          <div class="listsss">
            <span>[修真]</span>道友理发吗：来杀马特不
          </div>
          <div class="listsss">
            <span>[修真]</span>御灵江湖：守护这片土地
          </div>
        </div>
        <div class="boys-list">
          <div class="list-title clerfix">
            <i class="imgss4"></i>
            <div class="category-title">历史军事</div>
            <div class="more">更多></div>
          </div>
          <div class="height2"></div>
          <div class="listsss">
            <span>[历史]</span>扶桑镜梦：江户幕末风暴
          </div>
          <div class="listsss">
            <span>[历史]</span>铁血崇祯：救大明于危难
          </div>
          <div class="listsss">
            <span>[架空]</span>汉末锦衣：执掌锦绣江山
          </div>
          <div class="listsss">
            <span>[架空]</span>三国大乱斗：群雄聚中原
          </div>
          <div class="listsss">
            <span>[架空]</span>三石缘：百万甲兵捣黄龙
          </div>
        </div>
        <div class="boys-list">
          <div class="list-title clerfix">
            <i class="imgss5"></i>
            <div class="category-title">科幻游戏</div>
            <div class="more">更多></div>
          </div>
          <div class="height2"></div>
          <div class="listsss">
            <span>[游戏]</span>无尽开发商：开发富二代
          </div>
          <div class="listsss">
            <span>[末世]</span>末日星主：执掌星辰之力
          </div>
          <div class="listsss">
            <span>[科幻]</span>劫中刃：古武复苏于星际
          </div>
          <div class="listsss">
            <span>[星际]</span>机战星河：征战星辰大海
          </div>
          <div class="listsss">
            <span>[穿梭]</span>刺客来收人了：正义之心
          </div>
        </div>
        <div class="boys-list">
          <div class="list-title clerfix">
            <i class="imgss6"></i>
            <div class="category-title">竞技悬疑</div>
            <div class="more">更多></div>
          </div>
          <div class="height2"></div>
          <div class="listsss">
            <span>[推理]</span>王的祭祀：神秘预言降临
          </div>
          <div class="listsss">
            <span>[同人]</span>灌篮高手之暴君：灌篮王
          </div>
          <div class="listsss">
            <span>[灵异]</span>魂引司：掌生死，从引渡
          </div>
          <div class="listsss">
            <span>[推理]</span>不良神探：我只是小市民
          </div>
          <div class="listsss">
            <span>[惊悚]</span>凶宅体验师：人间分阴阳
          </div>
        </div>
        <div class="boys-list">
          <div class="list-title clerfix">
            <i class="imgss7"></i>
            <div class="category-title">二次元</div>
            <div class="more">更多></div>
          </div>
          <div class="height2"></div>
          <div class="listsss">
            <span>[二次元]</span>口袋妖怪：未免太凶暴
          </div>
          <div class="listsss">
            <span>[二次元]</span>我的青春：坑爹系统滚
          </div>
          <div class="listsss">
            <span>[二次元]</span>我是神奇宝贝：那些年
          </div>
          <div class="listsss">
            <span>[二次元]</span>天炁学院：欢迎你来到
          </div>
          <div class="listsss">
            <span>[二次元]</span>最后的圣杯战争：改变
          </div>
        </div>
        <div class="last-author">
          <div class="last-title">人气作者</div>
          <div class="jianjie clerfix">
            <div class="authorss">烟斗老哥</div>
            <div class="avtirers">
              <img src="../../../assets/img/zuozhe.jpeg" alt />
            </div>
          </div>
          <div class="zuoping clerfix">
            <div class="zhuyao">主要作品</div>
            <div class="line3"></div>
          </div>
          <div class="neirong">赏金天下、妙医鸿途、大国名厨等</div>
          <div class="btn2">作者详情</div>
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
.boys {
  margin-top: 50px;
  height: 541px;
  .boys-title {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    letter-spacing: 1px;
    border-bottom: 1px solid #e6e6e6;
    line-height: 40px;
  }
  .line2 {
    height: 10px;
  }
  .boys-content {
    .boys-left {
      width: 236px;
      float: left;
      .classic-left {
        margin-top: 15px;
        border: 1px solid #f0f0f0;
        width: 236px;
        height: 468px;
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
    }
    .boys-right {
      float: right;
      font-size: 12px;
      margin-left: 36px;
      width: 940px;
      height: 490px;
      .boys-list {
        width: 210px;
        height: 245px;
        margin-right: 25px;
        padding-top: 15px;
        float: left;
        .list-title {
          .imgss2 {
            background-image: url("../../../assets/img/cate02.png");
          }
          .imgss3 {
            background-image: url("../../../assets/img/cate03.png");
          }
          .imgss4 {
            background-image: url("../../../assets/img/cate04.png");
          }
          .imgss5 {
            background-image: url("../../../assets/img/cate05.png");
          }
          .imgss6 {
            background-image: url("../../../assets/img/cate06.png");
          }
          .imgss7 {
            background-image: url("../../../assets/img/cate07.png");
          }
          i {
            display: inline-block;
            width: 27px;
            height: 25px;
            margin-right: 11px;
            float: left;
            background-image: url("../../../assets/img/cate01.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
          }
          .category-title {
            float: left;
            font-weight: 700;
            font-size: 16px;
            color: #333;
            letter-spacing: 1px;
            line-height: 25px;
          }
          .more {
            float: right;
            margin-top: 5px;
            font-size: 12px;
            color: #999;
            letter-spacing: 1px;
            line-height: 16px;
          }
        }
        .height2 {
          height: 20px;
        }
        .listsss {
          width: 210px;
          overflow: hidden;
          white-space: nowrap;
          font-size: 14px;
          line-height: 35px;
          letter-spacing: 1px;
          color: #333;
          span {
            color: #999;
            padding-right: 4px;
          }
        }
      }
      .last-author {
        position: relative;
        float: left;
        width: 215px;
        background: #f7f7f7;
        border: 1px solid #f0f0f0;
        height: 227px;
        padding: 16px 20px 0 16px;
        .last-title {
          line-height: 21px;
          font-weight: 700;
          font-size: 16px;
          color: #333;
        }
        .jianjie {
          .authorss {
            float: left;
            font-size: 18px;
            color: #333;
            letter-spacing: 1px;
            margin-top: 22px;
            width: 110px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .avtirers {
            float: left;
            width: 60px;
            height: 60px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
        .zuoping {
          position: relative;
          .zhuyao {
            color: #666;
            letter-spacing: 0.86px;
            font-size: 12px;
            padding: 13px 0 8px;
            position: absolute;
            top: -14px;
          }
          .line3 {
            height: 0;
            border-bottom: 1px dotted #ccc;
            width: 114px;
            position: absolute;
            right: 0;
            top: 8px;
          }
        }
        .neirong {
          height: 44px;
          overflow: hidden;
          line-height: 22px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          position: absolute;
          transform: translateY(50%);
          width: 177px;
        }
        .btn2 {
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          color: #d32f2f;
          letter-spacing: 1px;
          width: 100px;
          height: 30px;
          border: 1px solid #d32f2f;
          border-radius: 2px;
          position: absolute;
          left: 50%;
          bottom: 16px;
          transform: translateX(-50%);
        }
      }
    }
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
</style>