<template>
  <div class='top-list'>
    <div class='top-item'>
      <image class='img-item' src='https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/QRcode.png'/>
      <text class='btn-font'>扫一扫</text>
    </div>
    <div class='search-item'>
      <input class='ipt-item' placeholder="please search ..."/>
    </div>
    <div class='top-item'>
      <image class='img-item' src='https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/email.png'/>
      <text class='btn-font'>消  息</text>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-list{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    height: 6%;
    .top-item{
        width: 12%;
        height: 100%;
        font-size: 10px;
        color: rgb(119, 119, 119);
        .img-item{
            width: 50%;
            height: 40%;
            margin: 15% 25% 5%;
        }
    }
    .search-item{
        width: 76%;
        .ipt-item{
            width: 90%;
            margin: 4% 5%;
            padding: 1% 3%;
            border: 1px solid #888;
            border-radius: 10px;
        }
    }
}
</style>
