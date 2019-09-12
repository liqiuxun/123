<template>
  <div class="wrap">
    <router-link active-class="active" to="/qsLife/lifeAll">全部</router-link>
    <router-link active-class="active" to="/qsLife/lifeChannel">频道</router-link>
    <router-link active-class="active" to="/qsLife/lifeDetails">详情</router-link>
    <router-link active-class="active" to="/qsLife/lifeNews">新闻</router-link>
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
  height: 0.8rem;
  border-bottom: 1px solid #F2F2F2;
  display: flex;
  justify-content: space-around;
}
a {
  font-size: 0.25rem;
  height: .8rem;
  line-height: .8rem;
  color: #666666;
}
.active {
  color: #53c203;
  border-bottom: 1px solid #53c203;
}
</style>
