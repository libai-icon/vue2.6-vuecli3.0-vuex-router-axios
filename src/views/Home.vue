<template>
  <div class="home">
    <!-- <Header/>
    <Utils/> -->
    <div class="home-search-view" style="margin-top:40px;">
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
            <span class="home-search-tag">历史记录</span>
            <span class="home-search-tag">历史记录</span>
            <span class="home-search-tag">历史记录</span>
            <span class="home-search-tag">历史记录</span>
        </div>
        <div class="home-search-row">

        </div>
    </div>
    <div class="home-search-view-center margin-top">
        <div class="home-left">
            <div class="home-left-title">推荐</div>
        </div>
        <div class="home-right">
            <div class="home-right-title">我要买车</div>
            <div class="home-right-title">我要卖车</div>
            <div class="home-right-title">我要估价</div>
        </div>
    </div>
    <div >
        <div>
            <div style="padding-top:10px;height:5000px; "> 
                <!-- <Index/> -->
                <!-- <div style="display: inline-block;width:25%;height:300px;">
                    
                </div>
                <Index style="width:50%;display: inline-block;"/>
                <div style="display: inline-block;width:25%;height:300px;">

                </div> -->
            </div>
           
        </div>
    </div>
    
  </div>
</template>
<script>
import Header from '@/components/public/Header.vue';
import Index from '@/components/Index.vue';
import Utils from '@/components/public/Utils.vue';
// import avatar  from '../static/images/home/avatar.jpg';
export default {
    'components': {
        Header,Index,Utils
    },
    'name':'home',
    data(){
        return {
            search:'',
            // img : avatar,
        }
    },
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
   
</style>
