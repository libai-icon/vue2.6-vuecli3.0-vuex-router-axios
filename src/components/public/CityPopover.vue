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
    // 'props': {
    //     'msg': String
    // },
    data() {
        return {
          cityData:[]
        };
    },
    'methods': {
        'getCity':function(){
            return this.$api._public.getCity();
        }
    },
    mounted(){
        this.getCity().then(res => {
            console.log(res)
            this.cityData = res;
        });
    }
};
</script>

<style scoped lang="less">
  
</style>
