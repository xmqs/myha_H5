<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
  import echarts from "echarts"
    export default {
      name: "chars",
      data(){
        return{
          myChart:{}
        }
      },
      mounted(){
        let option = {
          title: {
            text: '投票结果',
            left: 'center'
          },
          tooltip : {
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['同意', '不同意','弃权','未投票']
          },
          series : [
            {
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data:[
                {value:1548,name: '同意'},
                {value:535, name: '不同意'},
                {value:1548,name: '弃权'},
                {value:1548,name: '未投票'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.myChart = echarts.init(document.getElementById('main'));
        this.myChart.setOption(option);
      }
    }
</script>

<style scoped>
  #main{
    width: 750px;
    height: 636px;
    padding-top: 36px;
  }
</style>
