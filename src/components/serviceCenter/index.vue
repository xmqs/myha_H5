<template>
  <div>
    <!--标题-->
    <div class="searchList">
      <iframe id="frame" name="iframe" style="display:none;"></iframe>
      <form action="javascript:return true;" method="post" class="form-page">
        <div class="area" @click="changeArea">{{area}}</div>
        <input type="search" id="input" class="search" placeholder="请输入地点或名称" v-model="searchKey" @keyup.13="search">
      </form>
    </div>

    <!--滑动区域-->
    <div ref="mescroll" class="mescroll">
      <div class="scroll">
        <div v-if="newArr.length==0" class="nodata">
          <img src="./../../../static/img/hotline/nodata.png" alt="">
          <div>暂无数据</div>
        </div>
        <div class="cell_right_side" v-for="(item,index) in newArr">
          <div class="address">{{item.address}}</div>
          <div class="posisiton">{{item.communityName}}</div>
          <div class="phone">{{item.contact}}{{item.tel}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import MeScroll from 'mescroll.js'
  import './../../../static/js/mui.picker.min'

  export default {
    name: 'serviceCenter',
    data() {
      return {
        mescroll: null,
        newArr: [], // 数据列表
        searchKey: "",
        area: "全海安",
        areaList: [],
        pageNo: '1',
        total: '',
        pageSize: '20',
        ownerArea: 'QB'
      }
    },
    mounted() {
      axios.get('/myha-server/common/getServiceArea.do').then(res => {
        this.areaList = res.data.data;
      })


      // 创建MeScroll对象:为避免配置的id和父组件id重复,这里使用ref的方式初始化mescroll
      this.mescroll = new MeScroll(this.$refs.mescroll, {// 在mounted生命周期初始化mescroll,以确保您配置的dom元素能够被找到.
        down: {
          auto: false, // 是否在初始化完毕之后自动执行下拉回调callback; 默认true
          callback: this.downCallback // 下拉刷新的回调
        },
        up: {
          auto: true, // 是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
          callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
          page: {
            num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
            size: 20 // 每页数据的数量
          },
          noMoreSize: 0, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
          /*toTop: { // 配置回到顶部按钮
            src: './static/mescroll/mescroll-totop.png'
          }*/
        }
      })
    },
    beforeRouteEnter(to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
      next(vm => {
        if (vm.mescroll) {
          // 恢复到之前设置的isBounce状态
          if (vm.mescroll.lastBounce != null) vm.mescroll.setBounce(vm.mescroll.lastBounce)
          // 滚动到之前列表的位置(注意:路由使用keep-alive才生效)
          if (vm.mescroll.lastScrollTop) {
            vm.mescroll.setScrollTop(vm.mescroll.lastScrollTop)
            setTimeout(() => { // 需延时,因为setScrollTop内部会触发onScroll,可能会渐显回到顶部按钮
              vm.mescroll.setTopBtnFadeDuration(0)// 设置回到顶部按钮显示时无渐显动画
            }, 16)
          }
        }
      })
    },
    beforeRouteLeave(to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
      if (this.mescroll) {
        this.mescroll.lastBounce = this.mescroll.optUp.isBounce// 记录当前是否禁止ios回弹
        this.mescroll.setBounce(true) // 允许bounce
        this.mescroll.lastScrollTop = this.mescroll.getScrollTop()// 记录当前滚动条的位置
        this.mescroll.hideTopBtn(0)// 隐藏回到顶部按钮,无渐隐动画
      }
      next()
    },
    methods: {
      search(){
        this.newArr = [];
        this.upCallback(
          {num:1, size:20}
        )

        this.mescroll.setPageNum(2);
      },
      changeArea() {
        let vue = this;
        var picker = new mui.PopPicker();
        picker.setData(this.areaList)
        picker.show(function (SelectedItem) {
          vue.area = SelectedItem[0].text;
          vue.newArr = [];

          vue.ownerArea  = SelectedItem[0].areaCode;
          vue.searchKey = "";

          vue.upCallback(
            {num:1, size:20}
          )

          vue.mescroll.setPageNum(2);

        })

      },

      /* 下拉刷新的回调 */
      downCallback() {
        this.getListDataFromNet(0, 1, (data) => {
          // 添加新数据到列表顶部
          /*this.newArr.unshift(data)*/
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            this.mescroll.endSuccess()// 结束下拉刷新,无参
          })
        }, () => {
          // 联网失败的回调,隐藏下拉刷新的状态
          this.mescroll.endErr()
        })
      },
      // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      upCallback(page) {
        // 联网加载数据
        this.getListDataFromNet(page.num, page.size, (curPageData) => {
          // 添加列表数据
          this.newArr = this.newArr.concat(curPageData)
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            this.mescroll.endSuccess(curPageData.length)
          })

        }, () => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          this.mescroll.endErr()
        })

      },
      /* 联网加载列表数据
       在您的实际项目中,请参考官方写法: http://www.mescroll.com/api.html#tagUpCallback
       请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
       实际项目以您服务器接口返回的数据为准,无需本地处理分页.
      * */
      getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {

        // 延时一秒,模拟联网
        let vue = this;

        axios.post('/myha-server/common/getServiceCenter.do', {
          searchKey: this.searchKey,
          pageNo: pageNum,
          pageSize: pageSize,
          ownerArea: this.ownerArea
        }).then(res => {
          if (pageNum === 0) {
            // 此处模拟下拉刷新返回的数据
            successCallback && successCallback(null)
          } else {
            // 此处模拟上拉加载返回的数据
            var newArr = []
            for (var i = 0; i < res.data.data.length; i++) {
              newArr.push(res.data.data[i]);
            }
            /**TODO 测试修改数据*/
            successCallback && successCallback(newArr)
          }
        })
      }
    }
  }
</script>

<style scoped>
  /*以fixed的方式固定mescroll的高度*/

  .searchList {
    position: fixed;
    top: 0;
    height: 87px;
    width: 100%;
    background-color: #fff;
    padding-top: 14px;
    box-sizing: border-box;
    z-index: 220;
    border-bottom: 1px solid #eee;
  }

  .form-page {
    display: flex;
  }

  .area {
    width: 200px;
    height: 60px;
    font-size: 32px;
    color: #0d9bf2;
    line-height: 60px;
    text-align: center;
    background: #fff url("./../../../static/img/normal/fontDown.png") no-repeat;
    background-size: 30px;
    background-position: right center;
    box-sizing: border-box;
    padding-right: 20px;
    margin-right: 20px;
    margin-left: 32px;
  }

  .search {
    width: 440px;
    height: 60px;
    border-radius: 30px;
    background: #EFEFF4 url("./../../../static/img/hotline/searchicon.png") no-repeat;
    background-size: 30px;
    background-position: 20px center;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;

    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding-left: 60px;
  }

  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  .mescroll {
    position: fixed;
    top: 88px;
    bottom: 0;
    height: auto;
    background: #fff;
  }

  .scroll {
    background: #fff;
    padding: 0 32px;
  }

  .cell_right_side {
    border-bottom: 1px solid #eee;
    padding: 16px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-size: 12px;
    font-size: 32px;
  }
  .address{
    font-size: 30px;
  }
  .posisiton{
    font-size: 28px;
    color: #666;
    margin-top: 8px;
    height: 40px;
    line-height: 40px;
    padding-left: 40px;

    background: url("./../../../static/img/normal/position.png") no-repeat;
    background-size: 36px;
    background-position: left;
  }
  .phone{
    font-size: 28px;
    color: #666;
    height: 46px;
    line-height: 44px;
    padding-left: 40px;
    background: url("./../../../static/img/normal/phone.png") no-repeat;
    background-size: 30px;
    background-position: left;
  }
  .nodata{
    padding-top: 36px;
    text-align: center;
  }
  .nodata img{
    width: 260px;
  }
  .nodata div{
    font-size: 30px;
    text-align: center;
    color: #666;
    margin-top: 16px;
  }
</style>
