<template>
  <div class="topContent clerfix">
    <div class="left-content">
      <div class="top-nav">
        <div class="title">作品分类</div>
        <div class="nav-list">
          <ul class="sprite">
            <li><i class="icon1"></i>奇幻玄幻</li>
            <li><i class="icon2"></i>武侠仙侠</li>
            <li><i class="icon3"></i>历史军事</li>
            <li><i class="icon4"></i>都市娱乐</li>
            <li><i class="icon5"></i>竞技同人</li>
            <li><i class="icon6"></i>科幻游戏</li>
            <li><i class="icon7"></i>悬疑灵异</li>
            <li><i class="icon8"></i>二次元</li>
            <li style="background:#fafafa"><i class="icon9"></i>花语女生</li>
            <li style="background:#fafafa"><i class="icon10"></i>全部作品</li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-title">2020年6月双倍月票开始</div>
        <ul>
          <li>无罪新书：渡劫之王</li>
          <li>《山寨小萌主》高甜开播</li>
          <li>5月月票冠军：逆天邪神</li>
          <li>6月新星《我只有两千五百岁...</li>
        </ul>
        <div class="more">查看更多></div>
      </div>
    </div>
    <div class="center-content">
      <div class="swipers" @mouseenter="mouseenter1" @mouseleave="mouseleave1">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide
            ><img src="../../../assets/img/1111.jpeg" alt
          /><div class="swiper-texx">当昔日战神跌落神坛，当平生所求皆负于我，这缥缈浮尘的路，究竟又该何去何从呢？</div></swiper-slide>
          <swiper-slide
            ><img src="../../../assets/img/4444.jpeg" alt
          /><div class="swiper-texx">世界变了，异兽入侵，魂师林立，宁峰稳定发育，暗中杀敌，一代幕后黑手悄然崛起。</div></swiper-slide>
          <swiper-slide
            ><img src="../../../assets/img/2222.jpeg" alt
          /><div class="swiper-texx">杯酒释兵权青史留名却埋下千年国祸，现代来的穿越者该如何在历史长卷中挥墨落笔？</div></swiper-slide>
          <swiper-slide
            ><img src="../../../assets/img/333.jpeg" alt
          /><div class="swiper-texx">妖神出，神魔至，冰王现世，灭莲迟，搅天道，撼神势，巅峰路上破天知。</div></swiper-slide>
          <swiper-slide
            ><img src="../../../assets/img/22222.jpeg" alt
          /><div class="swiper-texx">最飒女金刚和草包二少爷因为一个鬼马话痨的萌宝纠缠到一起，这个画面非常精彩了！</div></swiper-slide>
          <div class="swiper-button-prev qianjing" slot="button-prev"></div>
          <div class="swiper-button-next houtui" slot="button-next"></div>
          <div class="swiper-pagination bottom-swiper" slot="pagination"></div>
        </swiper>
      </div>
      <div class="chunk2 clerfix">
        <div class="chunk2-list">
          <div class="chunk2-title">以冲龄之年，继大明国祚：明天子</div>
          <div class="text">
            <span>[历史]</span>明匪：流寇起家，万千虎狼中窃明祚
          </div>
          <div class="text">
            <span>[都市]</span>极品大小姐的贴身高手：手撕大小姐
          </div>
          <div class="text">
            <span>[都市]</span>都市神级超人：纵横都市，横扫强敌
          </div>
          <div class="text">
            <span>[科幻]</span>诸天十界：我要这十界，都匍匐在身
          </div>
          <div class="text">
            <span>[都市]</span>全能医生：姑娘别粘我，我去救世界
          </div>
        </div>
        <div class="chunk2-list">
          <div class="chunk2-title">开启自己的高光人生：我只有两千五百岁</div>
          <div class="text">
            <span>[都市]</span>金牌小厨神：每一个食客都是美食家
          </div>
          <div class="text">
            <span>[玄幻]</span>觅仙迹踏天路：无敌少年，踏天而行
          </div>
          <div class="text">
            <span>[体育]</span>禁区之王：华国球员，征服五大联赛
          </div>
          <div class="text">
            <span>[玄幻]</span>末世神婿：有拾荒系统，废土变天堂
          </div>
          <div class="text">
            <span>[悬疑]</span>观山秘闻录：揭开祖上遗留惊天秘密
          </div>
        </div>
      </div>
    </div>
    <div class="right-content">
      <div class="right-list">
        <div class="right-title clerfix">
          <div class="title1">月票榜</div>
          <div class="title2">更多></div>
        </div>
        <div class="text-list">
          <ul>
            <li>
              <span class="xuhao1">1</span>渡劫之王
              <span class="yuepiao">45184</span>
            </li>
            <li>
              <span class="xuhao2">2</span>剑仙在此
              <span class="yuepiao">42549</span>
            </li>
            <li>
              <span class="xuhao3">3</span>不让江山
              <span class="yuepiao">26349</span>
            </li>
            <li>
              <span class="xuhao">4</span>剑来
              <span class="yuepiao">18790</span>
            </li>
            <li>
              <span class="xuhao">5</span>我只有两千五百岁
              <span class="yuepiao">17723</span>
            </li>
            <li>
              <span class="xuhao">6</span>陆地键仙
              <span class="yuepiao">16529</span>
            </li>
            <li>
              <span class="xuhao">7</span>天泉圣子
              <span class="yuepiao">8977</span>
            </li>
            <li>
              <span class="xuhao">8</span>大国名厨
              <span class="yuepiao">8875</span>
            </li>
            <li>
              <span class="xuhao">9</span>边月满西山
              <span class="yuepiao">8188</span>
            </li>
            <li>
              <span class="xuhao">10</span>赘婿出山
              <span class="yuepiao">7013</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-bottom">
        <div class="title1-bottom">近期开服</div>
        <div class="list-info">
          <div class="game-info">
            热血战歌
            <i>
              <img src="../../../assets/img/fire.png" alt />
            </i>
            <span class="info">5区</span>
            <span class="times">6-13 10:00</span>
          </div>
          <div class="game-info" style="color:#333333">
            别惹三国
            <i></i>
            <span class="info" style="color:#333333;padding-left: 13px"
              >12区</span
            >
            <span class="times">6-11 10:00</span>
          </div>
          <div class="game-info" style="color:#333333">
            乐蜀三国2
            <i></i>
            <span class="info" style="color:#333333;padding-left: 5px"
              >15区</span
            >
            <span class="times">5-19 10:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper";
// import "../../../units/swiper/swiper-3.4.2.min.css";

export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        effect : 'fade'
      }
    };
  },
  created() {},
  methods: {
    mouseenter1(){
      this.swiper.autoplay.stop()
    },
    mouseleave1(){
      this.swiper.autoplay.start()
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
  }
};
</script>

<style lang="less" scoped>
.qianjing{
  width: 40px;
    height: 50px;
    left: 0;
}
.houtui{
  width: 40px;
    height: 50px;
    right: 0;
}
.bottom-swiper{
  
  text-align: right;
}
.swiper-slide img {
  width: 718px;
  height: 303px;
}
swiper-slide{
  position: relative;
}
.swiper-slide .swiper-texx{
  position: absolute;
  bottom: 0;
  color: #fff;
  line-height: 38px;
  letter-spacing: 1px;
  font-size: 14px;
  padding-left: 20px;
  background: rgba(51,51,51,.7);
  width: 718px;
}
.topContent {
  padding-top: 20px;
  .top-nav {
    width: 236px;
    height: 303px;
    border: 1px solid #f0f0f0;
    .title {
      font-size: 16px;
      background-color: #f2f2f2;
      font-weight: 700;
      line-height: 52px;
      padding-left: 21px;
    }
    .nav-list {
      font-size: 14px;
      color: #333;
      letter-spacing: 1px;
      display: inline-block;
      background-color: #fafafa;
      .sprite i {
        background-image: url("../../../assets/img/cateico.png");
        width: 26px;
        background-repeat: no-repeat;
        display: inline-block;
        height: 19px;
        vertical-align: middle;
      }
      .sprite {
        li {
          margin-left: 20px;
          width: 86px;
          line-height: 50px;
          float: left;
          .icon1 {
            background-position: 20% 1.529%;
          }
          .icon2 {
            background-position: 0 11.723%;
          }
          .icon3 {
            background-position: 0 21.894%;
          }
          .icon4 {
            background-position: 0 32.077%;
          }
          .icon5 {
            background-position: 0 42.304%;
          }
          .icon6 {
            background-position: 0 52.284%;
          }
          .icon7 {
            background-position: 0 62.691%;
          }
          .icon8 {
            background-position: 0 72.811%;
          }
          .icon9 {
            background-position: 0 83.163%;
          }
          .icon10 {
            background-position: 0 93.177%;
          }
        }
      }
    }
  }
}
.left-content {
  float: left;
  .bottom {
    margin-top: 5px;
    width: 236px;
    height: 214px;
    background-color: #fafafa;
    border:  1px solid #f0f0f0;;
    padding: 18px 15px 18px 20px;
    .bottom-title {
      color: #b01f2e;
      font-size: 16px;
      font-weight: 700;
      padding-bottom: 9px;
    }
    ul {
      li {
        font-size: 14px;
        color: #333;
        letter-spacing: 1px;
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .more {
      font-size: 12px;
      color: #999;
      letter-spacing: 1px;
      line-height: 16px;
      margin-top: 11px;
    }
  }
}
.center-content {
  float: left;
  .swipers {
    width: 718px;
    height: 303px;
    border: 1px solid #f0f0f0;
    margin-left: 5px;
  }
  .chunk2 {
    width: 718px;
    height: 214px;
    margin-top: 5px;
    padding: 17px 7px 14px 21px;
    border: 1px solid #f0f0f0;
    margin-left: 5px;
    .chunk2-list {
      float: left;
      width: 50%;
      .chunk2-title {
        color: #a11313;
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: 700;
        padding-bottom: 8px;
      }
      .text {
        font-size: 14px;
        color: #333;
        letter-spacing: 1px;
        line-height: 30px;
        span {
          color: #999;
          padding-right: 4px;
        }
      }
    }
  }
}
.right-content {
  float: left;
  .right-list {
    border: 1px solid #f0f0f0;
    width: 236px;
    height: 386px;
    padding: 15px 17px 10px;
    margin-left: 5px;
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
  .right-bottom {
    width: 236px;
    height: 131px;
    border: 1px solid #f0f0f0;
    margin-top: 5px;
    padding: 17px 12px 0 20px;
    margin-left: 5px;
    .title1-bottom {
      font-size: 16px;
      color: #333;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .list-info {
      .game-info {
        position: relative;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 1px;
        color: #e84848;
        line-height: 24px;
        i {
          display: inline-block;
          padding-left: 12px;
          img{
            border-radius: 50%;
          }
        }
        .info {
          display: inline-block;
          color: #e84848;
          font-size: 12px;
        }
        .times {
          display: inline-block;
          font-size: 12px;
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>
