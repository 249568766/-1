<template>
  <div class="games clerfix">
    <div class="games-content">
      <div class="game-box clerfix">
        <div class="content">
          <img src="../../../assets/img/291-20010G44038.jpg" alt />
        </div>
        <div class="games-list">
          <div class="titleq">
            别惹三国
            <i></i>
          </div>
          <div class="categrayioes">类型： 战争策略</div>
          <div class="rukou">
            <div class="guanwang">>官网</div>
            <div class="jingru">进入</div>
          </div>
        </div>
      </div>
    </div>
    <div class="games-content">
      <div class="game-box clerfix">
        <div class="content">
          <img src="../../../assets/img/u=2523720633,1712322972&fm=85&app=92&f=JPEG.jpg" alt />
        </div>
        <div class="games-list">
          <div class="titleq">
            热血战歌
            <i></i>
          </div>
          <div class="categrayioes">类型： 角色扮演</div>
          <div class="rukou">
            <div class="guanwang">>官网</div>
            <div class="jingru">进入</div>
          </div>
        </div>
      </div>
    </div>
    <div class="games-content">
      <div class="game-box clerfix">
        <div class="content">
          <img src="../../../assets/img/u=3395734692,1652925416&fm=85&app=92&f=JPEG.jpg" alt />
        </div>
        <div class="games-list">
          <div class="titleq">
            乐蜀三国2
            <i></i>
          </div>
          <div class="categrayioes">类型： 角色扮演</div>
          <div class="rukou">
            <div class="guanwang">>官网</div>
            <div class="jingru">进入</div>
          </div>
        </div>
      </div>
    </div>
    <div class="games-content">
      <div class="game-box clerfix">
        <div class="content">
          <img src="../../../assets/img/u=1560053957,3789545061&fm=179&app=42&f=JPEG.jpg" alt />
        </div>
        <div class="games-list">
          <div class="titleq">
            三国群英传
            <i></i>
          </div>
          <div class="categrayioes">类型： 战争策略</div>
          <div class="rukou">
            <div class="guanwang">>官网</div>
            <div class="jingru">进入</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.games {
  height: 111px;
  margin-top: 40px;
  .games-content {
    border: 1px solid #f0f0f0;
    float: left;
    width: 296px;
    margin-right: 6px;
    .game-box {
      padding: 17px 18px;
      position: relative;
      .content {
        width: 76px;
        height: 76px;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        float: left;
        margin-right: 15px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
      .games-list {
        float: left;
        .titleq {
          color: #333;
          line-height: 24px;
          font-size: 18px;
          letter-spacing: 1px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 5px;
          i {
            background-image: url("../../../assets/img/fire.png");
            background-repeat: no-repeat;
            background-position: center;
            width: 10px;
            height: 10px;
            display: inline-block;
            margin: 8px 0 0 6px;
            border-radius: 50%;
          }
        }
        .categrayioes {
          font-size: 14px;
          color: #333;
          letter-spacing: 1px;
        }
        .rukou {
          .guanwang {
            margin-top: 10px;
            font-size: 14px;
            color: #333;
          }
          .jingru {
            width: 60px;
            height: 25px;
            background: #fc7403;
            border-radius: 2px;
            position: absolute;
            right: 18px;
            bottom: 17px;
            text-align: center;
            line-height: 25px;
            font-size: 14px;
            letter-spacing: 1px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
