<template>
  <div class="detailCarousel">
      <div>
          <el-carousel
                  :interval="5000"
                  ref="current"
                  :autoplay="false"
                  arrow="always"
                  @change="onChange">
              <el-carousel-item
                      v-for="(item,index) in images"
                      :key="index"
                      :class="current == index? 'selected':''"
                      :name="index.toStrong">
                      <van-image
                              lazy-load
                              fit="contain"
                              :src="item.url"
                      />
                  <!--height="300px"-->
              </el-carousel-item>
          </el-carousel>
          <div class="imgnumber">{{index+1}}/{{images.length}}</div>
          <div class="goodsDetail-list-img">
              <van-image
                      :class="index == e ? 'isSelect' : 'noSelect'"
                      class="imgmargin"
                      lazy-load
                      :src="item.url"
                      v-for="(item,e) in images"
                      :key="item.id"
                      @click="onChange(e)"/>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    'name': 'DetailCarousel',
    'props': {
        'images': Array
    },
    data() {
        return {
          current:0,
          index:0
        };
    },
    'methods': {
      onChange(index) {
        this.index = index;
        this.$refs.current.setActiveItem(index);
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
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
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
        left: 93%;
        top: 270px;
        z-index: 100;
        color: #fff;
    }
    .imgmargin{
        margin: 1rem 1rem 0 0;
    }
    .isSelect{
        width: 136px;
        height: 96px;
        border: 2px solid #409EFF;
    }
    .noSelect{
        width: 140px;
        height: 100px;
    }
</style>
