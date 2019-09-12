<template>
  <div class="wrap">
    <footer>
      <!-- 左边 -->
      <div class="comment">
        <input type="text" placeholder="期待您的神评论" />
      </div>
      <!-- 右边 -->
      <div class="footer_include">
        <div class="com_num">
          <img src="../../assets/img/details/icon_com.png" alt />
          <span>423</span>
        </div>
        <div class="collect">
          <img src="../../assets/img/details/icon_collect.png" alt />
          <span>收藏</span>
        </div>
        <div class="praise_num">
          <img src="../../assets/img/details/icon_zan.png" alt />
          <span>632</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
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
  components: {}
};
</script>

<style scoped >
.wrap {
  width: 100%;
}
footer {
  width: 100%;
  height: 0.8rem;
  border-top: 1px solid #f2f2f2;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
}
.comment {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.comment input {
  height: 0.6rem;
  background: #f5f5f5 url("../../assets/img/details/icon_redact.png") no-repeat 0.2rem center;
  background-size: 0.3rem;
  border-radius: 0.3rem;
  padding-left: 0.7rem;
  margin: 0 0.1rem;
  box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
}
.footer_include {
  flex: 1;
  display: flex;
}
.com_num,
.collect,
.praise_num {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.com_num img {
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.1rem;
}
.collect img,
.praise_num img {
  width: 0.4rem;
  height: 0.4rem;
}
</style>
