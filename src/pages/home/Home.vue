<template>
    <div id = "root">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <div>test</div>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  },
  data () {
    return {
      // swiperList:[]
    }
  },
  methods: {
    // getHomeInfo(){
    //   axios.get('./api/index.json?city='+this.city)
    // }
  }
}
</script>

<style>

</style>
