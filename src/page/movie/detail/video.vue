/*
 * @Author: alonez 
 * @Date: 2017-12-16 18:18:39 
 * @Last Modified by: alonez
 * @Last Modified time: 2017-12-20 10:21:21
 */

<template>
  <div class="video">
    <div class="playTop" ref="playBox" >
        <video width="100%" autoplay controls webkit-playsinline="true" id="video" :src="videos[playingIndex]">
        </video>
        <div class="video-wrap">    
            <a class="wrap-info">        
                <div class="info-title">            
                    <div class="title">寻梦环游记</div>
                    <div class="star">
                        <div class="star-wrap">
                            <div class="fill" style="width:80%;"></div>
                        </div>
                        <div class="star-num">9.5</div>
                    </div>  
                </div>       
                <div class="info-meta">美国/李·昂克里奇 阿德里安.莫利纳 安东尼·冈萨雷兹 本杰明·布拉特</div>    
            </a>    
            <div class="wrap-btn">       
                <a>购票</a>    
            </div>
        </div>
    </div>
    <div class="playBottom">
        <div class="video-list">
            <h2 class="title">全部视频<span class="num">（{{videos.length}}）</span></h2>
            <div class="list">
                <swiper :options="swiperImgOption" ref="mySwiper" class="imgOption">
                    <swiper-slide v-for="(item,index) in playLists" :key="item.id" :class="{'video-playing':playingIndex == index}">
                        <div class="video-cover" :style="{backgroundImage:'url('+ item.cover +')'}" @click=play(index)>
                            <div class="playing">播放中</div>
                            <div class="duration">{{item.duration}}</div>
                        </div>
                        <p class="video-name">{{item.name}}</p>
                    </swiper-slide>
                </swiper>
            </div>
            </div>
            <div class="video-comment">
                <h2 class="title">热门评论</h2>
                <div class="comment-wrap">
                    <div class="wrap-item">
                        <div class="item-avatar" style="background: url(//gw.alicdn.com/i4/1674105002/TB2w7gOkpXXXXbrXpXXXXXXXXXX_!!0-mytaobao.jpg_48x48Q30.jpg) center center / cover no-repeat rgb(204, 204, 204);"></div>
                        <ul>
                            <li>
                            <div class="item-username">一枚亮硬币</div>
                            </li>
                            <li>
                            <div class="item-comment">
                                我不知道为什么网上总是有一些给人感觉到负能量的东西，还是多多关注电影本身和音乐本身
                            </div>
                            </li>
                            <li>
                            <div class="item-extra">
                                <div class="extra-time">11-27 10:27</div>
                                <div class="extra-msg">               
                                <div>                 
                                    <i class="iconfont icon-dianzan"></i>                 
                                    <span class="msg-count">949</span>               
                                </div>                         
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div class="wrap-item">
                    <div class="item-avatar" style="background: url(//gw.alicdn.com/i1/6000000001667/TB2pJZ2X8RRMKJjSZPhXXcZoVXa_!!0-mytaobao.jpg_48x48Q30.jpg) center center / cover no-repeat rgb(204, 204, 204);"></div>
                        <ul>
                            <li>
                            <div class="item-username">最是温柔999</div>
                            </li>
                            <li>
                            <div class="item-comment">
                                希望不认识毛不易的人，不要因为他自称巨星就盲目抨击。可以听听他的原创歌曲，消愁，像我这样的人。很优秀的一个人，巨星只是一个外号一样的存在。
                            </div>
                            </li>
                            <li>
                            <div class="item-extra">
                                <div class="extra-time">11-27 17:13</div>
                                <div class="extra-msg">               
                                <div>                 
                                    <i class="iconfont icon-dianzan"></i>                 
                                    <span class="msg-count">944</span>               
                                </div>                          
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div class="wrap-item">
                        <div class="item-avatar" style="background: url(//gw.alicdn.com/i4/2941204417/TB2E44dcjgy_uJjSZSgXXbz0XXa_!!0-mytaobao.jpg_48x48Q30.jpg) center center / cover no-repeat rgb(204, 204, 204);"></div>
                        <ul>
                            <li>
                            <div class="item-username">dear_彤彤彤</div>
                            </li>
                            <li>
                            <div class="item-comment">
                                关于亲情的一部电影 很值得去看 让人引发深思 把我看哭了 疯狂打call
                            </div>
                            </li>
                            <li>
                            <div class="item-extra">
                                <div class="extra-time">11-27 09:40</div>
                                <div class="extra-msg">               
                                <div>                 
                                    <i class="iconfont icon-dianzan"></i>                 
                                    <span class="msg-count">1135</span>               
                                </div>                         
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
    name: 'video',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            playingIndex: 0,
            swiperImgOption: {
                slidesPerView: 'auto',
                slideToClickedSlide:true,
                slidesPerView: 2.2,
                spaceBetween: 0,
                on:{
                    slideChange: function () {
                    }
                }
            },
            videos: [],
            playLists: []
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    created () {
      this.initData()
      window.scrollTo(0,0)
    },
    mounted () {
        let self = this
        let video = document.getElementById("video")
        video.addEventListener("ended", function(){  
            self.playingIndex = self.playingIndex + 1
            self.play(self.playingIndex)
            self.swiper.slideNext()
        })
        
    },
    methods: {
        initData: function(){
            this.$axios.get('../../../static/playList.json').then(response => {
                let datas = response.data.datas
                for(let i in datas){
                    this.playLists.push(datas[i])
                    this.videos.push(datas[i].link)
                }
            })  
        },
        play: function(index){
            if(this.videos.length == index){
                this.playingIndex = index-1
            }else{
                this.playingIndex = index
            }
            
        }
    }
}

</script>

<style lang="scss" scoped>
@import "../../../assets/css/base";
@import "../../../assets/css/page/video";

</style>
