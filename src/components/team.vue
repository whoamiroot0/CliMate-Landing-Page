<template>
  <div id="team" class="page">

    <section>
      <h2>{{ $t('teamTitle') }}</h2>
      <p>{{ $t('teamDescription') }}</p>
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
      
        <vueper-slide class="slideshow-card-container1" v-for="i in 1" :key="i">
          <div slot="content">
          </div>
        </vueper-slide>
      
        <vueper-slide class="slideshow-card-container2" v-for="i in 1" :key="i">
          <div slot="content">
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-card-container3" v-for="i in 1" :key="i">
          <div slot="content">
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-card-container4" v-for="i in 1" :key="i">
          <div slot="content">
          </div>
        </vueper-slide>

        <vueper-slide class="slideshow-card-container5" v-for="i in 1" :key="i">
          <div slot="content">
          </div>
        </vueper-slide>

      </vueper-slides>
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
#team {
  background-color: white;
}
.slideshow-container {
  width: 80%;
  max-width: 850px;
}
.slideshow-card-container1 {
  background-image: url(../assets/img/jonas_augsburger.png);
  background-size: cover;
}
.slideshow-card-container2 {
  background-image: url(../assets/img/bill_gates.jpg);
  background-size: cover;
}
.slideshow-card-container3 {
  background-image: url(../assets/img/jonas_augsburger.png);
  background-size: cover;
}
.slideshow-card-container4 {
  background-image: url(../assets/img/jonas_augsburger.png);
  background-size: cover;
}
.slideshow-card-container5 {
  background-image: url(../assets/img/jonas_augsburger.png);
  background-size: cover;
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
@media (max-width: 670px) {
  #team {
    height: 100vh;
  }
}
</style>