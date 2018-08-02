<template>
  <div style="position:relative">
    <header>
      <i @click="switchSearch()" class="iconfont icon-sousuo search"></i>
      <span v-if="isSearch">选择城市</span>
      <input v-else type="text" placeholder="请输入要搜索的城市" v-model="citySearch">
      <span class="close" @click="back">×</span>
    </header>
    <div class="city">
      <div class="city-item">
        <div class="item-title">
          <a id="当前">当前</a>
        </div>
        <div>成都</div>
      </div>
      <div class="city-item">
        <div class="item-title">
          <a id="热门">热门</a>
        </div>
        <div>重庆</div>
        <div>成都</div>
        <div>广州</div>
        <div>深圳</div>
        <div>武汉</div>
      </div>
      <div id="showCityContent"></div>
      <div v-for="item in showCity" class="city-item">
        <div class="item-title">
          <a :id="item.letter">{{item.letter}}</a>
        </div>
        <div v-for="i in item.citylist">
          {{i}} 
        </div>
      </div>
    </div>
    <aside class="city-letter">
      <ul>
        <li @click="naver('当前')">当前</li>
        <li @click="naver('热门')">热门</li>
        <li v-for="item in showCity" @click="naver(item.letter)">{{item.letter}}</li>
      </ul>
    </aside>
    <div id="tip">
      {{tipString}}
    </div>
  </div>
</template>

<script>
import pinyin from '../../../static/lib/pinyin-bundle.js'

var cityNames = []
  var cityNamesFilter = []
  var letter = []
  var showCity = []
  var showCityList = []
  var showCityTemp

export default {
  name: 'city',
  data () {
    return {
      isSearch: true,
      cityNames: [],
      letter: letter,
      tipString: '',
      citySearch: '',
      showCity: showCity
    }
  },
  created: function () {
    this.$axios.get('../../static/citys.json').then(response => {
      for(let i in response.data.citys) {
        cityNames.push(response.data.citys[i].name)
      }
    cityNamesFilter = cityNames
    this.cityFilter(this.citySearch)
    })
  },
  watch: {
    citySearch: function (newCitySearch) {
      this.cityFilter(newCitySearch)
    }
  },
  methods: {  
    back: function() {
      this.$router.back()
    },
    switchSearch: function () {
      this.isSearch = !this.isSearch
    },
    buildLetter: function () {  // 构建字母项
      letter = []
      for (let i = 0; i < 26; i++) {
        let obj = {}
        obj.letter = String.fromCharCode((65 + i))
        obj.citylist = []
        letter.push(obj)
      }
    },
    // 获取城市首字母
    getFirstLetter: function (str) { 
      return pinyin.pinyin(str)[0][0].charAt(0).toUpperCase()
    },
    // 构建城市
    buildItem: function (cityNamesFilter) { 
      this.buildLetter()
      for (let i = 0; i < 26; i++) {
        letter[i].citylist = []
      }
      for (let i = 0; i < cityNamesFilter.length; i++) {
        let index = Number(this.getFirstLetter(cityNamesFilter[i]).charCodeAt() - 65)
        if (index >= 0 && index < 26) {
          letter[index].citylist.push(cityNamesFilter[i])
        }
      }
      showCity = showCityTemp = letter.filter(function (value) {
        let len = value.citylist.length
        return len > 0
      })
    },
    // 点击右边字母滚动
    naver: function (id) { 
      this.tipString = id
      let obj = document.getElementById(id)
      let tip = document.getElementById('tip')
      tip.setAttribute('class', 'tipAppear' )
      setTimeout(function () {
        tip.removeAttribute('class')
      }, 500)
      let oPos = obj.offsetTop
      return window.scrollTo(0, oPos - 10)
    },
    // 城市搜索筛选
    cityFilter: function (city) {  
      let showCityListTemp
      this.buildItem(cityNamesFilter)
      showCity = showCityTemp
      showCity = showCity.filter(function (value) {
        showCityList = value.citylist
        showCityListTemp = showCityList.filter(function (val) {
          return (val.indexOf(city) > -1)
        })
        value.citylist = showCityListTemp
        return value.citylist.length > 0
      })
      this.showCity = showCity
      if (showCity.length === 0) {
          let showCityContent = document.getElementById('showCityContent')
          showCityContent.innerText = '没有找到该城市'
          showCityContent.setAttribute('class', 'tipShow')
        } else {
          document.getElementById('showCityContent').innerText = ''
        }
    }
  }
}
</script>
<style lang="scss" scoped>

@import "../../assets/css/page/city.scss"

</style>
