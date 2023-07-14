<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
export default App= {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

  max-width: 1960px;
  display: block;
  grid-template-columns: 1fr;


  /* 占满全屏 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
