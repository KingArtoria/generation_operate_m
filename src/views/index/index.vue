<template>
  <div>
    <div class="content">
      <div class="content_1">您好,欢迎访问火客代运营</div>
      <div class="content_2">
        <img src="../../assets/logo.webp" class="content_2_1">
        <img src="../../assets/caidan.webp" class="content_2_2">
      </div>
      <div class="content_3">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in swipeItem" :key="index">
            <img :src="item" class="content_3_1" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content_4">
        <div class="content_4_1" v-for="(item, index) in sizeList" :key="index">
          <img :src="item.img" class="content_4_1_1">
          <div class="content_4_1_2">
            <div class="content_4_1_2_1">{{ item.value }}</div>
            <div class="content_4_1_2_2">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="content_5">
        <div class="content_5_1">
          <div class="content_5_1_1">业务范围</div>
          <div class="content_5_1_2">SCOPE OF BUSINESS</div>
          <div class="content_5_1_3" />
        </div>
        <div class="content_5_2">
          <div class="content_5_2_1">
            <div class="content_5_2_1_1">信息流广告代运营</div>
            <div class="content_5_2_1_1">搜索广告代运营</div>
            <div class="content_5_2_1_1">应用商店代运营</div>
            <div class="content_5_2_1_1" style="margin-right:0">海外广告代运营</div>
            <div class="content_5_2_1_2" />
          </div>
          <div class="content_5_2_2">
            现有主流的应用商店广告包括：iOS、华为、vivo、oppo、小米、360推广等，苹果ASA广告是通过关键词竞价的方式，在AppStore搜索结果的顶部展示广告。安卓CPD广告是按照下载收费的方式，在安卓应用市场（华为、小米、oppo、vivo）搜索、推荐、活动区展示广告。
          </div>
          <img src="../../assets/yingyongshad.webp" class="content_5_2_3">
        </div>
      </div>
      <div class="content_6">
        
      </div>
    </div>
  </div>
</template>

<script>
import { SIZE } from '../../utils/const'
export default {
  data() {
    return {
      swipeItem: [
        'http://gom.channel.bdhuoke.com/pic/bannner_1.webp',
        'http://gom.channel.bdhuoke.com/pic/bannner_2.webp'
      ],
      sizeList: [],
      active: 0
    }
  },
  mounted() {
    this.sizeList = SIZE
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>