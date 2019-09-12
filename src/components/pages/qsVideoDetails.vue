<template>
  <div class="wrap">
    <v-share></v-share>
    <div class="content">
      <div class="con_title">
        <h2>适合做青贮饲料的原料较多，凡是可作饲料的青绿植物都可作青贮原料。</h2>
        <div class="con_sketch">
          <!-- 简述-->
          <span class="on">中国养殖网</span>
          <span>2019.12.23 13:24</span>
          <span>837已读</span>
        </div>
      </div>
      <div class="playVideo">
        <video
          id="video"
          controls
          src="https://img.51miz.com/preview/video/00/00/10/90/V-109034-333D184C.mp4"
        ></video>
        <div class="playControl">
          <div>
            <img src="../../assets/img/details/icon_play.png" alt />
          </div>
          <div>00:00</div>
          <div class="play_jindu">
            <span></span>
            
          </div>
          <div>
            <img src="../../assets/img/details/yinliang.png" alt />
          </div>
          <div>
            <img src="../../assets/img/details/quanping.png" alt />
          </div>
        </div>
      </div>
      <div class="con_text">
        <p>适合做青贮饲料的原料较多，凡是可作饲料的青绿植物都可作青贮原料。</p>
        <p>青贮饲料的营养特点：青贮饲料可保存青绿饲料的大部分营养，贮存过程中营养物质损失较少，碳水化合物和维生素的保存率可达91%以上。可长期保存青绿饲料的青鲜多汁的特性，对泌乳家畜有重要意义；可保存青绿饲料的良好适口性和消化率。制作不受气候的影响。</p>
        <p>青贮饲料的合理利用：青贮饲料主要用于饲喂反刍家畜，尤其是泌乳反刍家畜。青贮饲料饲喂量应适当，在日粮比例太高，会引起瘤胃酸中毒。</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from "../views/footer";
import vShare from "../views/share";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    vFooter,
    vShare
  }
};
</script>

<style scoped >
/* .wrap {

} */
.content {
  width: 94%;
  margin: 0 auto 0.8rem auto;
}
.con_title {
  height: 2rem;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.con_title h2 {
  font-size: 0.3rem;
  font-weight: bold;
  color: #333333;
  line-height: 0.6rem;
}
.con_sketch span {
  color: #b2b2b2;
  margin: 0 0.1rem;
  font-size: 0.2rem;
}
.con_sketch .on {
  color: #858585;
}
.con_text p {
  font-size: 0.27rem;
  line-height: 0.5rem;
  color: #4f4f4f;
}
.playVideo {
  height: 3.3rem;
  margin: 0.15rem 0;
  background: #fafafa;
  display: flex;
  flex-direction: column;
}
#video {
  width: 100%;
  height: 2.5rem;
}
.playControl {
  flex: 1;
  display: flex;
}
.playControl div {
  flex: 1;
  font-size: .25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5A5A5A;
}
.playControl div img{
    width: .4rem;
    height: .4rem;
}
.play_jindu span{
        display: inline-block;
        width: 2.2rem;
        height: 2px;
        background: #DADADA;
        position: relative;
}
.play_jindu span:before{
    content: "";
    position: absolute;
    top: -0.11rem;
    left: 0;
    width: .25rem;
    height: .25rem;
    background: #53C203;
    border-radius: 50%;
}
</style>

