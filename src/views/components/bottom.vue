<template>
  <div class='btn-list'>
    <div v-for='i in barList' :key='i.id' class='btn-item' @click='changePage(i.name)'>
      <div style='width: 60px; height: 40px; margin:5% 30%;'>
        <image class='img-item' :src='i.icon' v-if="$route.path != '/' + i.name" />
        <image class='img-item-on' :src='i.onIcon' v-if="$route.path == '/' + i.name" />
      </div>
      <text class='btn-font' :style="{color: $route.path == '/' + i.name ? '#f5bf79' : ' '}">{{i.name}}</text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barList: [
        {
          id: 0,
          name: 'home',
          icon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/home.png',
          onIcon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/home1.png'
        },
        {
          id: 1,
          name: 'tips',
          icon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/text.png',
          onIcon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/text1.png'
        },
        {
          id: 2,
          name: 'search',
          icon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/search.png',
          onIcon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/search1.png'
        },
        {
          id: 3,
          name: 'shopcart',
          icon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/cart.png',
          onIcon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/cart1.png'
        },
        {
          id: 4,
          name: 'mine',
          icon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/own.png',
          onIcon:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/own1.png'
        }
      ]
    }
  },
  methods: {
    changePage (name) {
      this.$router.push('/' + name)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-list{
    height: 90px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    border-top: 2px solid rgb(235, 233, 233);
    background-color: #fff;
    .btn-item{
        width: 150px;
        height: 100%;
        text-align: center;
        .img-item {
            width: 90%;
            height: 100%;
            margin: 5px auto;
        }
        .img-item-on {
            width: 100%;
            height: 100%;
        }
        .btn-text{
            font-size: 10px;
            color: rgb(99, 99, 99);
            text-align: center;
        }
    }
}
</style>
