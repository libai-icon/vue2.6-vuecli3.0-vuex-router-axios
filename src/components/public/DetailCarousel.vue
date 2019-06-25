<template>
  <div class="detailCarousel">
      <div>
          <el-carousel
                  ref="current"
                  :autoplay="false"
                  arrow="always"
                  :height="height"
                  @change="onChange">
              <el-carousel-item
                      v-for="(item,index) in images"
                      :key="index"
                      :class="current == index? 'selected':''"
                      :name="index.toStrong">
                      <van-image
                              lazy-load
                              width="100%"
                              fit="contain"
                              :src="item.url"
                              @click="viewCar"/>
              </el-carousel-item>
          </el-carousel>
          <div class="imgnumber"><span>{{index+1}}</span>/{{images.length}}</div>

          <el-carousel
                  ref="currents"
                  :autoplay="false"
                  arrow="always"
                  height="120px">
              <el-carousel-item
                      v-for="(iitem,ie) in Math.ceil(images.length/5)"
                      :key="ie"
                      :name="ie.toStrong">
                  <van-image
                  v-for="(item,e) in images"
                  v-if="(e)<(ie+1)*5 && (e+1)>(ie)*5"
                  :class="index == e ? 'isSelect' : 'noSelect'"
                  class="imgmargin"
                  lazy-load
                  :src="item.url"
                  :key="item.id"
                  @click="onChange(e)"/>
              </el-carousel-item>
          </el-carousel>
      </div>
  </div>
</template>

<script>
export default {
    'name': 'DetailCarousel',
    'props': {
        'images': Array,
        'height':''
    },
    data() {
        return {
          current:0,
          currents:0,
          index:0,
          dialogVisible:false
        };
    },
    'methods': {
      onChange(index) {
        this.index = index;
        this.$refs.current.setActiveItem(index);
        this.$refs.currents.setActiveItem((Math.ceil((index+1)/5)-1));
      },
      viewCar(){
        this.dialogVisible = true
      },
      closeView(){
        this.dialogVisible = false
      }
    },
    mounted(){

    }
};
</script>

<style scoped lang="less">
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        /*background-color: #99a9bf;*/
    }

    .el-carousel__item:nth-child(2n+1) {
        /*background-color: #d3dce6;*/
    }
    .goodsDetail-list-img{
       overflow-x: scroll;
       text-align: left;
       white-space : nowrap;
    }
    .detailCarousel{
        position: relative;
    }
    .imgnumber{
        position: absolute;
        left: 90%;
        top: 360px;
        z-index: 100;
        color: #fff;
    }
    .imgnumber span{
        font-size: 25px;
    }
    .selected{
        /*border: 1px solid #d2cfcf;*/
        /*box-shadow : 0 0 10px #dedcdc;*/
    }
    .imgmargin{
        width: 20%;
        margin-top: 1rem;
    }
    .isSelect{
        width: 19%;
        height: 96px;
        border: 2px solid #409EFF;
    }
    .noSelect{
        width: 20%;
        height: 100px;
    }
    .detailCarousel /deep/.el-carousel__arrow {
        border: none;
        outline: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s;
        border-radius: 50%;
        background-color: rgba(37, 44, 51, 0.62);
        color: #FFF;
        position: absolute;
        top: 50%;
        z-index: 10;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
    }
</style>
