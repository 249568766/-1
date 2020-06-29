<template>
  <div>
    <HeaderTop v-show="isShow" />
    <div class="container">
      <Header />
      <TopContent />
      <Classic />
      <Games />
      <Phb />
      <Boys />
      <Girls />
      <FreeNaveo />
      <FreeTime />
    </div>
    <BottomText />
    <RightFixed :isFixed="isFixed"/>
  </div>
</template>

<script>
import Header from "./Header/index";
import TopContent from "./TopContent";
import Classic from "./Classic";
import Games from "./Games";
import Phb from "./Phb";
import Boys from "./Boys";
import Girls from "./Girls";
import FreeNaveo from "./FreeNaveo";
import FreeTime from "./FreeTime";
import BottomText from "./BottomText";
import HeaderTop from "./HeaderTop";
import RightFixed from "./RightFixed";

export default {
  data() {
    return {
      isShow: false,
      isFixed: false,
    };
  },
  components: {
    Header,
    TopContent,
    Classic,
    Games,
    Phb,
    Boys,
    Girls,
    FreeNaveo,
    FreeTime,
    BottomText,
    HeaderTop,
    RightFixed
  },
  methods: {},
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 200) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      scrollTop >= 600 ? (this.isFixed = true) : (this.isFixed = false);
    });
  },
  beforeDestroy () {
    window.removeEventListener('scroll')
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 76px 0 76px;
  min-width: 1366px;
}
</style>