<template>
  <div class="freeTime">
    <div class="girl-title">限时免费</div>
    <div class="lineg"></div>
    <div class="freeTime-box clerfix">
      <div class="lists">
        <div class="lists-title">
          今日限免
          <span>剩余时间：22 时 31 分 55 秒</span>
        </div>
        <div class="books-box clerfix">
          <div class="boxx1 clerfix">
            <div class="bookImg">
              <img src="../../../assets/img/chongzhi.jpeg" alt />
            </div>
            <div class="book-content">
              <div class="books-title">万能充值系统</div>
              <div class="catesss">奇幻玄幻</div>
              <span>172.1万 字</span>
              <div class="line222">5纵横币/千字</div>
              <div class="btnss">免费阅读</div>
            </div>
          </div>
          <div class="boxx1">
            <div class="bookImg">
              <img src="../../../assets/img/wode.jpeg" alt />
            </div>
            <div class="book-content">
              <div class="books-title">幸好，我的年少有你</div>
              <div class="catesss">都市言情</div>
              <span>36.1万 字</span>
              <div class="line222">5纵横币/千字</div>
              <div class="btnss">免费阅读</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lists" style="float: right;width:605px">
        <div class="lists-title">
          限免预告
          <span>免费时间：22 时 31 分 55 秒</span>
        </div>
        <div class="books-box clerfix">
          <div class="boxx1 clerfix">
            <div class="bookImg">
              <img src="../../../assets/img/chenshu.jpg" alt />
            </div>
            <div class="book-content">
              <div class="books-title">三国之代魏成蜀</div>
              <div class="catesss">历史军事</div>
              <span>136.3万 字</span>
              <div class="line222">5纵横币/千字</div>
              <div class="btnss">书籍详情</div>
            </div>
          </div>
          <div class="boxx1">
            <div class="bookImg">
              <img src="../../../assets/img/shouxi.jpg" alt />
            </div>
            <div class="book-content">
              <div class="books-title">霸道首席你别跑</div>
              <div class="catesss">都市言情</div>
              <span>149.8万 字</span>
              <div class="line222">5纵横币/千字</div>
              <div class="btnss">书籍详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.freeTime {
  margin-top: 50px;
  .girl-title {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    letter-spacing: 1px;
    border-bottom: 1px solid #e6e6e6;
    line-height: 40px;
  }
  .lineg {
    height: 10px;
  }
  .freeTime-box {
    margin-top: 20px;

    .lists {
      float: left;
      border: 1px solid #f0f0f0;
      width: 603px;
      height: 210px;
      background: #f5f5f5;
      padding: 20px;

      .lists-title {
        line-height: 21px;
        font-weight: 700;
        font-size: 16px;
        color: #333;
        span {
          font-size: 14px;
          color: #a11313;
          letter-spacing: 1px;
          padding-left: 9px;
          font-weight: 400;
        }
      }
      .books-box {
        padding-top: 20px;
        .boxx1 {
          margin-right: 35px;
          width: 245px;
          float: left;
          .bookImg {
            float: left;
            width: 94px;
            height: 126px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-right: 15px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .book-content {
            float: left;
            width: 135px;
            .books-title {
              font-size: 16px;
              letter-spacing: 0.89px;
              width: 130px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color: #333;
            }
            .catesss {
              border: 1px solid #e6e6e6;
              border-radius: 2px;
              color: #888;
              display: inline-block;
              padding: 2px 2px;
              font-size: 12px;
              margin-top: 15px;
            }
            span {
              color: #333;
              font-size: 12px;
            }
            .line222 {
              color: #999;
              letter-spacing: 1px;
              line-height: 30px;
              font-size: 12px;
              text-decoration: line-through;
              margin-top: 1px;
            }
            .btnss {
              border: 1px solid #d32f2f;
              border-radius: 2px;
              color: #d32f2f;
              line-height: 28px;
              text-align: center;
              font-size: 14px;
              width: 128px;
              height: 28px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>