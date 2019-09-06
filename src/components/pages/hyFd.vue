<template>
  <div class="wrap">
    <!-- header 头部 -->
    <header>
      <div class="quit">
        <img class="icon_cha" src="../../assets/img/fadan/icon_cha.png" alt />
      </div>
      <h2>好友发单</h2>
    </header>
    <!-- 内容页 -->
    <div class="content">
      <!-- 打开App -->
      <div class="openapp">
        <div class="icon_app">
          <img src="../../assets/img/fadan/pig_shop.png" alt />
        </div>
        <div class="description">
          <div class="description_title">
            <h2>豚集</h2>
            <p>新用户注册送100元豚券</p>
          </div>
          <div class="app_link">
            <a href="#">立即打开</a>
          </div>
        </div>
      </div>
      <!-- 内容列表 -->
      <div class="content_list">
        <div class="conList_bg">
          <img src="../../assets/img/fadan/beijing.png" alt />
        </div>
        <div class="conList_zhaopai">
          <img src="../../assets/img/fadan/zhaopai1.png" alt />
          <h2>竹林猫的肉铺</h2>
          <p>排骨</p>
        </div>

        <!-- 未加入购物车的列表 -->
        <div class="shop_list">
          <ul>
            <li>
              <div class="showImg">
                <img src="../../assets/img/fadan/pig_shop.png" alt />
              </div>

              <div class="showExplain">
                <h2>HT-01</h2>
                <span class="pork_weight">重量10kg</span>
                <span class="price">单价12元/500g</span>
                <div class="total_peices">
                  <span>¥ 172.8</span>
                  <span>¥ 216</span>
                </div>
              </div>
              <span class="join_card"></span>
            </li>
            <li>
              <div class="showImg">
                <img src="../../assets/img/fadan/pig_shop.png" alt />
              </div>

              <div class="showExplain">
                <h2>HT-01</h2>
                <span class="pork_weight">重量10kg</span>
                <span class="price">单价12元/500g</span>
                <div class="total_peices">
                  <span>¥ 172.8</span>
                  <span>¥ 216</span>
                </div>
              </div>
              <span class="join_card"></span>
            </li>
            <li>
              <div class="showImg">
                <img src="../../assets/img/fadan/pig_shop.png" alt />
              </div>

              <div class="showExplain">
                <h2>HT-01</h2>
                <span class="pork_weight">重量10kg</span>
                <span class="price">单价12元/500g</span>
                <div class="total_peices">
                  <span>¥ 172.8</span>
                  <span>¥ 216</span>
                </div>
              </div>
              <span class="join_card"></span>
            </li>
          </ul>
        </div>
        <div class="conList_zhaopai_second">
          <img src="../../assets/img/fadan/zhaopai2.png" alt />
          <h2>竹林猫的肉铺</h2>
          <p>排骨</p>
        </div>
        <!-- 未加入购物车的列表 -->
        <div class="shop_list shop_marbtm">
          <ul>
            <li>
              <div class="showImg">
                <img src="../../assets/img/fadan/pig_shop.png" alt />
              </div>

              <div class="showExplain">
                <h2>HT-01</h2>
                <span class="pork_weight">重量10kg</span>
                <span class="price">单价12元/500g</span>
                <div class="total_peices">
                  <span>¥ 172.8</span>
                  <span>¥ 216</span>
                </div>
              </div>
              <span class="join_card"></span>
            </li>
            <li>
              <div class="showImg">
                <img src="../../assets/img/fadan/pig_shop.png" alt />
              </div>

              <div class="showExplain">
                <h2>HT-01</h2>
                <span class="pork_weight">重量10kg</span>
                <span class="price">单价12元/500g</span>
                <div class="total_peices">
                  <span>¥ 172.8</span>
                  <span>¥ 216</span>
                </div>
              </div>
              <span class="join_card"></span>
            </li>
            <li>
              <div class="showImg">
                <img src="../../assets/img/fadan/pig_shop.png" alt />
              </div>

              <div class="showExplain">
                <h2>HT-01</h2>
                <span class="pork_weight">重量10kg</span>
                <span class="price">单价12元/500g</span>
                <div class="total_peices">
                  <span>¥ 172.8</span>
                  <span>¥ 216</span>
                </div>
              </div>
              <span class="join_card"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer>
      <div class="sum_total">
        <span class="footer_card"></span>
        <i>12</i>
      </div>
      <div class="total_money">
        <span>总计金额：</span>
        <span>￥1234</span>
      </div>
      <div class="pay">去结算</div>
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
.openapp {
  height: 1rem;
  background: #fff;
  display: flex;
}
.openapp .icon_app {
  width: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon_app img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
}
.description {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.description_title {
  width: 3.5rem;
}
.description_title h2 {
  font-size: 0.3rem;
  line-height: 0.4rem;
  color: #333333;
  font-weight: 500;
  margin-bottom: 0.1rem;
}
.description_title p {
  font-size: 0.25rem;
  color: #666666;
}
.app_link {
  flex: 1;
}
.app_link a {
  font-size: 0.25rem;
  color: #333333;
  border: 1px solid #000;
  padding: 0.06rem;
}
.content_list {
  background: #f3ffe5;
}
.conList_bg {
  width: 100%;
  height: 4rem;
}
.conList_bg img {
  width: 100%;
  height: 100%;
}
.conList_zhaopai {
  width: 100%;
  height: 3rem;
  background: #f3ffe5;
  position: relative;
}
.conList_zhaopai img {
  position: absolute;
  width: 5rem;
  height: 3rem;
  top: -0.8rem;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.conList_zhaopai h2,
.conList_zhaopai_second h2 {
  font-size: 0.3rem;
  font-weight: bold;
  color: #009246;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.75rem;
}
.conList_zhaopai p,
.conList_zhaopai_second p {
  font-size: 0.3rem;
  font-weight: bold;
  color: #009246;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2.1rem;
}
.shop_marbtm {
  margin-bottom: 1rem;
}
.shop_list li {
  width: 95%;
  height: 2rem;
  margin: 0 auto;
  background: #fff;
  display: flex;
  border-radius: 0.2rem;
  margin-bottom: 0.15rem;
  position: relative;
}
.showImg {
  height: 100%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.showImg img {
  height: 1.6rem;
  width: 1.6rem;
}
.showExplain {
  flex: 1;
}
.showExplain h2 {
  font-size: 0.25rem;
  line-height: 0.5rem;
  margin-top: 0.2rem;
}
.pork_weight,
.price {
  display: inline-block;
  font-size: 0.1rem;
  background: #f2f4f7;
  padding: 0.05rem 0.1rem;
  border-radius: 0.2rem;
}
.total_peices {
  margin-top: 0.3rem;
}
.total_peices span:nth-child(1) {
  font-size: 0.25rem;
  color: #f25c62;
}
.total_peices span:nth-child(2) {
  font-size: 0.15rem;
  color: #999999;
  text-decoration: line-through;
}
.join_card {
  display: inline-block;
  width: 0.5rem;
  height: 2rem;
  border-radius: 50%;
  background: url("../../assets/img/fadan/icon_gouwu.png") no-repeat center;
  background-size: 0.5rem;
  margin-right: 0.2rem;
}
.conList_zhaopai_second {
  width: 100%;
  height: 3rem;
  position: relative;
}
.conList_zhaopai_second img {
  position: absolute;
  width: 5rem;
  height: 2.5rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.conList_zhaopai_second h2 {
  top: 0.65rem;
}
.conList_zhaopai_second p {
  top: 2.21rem;
}
footer {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
}
.sum_total {
  width: 1.4rem;
  text-align: center;
}
.total_money {
  flex: 1;
}
.total_money span:nth-child(1){
    font-size: .25rem;
    font-weight: 500;
}
.total_money span:nth-child(2){
    font-size: .2rem;
    color: #f25c62;
}
.pay {
  width: 2.2rem;
  height: 1rem;
  line-height: 1rem;
  font-size: .35rem;
  text-align: center;
  background: url("../../assets/img/fadan/btn.png")no-repeat center;
  background-size: cover;
  color: #fff;
}
.footer_card {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: url("../../assets/img/fadan/icon_gouwu.png") no-repeat center;
  background-size: 1rem;
  margin-top: -.8rem;
}
i{
    position: absolute;
    color: #fff;
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background: #f25c62;
    border-radius: 50%;
    text-align: center;
    line-height: .3rem;
    top: -.3rem;
    left: .7rem;;
}
</style>
