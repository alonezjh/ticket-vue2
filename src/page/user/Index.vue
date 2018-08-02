<template>
  <div class="user">
    <com-header title="我的"></com-header>
    <div class="ccc">
      <div class="order-user">
        <img src="../../../static/img/avatar.jpg">
        <p>九幽丶殇情</p> 
      </div>

      <div class="order-item">
        <a href="#" class="order-item-child ticket">电影票</a> 
        <a href="#" class="order-item-child mcard">影城卡</a> 
        <a href="#" class="order-item-child coupon">优惠券 <span></span></a>
      </div>

      <div class="order-item">
        <a href="#" class="order-item-child help">帮助中心</a> 
        <a href="#" class="order-item-child feedback">意见反馈</a> 
      </div>
    </div>
    
    <!-- 底部导航栏 -->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import header from '../../components/header'
import navBar from '../../components/navBar'

export default {
  name: 'user',
  components: {
    comHeader:header,
    navBar
  },
  data () {
    return {
      msg: 'user'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*, :after, :before {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.user {
  background: #F5F5F5;
  height: 100vh;
}
.ccc {
  display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    -webkit-box-align: stretch;
    
    .order-user {
      margin-top: 15vmin;
      padding: 5vmin 0;
      display: flex;
      background: #ffffff;
      align-content: center;

      img {
        width: 14vmin;
        height: 14vmin;
        margin-left: 6vmin;
        border-radius: 14vmin;
      }

      p {
      display: block;
      text-align:left;
      position: relative;
      margin-left: 6vmin;
      line-height: 14vmin;
      color: #50505a;
      font-size: 4vmin;
      }  

    }

  .order-item {
    margin-top: 3vmin;
    display: block;
    background-color: #fff;

    .order-item-child {
      display: block;
      text-align:left;
      margin-left: 13vmin;
      padding-left: 1.6vmin;
      padding-top: 3.8vmin;
      padding-bottom: 3.8vmin;
      border-bottom: 1px solid #f5f5f5;
      position: relative;
      color: #50505a;
    }  

    .order-item-child:after {
      content: '';
      right: 5.5vmin;
      width: 5.1vmin;
          display: block;
    position: absolute;
    top: 0;
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
      background-image: url('../../../static/img/right_arrow.svg');
    }

    .order-item-child:before {
       content: '';
      display: block;
      position: absolute;
      top: 0;
      height: 100%;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    

    .ticket:before {
      left: -8.8vmin;
      width: 7.2vmin;
      background-image: url('../../../static/img/user_ticket.svg');
    }

    .mcard:before {
      left: -8.4vmin;
      width: 6vmin;
      background-image: url('../../../static/img/user_card.svg');
    }

    .coupon:before {
      left: -9.2vmin;
      width: 7.5vmin;
      background-image: url('../../../static/img/user_coupon.svg');
    }

    .help:before {
      left: -8.5vmin;
      width: 6.6vmin;
      background-image: url('../../../static/img/user_help.svg');
    }

    .feedback:before {
      left: -8.4vmin;
      width: 6.2vmin;
      background-image: url('../../../static/img/user_feedback.svg');
    }

  } 
}
</style>
