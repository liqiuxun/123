<template>
  <div class="wrap">
  <!-- header 头部 -->
    <header>
      <div class="quit">
        <img class="icon_cha" src="../../assets/img/life/icon_back.png" alt />
      </div>
      <h2>清饲 · 生活</h2>
    </header>
    <v-navigation></v-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import vNavigation from "../views/navigation";
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
    vNavigation
  }
};
</script>

<style scoped >

.wrap {
  height: 100vh;
  width: 100vw;
}
header {
  width: 100%;
  height: 0.64rem;
  background: #f7f7f7ff;
  display: flex;
  align-items: center;
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
</style>
