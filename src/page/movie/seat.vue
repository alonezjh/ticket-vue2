<template>
  <div class="seat">
    <div class="seat-movie">
        <div class="movie-info"> 
            <div class="info-title">{{movieName}}</div> 
            <div class="info-brief">{{time}} ({{type}})</div> 
        </div>
        <div class="movie-seat">
            <ul>
                <li><span class="seat active"></span><span>可选</span></li>
                <li><span class="seat selected"></span><span>已选</span></li>
                <li><span class="seat disabled"></span><span>已售</span></li>
            </ul>
        </div>
    </div>
    <div class="seat-wrap">
        <h3>{{hall}}</h3>
        <div class="wrap">
            <div class="scroller"  @touchstart="touchStart" @touchmove="touchMove">
                <div v-for="item in rows">
                    <a @click=selectSeat v-for="col in item.column" href="javascript:;" class="seat" :row=col.row :column=col.num :class=col.status></a>
                </div>
            </div>
        </div>
        <div class="side">
            <ol>
                <li v-for="item in rows">{{item.row}}</li>
            </ol>
        </div>
    </div>
    <div class="seat-confirm" :class="{'hidden':!isShowConfirm}">
        <div class="confirm-info">
            <div class="info-left">
                <p>您已选择以下座位：</p>
                <div class="selectedSeat">
                    <div v-for="item in seats">{{item}}</div>
                </div>
            </div>
            <div class="info-right">
                <p>票价 <strong>{{price * seatNum}}</strong><span> 元</span></p>
            </div>
        </div>
        <div class="confirm-submit">
            <button type="submit">确认选座</button>
        </div>
    </div>
    <toast :isShowIcon=isShowIcon :msg=msg :isShowToast=isShowToast></toast>
  </div>
</template>

<script>

export default {
  name: 'seat',
  data () {
    return {
        movieName: '',
        time: '',
        type: '',
        hall: '',
        price: 0,
        isShowToast: false,
        isShowIcon: true,
        msg: '',
        isShowConfirm: false,  // 是否显示确认窗体
        seatNum: 0,   // 已选座位数
        seats: [],
        rows: [],     // 排数
        startX: 0,    // 触摸起始位置
        moveX: 0,     // 滑动位置
        slideX: 0,    // 滑动距离 
    }
  },
  created () {
    this.$axios.get('./../static/seat.json').then(response => {
      let datas = response.data.datas
      this.movieName = response.data.movieName
      this.time = response.data.time
      this.type = response.data.type
      this.hall = response.data.hall
      this.price = response.data.price
      for(let i in datas) {
        this.rows.push(datas[i])
      }
    })
  },
  methods: {
    selectSeat: function(event){       
        let className = event.currentTarget.className
        let disabled = "disabled"
        let selected = "selected"
        if(className.indexOf(disabled) >= 0){
            this.isShowIcon = false
            this.isShowToast = true
            this.msg = '该座位已经被选了'
            setTimeout(() => {
                this.isShowToast = false
            }, 300)
        }else if(className.indexOf(selected) >= 0){
            this.seatNum = this.seatNum - 1
            let row = event.currentTarget.getAttribute('row')+"排"
            let column =event.currentTarget.getAttribute('column')+"座"
            this.removeByVal(this.seats, row+column)
            event.currentTarget.setAttribute("class", "seat active")
            if(this.seatNum == 0){
                this.isShowConfirm = false
            }
        }else{           
            if(this.seatNum >= 5){
                this.isShowIcon = false
                this.isShowToast = true
                this.msg = '最多选择5个座位'
                setTimeout(() => {
                    this.isShowToast = false
                }, 500)
                return
            }
            
            this.isShowConfirm = true
            this.seatNum = this.seatNum + 1
            let row = event.currentTarget.getAttribute('row')+"排"
            let column =event.currentTarget.getAttribute('column')+"座"
            this.seats.push(row+column)
            event.currentTarget.setAttribute("class", "seat selected")
        }
        console.log(this.seats)
    },
    removeByVal: function(arr, val){
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    },
    touchStart: function(event) {
      if(event.touches.length == 1){
        // 手指按下时候的位置
        this.startX = event.touches[0].clientX
      }
    },
    touchMove: function(event) {
      if(event.touches.length == 1) {
        // 滑动过程中的位置
        this.moveX = event.touches[0].clientX
        // 滑动过程中实时计算滑动距离
        this.slideX = this.startX - this.moveX;
        // 如果是向右滑动或者只是点击，不改变滑动位置
        console.log("slideX:" +this.slideX);
        if(this.slideX < 0 || this.slideX == 0) {
            event.currentTarget.style.transform = "translateX(0rem)"
        }else if (this.slideX > 0) {
            
          // 如果向左滑动，则实时给这个根元素一个向左的偏移-left
          event.currentTarget.style.transform = "translateX(-"+this.slideX/100+"rem)"
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/css/base";

.seat {
    background:#EFEFF4;
    height:100vh;

    .hidden {
        display: none;
    }

    .active {
        background: url(../../../static/img/seat_active.png) no-repeat;
        background-size: cover;
    }

    .selected {
        background: url(../../../static/img/seat_selected.png) no-repeat;
        background-size: cover;
    }

    .disabled {
        background: url(../../../static/img/seat_disabled.png) no-repeat;
        background-size: cover;
    }

    .seat-movie {
        background: #fff;
        padding-left: 5vmin;

        .movie-info{
            padding: 4vmin 0;
            position: relative;
            min-width: 18.75vw;
            min-width: 18.8vmin;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;

            .info-title {
                color: #000;
                font-size: 1rem;
                width: auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .info-brief {
                margin-top: 1.6vmin;
                font-size: .8125rem;
                color: #666;
                width: auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .movie-seat {
            width: 100%;
            min-height: 3vmin;
            border-top: 1px solid #f2f2f2;
            padding: 2.5vmin 0;

            ul {
                width: 60%;
                margin: 0 auto;
                display: flex;

                li {
                    width: 33.33%;
                    display: flex;
                    align-items: center;
                    text-align: -webkit-match-parent;

                    .seat { 
                        height: 4.5vmin;
                        width: 4.5vmin;
                        margin-left: 1vmin;
                        line-height: 4.5vmin;
                        margin-right: 1vmin; 
                        vertical-align: center;       
                    }

                    span {
                        font-size: .9rem;
                        color: #666;
                    }

                }
            }
        }
    }

    .seat-wrap {
        height: 80vh;
        overflow-y: hidden;
        position: relative;
        z-index: 1;
        background: #EFEFF4;
        text-align: center;

        h3 {
            font-size: .8rem;
            font-weight: 400;
            position: absolute;
            top: 0px;
            left: 25%;
            z-index: 5;
            width: 50vw;
            padding: 1vmin 2vmin 3vmin;
            border-radius: 0 0 6vmin 6vmin;
            line-height: 5vmin;
            height: 6.5vmin;
            color: #000;
            background: #E2E2E2;
            margin: auto 0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .wrap {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 3;
            padding: 0;
            overflow: hidden;

            .scroller::-webkit-scrollbar{
                width: 0;
                height: 0;
                background-color: #FFFFFF;
            }

            .scroller {       
                position: absolute;
                top: 10vmin;
                left: 10px;
                padding: 0 3vmin;
                overflow-x: scroll;
                -webkit-overflow-x: scroll;


                div {
                    height: 8vmin;
                    line-height: 8vmin;
                    margin-top: 1.1vmin;
                    overflow: hidden;
                    white-space: nowrap;
                    text-align: left;
                    display: flex;
                    align-items: center;

                    .seat {
                        display: inline-block;
                        height: 5.5vmin;
                        width: 5.5vmin;
                        margin-left: 1vmin;
                        line-height: 5.5vmin;
                        margin-right: 1vmin;        
                    }
                }
            }
        }

        .side {
            top: 5vmin;
            position: absolute;
            z-index: 4;
            pointer-events: none;
            font-size: .6rem;
            color: #fff;
            opacity: .6;

            ol {
                background-color: #000;
                border-radius: 8px;
                opacity: .9;
                padding: 0 3px;
                color: #fff;
                padding-right: 1vmin;
                padding-bottom: 10vmin;

                li {
                    position: relative;
                    height: 9.2vmin;
                    padding-top: 5vmin;
                    line-height: 9.2vmin;
                    white-space: nowrap;
                }

            }
        }
    }

    .seat-confirm {
        z-index: 90;
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: #fff;
        border-top-width: .3vmin;
        border-top-style: solid;
        border-top-color: #d7d7d7;

        .confirm-info {
            display: flex;
            justify-content: space-between;
            padding: 3vmin 4vmin 4vmin;
            align-items: center;

            .info-left {

                p {
                    font-size: .625rem;
                    line-height: 5.6vmin;
                    color: #999;
                    text-align: left;
                }

                .selectedSeat {
                    margin-top: 2vmin;
                    display: flex;

                    div {
                        border:1px #ddd solid;
                        font-size:.7vmin;
                        color:#666;
                        padding:1vmin;
                        margin-right: 1.5vmin;
                    }
                }
            }

            .info-right {
                p{
                    font-size: .7rem;
                    color: rgb(153, 153, 153);

                    strong {
                        color: #ff4d64;
                        font-size: 1.125rem;
                    }

                    span {
                        color: #ff4d64;
                    }
                }
            }
        }   

        .confirm-submit {
            
            button {
                width: 100%;
                border-radius: 0;
                display: block;
                font-size: 1.0625rem;
                height: 3.4375rem;
                line-height: 3.4375rem;
                user-select: none;
                color: #fff;
                background-color: transparent;
                border: 0;
                background-image: linear-gradient(45deg,#ff7ba0,#ff4d64);
            }
        }
    }
}

</style>
