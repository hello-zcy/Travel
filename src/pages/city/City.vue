<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphaet></city-alphaet>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphaet from './components/Alphaet'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphaet
    }
}
</script>

<style lang="stylus" scoped>

</style>
