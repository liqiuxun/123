<template>
  <div class="wrap">
    <!-- 全部列表 -->
    <div class="list_all">
      <!-- 前一部分 -->
      <div class="qs_rmd">
        <ul>
          <li
            v-for="(item,index) in essayList"
            :key="item.qsArticleId"
            @touchstart="goDetails(item.qsArticleId)"
          >
            <div class="list_left">
              <h2 class="mar_btm">{{item.articleTitle}}</h2>
              <span class="active" v-if="index==0">推荐</span>
              <span>{{item.source}}</span>
              <span>{{item.createTime | filterTime}}</span>
              <span>{{item.readNum}}已读</span>
            </div>
            <div class="list_right">
              <img src="../../assets/img/life/pig.png" alt />
            </div>
          </li>
          <!-- <li>
            <div class="list_left">
              <h2>青贮饲料可保存青绿饲料的大部分营养！</h2>
            
              <span>人民日报</span>
              <span>10分钟前</span>
              <span>1204已读</span>
            </div>
            <div class="list_right">
              <img src="../../assets/img/life/pig.png" alt />
            </div>
          </li>-->
        </ul>
      </div>

      <!-- 中间部分的列表 -->
      <div class="qs_essay">
        <h2>{{essayList1.articleTitle}}</h2>
        <div class="qs_essay_img">
          <span v-for="item in essayList1.materials" :key="item">
            <img :src="item" alt />
          </span>
          <!-- <img :src="essayList1.materials" alt />
          <img :src="essayList1.materials" alt />-->
        </div>
        <div class="qs_essay_num">
          <span>{{essayList1.source}}</span>
          <span>{{essayList1.createTime | filterTime}}</span>
          <span>{{essayList1.readNum}}</span>
        </div>
      </div>
      <div class="qs_essay qs_essay_2">
        <h2>青贮饲料可保存青绿饲料的大部分营养！青贮饲料可保存青绿饲料</h2>
        <div class="qs_essay_num">
          <span>党政新闻</span>
          <span>30分钟前</span>
          <span>1204已读</span>
        </div>
      </div>

      <!-- 播放生活 -->
      <div class="qs_autoPlay">
        <h2>如何集政企之力堵住此类楼市调控漏洞，打击炒房行为，成为一个紧迫的问题。</h2>
        <div class="play_video">
          <video
            id="video"
            controls
            src="https://img.51miz.com/preview/video/00/00/10/90/V-109034-333D184C.mp4"
            alt
          ></video>
          <!-- <span class="start_play"></span>
          <span class="play_time">13:43</span>-->
        </div>
        <div class="qs_essay_num">
          <span>人民日报</span>
          <span>昨天18:34</span>
          <span>3213已读</span>
        </div>
      </div>
      <!-- 最后一部分 -->
      <div class="qs_rmd">
        <ul>
          <li>
            <div class="list_left">
              <h2 class="mar_btm">青贮饲料可保存饲料营养！</h2>
              <span class="active">推荐</span>
              <span>中国新华网</span>
              <span>刚刚</span>
              <span>1204已读</span>
            </div>
            <div class="list_right">
              <img src="../../assets/img/life/pig.png" alt />
            </div>
          </li>
          <li>
            <div class="list_left">
              <h2>青贮饲料可保存青绿饲料的大部分营养！</h2>
              <!-- <span class="active">推荐</span> -->
              <span>人民日报</span>
              <span>10分钟前</span>
              <span>1204已读</span>
            </div>
            <div class="list_right">
              <img src="../../assets/img/life/pig.png" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../../common/js/API";
export default {
  props: {},
  data() {
    return {
      parameter: {
        page: 2,
        limit: 2,
        articleType: 0,
        textStr: ""
      },
      essayList: [],
      essayList1: {}
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(API.essayList);
    //  var data =this.parameter;
    //   data = this.$qs.stringify(data);
    this.$http({
      headers: {
        token:
          "KNupSPFFynPUowFpvKcX-6jJCOUccDBvD03FEkBwJKbhQMwzQLyNkM3k_xkxnFb8b2UH84vFCZpswb4ECyCFcw",
        memberId: 1,
        deviceNum: "a66404e4322adb7dM95QACPFXDZK9"
      },
      url: API.essayList,
      method: "POST",
      data: this.parameter
    })
      .then(d => {
        console.log(d);
        this.essayList = d.data.data.list;
        this.essayList1 = d.data.data.list[0];
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  methods: {
    goDetails(id) {
      this.$router.push("/qsDetails/" + id);
    }
  },
  components: {}
};
</script>

<style scoped >
body,
.wrap {
  overflow: hidden;
}
.list_all {
  width: 94%;
  margin: 0 auto;
}
.list_all li {
  height: 2.16rem;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
}
.list_left {
  width: 4.7rem;
}
.list_left h2 {
  font-size: 0.3rem;
  font-weight: 500;

  line-height: 0.55rem;
}
.list_left .mar_btm {
  margin-bottom: 0.65rem;
}
.list_left span {
  text-align: center;
  font-size: 0.1rem;
  margin: 0 0.05rem;
  color: #8c8c8c;
}
.list_left .active {
  color: #f25c62;
}
.list_right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.list_right img {
  width: 2rem;
  height: 1.5rem;
}
.qs_essay {
  height: 3.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  border-bottom: 1px solid #f2f2f2;
}
.qs_essay h2,
.qs_autoPlay h2 {
  font-size: 0.3rem;
  font-weight: 500;
  line-height: 0.53rem;
}
.qs_essay_img {
  display: flex;
  /* justify-content: space-around; */
}
.qs_essay_img span {
  flex: 1;
  margin: 0 0.05rem;
  display: flex;
  align-items: center;
}
.qs_essay_img span img {
  width: 100%;
  height: 90%;
}
.qs_essay_num span {
  display: inline-block;
  margin: 0 0.1rem;
  color: #8c8c8c;
}
.qs_essay_2 {
  height: 1.8rem;
}
.qs_autoPlay {
  display: flex;
  height: 5rem;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #f2f2f2;
}
.play_video {
  width: 100%;
  height: 3rem;
  position: relative;
}
.play_video #video {
  width: 100%;
  height: 100%;
}
.start_play {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: url("../../assets/img/life/icon_bofang.png") no-repeat center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.play_time {
  display: inline-block;
  width: 1.2rem;
  height: 0.3rem;
  background: rgba(0, 0, 0, 0.5) url("../../assets/img/life/icon_bofanging.png")
    no-repeat 0.15rem center;
  background-size: 0.2rem 0.2rem;
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  border-radius: 0.25rem;
  padding-left: 0.4rem;
  box-sizing: border-box;
  font-size: 0.23rem;
  line-height: 0.3rem;
  color: #e8e8e8;
}
</style>
