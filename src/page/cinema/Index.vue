<template>
  <div class="cinema">
    <div class="top">
      <div class="top-location">
        <i class="iconfont icon-taopiaopiaoicon location-icon"></i>
        <span class="location-name">成都</span>
        <i class="iconfont icon-xiala location-drop"></i>
      </div>
      <div class="top-action">
        <div @click="switchFilter" :class="{'action-filter':true, 'active': isFilter}">
          <i class="iconfont icon-shaixuan"></i>筛选 
        </div>
        <div class="action-divider">|</div>
        <div @click="switchSearch" class="action-search">
          <i class="iconfont icon-sousuo"></i>搜索
        </div>
      </div>
    </div>
    <div class="list" :class="{'list-margin': isFilterSelected}">
      <div class="list-item" v-for="item in cinemaLists">     
        <router-link to="/cinema/detail" class="item-wrap">         
          <h3>         
            <span class="cinema-name">{{item.name}}</span>                  
            <span class="cinema-price">{{item.price}}<span>元起</span></span>                          
          </h3>   
          <div class="cinema-address">{{item.address}}</div>       
          <div class="cinema-special" v-for="special in item.specials">{{special}}</div>  
          <div class="cinema-act" v-if="item.activityTag">               
            <span class="act-icon" :class="item.activityTagColor">{{item.activityTag}}</span>
            <span>{{item.activityInfo}}</span>            
          </div>              
        </router-link>                 
      </div>      
    </div>
    <div v-if="isFilterSelected" class="filter-selected">
      <div class="selected-show">
        <span>已选：{{filterSelected}}</span>
        <a href="javascript:;" @click="closeFilter">取消筛选</a>
      </div>
    </div>
    <!-- 筛选框体 -->
    <div v-if="isFilter" class="filter">
      <div class="filter-content">
        <div class="content-item">
          <span class="title">区域</span>
          <span class="selected" :class="{'active': areaSelectedIndex != 9999}">{{filterArea}}</span>
          <ul>          
            <li :class="{'filterSelected': index === areaSelectedIndex}" v-for="(item, index) in areaLists" @click="dofilterArea($event, index)" ><div>{{item.name}}</div></li>
          </ul>
        </div>
        <div class="content-item">
          <span class="title">特色</span>
          <span class="selected" :class="{'active': specialSelectedIndex != 9999}">{{filterSpecial}}</span>
          <ul>          
            <li :class="{'filterSelected': index === specialSelectedIndex}" v-for="(item, index) in specialLists" @click="dofilterSpecial($event, index)"><div>{{item.name}}</div></li>
          </ul>
        </div>
      </div>
      <div class="filter-footer">
        <button @click="cancelFilter" class="btn-cancel">取消筛选</button>    
        <button @click="confirmFilter" class="btn-confirm">确定</button>
      </div>
    </div>
    <!-- 搜索框体 -->
    <div v-if="isSearch" class="search">
      <div class="cinema-search-hd" style="display: block;">
        <a href="javascript:;" @click="closeSearch" class="cinema-search-cancel">取消</a>
        <div class="cinema-search-control">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" id="cinemaSearchInput" v-model="searchName" placeholder="影院名称或地址">
        </div>
      </div>
      <!-- 搜索结果列表 -->
      <div class="list">
        <div class="list-item" v-for="item in searchResult">     
          <div class="item-wrap">         
            <h3>         
              <span class="cinema-name" v-html="item.name">{{item.name}}</span>                  
              <span class="cinema-price">{{item.price}}<span>元起</span></span>                          
            </h3>   
            <div class="cinema-address">
              {{item.address}}
            </div>       
            <div class="cinema-special" v-for="special in item.specials">{{special}}</div>  
            <div class="cinema-act" v-if="item.activityTag">               
              <span class="act-icon" :class="item.activityTagColor">{{item.activityTag}}</span>
              <span>{{item.activityInfo}}</span>            
            </div>              
          </div>                 
        </div>        
      </div>
    </div>
    <!-- 底部导航栏 -->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from '../../components/navBar'

//定义一个变量来接收返回的数据
let datas = null
export default {
  name: 'cinema',
  components: {
    navBar
  },
  data () {
    return {
      isFilter: false,
      isFilterSelected: false,
      isSearch: false,
      areaSelectedIndex: 9999,
      specialSelectedIndex: 9999,
      searchName: '',
      filterArea: '不限',
      filterSpecial: '不限',
      filterSelected: '',
      searchResult: [],
      cinemaLists: [],
      areaLists: [],
      specialLists: []
    }
  },
  created () {
    this.$axios.get('./../static/cinema.json').then(response => {
      let cinemas = response.data.cinemas
      for(let i in cinemas) {
        this.cinemaLists.push(cinemas[i])
      }
      let areas = response.data.areas
      for(let i in areas) {
        this.areaLists.push(areas[i])
      }
      let specials = response.data.specials
      for(let i in specials) {
        this.specialLists.push(specials[i])
      }
    })
  },
  methods: {
    switchFilter: function(){
      this.isFilter = !this.isFilter
      this.isFilterSelected = false
    },
    cancelFilter: function() {
      if(this.areaSelectedIndex === 9999 && this.specialSelectedIndex === 9999){
        this.isFilter = false
        return
      }
      this.filterArea = '不限'
      this.filterSpecial = '不限'
      this.areaSelectedIndex = 9999
      this.specialSelectedIndex = 9999
    },
    confirmFilter: function() {
      if(this.areaSelectedIndex === 9999 && this.specialSelectedIndex === 9999){
        this.isFilterSelected = false;
        this.isFilter = false
        return
      }
      this.isFilter = false
      this.isFilterSelected = true;
      let tmp = this.filterArea+" "+this.filterSpecial
      this.filterSelected = tmp.replace('不限', "")
    },
    closeFilter: function() {
      this.isFilterSelected = false
      this.filterArea = '不限'
      this.filterSpecial = '不限'
      this.areaSelectedIndex = 9999
      this.specialSelectedIndex = 9999
    },
    switchSearch: function(){
      this.isSearch = !this.isSearch
    },
    closeSearch: function() {
      this.isSearch = false
    },
    dofilterArea: function(event, index) {
      event.preventDefault()
      var dom = event.target;
      this.filterArea = dom.innerText
      this.areaSelectedIndex = index
    },
    dofilterSpecial: function(event, index) {
      event.preventDefault()
      var dom = event.target;
      this.filterSpecial = dom.innerText
      this.specialSelectedIndex = index
    }
  },
  watch: {
    searchName: function (value) {
      if (!value) {
        this.searchResult = []
        return
      }
      this.$axios.get('./../static/cinema.json').then(response => {
        datas = response.data.cinemas
        this.searchResult = []
        for(let i in datas) {
          if (datas[i].name.toUpperCase().indexOf(this.searchName.toUpperCase()) >= 0) {
            datas[i].name = datas[i].name.toUpperCase().replace(this.searchName.toUpperCase(), '<span style="color: #ffffff;background:#f30">' + this.searchName.toUpperCase() + '</span>');
            this.searchResult.push(datas[i])
          }
        }
      })
    },
    filterArea: function (value) {
      if (value === "不限") {
        this.cinemaLists = []
        this.$axios.get('../../static/cinema.json').then(response => {
          let cinemas = response.data.cinemas
          for(let i in cinemas) {
            this.cinemaLists.push(cinemas[i])
          }
        })
        return
      }
      this.$axios.get('./../static/cinema.json').then(response => {
        datas = response.data.cinemas
        this.cinemaLists = []
        for(let i in datas) {
          if (datas[i].area.indexOf(this.filterArea) >= 0) {
            this.cinemaLists.push(datas[i])
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
@import "../../assets/css/page/cinema";

</style>
