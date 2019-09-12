<template>
  <div class="wrap">
    <header>
      <img @touchstart="goBack()" src="../../assets/img/details/icon_fanhui.png" alt />
      <img src="../../assets/img/details/icon_share.png" alt />
    </header>
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
  methods: {
        goBack(){
          this.$router.go(-1);
        }
  },
  components: {}
};
</script>

<style scoped >
.wrap {
  width: 94%;
  margin: 0 auto;
}
header {
  height: 0.64rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header img {
  width: 0.4rem;
  height: 0.4rem;
}
</style>
