<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
            :ref = "item"
        >
        {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphaet',
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    // 加updated是为了提升性能
    // 页面刚开始加载的时候，传过来的值是空的，因为ajax请求还没完成；
    // 当请求完数据之后，页面更新，updated就会执行
    updated () {
        this.startY=this.$refs['A'][0].offsetTop
    },
    computed: {
        letters() {
            const letters = []
            for(let i in this.cities) {
                letters.push(i);
            }
            return letters
            // ['A','B','C']
        }
    },
    methods: {
        handleLetterClick(e){
            this.$emit('change',e.target.innerText);
            console.log(e.target.innerText);
        },
        handleTouchStart(){
            this.touchStatus=true;
        },
        handleTouchMove(e){
            if(this.touchStatus){
                // const startY = this.$refs['A'][0].offsetTop
                //A元素距离顶部的高度
                // console.log(startY);
                // 函数节流
                if(!this.timer){
                    this.timer=setTimeout(()=>{
                        this.timer=null;
                        const touchY=e.touches[0].clientY-79
                        // 距离绿色头部底部位置的长度
                        const index=Math.floor((touchY-this.startY)/17.6)
                        if(index>= 0 && index < this.letters.length){
                            this.$emit('change',this.letters[index])
                        } 
                    },30)
                }

                // console.log(touchY);
            }
        },
        handleTouchEnd(){
            this.touchStatus=false;
        }
    }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'

.list
    position :absolute
    top: 1.58rem
    right:0
    bottom:0
    width:.45rem
    display : flex
    flex-direction:column
    justify-content :center
    .item
        line-height : .36rem
        text-align :center
</style>
