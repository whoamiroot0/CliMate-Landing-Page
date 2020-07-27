<template>
  <div id="home">

    <section class="image-container">
      <h1>{{ $t('homeTitle') }}</h1>
      <h3>{{ $t('homeSlogan') }}</h3>
      <a href="#how"><button>{{ $t('homeButton') }}</button></a>
    </section>

    <section class="video-container">
      <video width="60%" height="auto"></video>
    </section>

  </div>
</template>

<script>
</script>>

<style scoped>
.image-container {
  height: 550px;
  background-image: url(../assets/img/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
}
.image-container h1 {
  animation: fade-left, fade-left-opacity;
  animation-duration: 1s;
}
.image-container h3 {
  animation: fade-left, fade-left-opacity;
  animation-duration: 1.75;
}
@keyframes fade-left {
  from {margin-left: -100px;}
  to {margin-left: 10px;}
}
@keyframes fade-left-opacity {
  from {opacity: 0.0;}
  to {opacity: 1.0;}
}
.image-container button {
  color: white;
  background-color: #EB835D;
}
.image-container button:hover {
  background-color: white;
  color: #EB835D;
}
.video-container video {
  background-color: #333333;
  border-radius: 25px;
  margin-top: -170px;
}
@media (max-width: 670px) {
  .video-container {
    display: none;
  }
  .image-container {
    background-position: center 80px;
    height: 380px;
  }
}
</style>