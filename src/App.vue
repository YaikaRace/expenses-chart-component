<template>
  <div
    class="min-h-screen w-[92%] max-w-[473.8px] mx-auto flex flex-col justify-center"
  >
    <headerChart
      class="mb-4 p-4 rounded-lg sm:p-6 sm:rounded-2xl"
    ></headerChart>
    <chartComp class="p-4 rounded-lg sm:p-8 sm:rounded-2xl"></chartComp>
    <div
      class="text-xs text-dark-brown text-center absolute bottom-0 left-0 right-0"
    >
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-soft-red"
        >Frontend Mentor</a
      >. Coded by
      <a
        href="https://www.frontendmentor.io/profile/yaikarace"
        class="text-soft-red"
        target="_blank"
        >Your Name Here</a
      >.
    </div>
  </div>
</template>

<script>
import chartComp from './components/chart.vue'
import headerChart from './components/header.vue'

export default {
  name: 'App',
  components: {
    chartComp,
    headerChart,
  },
}
</script>
