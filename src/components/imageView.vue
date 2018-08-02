/*
 * @Author: alonez 
 * @Date: 2017-12-16 15:33:47 
 * @Last Modified by: alonez
 * @Last Modified time: 2017-12-20 17:10:09
 */
<template>
	<div id="imgPreview" v-show="showImagePreview" v-bind:style="{ width: viewWith + 'px', height: viewHeight + 'px' }">

			<ul class="imageBox"
					v-bind:style="ulStyleObj">
				<li v-for="(item, index) in imgArr" v-bind:style="{ width: viewWith + 'px'}">
					<img :src="item">
          <p style="color:#fff">{{index+1}} / {{imgArr.length}}</p>
				</li>
			</ul>
      <div class="close">
        <img src="../../static/img/close.svg" @click="close">
      </div>
      

	</div>
</template>

<script>
  export default{
    props: {
      imgArr: {
        type: Array
      },
      showImagePreview: {
        type: Boolean
      },
      imageIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        imgs: [],
        viewWith: 800,
        viewHeight: 800,
        imageView: null,
        indexLeft: 10,
        showIndex: 0,
        point: {
          startX: 0,
          changeX: 0
        },
        ulStyleObj: {
          width: '800px',
          transition: '0.5s',
          transform: 'scaleZ(1.01) translate3d(0, 0, 0)'
        },
        startTimeStap: null,
        endTimeStap: null,
        pEvent: {
          TOUCHSTART: 'touchstart',
          TOUCHMOVE: 'touchmove',
          TOUCHEND: 'touchend'
        },
        flag: false,
        // 拖拽距离配置
        dragConfig: {
          // 拖拽距离
          distance: 100,
          // 拖拽间隔
          timeStap: 200
        }
      }
    },
    methods: {
      // 计算布局
      initLayout () {
        console.log(this.imgArr)
        this.ulStyleObj.width = this.imgArr.length * this.viewWith + 'px'
        let translate = -(this.showIndex * this.viewWith)
        this.ulStyleObj.transform = 'scaleZ(1.01) translate3d(' + (translate + this.point.changeX) + 'px, 0, 0)'
        this.eventHandle()
      },
      // 事件处理
      eventHandle () {
        const self = this
        if (!this.imageView) {
          return
        }
        this.imageView.addEventListener(self.pEvent.TOUCHSTART, (e) => {
          self.flag = true
          self.point.StartX = e.changedTouches[0].pageX
          self.startTimeStap = new Date()
          return false
        })
        this.imageView.addEventListener(self.pEvent.TOUCHMOVE, (e) => {
          if (!self.flag) {
            return
          }
          self.ulStyleObj.transition = ''
          self.point.changeX = e.changedTouches[0].pageX - self.point.StartX
          var translate = -(
          self.showIndex * self.viewWith)
          self.ulStyleObj.transform = 'scaleZ(1.01) translate3d(' + (
                                      translate + self.point.changeX) + 'px, 0, 0)'
        })
        this.imageView.addEventListener(self.pEvent.TOUCHEND, (e) => {
          self.flag = false
          self.ulStyleObj.transition = '0.5s'
          self.point.changeX = e.changedTouches[0].pageX - self.point.StartX
          self.endTimeStap = new Date()
          var timeStap = self.endTimeStap - self.startTimeStap
          var changeX = Math.abs(self.point.changeX)
          if ((
              changeX >= self.dragConfig.distance) || (
              timeStap < self.dragConfig.timeStap && changeX > 30)) {
            if (self.point.changeX > 0) {
              self.showIndex--
              if (self.showIndex <= 0) {
                self.showIndex = 0
              }
            } else {
              self.showIndex++
              if (self.showIndex >= self.imgArr.length - 1) {
                self.showIndex = self.imgArr.length - 1
              }
            }
          }
          var translate = -(self.showIndex * self.viewWith)
          self.ulStyleObj.transform = 'scaleZ(1.01) translate3d(' + (
              translate) + 'px, 0, 0)'
          
          return false
        })
      },
      close: function(){
        this.$emit('closeImage')
        document.getElementsByTagName('html')[0].style.overflow = "auto"
      }
    },
    watch: {
      imgArr () {
        this.initLayout()
      }
    },
    mounted () {
      console.log(this.imgArr.length)
      let vW = window.innerWidth
      let vH = window.innerHeight
      this.showIndex = this.imageIndex
      this.$nextTick(function () {
        this.imageView = document.querySelector('#imgPreview')
        this.viewWith = vW
        this.viewHeight = vH
        this.pEvent.TOUCHSTART = 'touchstart'
        this.pEvent.TOUCHMOVE = 'touchmove'
        this.pEvent.TOUCHEND = 'touchend'
        this.dragConfig.timeStap = 150
        this.dragConfig.distance = parseInt(this.viewWith / 2)   
      })
    }
  }
</script>

<style lang="scss" scoped>
	ul, li {
		margin: 0;
		padding: 0;
	}

	#imgPreview {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 9999;
		overflow: hidden;

		.imageBox {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;


			li {
				height: auto;
        overflow: hidden;
        
				img {
				  width: 100%;
				}
			}
    }
    
    .close {
      width: 100%;
      position:absolute;
      top:5vmin;
      right:4vmin;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        width:10%;
      }
    }
	}
</style>
