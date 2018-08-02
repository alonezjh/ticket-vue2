<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in items" :key="item.id"><img :src=item></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'slideBanner',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
        notNextTick: true,
        items:['../static/slide/1.jpg','../static/slide/2.jpg','../static/slide/3.jpg','../static/slide/4.jpg','../static/slide/5.jpg','../static/slide/6.jpg'],
        swiperOption: {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            autoplay: {
              delay:2000,
              stopOnLastSlide: true,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              paginationClickable: true
            },
            onSlideChangeEnd: swiper => {
                this.page = swiper.realIndex+1;
                this.index = swiper.realIndex;
            },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    activated() {

      this.swiper.update()
      this.swiper.autoplay.start()
      console.log("111111")
    },


}
</script>

<style lang="scss">
  @import "../assets/css/base";
  img {
  width: 100%;

  }

  .swiper-pagination .swiper-pagination-bullet{
    background:#ffffff;
  
  }
  .swiper-pagination .swiper-pagination-bullet-active {
      background: $bColor;
    }

</style>
