<template>
  <div class="wrap">
    <div class="comment_all">
      <h2 class="comment_all_title">全部评论</h2>
      <ul v-if="isShow">
        <li v-for="(item,index) in commonList " :key="item.memberId">
          <div class="head_photo">
            <img :src="item.headImg" alt />
          </div>
          <div class="com_con">
            <h2>{{item.nickName}}</h2>
            <p>{{item.evaluateContent}}</p>
            <div class="com_time_num">
              <span>{{item.createTime|filterTime}}</span>
              <span @touchstart="Praise(index)" class="noLike" ref="source">{{item.praiseNum}}</span>
            </div>
          </div>
        </li>
        <!-- <li>
          <div class="head_photo">
            <img src="../../assets/img/details/pig.png" alt />
          </div>
          <div class="com_con">
            <h2>傅小小</h2>
            <p>是青贮饲料吧，最好别喂鸽子青贮，因为青贮一般粗纤维含量比较高，而鸽子主要以植物籽实为食，粗纤维过高的植物不好消化。</p>
            <div class="com_time_num">
              <span>刚刚</span>
              <span class="noLike">243</span>
            </div>
          </div>
        </li>-->
      </ul>
      <div class="comment_none" v-if="!isShow">
        <p>当前还没有人评论，快来写吧！</p>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../common/js/API";
export default {
  
  props: ["id"],
  data() {
    return {
      isLike: "noLike",
      isShow: true,
      commonList: [],
      num: 0,
      qsArticleId: "",
      praiseIf: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.qsArticleId = this.id;
    this.init();
  },
  watch: {},
  methods: {
    Praise(idx) {
      if (this.commonList[idx].praiseIf == 0) {
        //点赞
        this.$http({
          url: API.praiseNum,
          method: "POST",
          data: {
            qsarticleEvaluateId: this.commonList[idx].qsarticleEvaluateId,
            memberId: 1,
            type: 1
          }
        }).then(res => {
          if (res.data.msg) {
            this.init(); //重新加载页面
            return;
          }
        });
      } else if (this.commonList[idx].praiseIf == 1) {
        //取消点赞
        this.$http({
          url: API.praiseNum,
          method: "POST",
          data: {
            qsarticleEvaluateId: this.commonList[idx].qsarticleEvaluateId,
            memberId: 1,
            type: 2
          }
        }).then(res => {
          if (res.data.msg) {
            this.init(); //重新加载页面
            return;
          }
        });
      }
    },

    //每次初始化页面
    init() {
      this.$http({
        url: API.commonList,
        method: "POST",
        data: {
          qsArticleId: this.qsArticleId,
          page: 1,
          limit: 10,
          memberId: 1
        }
      }).then(res => {
        this.commonList = res.data.data.list;
        
        if (this.commonList.length == 0) {
          this.isShow = false;
          return;
        } else {
          this.isShow = true
          for (var i = 0; i < this.commonList.length; i++) {
            this.num = i;
            (function(num, that) {
              if (that.commonList[num].praiseIf == "0") {
                //未点赞状态
                that.$nextTick(() => {
                  var sourceLoading = that.$refs.source;
                  sourceLoading[num].classList.remove("like");
                });
              } else if (that.commonList[num].praiseIf == "1") {
                //点赞状态
                that.$nextTick(() => {
                  var sourceLoading = that.$refs.source;
                  sourceLoading[num].classList.add("like");
                });
              }
            })(this.num, this);
          }
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped >
.wrap {
  width: 100%;
  padding-top: 0.3rem;
  border-top: 0.2rem solid #f7f7f7;
  border-bottom: 0.2rem solid #f7f7f7;
  margin-bottom: 0.8rem;
}
.comment_all {
  margin: 0 auto;
}
.comment_all .comment_all_title {
  width: 94%;
  margin: 0 auto;
  font-size: 0.3rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.comment_all li {
  display: flex;
}
.head_photo {
  width: 1rem;
}
.head_photo img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.com_con {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #f2f2f2;
  padding-right: 0.15rem;
  margin-left: 0.2rem;
}
.com_con h2 {
  font-size: 0.3rem;
  line-height: 0.9rem;
  color: #35343d;
  font-weight: 500;
}
.com_con p {
  font-size: 0.2rem;
  line-height: 0.4rem;
  color: #333;
  font-weight: 500;
}
.com_time_num {
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
.com_time_num span {
  color: #999;
}
.com_time_num span:nth-child(2) {
  display: inline-block;
  text-align: right;
  width: 0.8rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
.noLike {
  background: url("../../assets/img/details/icon_like.png") no-repeat 0 center;
  background-size: 0.3rem;
}
.like {
  background: url("../../assets/img/details/icon_like2.png") no-repeat 0 center;
  background-size: 0.3rem;
}
.comment_none {
  height: 2rem;
  text-align: center;
}
.comment_none p {
  font-size: 0.28rem;
  color: #858585;
  line-height: 2rem;
}
</style>
