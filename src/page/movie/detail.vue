/*
 * @Author: alonez 
 * @Date: 2017-12-01 14:33:07 
 * @Last Modified by: alonez
 * @Last Modified time: 2018-08-02 11:21:43
 */
<template>
  <div class="detail">
    <div class="detail-content">
      <div class="content-bg" style="background-image: url(//gw.alicdn.com/i2/TB1xsowaG_85uJjSZFlXXXemXXa_.jpg_400x400Q30s150.jpg);"></div>
      <div class="content-body">     
        <img class="body-cover" src="//gw.alicdn.com/i2/TB1xsowaG_85uJjSZFlXXXemXXa_.jpg_400x400Q30s150.jpg">
        <div class="body-text">
          <div class="text-title">
            <p class="title-primary">寻梦环游记</p>
            <p class="title-sub">Coco</p>
          </div>
          <div class="text-type">
            <p>动画 冒险 动作</p>
            <p>美国 | 105分钟</p>
            <p>2017-11-24  在中国大陆上映 ></p>
          </div>
        </div>
      </div>
      <div class="content-score">
        <div class="score-text">       
          <b class="text-num">9.5</b>         
          <div class="text-wrap">                    
            <div class="wrap-text">观众评分</div>          
            <div class="wrap-people">186,342人</div>                 
          </div>     
        </div>
        <div class="score-star">
          <ul>
            <li>
              <div class="star">
                <div class="star-bg">
                  <div class="star-light" style="width:80%;"></div>
                </div>
              </div>
              <div class="percent">               
                <div class="percent-light" style="width: 87.3%"></div>             
              </div>
            </li>
            <li>
              <div class="star">
                <div class="star-bg">
                  <div class="star-light" style="width:55%;"></div>
                </div>
              </div>
              <div class="percent">               
                <div class="percent-light" style="width: 77.3%"></div>             
              </div>
            </li>
            <li>
              <div class="star">
                <div class="star-bg">
                  <div class="star-light" style="width:60%;"></div>
                </div>
              </div>
              <div class="percent">               
                <div class="percent-light" style="width: 62%"></div>             
              </div>
            </li>
            <li>
              <div class="star">
                <div class="star-bg">
                  <div class="star-light" style="width:40%;"></div>
                </div>
              </div>
              <div class="percent">               
                <div class="percent-light" style="width: 55%"></div>             
              </div>
            </li>
            <li>
              <div class="star">
                <div class="star-bg">
                  <div class="star-light" style="width:30%;"></div>
                </div>
              </div>
              <div class="percent">               
                <div class="percent-light" style="width: 44.3%"></div>             
              </div>
            </li>
          </ul>     
        </div>
      </div>
    </div>
    <div class="detail-intro">
      <div class="intro-text" v-for='item in showList'>{{item}}</div>
      <div class="intro-more" @click="showAll = !showAll">{{word}}</div>
    </div>
    <div class="detail-artist">
      <h2 class="artist-title">演职人员</h2>
      <div class="artist-people">
        <ul>
          <li v-for="item in artistLists">
            <router-link to="/movie/detail/artist">
              <div class="people-cover" :style="{backgroundImage:'url('+ item.cover +')'}">       
              </div>
              <span class="people-name">{{item.name}}</span>
              <span class="people-position">{{item.position}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="btn-more">全部11位演职人员</div>
    </div>
    <div class="detail-album">
      <h2 class="album-title">视频和剧照</h2>
      <div class="album-wrap">
        <ul>
          <li>
            <router-link to="/movie/detail/video">
              <div class="wrap-cover" :style="{backgroundImage:'url('+ videoCover +')'}"></div>
            </router-link>
          </li>
          <li v-for="(item,index) in albums">
            <div class="wrap-cover" :style="{backgroundImage:'url('+ item +')'}" @click="selectImg(index)">       
            </div>
          </li>
        </ul>
      </div>
      <router-link to="/movie/detail/album" class="btn-more">全部53张剧照</router-link>
    </div>
    <div class="detail-data">
      <h2 class="data-title">影片资料</h2>
      <div class="data-wrap">
        <div class="wrap-row">
          <div class="row-item">
            <div class="item-icon" style="background-image: url(../../static/img/data-bg.svg);"></div>
            <div class="item-content">           
              <div class="content-title">
                影片背景
              </div>           
              <div class="content-desc">
                票票独家| 活久见！满屏都是骷髅和死亡的动画，竟让全影院感动到哭的稀里哗啦
              </div>       
            </div>
          </div>
          <div class="row-divider"></div>
          <div class="row-item">
            <div class="item-icon" style="background-image: url(../../static/img/data-flower.svg);"></div>
            <div class="item-content">           
              <div class="content-title">
                幕后花絮
              </div>           
              <div class="content-desc">
                影片中出现的地下泉，是墨西哥很有名的地理景观，可称尤卡坦半岛的一大特色
              </div>       
            </div>
          </div>
        </div>
        <div class="wrap-row">
          <div class="row-item">
            <div class="item-icon" style="background-image: url(../../static/img/data-word.svg);"></div>
            <div class="item-content">           
              <div class="content-title">
                台词精选
              </div>           
              <div class="content-desc">
                死亡并不可怕，遗忘才是最终的告别，请记住你爱着和爱过的人。
              </div>       
            </div>
          </div>
          <div class="row-divider"></div>
          <div class="row-item">
            <div class="item-icon" style="background-image: url(../../static/img/data-author.svg);"></div>
            <div class="item-content">           
              <div class="content-title">
                出品发行
              </div>           
              <div class="content-desc">
                皮克斯动画工作室
              </div>       
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-rank">
      <h2 class="rank-title">票房排行</h2>
      <div class="rank-wrap">
        <div class="wrap-item">
          <h3>1</h3>
          <label>今日票房排名</label>
        </div>
        <div class="wrap-item">
          <h3>11836</h3>
          <label>首周票房(万)</label>
        </div>
        <div class="wrap-item">
          <h3>31290</h3>
          <label>累计票房(万)</label>
        </div>
      </div>
      <div class="btn-more">票房详情</div>
    </div>
    <div class="detail-comment">
      <h2 class="comment-title">观众热评</h2>
      <div class="comment-wrap">
        <div class="wrap-item">
          <div class="item-avatar" style="background: url(//gw.alicdn.com/i1/6000000000780/TB2XWQAa7fb_uJkHFNRXXc3vpXa_!!6000000000780-2-tfmovie.png_80x80Q30s150.jpg) center center / cover no-repeat rgb(204, 204, 204);"></div>
          <ul>
            <li>
              <div class="item-username">香远益清cute</div>
            </li>
            <li>
              <div class="item-star">
                <div class="star-light" style="width:100%;"></div>
              </div>
            </li>
            <li>
              <div class="item-comment">
                带两个小朋友去看的，影院里几乎是满座的，所以氛围不错。电影本身的题材很新颖，以类似于穿越的手法开展故事情节，引人入胜。处理手法也很好，小到声音，服装，情绪刻画都很详细。
              </div>
            </li>
            <li>
              <div class="item-extra">
                <div class="extra-time">11-27 10:34</div>
                <div class="extra-msg">               
                  <div>                 
                    <i class="iconfont icon-dianzan"></i>                 
                    <span class="msg-count">352</span>               
                  </div>               
                  <div>                 
                    <i class="iconfont icon-pinglun"></i>                 
                    <span class="msg-count">25</span>               
                  </div>             
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="wrap-item">
          <div class="item-avatar" style="background: url(//gw.alicdn.com/tfscom/TB1Yr5ONpXXXXbdXXXXXXXXXXXX_80x80Q30s150.jpg) center center / cover no-repeat rgb(204, 204, 204);"></div>
          <ul>
            <li>
              <div class="item-username">婷巴拉</div>
            </li>
            <li>
              <div class="item-star">
                <div class="star-light" style="width:100%;"></div>
              </div>
            </li>
            <li>
              <div class="item-comment">
                一电影院的人盯着骷髅头们哭成了狗
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
                  <div>                 
                    <i class="iconfont icon-pinglun"></i>                 
                    <span class="msg-count">15</span>               
                  </div>             
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="wrap-item">
          <div class="item-avatar" style="background: url(//gw.alicdn.com/i2/116860158861776130/TB2p63.jXXXXXbBXpXXXXXXXXXX_!!0-mytaobao.jpg_80x80Q30s150.jpg) center center / cover no-repeat rgb(204, 204, 204);"></div>
          <ul>
            <li>
              <div class="item-username">买买就健康007</div>
            </li>
            <li>
              <div class="item-star">
                <div class="star-light" style="width:80%;"></div>
              </div>
            </li>
            <li>
              <div class="item-comment">
                皮克斯保持原创的又一巅峰，回忆与遗忘的情感核心，在家庭、音乐、梦想、冒险的故事线下饱满溢出银幕，最后只能以泪洗面。2017年度最佳电影！
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
                  <div>                 
                    <i class="iconfont icon-pinglun"></i>                 
                    <span class="msg-count">65</span>               
                  </div>             
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn-more">全部53171条观众影评</div>
    </div>
    <div class="detail-topic">
      <h2 class="topic-title">话题讨论</h2>
      <div class="topic-wrap">
        <div class="wrapper" style="opacity: 1; transition: opacity 0.5s ease-in; background-image: url(https://gw.alicdn.com/i2/TB1YrS4fHYI8KJjy0FaXXbAiVXa_.jpg_360x360Q30.jpg);">     
          <div class="content">              
            <p class="title"><strong>话题讨论</strong></p>            
            <p class="desc">哪个瞬间，让你感受到家人带给你的温暖？</p> 
            <p class="count"><span>--</span> 53人参与讨论 <span>--</span></p>     
          </div>  
        </div>
      </div>
    </div>
    <div class="detail-article">
      <h2 class="article-title">相关文章</h2>
      <div class="article-wrap">
        <a class="wrap-item">           
          <div class="item-detail">         
            <h3>完蛋，差点哭死在电影院</h3>         
            <div class="detail-info">           
              <div class="info-author">                        
                <span class="author-avatar" style="background-image: url(https://gw.alicdn.com/i3/TB1y_PTRVXXXXataFXXXXXXXXXX_.jpg_360x360Q30.jpg);"></span>                       
                <span>第十放映室</span>           
              </div>           
              <div>阅读 6730</div>         
            </div>       
          </div> 
          <div class="item-cover" style="background-image: url(https://gw.alicdn.com/i3/TB16O25f8DH8KJjSszcXXbDTFXa_.jpg_360x360Q30.jpg);"></div>       
        </a>
        <a class="wrap-item">           
          <div class="item-detail">         
            <h3>你确定，看懂了这部皮克斯动画？</h3>         
            <div class="detail-info">           
              <div class="info-author">                        
                <span class="author-avatar" style="background-image: url(https://gw.alicdn.com/i3/TB1d89MNXXXXXbVapXXXXXXXXXX_.jpg_360x360Q30.jpg);"></span>                       
                <span>邑人影院</span>           
              </div>           
              <div>阅读 9355</div>         
            </div>       
          </div> 
          <div class="item-cover" style="background-image: url(https://gw.alicdn.com/i4/TB1ow5Df_TI8KJjSsphXXcFppXa_.jpg_360x360Q30.jpg)"></div>       
        </a>
      </div>
      <div class="btn-more">全部22篇文章</div>
    </div>
    <div style="height:12.2vmin"></div>
    <div class="detail-buy">
      <button @click="selectSeat" type="submit">立即购票</button>
    </div>
		<div v-if="show">
      <image-preview :imgArr="albums" :imageIndex="imageIndex" v-on:closeImage="closeImage"></image-preview>
    </div>
  </div>
</template>

<script>
import imagePreview from '../../components/imagePreview'

  export default{
    name: 'detail',
    components: {
      imagePreview: imagePreview
    },
    data() {
      return {
        // 显示组件
        show: false,
        // 从哪一张图片开始
        imageIndex: 0,
        isShowNav: false,
        videoCover: '', // 视频封面
        videoLink: '', // 视频地址
        albums: [], // 剧照
        introLists:[
          '小男孩米格(安东尼·冈萨雷斯 配音)一心梦想成为音乐家，更希望自己能和偶像歌神德拉库斯(本杰明·布拉特 配音)一样，创造出打动人心的音乐，但他的家族却世代禁 ...',
          '小男孩米格(安东尼·冈萨雷斯 配音)一心梦想成为音乐家，更希望自己能和偶像歌神德拉库斯(本杰明·布拉特 配音)一样，创造出打动人心的音乐，但他的家族却世代禁止族人接触音乐。米格痴迷音乐，无比渴望证明自己的音乐才能，却因为一系列怪事，来到了五彩斑斓又光怪陆离的神秘世界。在那里，米格遇见了魅力十足的落魄乐手埃克托(盖尔·加西亚·贝纳尔 配音)，他们一起踏上了探寻米格家族不为人知往事的奇妙之旅，并开启了一段震撼心灵、感动非凡、永生难忘的旅程。'   //进行显示的数据
        ],
        artistLists: [
          { cover: '../static/artist/1.jpg', name: '李·昂克里奇', position: '导演' },
          { cover: '../static/artist/2.jpg', name: '本杰明·布拉特', position: '饰 Ernesto de la Cruz' },
          { cover: '../static/artist/3.jpg', name: '盖尔·加西亚·贝纳尔', position: '饰 Hector' },
          { cover: '../static/artist/4.jpg', name: '芮妮·维克托', position: '饰 Abuelita' },
          { cover: '../static/artist/5.jpg', name: '安东尼·冈萨雷兹', position: '饰 米格尔' },
          { cover: '../static/artist/6.jpg', name: '爱德华·詹姆斯·奥莫斯', position: '饰 （配音）' },
          { cover: '../static/artist/7.jpg', name: '阿兰纳·乌巴奇', position: '饰 （配音）' },
        ],
        showAll:false,  　　　　　　　　　　　　　　　　//标记数据是否需要完全显示的属性
      }
    },
    created () {
      this.$axios.get('./../static/movieDetail.json').then(response => {
        let albums = response.data.albums
        this.videoCover = response.data.videoCover
        this.videoLink = response.data.videoLink
  
        for(let i in albums) {
          this.albums.push(albums[i].img)
        }
      })
  },
    methods: {
      selectImg: function(index) {
        this.show = true
        this.imageIndex = index
        console.log("sas"+index)
        document.getElementsByTagName('html')[0].style.overflow = "hidden"
      },
      closeImage: function(){
        this.show = false
        document.getElementsByTagName('html')[0].style.overflow = "auto"
      },
      selectSeat: function() {
        this.$router.push('/movie/seat')
      }
    },
    computed:{
      showList:function(){
        if(this.showAll == false){                    //当数据不需要完全显示的时候
          var showList = [];　　　　　　　　　　　　　　　 //定义一个空数组
          showList.push(this.introLists[0])
          return showList;　　　　　　　　　　　　　　　　 //返回当前数组
        }else{
          var showList = [];　　　　　　　　　　　　　　　 //定义一个空数组
          showList.push(this.introLists[1])
          return showList;
        }
      },
      word:function(){
        if(this.showAll == false){　　　　　　　　　　　//对文字进行处理
          return '展开'
        }else{
          return '收起'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/base";
  @import "../../assets/css/page/detail.scss";

  	.slide-fade-enter-active {
		transition: opacity .5s ease;
	}
	.slide-fade-leave-active {
		transition: opacity .5s ease;
	}
	.slide-fade-enter, .slide-fade-leave-active {
		opacity: 0;
	}
	h1, h2 {
		margin: 0;
		padding: 0;
	}
	img {
		display: block;
		margin: 10px auto;
		max-width: 400px;
	}

</style>
