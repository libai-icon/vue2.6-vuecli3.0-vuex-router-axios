<template>
  <div class="goodsDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:3">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
       
        <el-breadcrumb-item>大众 途安 2013款 1.4T 手动风尚版5座</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="detail-flex">

        <DetailCarousel :images="images" style="width: 60%"/>

        <div>
            <h2>大众 途安 2013款 1.4T 手动风尚版5座</h2>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
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


      <div style="border: 1px solid #fcf2d5;background: #fffdf9;height: 138px;margin-top: 20px">

      </div>

      <!---->
      <div class="module_name">基本信息</div>
      <el-divider></el-divider>
      <div style="font-size: 18px;margin-top: 18px">车主：男先生
          <el-tooltip placement="bottom" effect="light">
              <div slot="content">咨询电话：<span style="color:#409EFF">400-123-123</span></div>
              <el-button type="primary" icon="el-icon-phone" size="small">咨询看车</el-button>
          </el-tooltip>
          <span class="detail-span_tag" style="margin-left: 3rem">倒车雷达</span>
      </div>

      <el-row>
          <el-col :span="8" v-for="item in 6" :key="item" style="margin-top: 1rem">
              <div class="car_title">基本参数</div>
              <el-table
                      :data="tableData"
                      border
                      :show-header="false"
                      :stripe="true"
                      class="car_table">
                  <el-table-column prop="date">
                  </el-table-column>
                  <el-table-column prop="name">
                  </el-table-column>
              </el-table>
          </el-col>
      </el-row>
      <div class="car_text">以上基本信息为两次检测后录入，实际情况以看车时为准</div>

      <div class="module_name">车辆图片</div>
      <el-divider></el-divider>

      <el-row>
          <div style="text-align: center;line-height: 3rem">车辆外观</div>
          <el-col  v-for="(item,index) in exteriorList" :span="index < 4 ? 12 : 6" :key="index">
              <div :class="index < 4 ?'exterior':'exterior1'"><img :src="item.url" style="width: 100%"></div>
          </el-col>
          <el-col  :span="6">
              <div class="exterior1"   style="background: #000" >
                  <div :style="'opacity:0.7;;height: 184px;background-image: url('+exteriorList[0].url+');background-size: 100%;color: #fff;line-height: 184px;'" @click="viewCar">
                      查看外观图
                  </div>
              </div>
          </el-col>
      </el-row>


      <el-dialog
              :visible.sync="dialogVisible"
              width="30%">
      </el-dialog>
  </div>
</template>
<script>
import DetailCarousel from '@/components/public/DetailCarousel.vue'
export default {
    'components': {
      DetailCarousel
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
             {id:10,url:'https://img.yzcdn.cn/vant/cat.jpeg'}
           ],
           num: 1,
           tableData: [
             {
               date: '排量(L)',
               name: '1.6'
           },{
               date: '排量(L)',
               name: '1.6'
           },{
               date: '排量(L)',
               name: '1.6'
           },{
               date: '排量(L)',
               name: '1.6'
           },{
               date: '排量(L)',
               name: '1.6'
           },{
               date: '排量(L)',
               name: '1.6'
           }
           ],
           exteriorList:[
             {id:1,url:'https://image.guazistatic.com/gz01190610/16/28/1dfc88c8db55c462f46d26d51d3510aa.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88'},
             {id:2,url:'https://image.guazistatic.com/gz01190610/16/28/19505167cfa886b97cf60f5cbd0f56ec.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88'},
             {id:3,url:'https://image.guazistatic.com/gz01190610/16/28/2ba63f23555183474686297dfcc479c1.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88'},
             {id:4,url:'https://image.guazistatic.com/gz01190610/16/28/275d6675f9e6618f5db3d0815755e406.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88'},
             {id:5,url:'https://image.guazistatic.com/gz01190610/16/28/99f5f7d08ffeda1ebed916d0fdaa6c77.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88'},
             {id:6,url:'https://image.guazistatic.com/gz01190610/16/28/14800bdaadb0d22aa9ec35291cf9d28b.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88'},
             {id:7,url:'https://image.guazistatic.com/gz01190610/16/28/2ee2db1479fb6d7058ccc58144992f7d.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88'}
           ],
           dialogVisible:false
        }
    },
    'name':'goodsDetail',
    
    'methods':{
         handleChange(value) {
            console.log(value);
         },
         viewCar(){
            this.dialogVisible = true
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
    .detail-span_tag{
        padding: 0 14px 0 13px;
        display: inline-block;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 14px;
        -webkit-border-radius: 15px;
        border-radius: 15px;
        color: #7a838d;
        background-color: #f6f6f6;
        margin-right: 16px;
        margin-bottom: 10px;
    }
    .car_title{
        background-color: #f5f5f5;
        font-size: 16px;
        font-weight: 200;
        width: 98%;
        height: 38px;
        line-height: 38px;
        text-align: center;
    }
    .car_text{
        text-align: center;
        display: block;
        height: 53px;
        line-height: 53px;
        color: #a5abb2;
        width: 100%;
        float: left;
        font-size: 12px;
    }
    .car_table{
        width: 98%;
    }
    .car_table .cell{
        color: #495056;
        text-align: center;
        font-size: 12px;
    }
    .module_name{
        font-size: 20px;margin-top: 20px
    }
    .exterior{
        width: 98%;
        text-align: center
    }
    .exterior1{
        width: 96%;text-align: center
    }
</style>

