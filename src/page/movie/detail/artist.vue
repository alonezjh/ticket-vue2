/*
 * @Author: alonez 
 * @Date: 2017-12-20 10:24:01 
 * @Last Modified by: alonez
 * @Last Modified time: 2017-12-20 16:32:07
 */

<template>
    <div class="artist">
        <!-- 人物详情START -->
        <div class="artist-person">
            <!-- 头像START -->
            <div class="person-avatar">
                <div class="avatar" style="background-image: url(//gw.alicdn.com/i3/TB1RpV2JpXXXXcrXpXXXXXXXXXX_.jpg_400x400Q30s150.jpg)"></div>
            </div>
            <!-- 头像END -->
            
            <!-- 介绍START -->
            <div class="person-intro">
                <div class="intro-name">李·昂克里奇</div>
                <div>Lee Unkrich</div>
                <div>1967-08-08</div>
                <div>美国俄亥俄州，克里夫兰</div>
                <div>剪辑  导演  演员  制作人  编剧</div>
            </div>
            <!-- 介绍END -->
        </div>
        <!-- 人物详情END -->

        <!-- 作品列表START -->
        <div class="artist-works">
            <h2>电影作品<span>({{artistLists.length}})</span></h2>
            <div class="works-list">
                <div class="item" v-for="(item,index) in artistLists" >
                    <div class="movie-info">
                        <router-link to="/movie/detail" class="info-cover" :style="{backgroundImage:'url('+ item.cover +')'}">
                        </router-link>
                        <div class="info-content">
                            <div class="title">{{item.name}}</div>
                            <div class="text">{{item.role}}</div>
                            <div class="text">{{item.date}}</div>
                            <div class="content-score">
                                <div class="score-star">
                                <div class="star" :style="{'width':(item.score*10) +'%'}"></div>
                                </div>
                                <div class="score-num">{{item.score}}</div>
                            </div>
                        </div>
                        <a v-if="item.status == 1" class="info-btn">购票</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 作品列表END -->
    </div>
</template>

<script>

export default{
    name: 'artist',
    data() {
        return {
            playingIndex: 0,
            videos: [],
            artistLists: [
                {
                    "cover": "//gw.alicdn.com/i2/TB1xsowaG_85uJjSZFlXXXemXXa_.jpg_240x240Q30s150.jpg",
                    "name": "寻梦环游记",
                    "role": "导演 编剧 剪辑",
                    "date": "2017-11-24",
                    "score": "9.5",
                    "status": 1
                },
                {
                    "cover": "//gw.alicdn.com/i3/T1HjGoFi8aXXXXXXXX_.jpg_240x240Q30s150.jpg",
                    "name": "怪兽大学",
                    "role": "制作人",
                    "date": "2013-08-23",
                    "score": "9.1",
                    "status": 0
                },
                {
                    "cover": "//gw.alicdn.com/i4/TB1OTQTJpXXXXaBaXXXXXXXXXXX_.jpg_240x240Q30s150.jpg",
                    "name": "海底总动员",
                    "role": "导演",
                    "date": "2003-07-30",
                    "score": "9.0",
                    "status": 0
                },
                {
                    "cover": "//gw.alicdn.com/i1/TB12bgLJpXXXXXtXpXXXXXXXXXX_.jpg_240x240Q30s150.jpg",
                    "name": "怪兽电力公司",
                    "role": "导演 演员",
                    "date": "2001-11-02",
                    "score": "8.6",
                    "status": 0
                },
                {
                    "cover": "//gw.alicdn.com/i1/TB1_dtQJpXXXXXZXVXXXXXXXXXX_.jpg_240x240Q30s150.jpg",
                    "name": "玩具总动员2",
                    "role": "导演 演员 剪辑",
                    "date": "1999-11-24",
                    "score": "8.9",
                    "status": 0
                },
                {
                    "cover": "//gw.alicdn.com/i2/TB1oeFLJpXXXXcPXVXXXXXXXXXX_.jpg_240x240Q30s150.jpg",
                    "name": "虫虫特工队",
                    "role": "演员 剪辑",
                    "date": "1998-11-25",
                    "score": "7.7",
                    "status": 0
                }
            ]
        }
    },
    created () {
        window.scrollTo(0,0)
    }
}

</script>

<style lang="scss" scoped>
@import "../../../assets/css/base";

.artist {
    text-align: left;

    .artist-person {
        overflow: hidden;
        display: flex;
        height: 50vmin;
        background-size: cover;
        position: relative;
        background: url(//gw.alicdn.com/tps/i2/TB1QawEJFXXXXcXXXXXwwg20FXX-640-448.png) bottom no-repeat;

        .person-avatar {
            position: relative;
            width: 32vmin;
            margin: 0 5vmin;

            .avatar {
                position: absolute;
                bottom: 0;
                z-index: 1;
                width: 100%;
                height: 45vmin;
                min-height: 45vmin;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }

        .person-intro {
            margin-top: 5vmin;
            overflow: hidden;
            position: relative;
            z-index: 1;
            color: #ffffff;
            font-size: .75rem;

            .intro-name {
                font-size: 1.15rem;
                opacity: 1;
                margin: 0 0 3vmin 0;
                height: 6vmin;
                line-height: 6vmin;
            }

            div {
                opacity: .8; 
                margin-top: .8vmin;
                height: 5vmin;
                line-height: 5vmin;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    .artist-works {
        margin-top: 5vmin;
        padding-left: 5vmin;

        h2 {
            font-size: 1rem;
            line-height: 10vmin;
            color: #000;

            span {
                margin-left: 3px;
                color: #888888;
                font-weight: 400;
            }
        }

        .works-list {

            .item {
                display: flex;
                position: relative;
                align-items: center;
                margin-top: 5vmin;
                justify-content:space-between;

                /** 电影信息 **/
                .movie-info {
                    border-bottom: 1px solid #eee;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding-right: 5vmin;
                    padding-bottom: 4vmin;


                    /** 封面海报 **/
                    .info-cover {
                        width: 20vmin;
                        height: 28vmin;
                        display: block;            
                        background-position: 50%;
                        background-size: cover;
                        position: relative;
                    }

                    /** 主要信息 **/
                    .info-content {
                        flex: 1;
                        margin-left: 4vw;
                        align-items: flex-start;
                        height: 28vmin;
                        text-align: left;
                        justify-content: space-between;

                        .title {
                            max-width: 50vw;
                            overflow: hidden;
                            color: #333;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 1rem;
                            margin-bottom: 3vmin;
                        }

                        .text {
                            color: gray;
                            font-size: .9rem;
                            margin-top: 1.2vmin;
                            width: auto;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }

                        .content-score {
                            color: #8a869e;
                            font-size: .8125rem;
                            margin-top: .8vmin;
                            width: auto;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            white-space: nowrap;

                            .score-star {
                                float: left;
                                margin-top: .5vmin;
                                width: 19.2vmin;
                                height: 4vmin;
                                background-size: auto 100%;
                                background-image: url(../../../../static/img/star_f.svg);

                                .star {
                                    width: 100%;
                                    height: 100%;
                                    background-size: auto 100%;
                                    background-image: url(../../../../static/img/star_e.svg);
                                }
                            }

                            .score-num {
                                float: left;
                                margin-left: 2vmin;
                                height: 4vmin;
                                line-height: 3.7vmin;
                                font-size: .75rem;
                                margin-top: 1vmin;
                            }
                        
                        }

                    }

                    .info-btn {
                        display: block;
                        color: #fff;
                        text-align: center;
                        white-space: nowrap;
                        background-image: linear-gradient(45deg,#ff7ba0,#ff4d64);
                        border-radius: 4vmin;
                        position: relative;
                        font-size: .75rem;
                        line-height: 7.5vmin;
                        height: 7vmin;
                        padding-left: 3.5vmin;
                        padding-right: 3.5vmin;
                    }

                }

            }
        }
    }
}

</style>
