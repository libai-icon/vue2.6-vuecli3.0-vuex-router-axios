<template>
  <div class="index">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
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
            'activeIndex': '1',
            'activeIndex2': '1'
        };
    },
    'methods': {
        handleSelect(key,keyPath) {
        // console.log(key, keyPath);
        }
    },
    mounted(){
        debugger;
        // this.$store._actions.add_book([1,2,3,4,5,6])
        this.$store.commit('update_name','libai');
        this.$store.dispatch('update_name', 'logic');
        var book = this.$store.state.name;
        // console.log(book);
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
</style>
