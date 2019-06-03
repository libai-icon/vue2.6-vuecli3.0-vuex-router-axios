<template>
  <div class="header">
      <div>
            <i class="el-icon-location" style="font-size:16px;"></i> 上海  
             [ <span class="loins-header-changeCity">切换城市</span> ]
      </div>
      <div>
         
      </div>
      <div>
          <div class="header-title">订单中心</div>
          <div class="header-title">实名认证</div>
          <div class="header-title">我的收藏</div>
          <div class="header-title">优惠券</div>
          <div class="header-title">设置</div>
          
      </div>

  </div>
</template>

<script>
export default {
    'name': 'Header',
    'props': {
        'msg': String
    },
    data() {
        return {
            'activeIndex': '1'
        };
    },
    'methods': {
        handleSelect(key,keyPath) {
        // console.log(key, keyPath);
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
   
</style>
