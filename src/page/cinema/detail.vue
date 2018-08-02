<template>
  <div class="detail">
    <div class="detail-info" ref="infoBox">
      <div class="info-wrap">
        <div class="wrap-content">
          <router-link to="/cinema/intro" class="content-cinema">       
            <div class="cinema-name">{{cinemaName}}</div>       
            <div class="cinema-address">{{cinemaAddress}}</div>       
            <ul class="cinema-tags">                                   
              <li v-for="item in cinemaTags">{{item}}</li>                                                                      
            </ul>     
          </router-link>
          <div class="content-collect" :class="{'noCollect':isCollect===0,'hasCollect':isCollect===1}"></div>
        </div>
        <div class="wrap-activity" v-for="item in cinemaActivities">
          <router-link to="/cinema/activity">              
            <div class="activity-title">{{item.title}}</div>              
            <div class="activity-content">{{item.content}}</div>                              
            <div class="activity-arrow"></div>                         
          </router-link>
        </div>
      </div>
    </div>
    <div class="detail-movie">
      <div class="movie-slide" ref="slideBox">
        <div class="slide-bg" :style="{backgroundImage:'url('+ slideBg +')'}"></div>
        <swiper :options="swiperImgOption" ref="mySwiper" class="imgOption">
          <swiper-slide v-for="(item, index) in movieInfo" :key="item.id">
            <img :src=item.cover @click="switchMovie(index)">
            </swiper-slide>
        </swiper>
      </div>
      <div class="movie-name" :class="{'movie-fixed': isFixed}" v-if="index===currentMovie" v-for="(item, index) in movieInfo">
        <a href="javascript:;">   
          <span class="name">{{item.name}}</span>        
          <span class="remark">
            <span class="star">{{item.score}}</span><span>分</span>
          </span>      
          <p>{{item.time}}分钟 | {{item.type}} | {{item.artist}}</p> 
        </a>
      </div>
    </div>
    <div class="detail-schedules">
      <div class="schedules-menu" :class="{'menu-fixed': isFixed}">
        <ul>
          <li v-for="(item, index) in scheduleDays">
            <span :class="{active: index === currentTab}" @click="switchTab(index)" >{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="schedules-content">
        <ul class="content-wrap" v-if="index===currentTab" v-for="(item, index) in scheduleDays">               
          <li v-for="(item, index) in scheduleLists">       
            <a>                  
              <div class="wrap-item">           
                <div>             
                  <span class="item-clock">{{item.startTime}}</span>             
                  <div class="item-other">             
                    <p>               
                      <span class="item-type">{{item.type}}</span>                                             
                      <span class="item-price">                 
                        <span class="price">{{item.price}}</span>                 
                        <span>元</span>               
                      </span>                              
                    </p>             
                  </div>           
                </div>           
                <div>             
                  <span class="item-end">{{item.endTime}}散场</span>             
                  <div class="item-other">             
                    <p>               
                      <span class="item-hall">{{item.hall}}</span>               
                      <span>&nbsp;</span>                                
                      <span class="item-old">{{item.oldPrice}}元</span>                              
                    </p>             
                  </div>           
                </div>            
                <div class="clearfix"></div>         
              </div>         
              <div class="wrap-btn">                        
                <span>购票</span>                    
              </div>       
            </a>     
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../components/header'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

//定义一个变量来接收返回的数据
let datas = null
let tags = null
let activities = null
let scheduleDays = null
let scheduleLists = null
export default {
  name: 'filter',
  components: {
    comHeader:header,
    swiper,
    swiperSlide
  },
  data() {
    return {
      slideBg: '',
      isFixed: false,
      isCollect: 0,
      cinemaName: '',
      cinemaAddress: '',
      cinemaTags: [],
      cinemaActivities: [],
      currentMovie: 0,
      currentTab: 0,
      notNextTick: true,
      scheduleDays: [],
      scheduleLists: [],
      movieInfo:[],
      swiperImgOption: {
        slidesPerView: 'auto',
        slideToClickedSlide:true,
        centeredSlides: true,
        slidesPerView: 4,
        spaceBetween: 15,
        on:{
          slideChange: function () {
            this.currentMovie = this.activeIndex
            console.log("当前电影："+this.currentMovie)
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  watch: {

  },
  mounted () {
    window.onscroll = () => {
      this.infoBox = this.$refs.infoBox
      this.slideBox = this.$refs.slideBox
      if (document.documentElement.scrollTop || document.body.scrollTop >= this.slideBox.offsetHeight+this.infoBox.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  created () {
    this.$axios.get('./../static/cinemaDetail.json').then(response => {
      // 影院名称
      this.cinemaName = response.data.cinemaName
      // 影院地址
      this.cinemaAddress = response.data.cinemaAddress
      // 影院是否被收藏
      this.isCollect = response.data.isCollect

      // 默认电影海报
      this.slideBg = response.data.cinemaMovies[this.currentMovie].cover;
      console.log("默认电影海报"+this.slideBg)

      // 影院标签
      let tags = response.data.cinemaTags
      for(let i in tags) {
        this.cinemaTags.push(tags[i])
      }

      // 影院活动
      let activities = response.data.cinemaActivities
      for(let i in activities) {
        this.cinemaActivities.push(activities[i])
      }

      // 影院电影数据
      let datas = response.data.cinemaMovies
      // 获取电影信息
      for(let i in datas) {
        this.movieInfo.push(datas[i])

        // 获取默认选中的电影信息
        if(this.currentMovie == i){
          for(let j in datas[i].movieSchedules) {
            // 放映日期
            this.scheduleDays.push(datas[i].movieSchedules[j].date)

            // 获取默认显示的放映日期
            if(this.currentTab == j){
              for(let k in datas[i].movieSchedules[j].schedules) {
                // 放映场次
                this.scheduleLists.push(datas[i].movieSchedules[j].schedules[k])  
              }
            }
          }
        } 
      }
    })
  },
  methods: {
    // 电影切换
    switchMovie: function (index) {
      this.currentMovie = index
      this.currentTab = 0
      this.$axios.get('../../static/cinemaDetail.json').then(response => {
        // 影院电影数据
        let datas = response.data.cinemaMovies

        // 电影海报
        this.slideBg = response.data.cinemaMovies[index].cover;

        // 清空电影信息
        this.movieInfo = []

        // 获取电影信息
        for(let i in datas) {
          this.movieInfo.push(datas[i])

          // 获取默认选中的电影信息
          if(index == i){
            // 清空日期信息
            this.scheduleDays = []
            for(let j in datas[i].movieSchedules) {
              // 放映日期
              this.scheduleDays.push(datas[i].movieSchedules[j].date)

              // 获取默认显示的放映日期
              if(this.currentTab == j){
                // 清空场次信息
                this.scheduleLists = []
                for(let k in datas[i].movieSchedules[j].schedules) {
                  // 放映场次
                  this.scheduleLists.push(datas[i].movieSchedules[j].schedules[k])  
                }
              }
            }
          } 
        }
      })
    },
    // 放映日期切换
    switchTab: function (index) {
      this.currentTab = index
      this.$axios.get('../../static/cinemaDetail.json').then(response => {
        // 影院电影数据
        let datas = response.data.cinemaMovies

        // 清空电影信息
        this.movieInfo = []

        // 获取电影信息
        for(let i in datas) {
          this.movieInfo.push(datas[i])

          // 获取默认选中的电影信息
          if(this.currentMovie == i){
            // 清空日期信息
            this.scheduleDays = []
            for(let j in datas[i].movieSchedules) {
              // 放映日期
              this.scheduleDays.push(datas[i].movieSchedules[j].date)

              // 获取默认显示的放映日期
              if(index == j){
                // 清空场次信息
                this.scheduleLists = []
                for(let k in datas[i].movieSchedules[j].schedules) {
                  // 放映场次
                  this.scheduleLists.push(datas[i].movieSchedules[j].schedules[k])  
                }
              }
            }
          } 
        }
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/css/base";
@import "../../assets/css/page/cinemaDetail";

.imgOption{
  .swiper-slide {
    padding-top: 7vmin; 
    margin-top: 7vmin;

    img {
      width:90%;
      height:100%;
    }
  }
  .swiper-slide-active{
    padding-top: 3.5vmin; 

    img {
      border: 2px #fff solid;
      height: 100%;
      width:100%;
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(100%);
}

</style>
