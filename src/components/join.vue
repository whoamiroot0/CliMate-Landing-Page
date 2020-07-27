<template>
  <div id="join" class="page">

    <section>
      <h2>{{ $t('joinTitle') }}</h2>
      <p>{{ $t('joinDescription') }}</p>
    </section>

    <section>
      <div class="phone-container">
        <img class="phone-image" style="cursor: default" src="../assets/img/phone.png">
        <div class="app-container">
          <h3>{{ $t('joinDownload') }}</h3>
          <img height="50px" width="auto" src="../assets/img/apple_store.png">
          <img height="50px" width="auto" src="../assets/img/google_play.png">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
</script>>

<style scoped>
#join {
  background-color: #F9F9F9;
}
.phone-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.phone-container img {
  margin: 40px;
}
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}
.app-container h3 {
  font-weight: bold;
}
.app-container img {
  margin: 10px;
  opacity: 0.7;
  transition: 0.25s ease-in-out;
}
.app-container img:hover {
  opacity: 1;
}
@media (max-width: 670px) {
  .phone-image {
   display: none;
  }
  #join {
    height: 100vh;
  }
}
</style>