<template>
  <div>
    <div class="row" style="height:50px;vertical-align:middle">
      <div style="width:32%;">
          <div>
              <span class="iconfont icon-taopiaopiaoicon" style="line-height:45px;float:left;margin-left:15px;font-size:30px;color:#FF4D64;"></span>
          </div>
        <div @click="enterCity">
        <span style="font-size:.94rem;color:#928ea5;line-height:48px;float:left;margin-left:10px">成都</span>
        <i class="iconfont icon-xiala" style="float:left;margin-left:2px;line-height:48px;color: rgb(146, 142, 165);"></i>
        </div>
      </div>
      <div style="width:68%">
        <ul class="tabs">
          <li class="material-tab" v-for="(item, index) in tabsParam" @click="toggleTabs(index)" :class="{active:index == nowIndex}">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <transition name="slide-fade">
          <div class="tab-content" v-show="nowIndex===0">
            <slideBanner></slideBanner>
            <moviePlay></moviePlay>
          </div>
        </transition>
        <transition name="slide-fade">
          <div class="tab-content" v-show="nowIndex===1">
             <movieSoon></movieSoon>
          </div>
        </transition>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from '../../components/navBar'
import slideBanner from '../../components/slideBanner'
import moviePlay from '../../components/moviePlay'
import movieSoon from '../../components/movieSoon'

export default {
  name: 'movie',
  components: {
    slideBanner,
    moviePlay,
    movieSoon,
    navBar
  },
  data () {
    return {
      tabsParam: ['正在热映', '即将上映'],
      nowIndex: 0
    }
  },
  methods: {
    toggleTabs: function (index) {
      this.nowIndex = index
    },
    enterCity: function() {
      this.$router.push('/movie/city')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../../assets/css/base";


.tabs {
  display:inline-block;
  width: 65%;
  text-align:center;

}

.active{
  color: $bColor !important;
  border-bottom: 3px $bColor solid;
}

.tab-content {
  margin-top: -5px;
  overflow-y: scroll;
}

@media screen and (min-width: 500px) {

  .tab-content {
    width: 500px;
    left: 0%;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(100%);
}


.material-tab {
    color: #50505a;
    width:46%;
    margin-left: 2%;
    line-height: 1.5rem;
    display:inline-block;
    font-size: px2rem(34);
    padding-top: 12px;
    padding-bottom: 6px;
  }

</style>
