<template>
  <div class="header">
      <div>
        XX二手车
      </div>
      <div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
          <div class="header-title">登陆/注册</div>
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
        padding: 10px 20px;
        font-size: 16px;
    }
    .header-title{
      display: inline-block;
      padding: 5px 10px;
    }
    .header-title:hover{
      color: #409EFF;
    }
</style>
