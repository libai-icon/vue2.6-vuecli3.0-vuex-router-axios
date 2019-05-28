<template>
  <div class="utils">
      <div class="utils-list">
        <div class="utils-tag"><i class="el-icon-phone-outline"></i><br/>App</div>
        <div class="utils-tag"><i class="el-icon-phone-outline"></i><br/>微信</div>
        <div class="utils-tag"><i class="el-icon-phone-outline"></i><br/>咨询</div>
      </div>
  </div>
</template>

<script>
export default {
    'name': 'Utils',
    'props': {
        'msg': String
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .utils-list{
        position: fixed;
        right: 0;
        height: 50%;
        background-color: #f8f8f8;
        top: 25%;
        border: 1px #999 solid;
        color: #999;
  }
  .utils-tag{
     padding:10px;
     cursor:pointer;
  }
</style>
