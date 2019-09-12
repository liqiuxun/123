<template>
  <div class="wrap">
  <!-- header 头部 -->
    <header v-show="!isshow">
      <div class="quit">
        <img class="icon_cha" src="../../assets/img/life/icon_back.png" alt />
      </div>
      <h2>清饲 · 生活</h2>
      <img class="header_sousuo" @click="search" src="../../assets/img/life/icon_sousuo.png" alt="">
    </header>
    <!-- 头部搜索 -->
    <div class="header_top" v-show="isshow">
      <div class="text">
      <input type="text" placeholder="青贮饲料">
      </div>
      <span class="cancel" @click="cancel">取消</span>
    </div>
    <v-navigation></v-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import vNavigation from "../views/navigation";
export default {
  props: {},
  data() {
    return {
        isshow:false

    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
      search(){
       this.isshow = true;
      },
      cancel(){
        this.isshow = false;
      }
  },
  components: {
    vNavigation
  }
};
</script>

<style scoped >

.wrap {
  /* height: 100vh; */
  width: 100vw;
}
header,
.header_top{
  width: 100%;
  height: 0.64rem;
  background: #f7f7f7ff;
  display: flex;
  align-items: center;
}
.header_top{
  background: #fff;
}
.header_top .text{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.header_top .text input{
  width: 5rem;
  height: .5rem;
  border-radius: .3rem;
  box-sizing: border-box;
  padding-left: .8rem;
  background: #f7f7f7ff url("../../assets/img/life/icon_sousuo.png") no-repeat .2rem center;
  background-size: .3rem;
  font-size: .25rem;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}
.header_top .cancel{
  width: .8rem;
  
}
.quit {
  width: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quit .icon_cha {
  width: 0.5rem;
  height: 0.5rem;
}
header h2 {
  flex: 1;
  font-size: 0.35rem;
  margin-left: 1.5rem;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
 
}
.header_sousuo{
  width: .4rem;
  height: .4rem;
  margin-right: .15rem;
}
</style>
