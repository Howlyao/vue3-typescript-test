<template>
  <div id="main" class="h-80vh">

  </div>
  <button v-bind="$attrs" @click="postChartData">Post</button>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { inject, onMounted } from 'vue';

const $axios:any = inject('$axios')

onMounted(async () => {
  let main = document.getElementById('main')
  var myChart = echarts.init(main as HTMLElement);
  // 绘制图表

  let req = await $axios.get('/chart-data')
  let data = req.data
  
  // console.log(data)
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: data
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
})


function postChartData() {
    let data = {
      item: 'a',
      value: 1
    };
    $axios.post('/chart-value', data)
      .then((res: any) => {
        console.log(res)
      })
}
</script>

<style scoped>


</style>