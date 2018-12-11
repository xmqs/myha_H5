<template>
  <div>
    <!--地图容器-->
    <div id="container"></div>
    <!--左上三个图标-->
    <div class="ico">
      <div class="top" @click="jumpIntru">
        <img src="./../../../static/img/bicycle/Group9@3x.png" style="width:40px;"/>
        <p>须知</p>
      </div>
      <div class="middle" @click="getAddr">
        <img src="./../../../static/img/bicycle/Page11@3x.png" style="width:40px;"/>
        <p>办卡点</p>
      </div>
      <div class="bottom">
        <img src="./../../../static/img/bicycle/Fill12@3x.png" style="width:40px;"/>
        <p><a href="tel:0513-88897056 ">热线</a></p>
      </div>
    </div>
    <!--扫码开锁和办卡须知-->
    <div class="tab" @click="mask" v-show="isshow">
      <img src="./../../../static/img/bicycle/Group8@3x.png" alt=""/>
      <div>扫码开锁</div>
    </div>
    <img src="./../../../static/img/map/icon4.png" alt="" class="position" @click="moveLocation">
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from "axios"

  export default {
    name: "index",
    data() {
      return {
        map: {},
        list: [],
        userPosition: [],
        userMark: {},
        t1: {},
        isshow: false,
      }
    },
    computed: {
      ...mapGetters([
        "getUserId",
        "getUserName",
        "getCardId",
        "getUserPhone",
      ])
    },
    methods: {

      mask() {
        /*判断ios  Android*/
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid) {
          window.location.href = '?type=TYPE_SCAN';
        }

        if (isiOS) {
          window.location.href = '?type=TYPE_SCAN';
        }

        var that = this;
        let certNum = this.getCardId;

        window.scanResult = function (str) {
          axios.post("/myha-server/publicBike/lendBike.do", {
            qrcode: str,
            certNum: certNum
          }).then(res => {
            //alert(JSON.stringify(str))
            //alert(JSON.stringify(certNum))
            //alert(JSON.stringify(res))
            if (res.data.data.isOk == 0) {
              mui.toast(res.data.message, {duration: 'short', type: 'div'});
            } else if (res.data.data.isOk == 1) {
              mui.toast("解锁成功", {duration: 'short', type: 'div'});
            }
          })
        }

        if (isAndroid) {
          this.$router.go(-1);
        }

      },
      moveLocation() {
        if (sessionStorage.getItem("userPosition")) {
          let vue = this;
          vue.userPosition = sessionStorage.getItem("userPosition").split(",");
          vue.map.remove(vue.userMark);

          vue.userMark = new AMap.Marker({
            map: vue.map,
            position: vue.userPosition,
          });

          this.map.setCenter(vue.userPosition);
        }
      },
      jumpIntru() {
        location.href = "http://58.221.196.5:11001/image/common/publicBike.jpg"
      },
      getAddr() {
      	let vue=this;
        this.map.setCenter([120.466456, 32.530996]);
	        let startIcon = new AMap.Icon({
	        // 图标尺寸
	        size: new AMap.Size(40, 40),
	        // 图标的取图地址
	        image: './static/img/bicycle/copy@3x.png',
	        // 图标所用图片大小
	        imageSize: new AMap.Size(40, 40),
	        // 图标取图偏移量
	      });
	      let marker = new AMap.Marker({
	        map: vue.map,
	        position: [120.466456, 32.530996],
	        icon: startIcon,
	      });
	      AMap.event.addListener(marker, 'click', function () {
	        infoWindow.open(vue.map, marker.getPosition());
	      });
	      let title2 = "海安政务中心一楼大厅25号"
	      let content2 = ["周一至周六8:30-12:00 14:00-17:30", "办理新卡、充值"];
	      let infoWindow = new AMap.InfoWindow({
	        isCustom: true,  //使用自定义窗体
	        content: createInfoWindow(title2, content2.join("<br/>")),
	        offset: new AMap.Pixel(16, -40)
	      });
	    
	      function createInfoWindow(title, content) {
	        let info2 = document.createElement("div");
	        info2.className = "custom-info input-card content-window-card";
	        //可以通过下面的方式修改自定义窗体的宽高
	        //info.style.width = "400px";
	        // 定义顶部标题
	        let top = document.createElement("div");
	        let titleD = document.createElement("div");
	        let closeX = document.createElement("img");
	        top.className = "info-top";
	        titleD.innerHTML = title;
	        top.style.backgroundColor = 'white';
	        top.style.display = "flex";
	        top.style.padding = "10px 10px";
	        top.style.alignItems = "center";
	        top.style.justifyContent = "space-between";
	        closeX.src = "./static/img/bicycle/close.png";
	        closeX.style.width = "15px";
	        closeX.onclick = closeInfoWindow;
	        top.appendChild(titleD);
	        top.appendChild(closeX);
	        info2.appendChild(top);
	        // 定义中部内容
	        let middle = document.createElement("div");
	        middle.className = "info-middle";
	        middle.style.backgroundColor = 'white';
	        middle.innerHTML = content;
	        middle.style.padding = "5px 20px";
	        info2.appendChild(middle);
	        
	        return info2;
	      }
	      infoWindow.open(vue.map, marker.getPosition());
	      function closeInfoWindow() {
	        vue.map.clearInfoWindow();
	      }
      },
    }
    ,
    mounted() {
      let vue = this;
      if (sessionStorage.getItem("userPosition")) {
        vue.userPosition = sessionStorage.getItem("userPosition").split(",");
        this.map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 16, //初始化地图层级
          //center: [120.466456, 32.530996],
          center: vue.userPosition,
        });
        this.moveLocation();
      } else {
        this.map = new AMap.Map('container', {
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: 16, //初始化地图层级
          center: [120.466456, 32.530996],
        });

        let time = setInterval(()=>{
          if(sessionStorage.getItem("userPosition")){
            clearInterval(time);
            this.moveLocation();
          }
        }, 200);

        setTimeout(function () {
          clearInterval(time);
        },5000 );
      }
      axios.post("/myha-server/publicBike/getAllBike.do").then(res => {
        console.log(res.data.data)
        this.list = res.data.data;
        for (let i = 0; i < this.list.length; i++) {
          let startIcon = new AMap.Icon({
            // 图标尺寸
            size: new AMap.Size(40, 40),
            // 图标的取图地址
            image: './static/img/map/icon1.png',
            // 图标所用图片大小
            imageSize: new AMap.Size(40, 40),
            // 图标取图偏移量
          });
          let marker = new AMap.Marker({
            map: vue.map,
            position: [res.data.data[i].LNG, res.data.data[i].LAT],
            icon: startIcon,
          });


          AMap.event.addListener(marker, 'click', function () {
            axios.post("/myha-server/publicBike/getBike.do", {
              "siteId": res.data.data[i].SITE_ID
            }).then(result => {

              let infoWindow = new AMap.InfoWindow({
                isCustom: true,  //使用自定义窗体
                content: createInfoWindow(vue.list[i].SITE_NAME, "可用数目:" + result.data.data.SITE_INFO.BIKE_LEFT + "<br>" + "空位数目:" + result.data.data.SITE_INFO.BIKE_EMPTY),
                offset: new AMap.Pixel(16, -40)
              });

              infoWindow.open(vue.map, marker.getPosition());
            })

          });

          function closeInfoWindow() {
            vue.map.clearInfoWindow();
          }

          function createInfoWindow(title, content) {
            let info = document.createElement("div");
            info.className = "custom-info input-card content-window-card";
            //可以通过下面的方式修改自定义窗体的宽高
            //info.style.width = "150px";
            // 定义顶部标题
            let top = document.createElement("div");
            let titleD = document.createElement("div");
            let closeX = document.createElement("img");
            top.className = "info-top";
            titleD.innerHTML = title + "&nbsp;&nbsp;&nbsp;";
            top.style.backgroundColor = 'white';
            top.style.display = "flex";
            top.style.padding = "5px 10px";
            top.style.alignItems = "center";
            top.style.justifyContent = "space-between";
            closeX.src = "./static/img/bicycle/close.png";
            closeX.style.width = "15px"
            closeX.onclick = closeInfoWindow;
            top.appendChild(titleD);
            top.appendChild(closeX);
            info.appendChild(top);
            // 定义中部内容
            let middle = document.createElement("div");
            middle.className = "info-middle";
            middle.style.backgroundColor = 'white';
            middle.innerHTML = content;
            middle.style.padding = "5px 20px";
            info.appendChild(middle);
            
            return info;
          }

        }
      })
      //*****************办卡点坐标开始*****************************
      let startIcon = new AMap.Icon({
	        // 图标尺寸
	        size: new AMap.Size(40, 40),
	        // 图标的取图地址
	        image: './static/img/bicycle/copy@3x.png',
	        // 图标所用图片大小
	        imageSize: new AMap.Size(40, 40),
	        // 图标取图偏移量
	      });
	      let marker = new AMap.Marker({
	        map: vue.map,
	        position: [120.466456, 32.530996],
	        icon: startIcon,
	      });
	      AMap.event.addListener(marker, 'click', function () {
	        infoWindow.open(vue.map, marker.getPosition());
	      });
	      let title2 = "海安政务中心一楼大厅25号"
	      let content2 = ["周一至周六8:30-12:00 14:00-17:30", "办理新卡、充值"];
	      let infoWindow = new AMap.InfoWindow({
	        isCustom: true,  //使用自定义窗体
	        content: createInfoWindow(title2, content2.join("<br/>")),
	        offset: new AMap.Pixel(16, -40)
	      });
	    
	      function createInfoWindow(title, content) {
	        let info2 = document.createElement("div");
	        info2.className = "custom-info input-card content-window-card";
	        //可以通过下面的方式修改自定义窗体的宽高
	        //info.style.width = "400px";
	        // 定义顶部标题
	        let top = document.createElement("div");
	        let titleD = document.createElement("div");
	        let closeX = document.createElement("img");
	        top.className = "info-top";
	        titleD.innerHTML = title;
	        top.style.backgroundColor = 'white';
	        top.style.display = "flex";
	        top.style.padding = "10px 10px";
	        top.style.alignItems = "center";
	        top.style.justifyContent = "space-between";
	        closeX.src = "./static/img/bicycle/close.png";
	        closeX.style.width = "15px";
	        closeX.onclick = closeInfoWindow;
	        top.appendChild(titleD);
	        top.appendChild(closeX);
	        info2.appendChild(top);
	        // 定义中部内容
	        let middle = document.createElement("div");
	        middle.className = "info-middle";
	        middle.style.backgroundColor = 'white';
	        middle.innerHTML = content;
	        middle.style.padding = "5px 20px";
	        info2.appendChild(middle);
	        
	        // 定义底部内容
//			    var bottom = document.createElement("div");
//			    bottom.className = "info-bottom";
//			    bottom.style.position = 'relative';
//			    bottom.style.top = '0px';
//			    bottom.style.left = '130px';
//			    bottom.style.margin = '0 auto';
//			    var sharp = document.createElement("img");
//			    sharp.src = "https://webapi.amap.com/images/sharp.png";
//			    bottom.appendChild(sharp);
//			    info2.appendChild(bottom);
	        return info2;
	      }
	      function closeInfoWindow() {
	        vue.map.clearInfoWindow();
	      }
      //******************办卡点坐标结束************************
      let time = setInterval(() => {
        if (this.getCardId !== "") {
          clearInterval(time);
          axios.post("/myha-server/publicBike/getUserInfo.do", {
            "certNum": this.getCardId
          })
            .then(res => {
              if (res.data.result == 1) {
                console.log(res.data.data.isOk)
                if (res.data.data.isOk == 1) {
                  this.isshow = true;
                }
              } else {
                mui.toast('网络出了点小差错，请稍后尝试或联系管理人员', {duration: 'short', type: 'div'});
              }
            })
        }
      }, 200);
    }
    ,
  }
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .info-middle img {
    float: left;
    margin-right: 12px;
  }

  .position {
    position: fixed;
    z-index: 90;
    left: 32px;
    bottom: 68px;
    width: 72px;
    height: 72px;
  }

  .tab {
    position: fixed;
    z-index: 999;
    bottom: 72px;
    width: 310px;
    height: 105px;
    background: rgb(0, 0, 0, .5);
    color: #fff;
    left: 220px;
    border-radius: 30px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .tab img {
    width: 60px;
  }

  .tab div {
    font-size: 32px;
  }

  .line {
    margin: 0 16px;
    height: 40px;
    border-left: 1px solid #999;
  }

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
    background: #fff;
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

  /*右上角按钮  跳转*/
  .top, .middle, .bottom {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .3);
    z-index: 10;
    position: absolute;
    right: 40px;
    text-align: center;
    line-height: 55px;
    padding-top: 10px;
  }

  .top {
    top: 40px;
  }

  .middle {
    top: 170px;
  }

  .bottom {
    top: 300px;
  }

  .bottom a {
    font-size: 24px;
  }

  .ico p {
    text-align: center;
    color: white;
    font-size: 24px;
    position: relative;
    bottom: 25px;
  }

  .ico img {
    width: 50px !important;
  }

</style>
