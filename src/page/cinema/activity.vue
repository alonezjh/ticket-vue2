<template>
  <div class="activity">
    <div class="bank" v-for="item in banks">
      <div class="bank-icon">                 
        <img :src=item.icon>             
      </div>
      <div class="bank-content">                 
        <div class="content-title">{{item.title}}</div>                 
        <div class="content-desc">名额：{{item.desc}}</div>                 
        <div class="content-area">地区：{{item.area}}</div>             
      </div>
      <div class="bank-action">                                      
        <div class="action-btn" v-if="item.type == 2">兑换</div>   
        <div class="action-btn" v-else-if="item.type == 1">办卡</div>      
        <div v-else></div>                      
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'activity',
  data() {
    return {
      banks: []
    }
  },
  created () {
    this.$axios.get('./../static/activity.json').then(response => {
      let datas = response.data.datas
      for(let i in datas) {
        this.banks.push(datas[i])
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/base";

  .bank {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px #eee solid;

    .bank-icon {
      height: 16vmin;
      width: 16vmin;
      margin: 5.33333333vmin 4vmin;
      border: 1px solid #e2e2e2;
      padding: .125rem;
      padding: .53333333vmin;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .bank-content {
      flex: 1;
      width: 0;
      text-align: left;
      margin: 5.86666667vmin 1.33333333vmin 5.86666667vmin 0;

      .content-title {
        font-size: 3.73333333vmin;
        line-height: 1rem;
        line-height: 4.3vmin;
        color: #222227;
        font-weight: 700;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .content-desc {
        margin-top: 2.7vmin;
        font-size: 3.2vmin;
        line-height: 3.5vmin;
        color: #8a869e;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .content-area {
        margin-top: 1.9vmin;
        font-size: 3.2vmin;
        line-height: .8125rem;
        line-height: 3.5vmin;
        color: #8a869e;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .bank-action {
      margin-right: 4vmin;

      .action-btn {
        border: 1px solid #ff4d64;
        margin: 9.6vmin 0;
        border-radius: 1.1vmin;
        font-size: 3.46666667vmin;
        line-height: 3.7vmin;
        padding: 2.13333333vmin 2.93333333vmin;
        color: #ff4d64;
        white-space: nowrap;
      }
    }

  }

</style>
