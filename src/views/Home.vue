<template>
  <div class="home">
   
    <Index/>
    <!-- <div class="home-search-view-center margin-top">
        <div class="home-left">
            <div class="home-left-title">推荐</div>
        </div>
        <div class="home-right">
            <div class="home-right-title">我要买车</div>
            <div class="home-right-title">我要卖车</div>
            <div class="home-right-title">我要估价</div>
        </div>
    </div> -->
  </div>
</template>
<script>
import Header from '@/components/public/Header.vue';
import Index from '@/components/Index.vue';
import Utils from '@/components/public/Utils.vue';
// import avatar  from '../static/images/home/avatar.jpg';
export default {
    'components': {
        Header,Index,Utils
    },
    'name':'home',
    data(){
        return {
            
            // img : avatar,
        }
    },
    'methods':{
        'loins':function(){
            return this.$api.home.getHome();
        }
    },
    mounted(){
        this.loins().then(res=> {

        });
    }
};
</script>

<style scoped lang="less">
    
   
</style>
