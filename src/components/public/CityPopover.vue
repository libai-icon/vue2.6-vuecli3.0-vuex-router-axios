<template>
  <div class="cityPopover" >
      <div v-for="item in cityData">
          <span style="color:#409EFF"> {{item.initial}}:</span>
          <span v-for="i in item.list" class="cityPopover-city" @click="changeCity(i)" :class="i.code == checked ? 'selected '+i.code:i.code" >
              {{i.name}}
          </span>
          <!-- {{item.provinceName}} -->
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
          cityData:[],
          checked:''
        };
    },
    'methods': {
        'getCity':function(){
            return this.$api._public.getCity();
        },
        changeCity:function(i){
            this.$store.dispatch('update_city', i);
            console.log(this.$store.state.city)
            this.checked = i.code;
            this.$store.dispatch('update_city_state', false);
        }
    },
    mounted(){
        this.getCity().then(res => {
            console.log(res)
            this.cityData = res.city;
        });
    }
};
</script>

<style scoped lang="less">
  .cityPopover{
      width: 100%;
      height: 400px;
      overflow-y: scroll;
    //   overflow-y:visible
    
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
	width: 0;
	height: 0;
	background-color: #fff;
}

  .cityPopover-city{
      display: inline-block;
      padding: 5px 10px;
      cursor:pointer;
  }
//    .cityPopover-city:hover{
//       color: #409EFF;
//     }
    .selected{
        background-color: #409EFF;
        color: #fff;
    }
</style>
