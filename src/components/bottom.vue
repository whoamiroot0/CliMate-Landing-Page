<template>
  <div class="bottom">

    <section class="links-container">
      
      <div>
        <a href="#top">{{ $t('bottomLinkHome') }}</a>
        <a href="#how">{{ $t('bottomLinkHow') }}</a>
        <a href="#tools">{{ $t('bottomLinkTools') }}</a>
        <a href="#join">{{ $t('bottomLinkJoin') }}</a>
        <a href="#team">{{ $t('bottomLinkTeam') }}</a>
      </div>

      <div>
        <a href="https://twitter.com/climate" target="_blank"><img src="../assets/img/twitter.png"></a>
        <a href="https://instagram.com/climate" target="_blank"><img src="../assets/img/instagram.png"></a>
        <a href="https://facebook.com/climate" target="_blank"><img src="../assets/img/facebook.png"></a>
      </div>

    </section>

  </div>
</template>

<script>
export default {
}
</script>>

<style scoped>
.links-container {
  flex-direction: column;
  background-color: #C4C4C4;
}
.links-container div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.links-container a {
  color: white;
}
.links-container a:hover {
  color: #EB835D;
}
.links-container img {
  height: auto;
  width: 20px;
  opacity: 0.7;
  transition: 0.25s ease-in-out;
}
.links-container img:hover {
  opacity: 1.0;
}
</style>