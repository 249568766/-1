<template>
  <div class="header1">
    <div class="header clerfix">
      <div class="header-left">
        <img src="../../../assets/img/logo.png" alt />
      </div>
      <div class="header-center">
        <div class="search">
          <input type="text" placeholder="雪中悍刀行" />
          <div class="seach-icon">
            <img src="../../../assets/img/search.png" alt />
          </div>
        </div>
      </div>
      <div class="header-right">
        <span>登录</span>
        <span>注册</span>
        <span>
          <img src="../../../assets/img/pay.png" alt />
          <span class="pay">充值</span>
        </span>
      </div>
    </div>
    <div class="nav clerfix">
      <div class="nav-first">
        <span style="color:#d32f2f">
          首页
          <em></em>
        </span>
        <span>书库</span>
        <span>排行</span>
        <span>完本</span>
        <span>花语女生网</span>
        <span>漫画</span>
        <span>
          <img src="../../../assets/img/phone.png" alt />
          <span>移动端</span>
        </span>
      </div>
      <div class="nav-socend">
        <span class="author">
          <img src="../../../assets/img/author-zone.png" alt />
          <span>作者专区</span>
        </span>
        <span>
          <img src="../../../assets/img/game-icon.png" alt />
          <span>游戏中心</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.header1 {
  padding: 30px 0 10px;
  .header {
    padding-bottom: 36px;
  }
  .nav {
    border-bottom: 2px solid #ededed;
    .nav-first {
      float: left;
      em {
        background: #d32f2f;
        display: block;
        height: 4px;
        margin: 4px auto 0;
        width: 60%;
      }
      span {
        font-size: 16px;
        color: #333333;
        line-height: 21px;
        display: inline-block;
        font-weight: 700;
        margin-right: 83px;
      }
    }
    .nav-socend {
      float: right;
      min-width: 200px;
      min-width: 200px;
      .author {
        margin-right: 30px;
      }
      span {
        font-size: 16px;
        color: #333333;
        line-height: 21px;
        display: inline-block;
        font-weight: 700;
      }
    }
  }
  .header-left {
    float: left;
    width: 167px;
    height: 32px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header-center {
    float: left;
    margin-left: 227px;
    width: 338px;
    height: 34px;
    background: #fafafa;
    border-radius: 2px;
    .search {
      position: relative;
      input {
        height: 34px;
        width: 298px;
        border: 1px solid #e0e0e0;
        color: #333;
        font-size: 14px;
        line-height: 32px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        padding-left: 14px;
        letter-spacing: 1px;
        outline: none;
      }
      .seach-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 34px;
        background-color: #d32f2f;
        text-align: center;
        img {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .header-right {
    float: right;
    font-size: 12px;
    color: #333333;
    letter-spacing: 1px;
    line-height: 34px;
    span {
      margin-left: 15px;
      text-align: center;
      img {
        margin-top: -3px;
        margin-right: -2px;
      }
      .pay {
        margin-left: 0px;
      }
    }
  }
}
</style>