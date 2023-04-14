<template>
  <div id="main" class="h-80vh">

  </div>
  <button v-bind="$attrs" @click="postChartData">Post</button>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { inject, onMounted } from 'vue';

const $axios: any = inject('$axios')

onMounted(async () => {
  let main = document.getElementById('main')
  var myChart = echarts.init(main as HTMLElement);
  // 绘制图表

  console.log(import.meta.env.MODE)
  let data:string[] = []
  if (import.meta.env.MODE === 'production') {

    data = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  } else {
    try {
      
      let req = await $axios.get('/chart-data')
      data = req.data
    } catch (err) {
      data = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    }
  }


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
  if (import.meta.env.MODE === 'production') {
    return;
  }

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

<style scoped></style>