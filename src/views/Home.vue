<template>
  <div class="home">
    <Header/>
    <Index/>
  </div>
</template>
<script>
import Header from '@/components/public/Header.vue';
import Index from '@/components/Index.vue';
export default {
    'components': {
        Header,Index
    },
    'name':'home',
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
