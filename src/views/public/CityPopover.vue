<template>
  <div class="cityPopover">
      <div v-for="item in cityData">
          {{item.provinceName}}
      </div>
  </div>
</template>

<script>
export default {
    'name': 'CityPopover',
    'props': {
        // 'msg': String
    },
    data() {
        return {

        };
    },
    'methods': {
       
    },
    mounted(){
        
    }
};
</script>

<style scoped lang="less">
  
</style>
