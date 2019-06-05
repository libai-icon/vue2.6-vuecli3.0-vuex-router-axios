<template>
  <div class="index">
     <div class="home-search-view" style="margin-bottom:20px;">
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
        <!-- <div class="index-goods" v-for="item in 10" @click="goToDetail(item)">
          <div class="bg">
              <el-image style="margin:0 5px;" v-for="url in urls" :key="url" :src="url" lazy></el-image>
              
          </div>
        </div> -->
        <el-col :span="6" v-for="(item, index) in urls" :key="index"    >
            <div style="padding:5px;" @click="goToDetail(item)">
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="item" lazy></el-image>
                    <div style="padding: 14px;">
                        <span>你好</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </div>

        </el-col>
        
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
         currentDate: new Date(),
         urls: [
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            'https://img.yzcdn.cn/vant/cat.jpeg',
            
            ]
        };
    },
    'methods': {
        goToDetail(item) {
            this.$router.push({name:'goodsDetail',query:{id:item}})
        },
        
    },
    mounted(){
        // this.$store.commit('update_name','libai');
        var book = this.$store.state.name;
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

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
      .index-goods{
        width: calc(98%/4);
        // height: 200px;
        
        display: inline-block;
        // padding: 0;
        
        .bg{
          background-color: #f8f8f8;
          width: 100%;
          height: 100%;
        }
    }
 }
//   .index-goods:hover{
//       border: 1px solid #d2cfcf;

//       box-shadow : 0 0 10px #dedcdc;
//     }
    .active{
      background-color: #eb6042;
      color: #fff;
    }
    .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-card__body{
      padding: 0% !important;
  }
</style>
