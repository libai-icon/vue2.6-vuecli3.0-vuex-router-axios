<template>
  <div class="follow">
    <van-tabs v-model="active">
        <van-tab title="全部关注">
            <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
        >
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
        </van-card>
        <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
        >
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
        </van-card>
        <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
        >
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
        </van-card>
        <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
        >
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
        </van-card>
        <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
        >
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
        </van-card>
        <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
        >
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
        </van-card>
        </van-tab>
        <van-tab title="已出价">暂无信息</van-tab>
        <van-tab title="未出价">
            <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageURL"
            origin-price="10.00"
            >
            <div slot="footer">
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </div>
            </van-card>
        </van-tab>
        <van-tab title="未开始">
            <van-card
                num="2"
                tag="标签"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                :thumb="imageURL"
                origin-price="10.00"
                >
                <div slot="footer">
                    <van-button size="mini">按钮</van-button>
                    <van-button size="mini">按钮</van-button>
                </div>
                </van-card>
        </van-tab>
    </van-tabs>
     
  </div>
</template>

<script>
export default {
    'name': 'Follow',
    'props': {
        // 'msg': String
    },
    data() {
        return {
            imageURL:"https://img.yzcdn.cn/vant/cat.jpeg",
            active:''
        };
    },
    'methods': {
       
    },
    mounted(){
        
    }
};
</script>

<style scoped lang="less">
  .van-card__content{
      text-align: left !important;
  }
</style>
