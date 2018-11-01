<template>
  <div>
    <div class="content">
      <div class="line">
        <div class="lab">详细地址：</div>
        <div class="txt">海安市长江东路318号</div>
      </div>
      <div class="line">
        <div class="lab">投票主题：</div>
        <div class="txt">关于9栋物业维修资金增修电梯</div>
      </div>
      <div class="line">
        <div class="lab">投票内容：</div>
        <div class="txt">关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯</div>
      </div>
      <div class="line">
        <div class="lab">通过条件：</div>
        <div class="txt">关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯关于9栋物业维修资金增修电梯</div>
      </div>
      <div class="line">
        <div class="lab">投票日期：</div>
        <div class="txt">2018-10-30至2018-10-30</div>
      </div>
      <div class="line">
        <div class="lab">投票日期：</div>
        <div class="txt">
          <img src="./../../../static/img/hotline/nodata.png" alt="" class="more">
        </div>
      </div>
      <div class="line">
        <div class="lab">投票状态：</div>
        <div class="txt"><span class="state1">进行中</span></div>
      </div>
      <div class="line">
        <div class="lab">投票结果：</div>
        <div class="txt">暂无</div>
      </div>
      <div class="line" @click="toManagementChars">
        <div class="lab">投票情况：</div>
        <div class="txt"><span class="state2">查看投票情况</span></div>
      </div>
      <div class="line_right" @click="chose">
        <div class="lab">投票意见：</div>
        <div class="txt"><span class="state2">{{data.type}}</span></div>
      </div>
      <div class="submit">
        提交
      </div>
    </div>
  </div>
</template>

<script>
  import './../../../static/js/mui.picker.min'
    export default {
      name: "thingDetail",
      data(){
        return{
          data:{
            type:"请选择"
          }
        }
      },
      methods:{
        toManagementChars(){
          this.$router.push("/managementChars/:id");
        },
        chose(){
          let vue = this;
          var picker = new mui.PopPicker();
          picker.setData([{
            value: "true",
            text: "同意"
          }, {
            value: "false",
            text: "不同意"
          }])
          picker.show(function(SelectedItem) {
            vue.data.type = SelectedItem[0].text;
          })
        },
      }
    }
</script>

<style scoped>
  .content{
    padding-bottom: 12px;
  }
  .line{
    display: flex;
    padding: 18px 32px;
    font-size: 32px;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .line_right{
    display: flex;
    padding: 18px 32px;
    font-size: 32px;
    border-bottom: 1px solid #eee;
    color: #666;
    background: url("./../../../static/img/normal/right.png") no-repeat ;
    background-position: 95% center;
    background-size: 12px;
  }
  .lab{
    min-width: 180px;
    white-space: nowrap;
  }
  .more{
    max-width: 260px;
    max-height: 400px;
  }
  .state1{
    color: #3ad558;
  }
  .state2{
    color: #0d9bf2;
  }
  .submit{
    width: 686px;
    margin:16px 0 0 32px;
    height: 88px;
    background: #ec971f;
    text-align: center;
    line-height: 88px;
    font-size: 36px;
    color: #fff;
    border-radius: 4px;
  }
</style>
