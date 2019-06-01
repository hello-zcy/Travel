<template>
  <div class="wrapper">

    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // props:{
  //   list:Array
  // },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background : #fff
.wrapper
    width :100%
    height:0
    overflow : hidden
    padding-bottom : 31.25%
    background : #eeeeee
    .swiper-img
      width:100%
</style>
