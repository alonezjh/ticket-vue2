<template>
  <div class="intro">
    <div class="intro-wrap">
      <div class="wrap-title">成都UME影城（成华）</div>
      <div class="wrap-item">
        <div class="child location">成华区建设北路3段6号龙湖三千集购物中心5楼</div> 
        <div href="#" class="child tel">028-84406111</div> 
      </div>
    </div>
    <div class="intro-wrap">
      <div class="wrap-title">影院服务</div>
      <div class="wrap-item">
        <div class="service card">
          <label>影城卡</label>
          <span>购票享影城会员优惠</span>
        </div> 
        <div class="service">
          <label>巨幕厅</label>
          <span>影城1号厅为DMAX巨幕厅</span>
        </div> 
        <div class="service">
          <label>3D眼镜</label>
          <span>3D眼镜免押金</span>
        </div>
        <div class="service">
          <label>儿童优惠</label>
          <span>1.4米（含）以下的儿童须购优惠票入场</span>
        </div> 
        <div class="service">
          <label>停车位</label>
          <span>龙湖三千集B1B2均有停车位，2元/小时，凭UME影城当日影票免费3小时</span>
        </div> 
        <div class="service">
          <label>WIFI</label>
          <span>影院提供免费WIFI</span>
        </div> 
        <div class="service">
          <label>情侣座</label>
          <span>豪华贵宾厅是情侣厅</span>
        </div>
        <div class="service">
          <label>餐饮</label>
          <span>满记甜品、咕噜咕噜涮涮锅、茶艺馆；赛百味、星巴克、面包新语；中高档西餐厅欧洲房子；朕之味养生粥、天绿寿司、金翠河茶餐厅、瑞泰丰云南菜、牛排西餐厅、鲁西肥牛火锅、鱼摆摆烤鱼店；加太贺烤肉店</span>
        </div> 
        <div class="service">
          <label>休息区</label>
          <span>大堂卖品部对面，各影厅口均有沙发休息</span>
        </div>    
      </div>
    </div>
    <div class="intro-wrap">
      <div class="wrap-title">影院公告</div>
      <div class="wrap-item">
        <div class="notice">1.4米（含）以下的儿童须购优惠票入场</div> 
      </div>
    </div>
    <div class="intro-wrap">
      <div class="wrap-title">周边设施</div>
      <div class="wrap-item">
        <div class="notice">龙湖三千集购物中心；有西西弗书店、美甲店；音乐房子KTV</div> 
      </div>
    </div>
    <div class="intro-wrap">
      <div class="wrap-title">公交信息</div>
      <div class="wrap-item">
        <div class="notice">可乘坐2、6、42、51、52、65、71、75、76、108、113、114、402、412、535、537路公车到达伊藤洋华堂或联华购物中心车站。</div> 
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'intro'
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/base";

.intro{
  background: #F5F5F5;

  .intro-wrap {
    margin-bottom: 12px;
    background: #FFFFFF;

    .wrap-title {
      padding-top: 4vmin;
      font-size: 1rem;
      color: #222227;
      margin-left: 5vmin;
      font-weight: 500;
      text-align:left;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrap-item {
      margin-top: 1vmin;
      display: block;
      background-color: #fff;

      .child {
        display: block;
        text-align:left;
        margin-left: 13vmin;
        padding-left: 1.6vmin;
        padding-top: 3.8vmin;
        padding-bottom: 3.8vmin;
        border-bottom: 1px solid #f5f5f5;
        position: relative;
        font-size: .95rem;
        color: #50505a;
      }  

      .tel:after {
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

      .child:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        height: 100%;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      }

      .location:before {
        left: -8.8vmin;
        width: 6.5vmin;
        background-image: url('../../../static/img/intro_location.svg');
      }

      .tel:before {
        left: -8.8vmin;
        width: 6.5vmin;
        background-image: url('../../../static/img/intro_tel.svg');
      }

      .service {
        display: flex;
        text-align: left;
        padding-left: 25vmin;
        padding-right: 4vmin;
        padding-top: 3.8vmin;
        padding-bottom: 3.8vmin;
        align-items: center;
        border-bottom: 1px solid #eee;
        position: relative;
        font-size: .95rem;
        color: #888;

          label {
            margin-left: -20vmin;
            display: inline-block;
            text-align: center;
            border: 1px solid #7ab5e0;
            position: absolute;
            top: 2.4vh;
            padding: 1px 6px;
            height: 18px;
            line-height: 16px;
            border-radius: 16px;
            color: #7ab5e0;
            font-size: .75rem;
          }
      }  

      .notice {
        display: flex;
        text-align: left;
        padding-left: 5vmin;
        padding-right: 4vmin;
        padding-top: 2vmin;
        padding-bottom: 3vmin;
        align-items: center;
        position: relative;
        font-size: .93rem;
        color: #888;
      }

      .card:after {
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

    }
  }
}

</style>
