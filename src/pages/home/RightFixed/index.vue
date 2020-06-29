<template>
  <div class="rightFixed">
    <div class="sidebar">
      <div class="side_feedback">
        意见
        <br />反馈
      </div>
      <div class="side_zht"></div>
      <div class="sidekf"></div>
      <div class="returntop" v-show="isFixed" @click="handle"></div>
      <div class="close">关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isSet: true
    };
  },
  methods: {
    handle() {
      if (this.isSet) {
        this.interval = setInterval(() => {
          if (document.documentElement.scrollTop > 0) {
            document.documentElement.scrollTop -= 30;
            this.isSet=false
          } else {
            clearInterval(this.interval);
            this.isSet=true
          }
        });
      }
    }
  },
  beforeDestroy () {
      clearInterval(this.interval);
  }
};
</script>

<style lang="less" scoped>
.rightFixed {
  position: fixed;
  right: 15px;
  z-index: 5;
  bottom: 240px;
  width: 40px;
  margin-right: auto;
  font-size: 12px;
  color: #333;
  .side_feedback {
    margin-bottom: 5px;
    text-align: center;
    position: relative;
    margin-top: -1px;
    background-image: none;
    background-color: #3c3d47;
    color: #fff;
    border: 0;
    padding: 4px 0;
    border-radius: 2px;
    line-height: 16px;
    height: 41px;
    width: 40px;
  }
  .side_zht {
    position: relative;
    margin-top: -1px;
    border-radius: 2px 2px 0 0;
    position: relative;
    border: 1px solid #e6e6e6;
    width: 40px;
    height: 40px;
    background: url("../../../assets/img/sidebar.png") no-repeat #fff 92.037%
      85.208%;
  }
  .sidekf {
    position: relative;
    margin-top: -1px;
    border-radius: 0 0 2px 2px;
    border: 1px solid #e6e6e6;
    width: 40px;
    height: 40px;
    background: url("../../../assets/img/sidebar.png") no-repeat #fff 7.102%
      85.25%;
  }
  .returntop {
    margin-top: 10px;
    position: relative;
    background: url("../../../assets/img/backtop_w.png") no-repeat center center
      #d8d8d8;
    width: 42px;
    height: 42px;
    display: block;
    border-radius: 2px;
    overflow: hidden;
  }
  .close {
    margin-top: 4px;
    padding-left: 17px;
    width: 44px;
    height: 15px;
    background: url("../../../assets/img/fullclose.gif") no-repeat bottom left;
  }
}
</style>