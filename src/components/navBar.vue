<template>
  <div class="footer">
    <div>
      <router-link to="/movie"><i class="iconfont icon-dianying"></i><p>电影</p></router-link>
      <router-link to="/cinema"><i class="iconfont icon-yingyuanA"></i><p>影院</p></router-link>
      <router-link to="/user"><i class="iconfont icon-wode"></i><p>我的</p></router-link>
      </div>
  </div>
</template>

<script>
  export default{
  }
</script>

<style lang="scss">
  @import "../assets/css/base";

.footer{
  position: fixed;
  bottom: -2px;
  left: 0;
  z-index: 100;
  width: 100%;
  height:px2rem(120);
  padding-bottom: px2rem(15);
  background-color: #FFFFFF;
  div{
    position: relative;
    border-top:1px solid #ddd;
    display: flex;
  }
  a{
    position: relative;
    height: px2rem(120);
    display: block;
    float:left;
  flex: 1;
    text-align: center;
    i{
      display: block;
      margin:px2rem(18) auto 0;
      height:px2rem(50);
      font-size: px2rem(58);
      color: #999;
    }
    p{
      color:#999;
      font-size:px2rem(25);
     
    }
    &.router-link-active {
      i,p{
        color: $bColor
      }

    }


  }
}

</style>
