<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    mounted () {
        this.scroll=new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .border-topbottom
        &:before
         border-color: #ccc
        &:after
         border-color: #ccc
    .border-bottom
        &:before
         border-color: #ccc
    .list
        overflow : hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .55rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow: hidden
            // 触发bfc，消除浮动
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left 
                width: 33.33%
                .button
                    margin: .1rem
                    text-align: center
                    border: .02rem solid #ccc
                    padding: .1rem 0
                    border-radius: 0.06rem
        .item-list
            .item
                line-height: .76rem
                height: .76rem
                padding-left: 0.2rem
</style>
