<template>
  <div id="how" class="page">

    <section>
      <h2>{{ $t('howTitle') }}</h2>
      <p>{{ $t('howDescription') }}</p>
    </section>

    <section>
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
              <h3>{{ $t('howCard1Title') }}</h3>
              <p>{{ $t('howCard1Description') }}</p>
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('howCard2Title') }}</h3>
              <p>{{ $t('howCard2Description') }}</p>
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('howCard3Title') }}</h3>
              <p>{{ $t('howCard3Description') }}</p>
          </div>
        </vueper-slide>
          
        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('howCard4Title') }}</h3>
              <p>{{ $t('howCard4Description') }}</p>
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-container-card" v-for="i in 1" :key="i">
          <div slot="content">
              <img style="cursor: default" width="40px" height="auto" src="../assets/img/star.png">
              <h3>{{ $t('howCard5Title') }}</h3>
              <p>{{ $t('howCard5Description') }}</p>
          </div>
        </vueper-slide>

      </vueper-slides>
    </section>

    <section class="people-container">
      <img style="cursor: default" width="auto" height="240px" src="../assets/img/people.png">
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
        1000: {
          visibleSlides: 2,
          arrows: false,
          bullets: true
        },
        700: {
          visibleSlides: 1,
          arrows: false,
          bullets: false
        }
      }
    }
  }
};
</script>>

<style scoped>
#how {
  background-color: white;
}
.slideshow-container {
  width: 80%;
  max-width: 850px;
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
.people-container {
  height: 239px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background: linear-gradient(180deg, white 50%, #CEFBE5 50%);
}
@media (max-width: 660px) {
  .people-container {
    display: none;
  }
  #how {
    height: 100vh;
  }
}
</style>