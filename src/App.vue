<template>
  <div id="app">

    <top/>
    <home/>
    <how/>
    <tools/>
    <join/>
    <team/>
    <bottom/>

  </div>
</template>

<script>
import top from './components/top.vue'
import home from './components/home.vue'
import how from './components/how.vue'
import tools from './components/tools.vue'
import join from './components/join.vue'
import team from './components/team.vue'
import bottom from './components/bottom.vue'

export default {
  name: 'App',
  components: {
    top,
    home,
    how,
    tools,
    join,
    team,
    bottom
  }
}
</script>

<style>
</style>
