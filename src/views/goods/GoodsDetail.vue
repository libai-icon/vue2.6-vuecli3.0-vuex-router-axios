<template>
  <div class="goodsDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:3">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
       
        <el-breadcrumb-item>大众 途安 2013款 1.4T 手动风尚版5座</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="detail-flex">
        <div style="width:60%;">
             <el-carousel :interval="5000" arrow="always" @click="onChange">
                <el-carousel-item v-for="(item,index) in images" :key="index" :class="current == item.id? 'selected':''">
                    <van-image
                    lazy-load
                     fit="contain"
                    :src="item.url"
                    :autoplay="false"
                    />
                </el-carousel-item>
            </el-carousel>
         <div class="goodsDetail-list-img">
            <van-image
                    width="100"
                    height="100"
                    lazy-load
                    :src="item.url"
                    v-for="item in images" :key="item.id"
                    />
            </div>
        </div>
        <div>
            <h2>大众 途安 2013款 1.4T 手动风尚版5座</h2>
            <van-tag class="detail-tag" color="#f2826a">标签</van-tag>
            <van-tag class="detail-tag" color="#f2826a" plain>标签</van-tag>
            <van-tag class="detail-tag" color="#7232dd">标签</van-tag>
            <van-tag class="detail-tag" color="#7232dd" plain>标签</van-tag>
            <van-tag class="detail-tag" color="#ffe1e1" text-color="#ad0000">标签</van-tag>
            <div class="detail-money">
                <div style="font-size: 30px;color: #419efb;">起拍：¥2.55万</div>
                <!-- <div style="color:red;">加价：5000.00/次</div> -->
                <div >保证金:1.00万</div>
            </div>
            <div class="detail-boder">
                <div class="detail-flex">
                    <div>服务保障</div>
                    <div style="font-size:12px;color: #439ffb;;">查看详情<i class="el-icon-arrow-right"></i></div>
                </div>
                <div>
                    <van-tag class="detail-tag" plain>服务项</van-tag>
                    <van-tag class="detail-tag"  plain>服务项</van-tag>
                    <van-tag class="detail-tag" plain>服务项</van-tag>
                    <van-tag class="detail-tag" plain>服务项</van-tag>
                </div>
            </div>
           
           <div class="detail-flex">
               <div style="width:50%;"> 
                   <el-input-number v-model="num" @change="handleChange" :min="5000" :max="10000000" label="描述文字"></el-input-number>
                </div>
                <div style="width:50%;"> 
                    <el-button type="primary" style="width:100%;">出价</el-button>
                </div>
           </div>
        </div>
    </div>
    <img src="../../assets/detail-0001.jpg" alt="">
  </div>
</template>
<script>
export default {
    'components': {
        
    },
    data() {
        return {
           current:0,
           images:[
               {id:1,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:2,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:3,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:4,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:5,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:6,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:7,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:8,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:9,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
               {id:10,url:'https://img.yzcdn.cn/vant/cat.jpeg'},
           ],
           num: 1
        }
    },
    'name':'goodsDetail',
    
    'methods':{
        onChange(index) {
            this.current = index;
        },
         handleChange(value) {
            console.log(value);
        }
    },
    mounted(){
             
    }
};
</script>
<style lang="less">
    .goodsDetail{
        text-align: left;
    }
   .goodsDetail-swipe{
    //    width: 400px;
       height: 300px;
   }
   .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
    }
    .goodsDetail-list-img{
        overflow-x: scroll;
        text-align: left;     
        white-space : nowrap;    
    }
    ::-webkit-scrollbar
        {
            width: 0;
            height: 0;
            background-color: #fff;
        }
    .el-carousel__indicators--horizontal{
        display: none !important;
    }
    .selected{
        border: 1px solid #d2cfcf;
        box-shadow : 0 0 10px #dedcdc;
    }
    .detail-flex{
        display: flex;
        align-items: top;
        flex-direction: row;
        justify-content:space-between;
    }
    .detail-tag{
        margin-right: 10px;
    }
    .detail-money{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
    .detail-boder{
            background: #fae1e0;
            margin-bottom: 20px;
            padding: 25.5px 27px 10.5px 25px;
            border: 1px solid #fcf2d5;
    }
</style>

