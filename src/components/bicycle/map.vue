<template>
  <div>
    <div id="container">

    </div>
    <div class="control">
      123
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "index",
    data(){
      return{
        map:{},
        list:[]
      }
    },
    mounted(){
      this.map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:14, //初始化地图层级
        center:[118.886324,32.085925],
      });

      let vue = this;
      axios.get("/myha-server/common/getBike.do").then(res=>{
        this.list = res.data.data;
        for(let i = 0;i<this.list.length;i++){
          let startIcon = new AMap.Icon({
            // 图标尺寸
            size: new AMap.Size(40, 40),
            // 图标的取图地址
            image: './../../../../static/img/map/icon11.png',
            // 图标所用图片大小
            imageSize: new AMap.Size(40, 40),
            // 图标取图偏移量
          });
          let marker = new AMap.Marker({
            map: vue.map,
            position: [res.data.data[i].longitude,res.data.data[i].latitude],
            icon:startIcon
          });
          //鼠标点击marker弹出自定义的信息窗体
          AMap.event.addListener(marker, 'click', function () {
            infoWindow.open(vue.map, marker.getPosition());
          });

          let title = res.data.data[i].name,
            content = [];

          content.push("<div>"+
            "<video width=\"320\" height=\"240\" controls=\"controls\" autoplay=\"autoplay\"\n" +
            "x-webkit-airplay=\"true\" x5-video-player-fullscreen=\"true\"\n" +
            "preload=\"auto\" playsinline=\"true\" webkit-playsinline\n" +
            "x5-video-player-typ=\"h5\">\n"+
            "<source src=\"http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8\">\n" +
            "</video>"+
            "</div>");
          let infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: createInfoWindow(title, content.join("<br/>")),
            offset: new AMap.Pixel(16, -45)
          });

          function createInfoWindow(title, content) {
            let info = document.createElement("div");
            info.className = "custom-info input-card content-window-card";

            //可以通过下面的方式修改自定义窗体的宽高
            //info.style.width = "400px";
            // 定义顶部标题
            let top = document.createElement("div");
            let titleD = document.createElement("div");
            let closeX = document.createElement("img");
            top.className = "info-top";
            titleD.innerHTML = title;
            closeX.src = "https://webapi.amap.com/images/close2.gif";
            closeX.onclick = closeInfoWindow;

            top.appendChild(titleD);
            top.appendChild(closeX);
            info.appendChild(top);

            // 定义中部内容
            let middle = document.createElement("div");
            middle.className = "info-middle";
            middle.style.backgroundColor = 'white';
            middle.innerHTML = content;
            info.appendChild(middle);

            // 定义底部内容
            let bottom = document.createElement("div");
            bottom.className = "info-bottom";
            bottom.style.position = 'relative';
            bottom.style.top = '0px';
            bottom.style.margin = '0 auto';
            let sharp = document.createElement("img");
            sharp.src = "https://webapi.amap.com/images/sharp.png";
            bottom.appendChild(sharp);
            info.appendChild(bottom);
            return info;
          }

//关闭信息窗体
          function closeInfoWindow() {
            vue.map.clearInfoWindow();
          }

        }

      })
    }
  }
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
    position: fixed;
  }

  span {
    margin-left: 20px;
    font-size: 22px;
  }

  .info-middle img {
    float: left;
    margin-right: 12px;
  }
  .control{
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 999;
  }
</style>
<style>
  .content-window-card {
    position: relative;
    box-shadow: none;
    bottom: 0;
    left: 0;
    width: auto;
    padding: 0;
  }

  .content-window-card p {
    height: 2rem;
  }

  .custom-info {
    border: solid 1px silver;
  }

  div.info-top {
    position: relative;
    background: none repeat scroll 0 0 #F9F9F9;
    border-bottom: 1px solid #CCC;
    border-radius: 10px 10px 0 0;
  }

  div.info-top div {
    display: inline-block;
    color: #333333;
    font-size: 32px;
    font-weight: bold;
    line-height: 61px;
    padding: 0 20px;
    margin-right: 40px;
  }

  div.info-top img {
    position: absolute;
    top: 20px;
    right: 20px;
    transition-duration: 0.25s;
  }

  div.info-top img:hover {
    box-shadow: 0px 0px 10px #000;
  }

  div.info-middle {
    font-size: 24px;
    padding: 16px 24px;
    line-height: 40px;
  }

  div.info-bottom {
    height: 0px;
    width: 100%;
    clear: both;
    text-align: center;
  }

  div.info-bottom img {
    position: relative;
    z-index: 104;
  }

</style>
