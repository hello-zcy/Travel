<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li
              class="item border-bottom"
              v-for="item of weekendList"
              :key="item.id"
              border-bottom
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.info}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWekend',
  data () {
      return {
        weekendList : [
            {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            title: '大连亚圣海洋馆',
            info: '浪漫大连首战，浪漫的海洋主题乐园'
            },
            {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            title: '大连亚圣海洋馆',
            info: '浪漫大连首战，浪漫的海洋主题乐园'
            },
            {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            title: '大连亚圣海洋馆',
            info: '浪漫大连首战，浪漫的海洋主题乐园'
            },
            {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            title: '大连亚圣海洋馆',
            info: '浪漫大连首战，浪漫的海洋主题乐园'
            }
        ]
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eeeeee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    flex-direction:column
    .item-img-wrapper
       overflow : hidden
       width: 100%
       height:0
       padding-bottom:37%
       .item-img
         width:100%
    .item-info
        padding: .1rem
        .item-title
            line-height :.54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height : .4rem
            color:#ccc
            ellipsis()
</style>
