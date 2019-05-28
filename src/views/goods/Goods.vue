<template>
  <div class="goods">
    
  </div>
</template>
<script>
import Header from '@/components/public/Header.vue';
import Index from '@/components/Index.vue';
export default {
    'components': {
    },
    'name':'goods',
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
