<!-- The console.log works okay with this code:

<template>
  <div id="app">
    <button @click="sumUp">Count {{count}}</button>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import { Component, Watch } from 'vue-property-decorator'

// @Component
// export default class App extends Vue {
//   count: number = 0

//   @Watch('count')
//   watchCount(newVal, oldVal) {
//     console.log('newVal: ', newVal, ', oldVal: ', oldVal)
//   }

//   sumUp() {
//     this.count++
//   }
// }
// </script> -->

<!-- console.log shows incorrectly the acum of old & new value to be the same -->
<template>
  <div id="app">
    <button @click="sumUp">Count {{count.acum}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  count: any = {
    acum: 0
  }
  @Watch('count', { deep: true })
  watchCount(newVal, oldVal) {
    console.log('newVal: ', newVal.acum, ', oldVal: ', oldVal.acum)
  }
  sumUp() {
    this.count.acum++
  }
}
</script>






<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  font-size: 2em;
}
</style>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-size: 2em;
}
</style>