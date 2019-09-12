<template>
  <div class="wrap">
    <!-- 头部搜索 -->
    <div class="header_search">
      <div class="text">
        <input type="text" placeholder="青贮饲料" />
      </div>
      <span class="cancel">取消</span>
    </div>
    <div class="search_history">
        <span>搜索历史</span>
        <img src="../../assets/img/life/icon_clearAll.png" alt="">
    </div>
    <div class="search_keyword">
        <span>“猪小P”店铺</span>
        <span>前排肉</span>
        <span>猪头肉</span>
        <span>五花肉</span>
        <span>大三元</span>
        <span>大棒骨</span>
    </div>
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
  width: 94%;
  margin: 0 auto;
}
.header_search {
  width: 100%;
  height: 0.64rem;
  background: #f7f7f7ff;
  display: flex;
  align-items: center;
}
.header_search {
  background: #fff;
}
.header_search .text {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_search .text input {
  width: 5rem;
  height: 0.5rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding-left: 0.8rem;
  background: #f7f7f7ff url("../../assets/img/life/icon_sousuo.png") no-repeat
    0.2rem center;
  background-size: 0.3rem;
  font-size: 0.25rem;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.header_search .cancel {
  width: 0.8rem;
  font-size: .25rem;
  color: #666666;
  text-align: center;
}
.search_history{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
}
.search_history span{
    font-size: .3rem;
    color: #666666;
    margin-left: .1rem;
}
.search_history img{
    width: .3rem;
    height:  .3rem;
    margin-right: .2rem;
}
.search_keyword {
    margin-top: .2rem;
}
.search_keyword span{
    display: inline-block;
    padding: .1rem .15rem;
    font-size: .25rem;
    background: #F2F4F7;
    color:#6F6F6F;
    border-radius: .25rem;
    margin: .1rem;
    
}
</style>
