<template>
  <div id="tools" class="page">

    <video width="100%" height="auto" src="videos/explain.webm"></video>

    <section>
      <h2>{{ $t('toolsTitle') }}</h2>
      <p>{{ $t('toolsDescription') }}</p>
    </section>

    <section class="slide">
      <vueper-slides
            class="no-shadow slideshow-container"
            fixed-height="300px"
            :visible-slides="3"
            :infinite="true"
            :initSlide="2"
            :autoplay=true
            :bullets=false
            :slide-ratio="1 / 5"
            :dragging-distance="100"
            :breakpoints="breakpoints">
      
        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('toolsCard1Title') }}</h3>
              <p>{{ $t('toolsCard1Description') }}</p>
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('toolsCard2Title') }}</h3>
              <p>{{ $t('toolsCard2Description') }}</p>
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('toolsCard3Title') }}</h3>
              <p>{{ $t('toolsCard3Description') }}</p>
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('toolsCard4Title') }}</h3>
              <p>{{ $t('toolsCard4Description') }}</p>
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('toolsCard5Title') }}</h3>
              <p>{{ $t('toolsCard5Description') }}</p>
          </div>
        </vueper-slide>
      
      </vueper-slides>
    </section>

    <section class="tools-container">
      <h3 style="margin-top: -40px">{{ $t('toolsShowcase1') }}</h3>
      <h3 style="margin-top: 40px">{{ $t('toolsShowcase2') }}</h3>
    </section>

  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Slideshow',
  components: { VueperSlides, VueperSlide },
  data () {
    return {
      breakpoints: {
        800: {
          visibleSlides: 2,
          arrows: false
        }
      }
    }
  }
};
</script>>

<style scoped>
#tools {
  background-color: #CEFBE5;
}
video {
  background-color: #333333;
}
.slideshow-container {
  width: 80%;
  max-width: 800px;
}
.vueperslide {
  background-color: #FBFBFB;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
  opacity: 0.7;
  transition: 0.25s ease-in-out;
}
.vueperslide p {
  text-align: left;
}
.vueperslide h3 {
  text-align: left;
  font-weight: bold;
}
.vueperslide--active {
  transform: scale(0.9);
  opacity: 1;
}
.tools-container {
  height: 380px;
  background-color: white;
  background-image: url(../assets/img/hands.png);
  background-repeat: no-repeat;
  background-position: center 75px;
  background-size: contain;
  flex-direction: row;
  justify-content: space-around;
}
.tools-container h3 {
  background-color: white;
  border-radius: 5px;
  max-width: 280px;
}
@media (max-width: 670px) {
  .tools-container {
    display: none;
  }
  video {
    display: none;
  }
  #tools {
    height: 100vh;
  }
}
</style>