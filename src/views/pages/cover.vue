<template>
  <div class='main'>
    <slider class='slider' interval='2000' :show-indicators='true' :auto-play='isPlay' @change='imgChange'>
      <div v-for='i in imgList' :key='i.id' class='img-con'>
        <image class='img-item' :src='i.url'/>
        <text class='img-text'>{{i.des}}</text>
        <button class='img-btn' v-if='!isPlay' @click='toHome'>
          进入世界
        </button>
      </div>
    </slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        {
          id: 0,
          url:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start1.jpg',
          des: '欣赏海边落日，迎着海风，回味人生'
        },
        {
          id: 1,
          url:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start2.jpg',
          des: '贝壳迷人，人生亦都浪漫'
        },
        {
          id: 2,
          url:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start3.jpg',
          des: '雾都伦敦，浪漫之都'
        },
        {
          id: 3,
          url:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start4.jpg',
          des: '握紧眼前的灿烂时光'
        },
        {
          id: 4,
          url:
            'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start5.jpg',
          des: '遇见彩虹，美的开始'
        }
      ],
      isPlay: true
    }
  },
  methods: {
    imgChange (e) {
      console.log('aaa', e)
      if (e.index === 4) {
        this.isPlay = false
      }
    },
    toHome () {
      this.$router.push('/home')
    }
  },
  created () {}
}
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    height: 100%;
    .img-con {
        position: relative;
        width: 100%;
        height: 100%;
        .img-item {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .img-text {
            position: absolute;
            top: 25%;
            left: 30px;
            right: 0;
            font-weight: bold;
            color: rgb(117, 45, 117)
        }
        .img-btn{
            position: absolute;
            width: 130px;
            margin: auto;
            padding: 5px 0;
            background-color: rgba(210, 210, 210, 0.6);
            color: rgb(92, 92, 92);
            text-align: center;
            border-radius: 6px;
            bottom: 15%;
            left: 0;
            right: 0;
            box-shadow: 5px 5px 20px #888888;
        }
    }
}
</style>
