<template>
  <div class="ticket">
    <ul class="ticket-wrap">
      <li class="wrap-item" data-status="used">
        <div class="item-content" @touchstart="touchStart" @touchmove="touchMove">
          <div class="left">       
            <span class="icon">座</span>     
          </div>
          <div class="right">       
            <div class="ticket-name">战狼2 2张</div>       
            <div class="ticket-time">2017-07-30 19:00</div>       
            <div class="ticket-cinema">雅图影院（四季城店）</div>                             
            <div class="ticket-status">                  
              <a href="javascript:;" class="critique">写影评</a>                
            </div>     
          </div>
        </div>
        <div class="item-delete" @click.prevent="deleteItem">     
          <span>删除</span>   
        </div>
      </li>
      <li class="wrap-item">
        <div class="item-content" @touchstart="touchStart" @touchmove="touchMove">
          <div class="left">       
            <span class="icon">座</span>     
          </div>
          <div class="right">       
            <div class="ticket-name">战狼2 2张</div>       
            <div class="ticket-time">2017-07-30 19:00</div>       
            <div class="ticket-cinema">雅图影院（四季城店）</div>                             
            <div class="ticket-status" data-status="notd">                  
              <a href="javascript:;" class="critique">写影评</a>                
            </div>     
          </div>
        </div>
        <div class="item-delete" @click.prevent="deleteItem">     
          <span>删除</span>   
        </div>
      </li>
      <li class="wrap-item">
        <div class="item-content" @touchstart="touchStart" @touchmove="touchMove">
          <div class="left">       
            <span class="icon">座</span>     
          </div>
          <div class="right">       
            <div class="ticket-name">战狼2 2张</div>       
            <div class="ticket-time">2017-07-30 19:00</div>       
            <div class="ticket-cinema">雅图影院（四季城店）</div>                             
            <div class="ticket-status" data-status="notd">                  
              <a href="javascript:;" class="critique">写影评</a>                
            </div>     
          </div>
        </div>
        <div class="item-delete" @click.prevent="deleteItem">     
          <span>删除</span>   
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ticket',
  data() {
    return {
      nowIndex: 0,
      startX: 0,    // 触摸起始位置
      moveX: 0,     // 滑动位置
      slideX: 0,    // 滑动距离 
      offsetSlide: 5,   // 偏移量
    }
  },
  methods: {
    touchStart: function(event) {
      if(event.touches.length == 1){
        // 手指按下时候的位置
        this.startX = event.touches[0].clientX
      }
    },
    touchMove: function(event) {
      let dom = document.getElementsByClassName("item-content")
      for(let i = 0; i< dom.length; i++){
        dom[i].style.transform = "translateX(0rem)"
        dom[i].style.transition = 'all 0.1s ease'
      }
      if(event.touches.length == 1) {
        // 滑动过程中的位置
        this.moveX = event.touches[0].clientX
        // 滑动过程中实时计算滑动距离
        this.slideX = this.startX - this.moveX;
        // 如果是向右滑动或者只是点击，不改变滑动位置
        if(this.slideX < 0 || this.slideX == 0) {
          event.currentTarget.style.transform = "translateX(0rem)"
          event.currentTarget.style.transition = 'all 0.2s ease'
        }else if (this.slideX > 0) {
          // 如果向左滑动，则实时给这个根元素一个向左的偏移-left
          event.currentTarget.style.transform = "translateX(-"+this.offsetSlide+"rem)"
          event.currentTarget.style.transition='all 0.2s ease'
        }
      }
    },
    deleteItem: function(){
      console.log("delete")
    }
  },
  created () {
    
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/base";

.ticket {

  .ticket-wrap {
    width: 100vw;
    height: 100vh;
    background: #F8F8F8;

    .wrap-item {
      position: relative;
      padding-top: 2.7vmin;

      .itemStyle {
        transform: translateX(0rem); transition: transform 0.3s ease;
      }

      .item-content {
        display: flex;
        position: relative;
        flex-direction: row;
        flex-wrap: nowrap;
        background: #fff;
        z-index: 10;

        .left {
          display: flex;
          position: relative;
          width: 13.3vmin;
          -webkit-box-flex: 0;
          -webkit-flex: none;
          -ms-flex: none;
          flex: none;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          border-right: 1px dashed #ebebeb;

          .icon {
            display: inline-block;
            text-align: center;
            color: #fff;
            font-size: .75rem;
            width: 1.5rem;
            width: 6.4vmin;
            height: 1.5rem;
            height: 6.4vmin;
            border-radius: .75rem;
            border-radius: 3.2vmin;
            line-height: 1.5rem;
            line-height: 6.4vmin;
            background-color: #ff4d64;
          }
        }

        .left:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          border-radius: 0 0 12px 12px;
          right: -6px;
          width: 12px;
          height: 6px;
          background: #f8f8f8;
        }

        .left:after {
          bottom: 0;
          border-radius: 12px 12px 0 0;
          content: "";
          display: block;
          position: absolute;
          right: -6px;
          width: 12px;
          height: 6px;
          background: #f8f8f8;
        }

        .right {
          text-align: left;
          -webkit-box-flex: 1;
          -webkit-flex: auto;
          -ms-flex: auto;
          flex: auto;
          position: relative;
          padding-left: .9375rem;
          padding: 4vmin 29.3vmin 4vmin 4vmin;
          padding-top: .9375rem;
          padding-bottom: .9375rem;
          padding-right: 6.875rem;
          color: #999;

          .ticket-name {
            font-size: 1rem;
            color: #222227;
          }

          .ticket-time {
            margin-top: 1.6vmin;
            font-size: .75rem;
          }

          .ticket-cinema {
            margin-top: 1.1vmin;
            font-size: .75rem;
            color: #999;
          }

          .ticket-status {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 6.875rem;
            width: 29.3vmin;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 52px;

            a {
              display: inline-block;
              text-align: center;
              vertical-align: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              color: #ffc600;
              background-color: transparent;
              background-image: none;
              height: 1.75rem;
              line-height: 1.75rem;
              padding: 0 .8125rem;
              font-size: .75rem;
              position: relative;
              border: 1px solid #ffc600;
              border-radius: 50px;
            }
          }
        }
      }

      .item-delete {
        position: absolute;
        top: 2.7vmin;
        bottom: 0;
        right: 0;
        z-index: 9;
        width: 4.6875rem;
        width: 20vmin;
        color: #fff;
        font-size: 1rem;
        text-align: center;
        background: #f4333c;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
      }
    }

    .wrap-item[data-status=used] {
      .icon {
        background: #c8c8c8 !important;
      }
      .ticket-name {
        color: #c8c8c8 !important;
      }
      .ticket-time {
        color: #c8c8c8 !important;
      }
      .ticket-cinema {
        color: #c8c8c8 !important;
      }
    }
  }
}

</style>
