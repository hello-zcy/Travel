<template>
    <div id = "root">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
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
