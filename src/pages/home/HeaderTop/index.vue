<template>
  <div class="headerTop">
    <div class="wrap">
      <div class="head-top clerfix">
        <div class="logoImgs">
          <img src="../../../assets/img/logo.png" alt />
        </div>
        <div class="form-search">
          <input class="search-text" type="text" placeholder="雪中悍刀行" />
          <input class="search-btn" type="submit" value />
        </div>
        <div class="menu clerfix">
          <p>首页</p>
          <p @mouseenter="category" @mouseleave="leaves">
            分类
            <em></em>
          </p>
          <div class="tabA-float" v-show="isCategroy" @mouseenter="category" @mouseleave="leaves">
            <div class="jiantou"></div>
            <ul>
              <li>奇幻玄幻</li>
              <li>武侠仙侠</li>
              <li>历史军事</li>
              <li>都市娱乐</li>
              <li>竞技同人</li>
              <li>科幻游戏</li>
              <li>悬疑灵异</li>
              <li>二次元</li>
            </ul>
          </div>
          <p>排行</p>
          <p>书库</p>
          <p>完本</p>
          <p>作者专区</p>
        </div>
        <div class="pay">充值</div>
        <div class="right-wrap-login">
          <div class="unlogin clerfix">
            <div class="login1">登录</div>
            <div class="regist">注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCategroy: false
    };
  },
  methods: {
    category() {
      this.isCategroy = true;
    },
    leaves() {
      this.isCategroy = false;
    }
  }
};
</script>

<style lang="less" scoped>
.headerTop {
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  background: #fafafa;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 99;
  color: #333;
  font-size: 12px;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    .head-top {
      padding-top: 13px;
      position: relative;
      .logoImgs {
        margin-top: 7px;
        float: left;
        img {
          width: 109px;
          height: 20px;
        }
      }
      .form-search {
        position: absolute;
        left: 610px;
        margin-left: 0;
        width: 270px;
        height: 34px;
        background: #fafafa;
        border-radius: 2px;
        .search-text {
          width: 231px;
          border: 1px solid #e0e0e0;
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
          height: 32px;
          line-height: 30px;
          border-right: 0 none;
          padding-left: 14px;
          font-size: 14px;
          letter-spacing: 1px;
          color: #333;
          position: relative;
          right: -1px;
          float: left;
          outline: none;
        }
        .search-btn {
          border: 1px solid #e0e0e0;
          border-left: 0 none;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          width: 38px;
          height: 32px;
          background: url("../../../assets/img/search2.png") no-repeat center
            center #fff;
          outline: 0;
          float: right;
        }
      }
      .menu {
        position: absolute;
        left: 130px;
        top: 20px;
        line-height: 19px;
        font-size: 14px;
        letter-spacing: 1.17px;
        .tabA-float {
          font-size: 14px;
          background: rgba(60, 61, 71, 0.96);
          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
          width: 104px;
          height: auto;
          position: absolute;
          z-index: 99;
          left: 15px;
          top: 30px;
          .jiantou {
            border: 10px solid transparent;
            border-bottom-color: rgba(60, 61, 71, 0.96);
            width: 0px;
            height: 0px;
            position: absolute;
            top: -20px;
            left: 43px;
          }
          ul {
            padding: 10px 0;
            letter-spacing: 1px;
            li {
              line-height: 36px;
              text-align: center;
              color: #fff;
            }
          }
        }
        p {
          float: left;
          margin: 0 8px;
          cursor: pointer;
          em {
            background: url("../../../assets/img/icon01.png") no-repeat center
              center;
            width: 5px;
            height: 3px;
            display: inline-block;
            margin: 0 0 2px -1px;
            overflow: hidden;
          }
        }
      }
      .pay {
        padding-left: 18px;
        letter-spacing: 1px;
        margin-top: 12px;
        float: right;
        background: url("../../../assets/img/pay.png") no-repeat left center;
      }
      .right-wrap-login {
        position: absolute;
        right: 60px;
        .unlogin {
          margin-top: 12px;
          .login1 {
            margin-left: 20px;
            letter-spacing: 1px;
            float: left;
          }
          .regist {
            margin-left: 20px;
            float: left;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}
</style>