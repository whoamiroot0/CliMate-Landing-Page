<template>
  <div class="top">

    <section class="navbar-container">
      
      <div>
        <a href="."><img width="auto" height="38px" src="../assets/img/logo.png"></a>
        
        <div id="navbar-links">
          <a href="#how">{{ $t('topLinkHow') }}</a>
          <a href="#tools">{{ $t('topLinkTools') }}</a>
          <a href="#join">{{ $t('topLinkJoin') }}</a>
          <a href="#team">{{ $t('topLinkTeam') }}</a>
        </div>

      </div>

      <a href="https://cli-mate.ch/sign-up"><button>{{ $t('topButton') }}</button></a>
    </section>

  </div>
</template>

<script>
export default {
}
</script>>

<style scoped>
.navbar-container {
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  flex-direction: row;
  height: 10px;
}
.navbar-container div {
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.navbar-container a:hover {
  color: #EB835D;
}
.navbar-container button {
  background-color: #E2FDF3;
  color: #21BF7B;
}
.navbar-container button:hover {
  color: #E2FDF3;
  background-color: #21BF7B;
}
@media (max-width: 520px) {
  .navbar-container button {
    display: none;
  }
}
</style>