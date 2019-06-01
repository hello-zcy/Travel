<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名称或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            width: 100%
            height: .62rem
            line-height: .62rem
            text-align : center
            border : 1px solid #cccccc
            border-radius : .2rem
            padding:0 .1rem
            box-sizing : border-box

</style>
