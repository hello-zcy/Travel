<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphaet :cities="cities"></city-alphaet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphaet from './components/Alphaet'

export default {
    name: 'City',
    data () {
        return {
            cities:{},
            hotCities:[],
            currentCity:'北京'
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphaet
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
                 .then(this.handleGetCityInfoSucc)
                 .catch(this.handleGetCityInfoFail)
        },
        handleGetCityInfoSucc (res) {
            res=res.data
            console.log(res);
            if(res.ret&&res.data){
                var data=res.data;
                this.cities=data.cities;
                this.hotCities=data.hotCities
            }
        },
        handleGetCityInfoFail (err) {
            console.log(err);
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
