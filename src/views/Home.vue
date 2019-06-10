<template>
  <div class="home">
    <Goods/>
  </div>
</template>
<script>
import Header from '@/components/public/Header.vue';
import Goods from './goods/Goods.vue';
import Utils from '@/components/public/Utils.vue';
export default {
    'components': {
        Header,Goods,Utils
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
