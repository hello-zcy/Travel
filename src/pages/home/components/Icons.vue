<template>
  <!-- <div class="icons">
    <div class="icon">
      <div class="icon-image">
        <img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </div> -->
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-image">
            <img :src="item.imgUrl" class="icon-image-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons
    overflow : hidden
    width: 100%;
    height: 0
    padding-bottom:50%
    .icon
      position relative
      overflow: hidden
      float: left
      height:0
      width:25%
      padding-bottom:25%
      // 这里的25%是相对于icons的宽度
      .icon-image
        position : absolute
        top: 0
        left :0
        right : 0
        bottom: .44rem
        box-sizing :border-box
        padding: .1rem
        .icon-image-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        text-align: center
</style>
