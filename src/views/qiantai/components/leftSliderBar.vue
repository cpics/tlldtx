<template>
  <div class="m-slide-main">
    <div class="u-slide-logo">
      <i class="u-logo-icon"></i>
      <span>生产拉动系统</span>
    </div>
    <div class="u-slide-content">
      <div class="d-slide-column">
        <h5>{{todayLeftData.lineName}}</h5>
        <ul>
          <li>2018-10-15 13.21.12</li>
          <li>
            <div class="d-label">今日计划：</div>
            <div>{{todayLeftData.total}}</div>
          </li>
          <li>
            <div class="d-label">当前完成：</div>
            <div>{{todayLeftData.finished}}</div>
          </li>
          <li>
            <div class="d-label">完成率：</div>
            <div>{{todayLeftData.finishPercent}}</div>
          </li>
          <li>
            <div class="d-label">运行状态：</div>
            <div class="c-green">{{todayLeftData.workStatus}}</div>
          </li>
        </ul>
      </div>
      <div class="d-slide-column">
        <ul>
          <li>
            <div class="d-label">Wip-前壁:</div>
            <div class="d-info">
              <i class="u-cart-icon"></i>
              <i class="u-cart-icon"></i>
              <em class="slide-mark-icon">FULL</em>
            </div>
          </li>
          <li>
            <div class="d-label">Wip-天花:</div>
            <div class="d-info">
              <i class="u-cart-icon"></i>
            </div>
          </li>
          <li>
            <div class="d-label">Wip-前壁:</div>
            <div class="d-info">
              <i class="u-cart-icon"></i>
              <i class="u-cart-icon"></i>
              <em class="slide-mark-icon">FULL</em>
            </div>
          </li>
          <li>
            <div class="d-label">Wip-木箱:</div>
            <div class="d-info">
              <i class="u-cart-icon"></i>
              <i class="u-cart-icon"></i>
              <em class="slide-mark-icon">FULL</em>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'leftSliderBar',
    props: {
        maxClassString: String,
        todayLeftData: Object
    }
};
</script>
<style lang="scss" scoped>
.u-slide-logo {
  padding: 16px 10px;
  font-size: 14px;
  line-height: 28px;
  background: #004463;
  .u-logo-icon {
    width: 56px;
    height: 28px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: top;
    background: url("images/logo.png") no-repeat center center;
    background-size: contain;
  }
}
.u-slide-content {
  padding: 25px 15px;
}
.d-slide-column {
  padding: 15px 0;
  h5 {
    font-size: 14px;
    font-weight: normal;
    padding: 5px 0;
  }
  li {
    padding: 5px 0;
    display: flex;
  }
  .d-label {
    width: 80px;
    display: inline-block;
    flex-shrink: 0;
  }
  .d-info {
    display: flex;
    align-items: center;
  }
}
.u-cart-icon {
  position: relative;
  top: -2px;
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-right: 5px;
  background: url("images/cart.png") no-repeat center center;
  background-size: contain;
}
.slide-mark-icon {
  color: #fff;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  display: inline-block;
  padding: 0 5px 2px;
  background: #ff0000;
  border-radius: 10px;
  transform: scale(0.9);
}
</style>
