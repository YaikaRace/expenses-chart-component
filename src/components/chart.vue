<template>
  <div class="bg-very-pale-orange">
    <h1 class="text-dark-brown text-2xl font-bold sm:text-3xl">
      Spending - Last 7 days
    </h1>
    <column-chart
      :data="data"
      :colors="this.colors"
      prefix="$"
      :dataset="{
        borderRadius: 3,
        borderSkipped: false,
        hoverBackgroundColor: this.hoverCol,
        hoverBorderColor: this.hoverCol,
      }"
      :library="{
        plugins: {
          tooltip: {
            caretSize: 0,
            caretPadding: 0,
            xAlign: 'center',
            yAlign: 'bottom',
            bodyFont: {
              family: 'DM Sans, sans-serif',
              size: 14,
            },
            callbacks: {
              title: (item, data) => null,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: {
              color: 'hsl(28, 10%, 53%)',
              font: {
                family: 'DM Sans, sans-serif',
                size: 12,
              },
            },
          },
          y: {
            grid: { display: false, drawBorder: false },
            ticks: {
              display: false,
            },
          },
        },
      }"
      class="max-h-48 mt-6"
    >
    </column-chart>
    <hr class="text-cream my-6 border-b-[1px]" />
    <div class="flex justify-between">
      <div class="text-center sm:text-left">
        <p class="text-medium-brown text-[15px]">Total this month</p>
        <h2 class="text-dark-brown text-3xl font-bold sm:text-4xl">$478.33</h2>
      </div>
      <div class="text-right mt-3">
        <h3 class="text-dark-brown font-bold">+2.4%</h3>
        <p class="text-medium-brown text-[15px]">from last month</p>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from '../assets/data.json'

export default {
  name: 'chart-comp',
  data() {
    return {
      data: [],
      colors: [],
      hoverCol: [],
      values: [],
    }
  },
  mounted() {
    let dataEntries = []
    jsonData.forEach((item) => {
      dataEntries.push(Object.values(item))
    })
    this.data = dataEntries
    dataEntries.forEach((item) => {
      this.values.push(item[1])
    })
    let maxVal = Math.max(...this.values)
    let maxNumIdx = this.values.findIndex((val) => maxVal == val)
    this.data.forEach((item, idx) => {
      if (idx == maxNumIdx) {
        this.colors[idx] = 'hsl(186, 34%, 60%)'
        this.hoverCol[idx] = 'hsl(186, 34%, 75%)'
      } else {
        this.colors[idx] = 'hsl(10, 79%, 65%)'
        this.hoverCol[idx] = 'hsl(10, 79%, 75%)'
      }
    })
  },
}
</script>
