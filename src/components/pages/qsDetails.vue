<template>
  <div class="wrap">
        <v-share></v-share>
    <div class="content">
      <div class="con_title">
        <h2>{{essayDetails.articleTitle}}</h2>
        <div class="con_sketch">  <!-- 简述-->
          <span class="on">{{essayDetails.source}}</span>
          <span>{{essayDetails.createTime}}</span>
          <span>{{essayDetails.readNum}}已读</span>
        </div>
      </div>
      <div class="con_text">
        <p>适合做青贮饲料的原料较多，凡是可作饲料的青绿植物都可作青贮原料。</p>
        <p>青贮饲料的营养特点：青贮饲料可保存青绿饲料的大部分营养，贮存过程中营养物质损失较少，碳水化合物和维生素的保存率可达91%以上。可长期保存青绿饲料的青鲜多汁的特性，对泌乳家畜有重要意义；可保存青绿饲料的良好适口性和消化率。制作不受气候的影响。</p>
        <img src="../../assets/img/details/pig.png" alt />
        <p>青贮饲料的合理利用：青贮饲料主要用于饲喂反刍家畜，尤其是泌乳反刍家畜。青贮饲料饲喂量应适当，在日粮比例太高，会引起瘤胃酸中毒。</p>
      </div>
    </div>
    <v-comment :id="$route.params.id" ></v-comment>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vShare from "../views/share";
import vFooter from "../views/footer";
import vComment from "../views/commentAll";
import API from "../../common/js/API"
export default {
  props: {},
  data() {
    return {
      id:"",
      essayDetails:{}
    };
  },
  computed: {},
  created() {},
  mounted() {
      this.id = this.$route.params.id
   
    this.$http({
      url:API.essayDetails,
      method:"POST",
      data:{
        qsArticleId:this.id
      }
    }).then(res=>{
      
      this.essayDetails = res.data.data.result
    })
  },
  watch: {},
  methods: {},
  components: {
      vShare,
      vFooter,
      vComment
  }
};
</script>

<style scoped >
/* .wrap {
  width: 94%;
  margin: 0 auto;
} */
.content{
    width: 94%;
  margin: 0 auto .2rem auto;
}
.con_title {
  height: 2rem;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.con_title h2{
    font-size: .3rem;
    font-weight: bold;
    color: #333333;
    line-height: .6rem;
}
.con_sketch span{
    color: #B2B2B2;
    margin: 0 .1rem;
    font-size: .2rem;
}
.con_sketch .on{
    color: #858585;
}
.con_text p{
    font-size: .27rem;
    line-height: .5rem;
    color: #4F4F4F;
}
.con_text img{
    width: 100%;
    height: 2.5rem;
    margin :.15rem 0;
}
</style>
