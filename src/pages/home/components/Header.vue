<template>
    <div class="header">
      <div class="header-left">
          <div class="iconfont  back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
      </div>
      <!-- router-link默认在div标签之外加了a标签 -->
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
      city: String
  }
}
</script>

<style lang="stylus" scoped>
//   @import '../../../assets/styles/varibles.styl'
//    @import '~@/assets/styles/varibles.styl'
//    @代表src目录

  @import '~styles/varibles.styl'
  .header
    display: flex
    height: $headerHeight
    background: $bgColor
    color: #ffffff
    line-height: 0.86rem
    // 相对于50px而言
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 1
        line-height : .64rem
        background: #ffffff
        border-radius: .1rem
        margin-top: .12rem
        padding-left: .2rem
        height: .64rem
        margin-left : .2rem
        color: #cccccc
    .header-right
        width: 1.24rem
        float: right
        text-align: center
        color: white
        .arrow-icon
            font-size: .24rem
</style>
