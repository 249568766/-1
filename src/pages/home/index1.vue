<template>
  <div class="container">
    <div class="header-top">
      <div class="title">
        <div class="logo"></div>
        <div class="search">
          <input type="text" placeholder="书籍、电影、音乐、小组、小站、成员" />
          <div class="search-icon"></div>
        </div>
      </div>
      <ul class="sprites">
        <li class="icon1"></li>
        <li class="icon2"></li>
        <li class="icon3"></li>
        <li class="icon4"></li>
        <li class="icon5"></li>
        <li class="icon6"></li>
        <li class="icon7"></li>
        <li class="icon8"></li>
        <li class="icon9"></li>
      </ul>
    </div>
    <div class="sencend">
      <div class="picture">
        <img
          src="https://img9.doubanio.com/view/puppy_image/raw/public/16ad990ec23uwn790d4.jpg"
          alt
        />
        <div class="chunk1">
          <div class="title-1">豆瓣 6.0</div>
          <div class="down">
            <div class="down-app">
              <span>下载豆瓣App</span>
            </div>
            <i class="Qr-code"></i>
          </div>
        </div>
      </div>
      <div class="userform">
        <div class="user-title">
          <div class="text-login">短信登录/注册</div>
          <div class="password-login">密码登录</div>
        </div>
        <div class="login-lohin">
          <img
            src="data:image/png;base64,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"
            alt
          />
        </div>
        <div class="user-agreement">
          请仔细阅读
          <span>豆瓣使用协议、隐私政策</span>
        </div>
        <div class="chunk2">
          <div class="area-code">+86</div>
          <input type="text" placeholder="手机号" class="phone" />
        </div>
        <div class="chunk3">
          <input type="text" placeholder="验证码" class="text-code" />
          <div class="verification-code">获取验证码</div>
        </div>
        <div class="login">登录豆瓣</div>
        <div class="chunk4">
          <div class="next-login">
            <input type="checkbox" />下次自动登录
          </div>
          <div class="is-code">收不到验证码</div>
        </div>
        <div class="line"></div>
        <div class="chunk5">
          <div class="third-login">第三方登录</div>
          <div class="icon-2">
            <i class="icon2-lohin"></i>
            <i class="icon3-login"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="third">
      <div class="chunk-title">
        <div class="hot-title">
          热点内容 ······ (
          <span>更多</span> )
        </div>
        <div class="chunk5">
          <div class="photoss">
            <div class="photol1">
              <div class="photo-img">
                <img
                  src="https://img3.doubanio.com/view/photo/albumcover/public/p2457804990.webp"
                  alt
                />
              </div>
              <div class="photo-title">
                姥爷的诗
                <span class="nums">19张照片</span>
              </div>
            </div>
            <div class="photol2">
              <div class="photo-img">
                <img
                  src="https://img1.doubanio.com/view/photo/albumcover/public/p2534644818.webp"
                  alt
                />
              </div>
              <div class="photo-title">
                废墟 | “和大自然融为一体的房间”——迷失宫殿
                <span class="nums">58张照片</span>
              </div>
            </div>
            <div class="photol3">
              <div class="photo-img">
                <img
                  src="https://img3.doubanio.com/view/photo/albumcover/public/p2551445732.webp"
                  alt
                />
              </div>
              <div class="photo-title">
                「墟墓之間」──華東
                <span class="nums">166张照片</span>
              </div>
            </div>
            <div class="photol4">
              <div class="photo-img">
                <img
                  src="https://img9.doubanio.com/view/photo/albumcover/public/p2544435894.webp"
                  alt
                />
              </div>
              <div class="photo-title">
                也许每天更新
                <span class="nums">100张照片</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chunk6">
          <ul class="article">
            <li>生而月半，我很抱歉？aka：被fat shaming裹挟的前半生</li>
            <div>Lan的日记</div>
            <p>写在前面：今天转播友邻的广播之后，激起了尘封在心里的很多往事。这是个我一直不...</p>
            <li>乌漆黑墙——绍兴民居的本色</li>
            <li>一束</li>
            <li>怎么饲养水母君</li>
            <li>一个被网贷杀死的年轻人</li>
            <li>一封寄不出去的信</li>
            <li>问天</li>
            <li>童年观察与思考</li>
            <li>潮间带</li>
            <li>今年春天的17个周末</li>
          </ul>
        </div>
      </div>
      <div class="hot-topic">
        <div>
          热门话题 · · · · · · (
          <span>去话题广场</span> )
        </div>
        <ul>
          <li>你的爸爸做过哪些温柔又可爱的事</li>
          <p>369.2万次浏览</p>
          <li>你是如何与父亲和解的？</li>
          <p>36.9万次浏览</p>
          <li>作为图书编辑，你的斗志被磨灭的时刻</li>
          <p>29.9万次浏览</p>
          <li>看展记</li>
          <p>2168.4万次浏览</p>
          <li>栈道历险记</li>
          <p>4154次浏览</p>
          <li>你有过哪些莫名其妙的受伤经历？</li>
          <p>99.9万次浏览</p>
        </ul>
      </div>
    </div>
    <div class="four">
      <div class="four-title">
        <div class="title2">豆瓣时间</div>
        <div class="title3">
          热门专栏 · · · · · · (
          <span>更多</span> )
        </div>
      </div>
      <div class="row">
        <div class="row1">
          <ul class="ul-row">
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img1.doubanio.com/dae/niffler/niffler/images/fbcd1ec2-b112-11ea-909d-d2d7f8baec3a.png"
                  alt
                />
                <div class="title-row">
                  <div>一切美好的事物都与你有关——21天走出低自尊</div>
                  <p>音频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img3.doubanio.com/dae/niffler/niffler/images/7b986048-9f1c-11ea-8b53-6e94b03bf1e1.jpg"
                  alt
                />
                <div class="title-row">
                  <div>童话交响梦——古典音乐这样听</div>
                  <p>音频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img1.doubanio.com/dae/niffler/niffler/images/ffb879fe-91d3-11ea-ac42-de2223cd0c89.jpg"
                  alt
                />
                <div class="title-row">
                  <div>简食知味——20道全生素食料理课</div>
                  <p>视频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img3.doubanio.com/dae/niffler/niffler/images/c1a3cfde-8543-11ea-a58d-5aaa293ef1e1.jpg"
                  alt
                />
                <div class="title-row">
                  <div>人心可测——姜振宇的微表情读心术</div>
                  <p>音频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img1.doubanio.com/dae/niffler/niffler/images/6cf22398-757e-11ea-8774-fea672b52f7a.jpg"
                  alt
                />
                <div class="title-row">
                  <div>生死之间：10堂课学会如何与疾病共处</div>
                  <p>音频专栏</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="row1">
          <ul class="ul-row">
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img3.doubanio.com/dae/niffler/niffler/images/eb08fc6c-7348-11ea-afb6-5a5bcc9605bf.jpg"
                  alt
                />
                <div class="title-row">
                  <div class="title-row">爱我，请先懂我——纽约大学艺术治疗师的儿童心理成长课</div>
                  <p>音频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img1.doubanio.com/dae/niffler/niffler/images/7df08276-6cea-11ea-b1b3-fea672b52f7a.jpg"
                  alt
                />
                <div class="title-row">
                  <div>罪恶的背后——人人必修的60堂犯罪心理学</div>
                  <p>音频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img9.doubanio.com/dae/niffler/niffler/images/8e457bfe-5872-11ea-916d-4e50984eeed6.jpg"
                  alt
                />
                <div class="title-row">
                  <div>用性别之尺丈量世界——18堂思想课解读女性问题</div>
                  <p>音频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img1.doubanio.com/dae/niffler/niffler/images/a4283c6c-5f80-11ea-b2da-560baafd962b.jpg"
                  alt
                />
                <div class="title-row">
                  <div>微电影剧作——如何在剧作中运用观众心理学</div>
                  <p>视频专栏</p>
                </div>
              </div>
            </li>
            <li class="li-row">
              <div class="img-row">
                <img
                  src="https://img9.doubanio.com/dae/niffler/niffler/images/0b1c1886-4cb1-11ea-a5fc-ce0829b4ff74.jpg"
                  alt
                />
                <div class="title-row">
                  <div>电影产业破壁课——13小时重塑电影世界观</div>
                  <p>视频专栏</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="five clerfix">
      <div class="nav">
        <ul class="movie">
          <li>
            <h1>电影</h1>
          </li>
          <li>影讯&购票</li>
          <li>
            选电影
            <i class="news">
              <img src="https://img3.doubanio.com/pics/new_menu.gif" alt />
            </i>
          </li>
          <li>电视剧</li>
          <li>排行榜</li>
          <li>分类</li>
          <li>影评</li>
          <li>预告片</li>
          <li>问答</li>
        </ul>
      </div>
      <div class="hit">
        <div class="loading">
          正在热映 · · · · · · (
          <span>更多</span> )
        </div>
        <div class="hit-card clearfix">
          <div class="numbers">
            <div class="card">
              <img
                src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2574172427.webp"
                alt
              />
              <p>利刃出鞘</p>
              <div class="sprie-star">
                <div class="star1"></div>
              </div>
              <span>8.2</span>
              <div class="buys">选座购票</div>
            </div>
          </div>
          <div class="numbers">
            <div class="card">
              <img
                src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.webp"
                alt
              />
              <p>美丽人生</p>
              <div class="sprie-star">
                <div class="star2"></div>
              </div>
              <span>8.2</span>
              <div class="buys">选座购票</div>
            </div>
          </div>
          <div class="numbers">
            <div class="card">
              <img
                src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.webp"
                alt
              />
              <p>理查德·朱维尔...</p>
              <div class="sprie-star">
                <div class="star3"></div>
              </div>
              <span>8.2</span>
              <div class="buys">选座购票</div>
            </div>
          </div>
          <div class="numbers">
            <div class="card">
              <img
                src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2579512247.webp"
                alt
              />
              <p>灭绝</p>
              <div class="sprie-star">
                <div class="star4"></div>
              </div>
              <span>8.2</span>
              <div class="buys">选座购票</div>
            </div>
          </div>
          <div class="numbers">
            <div class="card">
              <img
                src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578722076.webp"
                alt
              />
              <p>紫罗兰永恒花园...</p>
              <div class="sprie-star">
                <div class="star5"></div>
              </div>
              <span>8.2</span>
              <div class="buys">选座购票</div>
            </div>
          </div>
          <div class="numbers">
            <div class="card">
              <img
                src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2575892083.webp"
                alt
              />
              <p>坂本龙一：终曲...</p>
              <div class="sprie-star">
                <i class="star6"></i>
              </div>
              <span>8.2</span>
              <div class="buys">选座购票</div>
            </div>
          </div>
        </div>
      </div>
      <div class="classification">
        <div class="classification-title">
          影片分类 ······ (
          <span>更多</span> )
        </div>
        <div class="classification-movie">
          <ul>
            <li>爱情</li>
            <li>剧情</li>
            <li>喜剧</li>
            <li>动画</li>
            <li>经典</li>
            <li>科幻</li>
            <li>悬疑</li>
            <li>动作</li>
            <li>犯罪</li>
            <li>青春</li>
            <li>搞笑</li>
            <li>文艺</li>
            <li>惊悚</li>
            <li>励志</li>
            <li>纪录片</li>
            <li>黑色幽默</li>
            <li>战争</li>
            <li>恐怖</li>
            <li>美国</li>
            <li>日本</li>
            <li>香港</li>
            <li>韩国</li>
            <li>中国大陆</li>
            <li>中国</li>
            <li>英国</li>
            <li>法国</li>
            <li>台湾</li>
            <li>印度</li>
          </ul>
        </div>
        <div class="recent-hot">
          <div class="recent-title">
            近期热门 ······ (
            <span>更多</span> )
          </div>
          <div class="list">
            <ol>
              <li>誓血五人组</li>
              <li>给我翅膀</li>
              <li>黑帮大佬和我的365日</li>
              <li>爱情人偶</li>
              <li>忠贞</li>
              <li>鲁邦三世 The First</li>
              <li>大饿</li>
              <li>火口的两人</li>
              <li>知晓天空之蓝的人啊</li>
              <li>野性的呼唤</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="six">
      <div class="six-title">
        <ul>
          <li>小组</li>
          <li>精选</li>
          <li>文化</li>
          <li>行摄</li>
          <li>娱乐</li>
          <li>时尚</li>
          <li>生活</li>
          <li>科技</li>
        </ul>
      </div>
      <div class="six-center">
        <div class="center-title">热门小组  · · · · · ·  ( <span>更多</span> )</div>
        <div class="author-list">

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.header-top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  padding: 2px;
  .title {
    display: flex;
    margin-left: 20px;
  }
  .search {
    width: 272px;
    height: 32px;
    display: flex;
    border: 1px solid #c3c3c3;
    align-items: center;
    input::placeholder {
      color: #c3c3c3;
    }
    input {
      width: 250px;
      height: 25px;
      padding: 3px;
      border: none;
      outline: none;
    }
    .search-icon {
      width: 30px;
      height: 30px;
      background-image: url("https://img3.doubanio.com/f/sns/f71f15922ebd7c0ff0ea0e7a25577529efd8981a/pics/icon/bn_srh_1.png");
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
  }
  .logo {
    width: 160px;
    height: 30px;
    margin-right: 20px;
    background-image: url("https://img3.doubanio.com/f/sns/19886d443852bee48de2ed91f4a3bdfdaf8c809c/pics/nav/logo_db.png");
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .sprites {
    padding-right: 50px;
    width: 515px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon1 {
      background-position: 0%;
      cursor: pointer;
    }
    .icon2 {
      background-position: 14.218%;
      cursor: pointer;
    }
    .icon3 {
      background-position: 28.436%;
      cursor: pointer;
    }
    .icon4 {
      background-position: 71.09%;
      cursor: pointer;
    }
    .icon5 {
      background-position: 42.654%;
      cursor: pointer;
    }
    .icon6 {
      background-image: url("https://img3.doubanio.com/f/sns/f3ba00ef46f185989b70ac6841d9f4d67b6e3a25/pics/sns/anony_home/ic_read_home_nav.png");
      vertical-align: middle;
      background-repeat: no-repeat;
      background-size: 100%;
      cursor: pointer;
    }
    .icon7 {
      background-position: 56.808%;
      cursor: pointer;
    }
    .icon8 {
      background-image: url("https://img3.doubanio.com/f/sns/b474dd402e4293943146a4789de3dae88ec96636/pics/sns/anony_home/ic_shijian_home_nav.png");
      background-repeat: no-repeat;
      background-size: 100%;
      cursor: pointer;
    }
    .icon9 {
      background-position: 100%;
      cursor: pointer;
    }
  }
  .sprites li {
    vertical-align: middle;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-image: url("https://img3.doubanio.com/f/sns/8536084688879cb1137e8efdff30e59614ff2f86/pics/sns/anony_home/anony_nav_logo.png");
    background-repeat: no-repeat;
  }
}
.sencend {
  position: relative;
  width: 100%;
  height: 304px;
  background-color: #edf4ed;
  .picture {
    position: relative;
    width: 760px;
    height: 100%;
    img {
      width: 650px;
      height: 100%;
    }
    .chunk1 {
      width: 150px;
      height: 120px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      .title-1 {
        font-size: 25px;
      }
      .down {
        margin-top: 20px;
        position: relative;
        .down-app {
          background-color: #00b51d;
          text-align: center;
          border-radius: 2px;
          line-height: 2;
          width: 75%;
          cursor: pointer;
          span {
            font-size: 12px;
            color: #ffffff;
          }
        }
        i {
          border: 1px solid green;
          border-radius: 3px;
          position: absolute;
          right: 0;
          top: 0;
          width: 30px;
          height: 30px;
          background-image: url("https://img3.doubanio.com/f/sns/0c708de69ce692883c1310053c5748c538938cb0/pics/sns/anony_home/icon_qrcode_green.png");
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
        }
      }
    }
  }
  .userform {
    position: absolute;
    width: 300px;
    right: 15%;
    top: 0;
    height: 296px;
    max-width: 300px;
    padding: 30px 10px 10px;
    overflow: hidden;
    background: transparent;
    min-height: 200px;
    .user-title {
      position: relative;
      line-height: 2;
      .text-login {
        width: 50%;
        color: #333333;
        font-size: 13px;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px solid #333333;
        cursor: pointer;
      }
      .password-login {
        width: 50%;
        position: absolute;
        font-size: 13px;
        right: 20px;
        top: 0;
        border-bottom: 1px solid #ececec;
        text-align: center;
        color: #9b9b9b;
        cursor: pointer;
      }
    }
    .login-lohin {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user-agreement {
      margin-top: 10px;
      font-size: 12px;
      span {
        color: #41ac52;
        cursor: pointer;
      }
    }
    .chunk2 {
      margin-top: 10px;
      position: relative;
      border: 1px solid #e4e6e5;
      height: 29px;
      line-height: 26px;
      background-color: #ffffff;
      .area-code {
        cursor: pointer;
        color: #333333;
        width: 14%;
        height: 26;
        font-weight: 600;
        text-align: center;
        background-color: #ffffff;
        line-height: 28px;
      }
      input {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 83%;
        height: 75%;
        border: none;
        background-color: #ffffff;
        padding: 1px;
        outline: none;
        border-left: 1px solid #c8cac9;
        padding-left: 5px;
      }
    }
    .chunk3 {
      position: relative;
      margin-top: 10px;
      border: 1px solid #e4e6e5;
      height: 29px;
      line-height: 26px;
      background-color: #ffffff;
      .text-code {
        position: relative;
        top: 50%;
        transform: translateY(-60%);
        width: 70%;
        border: none;
        background-color: #ffffff;
        height: 85%;
        outline: none;
        padding-left: 5px;
      }
      .verification-code {
        width: 30%;
        position: absolute;
        background-color: #ffffff;
        top: 0;
        right: 0;
        text-align: center;
        cursor: pointer;
        color: #41ac52;
        font-size: 13px;
      }
    }
    .login {
      width: 100%;
      background-color: rgba(66, 189, 86, 0.5);
      text-align: center;
      font-size: 15px;
      color: #ffffff;
      border-radius: 2px;
      margin-top: 10px;
      height: 34px;
      line-height: 34px;
    }
    .chunk4 {
      font-size: 13px;
      margin-top: 10px;
      position: relative;

      .is-code {
        position: absolute;
        color: #41ac52;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }
    .line {
      margin-top: 15px;
      width: 100%;
      border-bottom: 1px solid #dddddd;
    }
    .chunk5 {
      margin-top: 15px;
      font-size: 13px;
      position: relative;
      .third-login {
        color: #9b9b9b;
        line-height: 2;
      }
      .icon-2 {
        .icon2-lohin {
          position: absolute;
          top: 0;
          left: 28%;
          background-image: url("../../assets/image/weixin.svg");
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
          width: 25px;
          height: 25px;
          cursor: pointer;
        }
        .icon3-login {
          position: absolute;
          top: 0;
          left: 42%;
          width: 25px;
          height: 25px;
          background-image: url("../../assets/image/weibo.svg");
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;
        }
      }
    }
  }
}
.third {
  height: 471px;
  margin-top: 30px;
  position: relative;
  .chunk-title {
    position: relative;
    width: 60%;
    .hot-title {
      position: absolute;
      left: 180px;
      font-size: 15px;
      color: #072;
      span {
        color: #3377aa;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .chunk5 {
      .photoss {
        position: relative;
        .photol1 {
          position: absolute;
          left: 180px;
          top: 40px;
        }
        .photol2 {
          position: absolute;
          left: 360px;
          top: 40px;
        }
        .photol3 {
          position: absolute;
          left: 180px;
          top: 250px;
        }
        .photol4 {
          position: absolute;
          top: 250px;
          left: 360px;
        }
        .photo-img {
          width: 170px;
          height: 170px;

          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        }
        .nums {
          color: #999999;
        }
        .photo-title {
          font-size: 12px;
          color: #666699;
          width: 170px;
          text-align: center;
          padding: 3px;
          overflow: hidden;
        }
      }
    }
    .chunk6 {
      position: absolute;
      right: 0;
      top: 25px;
      font-size: 12px;
      width: 275px;
      height: 374px;
      .article {
        li {
          color: #3377aa;
          cursor: pointer;
          margin-top: 15px;
        }
        div {
          color: #999999;
          margin: 0;
        }
        p {
          color: #666666;
          margin: 0;
        }
      }
    }
  }
  .hot-topic {
    position: absolute;
    right: 18%;
    top: 0;
    div {
      font-size: 15px;
      color: #007722;
      padding-left: 40px;
      span {
        font-size: 12px;
        color: #3377aa;
        cursor: pointer;
      }
    }
    ul {
      li {
        font-size: 14px;
        color: #3377aa;
        cursor: pointer;
        margin-top: 20px;
      }
      p {
        font-size: 13px;
        color: #aaaaaa;
        margin: 0;
      }
    }
  }
}
.four {
  width: 100%;
  height: 573px;
  background-color: #f7f7f7;
  margin-top: 50px;
  .four-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 23%;
    flex: none;
    margin-left: 140px;
    padding-top: 27px;
    .title2 {
      color: #494949;
      font-size: 24px;
    }
    .title3 {
      color: #007722;
      font-size: 15px;
      span {
        font-size: 12px;
        color: #3377aa;
        cursor: pointer;
      }
    }
  }
  .row {
    margin-left: 200px;
    .row1 {
      .ul-row {
        display: flex;
        justify-content: space-around;
        width: 75%;
        .li-row {
          .img-row {
            img {
              width: 100px;
              height: 141px;
              cursor: pointer;
            }
            .title-row {
              width: 100px;
              text-align: center;
              div {
                color: #333333;
                font-size: 13px;
              }
              p {
                font-size: 12px;
                color: #999999;
              }
            }
          }
        }
      }
    }
  }
}
.five {
  width: 100%;
  height: 566px;
  .nav {
          float: left;
          margin-left: 12%;
          margin-top: 20px;
    .movie {
      font-size: 14px;
      color: #2277aa;
      li {
        position: relative;
        margin-top: 5px;
        cursor: pointer;
        margin-bottom: 10px;
        h1 {
          font-size: 24px;
          font-weight: 500;
        }
        .news {
          padding-left: 5px;
        }
      }
    }
  }
  .hit {
    float: right;
    margin-top: 40px;
    margin-right: 500px;
    .loading {
      font-size: 15px;
      color: #007722;
      margin-bottom: 20px;
      span {
        font-size: 12px;
        color: #2277aa;
        cursor: pointer;
      }
    }
    .hit-card {
      width: 535px;
      height: 486px;
      .numbers {
        width: 133px;
        text-align: center;
        float: left;
        margin-bottom: 20px;
        .card {
          font-size: 12px;
          img {
            width: 100px;
            height: 148px;
            cursor: pointer;
            margin-bottom: -5px;
          }
          p {
            font-size: 13px;
            color: #333333;
            margin-bottom: 5px;
          }
          .sprie-star div {
            width: 55px;
            height: 11px;
            background-repeat: no-repeat;
          }
          .sprie {
            .star1 {
              background-image: url('../../assets/image/4.png');
              width: 55px;
              height: 11px;
            }
          }
          span {
            color: #e09015;
            margin-bottom: 5px;
            display: inline-block;
          }
          .buys {
            width: 70px;
            height: 24px;
            line-height: 24px;
            background-color: #1c8bd0;
            color: #ffffff;
            margin-left: 30px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .classification {
    width: 300px;
    height: 168px;
    float: right;
    margin-top: -550px;
    margin-right: 16%;
    .classification-title {
      font-size: 15px;
      color: #007722;
      margin-left: 13%;
      width: 50%;
      span {
        font-size: 12px;
        color: #2277aa;
        cursor: pointer;
      }
    }
    .classification-movie {
      width: 100%;
      height: 100%;
      ul {
        li {
          width: 48px;
          height: 19px;
          font-size: 12px;
          color: #2277aa;
          float: left;
          text-align: left;
          margin-top: 4px;
        }
      }
    }
    .recent-hot {
      .recent-title {
        font-size: 15px;
        color: #007722;
        margin-left: 13%;
        span {
          font-size: 12px;
          color: #2277aa;
          cursor: pointer;
        }
      }
      .list{
        font-size: 12px;
        margin-left: 5%;
        ol{
          li{
            height: 22px;
            color: #2277AA;
            border-bottom: 1px solid #eaeaea;
            margin-bottom: 6px;
            text-align:left;
          }
        }
      }
    }
  }
}
</style>
