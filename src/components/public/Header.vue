<template>
  <div class="header">
      <div>
            <i class="el-icon-location" style="font-size:16px;"></i> {{$store.state.city.name}}  
            <el-button class="header-changeCity" v-popover:popover>[ <span class="loins-header-changeCity">切换城市</span> ]</el-button>
             
      </div>
      <div>
         
      </div>
      <div>
          <div class="header-title">订单中心</div>
          <div class="header-title">实名认证</div>
          <div class="header-title" @click="goToFollow()">我的关注</div>
          <div class="header-title">优惠券</div>
          <div class="header-title">设置</div>
          
      </div>
    <el-popover
        ref="popover"
        placement="bottom"
        title="所在区域"
        width="100%"
        trigger="click"
        v-model="$store.state.city_state"
        >
        <div>
            <CityPopover/> 
        </div>
    </el-popover>
    <!-- <CityPopover/> -->
  </div>
</template>

<script>
import CityPopover from '@/components/public/CityPopover.vue'

export default {
    'components': {
        CityPopover
    },
    'name': 'Header',
    'props': {
        cityType:false,
    },
    data() {
        return {
            'activeIndex': '1'
        };
    },
    'methods': {
        handleSelect(key,keyPath) {
        // console.log(key, keyPath);
        },
        goToFollow(){
            this.$router.push({name:'follow',query:{id:1}})
        }
    }
};
</script>

<style scoped lang="less">
    .header{
        // background-color: aliceblue;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        border-bottom: solid 1px #e6e6e6;
        padding: 2px 10%;
        font-size: 12px;
        color:#999;
        background-color: #f8f8f8;
        // margin-bottom: 25px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }
    .header-title{
      display: inline-block;
      padding: 5px 10px;
      cursor:pointer;
    }
    .header-title:hover{
      color: #409EFF;
    }
    .loins-header-changeCity{
            // border: 1px solid #ddd;
            display: inline-block;
            font-size: 12px;
            padding: 0 2px;
            color: #409EFF;
            cursor:pointer;
    }
   .header-changeCity{
       border: none;
   }
</style>
