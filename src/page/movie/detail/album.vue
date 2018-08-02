/*
 * @Author: alonez 
 * @Date: 2017-12-20 15:32:45 
 * @Last Modified by: alonez
 * @Last Modified time: 2017-12-20 18:29:08
 */

<template>
    <div class="album">
        <div class="album-menu">
            <ul>
                <li v-for="(item, index) in albums" :class="{active: index === currentTab}" @click="switchTab(index)">
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class="album-list" v-for="(item,index) in albums" v-if="index===currentTab">
            <div v-for="(item,index) in pics" class="item" :style="{backgroundImage:'url('+ item.replace('2200x2200Q50', '320x320Q30s150') +')'}" @click="selectImg(index)"></div>
        </div>
        <div v-if="show">
            <image-preview :imgArr="pics" :imageIndex="imageIndex" v-on:closeImage="closeImage"></image-preview>
        </div>
    </div>
</template>

<script>
import imagePreview from '../../../components/imagePreview'

export default{
    name: 'album',
    components: {
      imagePreview: imagePreview
    },
    data() {
        return {
            currentTab: 0,
            albums: [],
            pics: [],
            // 显示组件
            show: false,
            picss: ["https://gw.alicdn.com/i4/TB1QPQHgoQIL1JjSZFhXXaDZFXa_.jpg_320x320Q30s150.jpg","https://gw.alicdn.com/i1/TB1qVFpQXXXXXXYapXXXXXXXXXX_.jpg_320x320Q30s150.jpg",
            "https://gw.alicdn.com/4/TB1XG4rQXXXXXaeaXXXXXXXXXXX_.jpg_320x320Q30s150.jpg"],
            // 显示组件
            showImagePreview: false,
            // 从哪一张图片开始
            imageIndex: 0,
        }
    },
    created () {
        window.scrollTo(0,0)
        this.$axios.get('../../static/album.json').then(response => {
            let datas = response.data.datas
            for(let i in datas) {
                this.albums.push(datas[i])

                if(this.currentTab == i){
                    for(let j in datas[i].pics) {
                        this.pics.push(datas[i].pics[j])
                    }
                }
            }
        })
        
    },
    methods: {
        switchTab: function (index) {
            this.currentTab = index
            this.$axios.get('./../static/album.json').then(response => {
                let datas = response.data.datas
                for(let i in datas) {
                    if(index == i){
                        this.pics = []
                        for(let j in datas[i].pics) {
                            this.pics.push(datas[i].pics[j])
                        }
                    }
                }
            })
            console.log("索引："+index)
        },
        selectImg: function(index) {
            this.showImagePreview = true
            this.show = true
            this.imageIndex = index
            document.getElementsByTagName('html')[0].style.overflow = "hidden"
        },
        closeImage: function(){
            this.showImagePreview = false
            this.show = false
            document.getElementsByTagName('html')[0].style.overflow = "auto"
            console.log("sas")
        }
    }
}

</script>

<style lang="scss" scoped>
@import "../../../assets/css/base";

.album {

    .album-menu::-webkit-scrollbar{
        width: 0;
        height: 0;
        background-color: #FFFFFF;
    }
      
    .album-menu{
        width: 100%;
        background-color:#FFFFFF;
        overflow-x: scroll;
        -webkit-overflow-x: scroll;
        
        ul {
            display: flex;
            justify-content: flex-start;
            border-bottom: .1vmin #efefef solid;

            .active {
                color: #ff4d64;
                border-bottom: .8vmin #ff4d64 solid;
                padding-bottom: 3vmin;
            }
        
            li {
                display: inline-block;
                height: 12vmin;
                width: 25vmin;
                line-height: 12vmin;
                position: relative;
                text-overflow: ellipsis;
                word-break: keep-all;
                color: #666;
                font-size: 1rem;
            }
        }
    }

    .album-list {
        width: 100%;
        display: flex;
        margin-top: -.1vmin;
        flex-flow: row wrap;
        align-content: flex-start;
 
        .item {           
            box-sizing: border-box;
            background-color: white;
            flex: 0 0 32.6%;
            margin-left: .5%;
            margin-bottom: .5%;
            height: 31.3vmin;
            width: 30vmin;
            background-position: 50%;
            background-size: cover;   
        }
    }
}

</style>
