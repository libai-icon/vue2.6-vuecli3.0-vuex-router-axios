<template>
  <div class="index">
     <div class="home-search-view" style="margin-top:50px;margin-bottom:20px;">
        <div class="home-search-row">
                
        </div>
        <div class="home-search-middle">
            <el-input placeholder="请输入搜索内容" v-model="search"  >
                <el-button slot="append" icon="el-icon-search" ></el-button>
            </el-input>
            <span class="home-search-tag">历史记录</span>
            <span class="home-search-tag">历史记录</span>
            <span class="home-search-tag">历史记录</span>
            <span class="home-search-tag">历史记录</span>
            
        </div>
        <div class="home-search-row">

        </div>
    </div>
    <div class="index-search-title">
      <div><span class="index-tag index-tag-bg">品牌</span><span class="index-tag active" >不限</span><span class="index-tag">不限</span><span class="index-tag">不限</span></div>
      <div><span class="index-tag">全部</span></div>
    </div>
    <div class="index-search-title" style="margin-top:-1px;">
      <div><span class="index-tag index-tag-bg">车型</span><span class="index-tag active">不限</span><span class="index-tag">不限</span><span class="index-tag">不限</span></div>
      <div><span class="index-tag">全部</span></div>
    </div>
    <div class="index-search-title" style="margin-top:-1px;">
      <div><span class="index-tag index-tag-bg ">价格</span><span class="index-tag active">不限</span><span class="index-tag">不限</span><span class="index-tag">不限</span></div>
      <div><span class="index-tag">全部</span></div>
    </div>

    <div class="index-search-list" style="margin:20px 0;border-bottom: #d2cfcf 1px solid;">
        <div><span class="index-tag active">全部</span> <span class="index-tag">正在拍卖</span>  <span class="index-tag">即将拍卖</span></div>
        <div> <span class="index-tag">默认排序</span> <span class="index-tag">时间排序</span></div>
    </div>
    <div class="index-search-list-left" >
        <div class="index-goods" v-for="item in 10" :key="item">
          <div class="bg">{{item}}</div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    'name': 'Index',
    'props': {
        'msg': String
    },
    data() {
        return {
         search:'',
        };
    },
    'methods': {
        handleSelect(key,keyPath) {
          
        }
    },
    mounted(){
        // this.$store.commit('update_name','libai');
        var book = this.$store.state.name;
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.home-search-row{
        width:30%;
    }
    .home-search-middle{
        width:40%;
    }
    .home-search-view{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
   
    .home-search-tag{
        display: inline-block;
        padding: 2px 10px;
        color: #999;
    }
    .home-search-view-center{
        display: flex;
        align-items:flex-start;
        justify-content:flex-start;
        flex-direction: row;
        line-height: 3;
        box-shadow: 2px 2px 5px #333333
    }
    .margin-top{
        margin-top: 20px;
    }
    .home-left{
        width: 25%;
        text-align: right;
    }
    .home-right{
        width: 75%;
        text-align: left;
    }
    .home-left-title{
        display: inline-block;
        width: 50%;
        font-size: 16px;
        text-align: center;
        background-color: #62bfac;
        color: #fff;
        cursor:pointer;
    }
    .bg{
        background-color: #62bfac;
    }
    .home-right-title{
        display: inline-block;
        font-size: 16px;
        padding: 0 50px;
        cursor:pointer;
    }
    .home-swiper{
       
        padding: 5 10%;
    }
.index-search-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: #d2cfcf 1px solid;
  border-collapse: collapse;
}
.index-tag{
  padding: 8px 20px;
  display: inline-block;
  cursor:pointer;
}
.index-tag-bg{
  background-color: #f8f8f8;
}
.index-search-list{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
 .index-search-list-left {
      text-align: left;
      >.index-goods{
        width: calc(100%/4);
        height: 200px;
        
        display: inline-block;
        padding: 5px;
        
        .bg{
          background-color: #f8f8f8;
          width: 100%;
          height: 100%;
        }
    }
 }
  .index-goods:hover{
      border: 1px solid #d2cfcf;

      box-shadow : 0 0 10px #dedcdc;
    }
    .active{
      background-color: #eb6042;
      color: #fff;
    }
</style>
