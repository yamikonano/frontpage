<template>

  <div class="home">

    <Header></Header>

    <section class="background up-scroll">
      <Home></Home>
    </section>
    <section class="background">
      <Secondary></Secondary>
    </section>
    <section class="background blue" style="background-color:#0B609D; ">
      <Thirdly></Thirdly>
    </section>

    <section class="background">
      <Fourth></Fourth>
    </section>

    <section class="background">
      <Fifth></Fifth>
    </section>

    <section class="background">
      <Sixth></Sixth>
    </section>

    <section class="background">
      <Seventh></Seventh>
    </section>


    <section class="background">
      <Eighth></Eighth>
    </section>
  </div>



</template>

<script setup>
import Home from './pages/Home/Home.vue'
import Header from "./components/Header/Header.vue";
import Secondary from "./pages/Home/Secondary.vue";
import Thirdly from "./pages/Home/Thirdly.vue";
import Fourth from "./pages/Home/Fourth.vue";
import Fifth from "./pages/Home/Fifth.vue";
import Sixth from "./pages/Home/Sixth.vue";
import Seventh from "./pages/Home/Seventh.vue";
import Eighth from "./pages/Home/Eighth.vue";
import _ from 'lodash'
import {onMounted} from "vue";
import {useRoute} from "vue-router";



    onMounted(() => {
      let dollor = (x) => document.querySelectorAll(x)
      var ticking = false;
      var isFirefox = (/Firefox/i.test(navigator.userAgent));
      var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
      var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
      var slideDurationSetting = 600; //Amount of time for which slide is "locked"
      var currentSlideNumber = 0;
      var totalSlideNumber = dollor(".background").length;
      let delta

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
      function parallaxScroll(evt) {
        if (isFirefox) {
          //Set delta for Firefox
          delta = evt.detail * (-120);
        } else if (isIe) {
          //Set delta for IE
          delta = -evt.deltaY;
        } else {
          //Set delta for all other browsers
          delta = evt.wheelDelta;
        }

        if (ticking != true) {
          if (delta <= -scrollSensitivitySetting) {
            //Down scroll
            ticking = true;
            if (currentSlideNumber !== totalSlideNumber - 1) {
              currentSlideNumber++;
              nextItem();
            }
            slideDurationTimeout(slideDurationSetting);
          }
          if (delta >= scrollSensitivitySetting) {
            //Up scroll
            ticking = true;
            if (currentSlideNumber !== 0) {
              currentSlideNumber--;
            }
            previousItem();
            slideDurationTimeout(slideDurationSetting);
          }
        }
      }

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
      function slideDurationTimeout(slideDuration) {
        setTimeout(function () {
          ticking = false;
        }, slideDuration);
      }

// ------------- ADD EVENT LISTENER ------------- //
      var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";

      window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
      function nextItem() {
        var $previousSlide = dollor(".background")[currentSlideNumber - 1];
        $previousSlide.classList.remove('up-scroll')
        $previousSlide.classList.add('down-scroll')

        // $previousSlide.removeClass("up-scroll").addClass("down-scroll");
      }

      function previousItem() {
        var $currentSlide = dollor(".background")[currentSlideNumber];
        // $currentSlide.removeClass("down-scroll").addClass("up-scroll");
        $currentSlide.classList.remove('down-scroll')
        $currentSlide.classList.add('up-scroll')
      }
    })


// component:{
//   Home
// }
</script>

<style lang="scss">
body {
  background-color: #E5E5E5;
  margin: 0;
  padding: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url(https://fonts.googleapis.com/css?family=Montserrat);

// ------------- MIXINS ------------- //
@mixin transition($time, $property: all, $easing: ease-in) {
  transition: $property $time $easing;
}

// ------------- VARIABLES ------------- //
$parallax-offset: 30vh;
$content-offset: 0vh;
$transition-speed: 1.2s;
$slide-number: 8;

html, body {
  overflow: hidden;
}

.background {
  background-color: #E5E5E5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  will-change: transform;
  backface-visibility: hidden;
  height: 100vh + $parallax-offset;
  position: fixed;
  width: 100%;
  transform: translateY($parallax-offset);
  @include transition($transition-speed, all, cubic-bezier(0.22, 0.44, 0, 1));
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background-color: rgba(0,0,0,.3);
  }
  &:first-child {
    //background-image: url(https://i.postimg.cc/kXq9Qmnj/bgd1.jpg);
    transform: translateY(-$parallax-offset / 2);
    .content-wrapper {
      transform: translateY($parallax-offset /2);
    }
  }
  &:nth-child(2) {
    //background-image: url(https://i.postimg.cc/W14vywqg/photo-1424746219973-8fe3bd07d8e3.jpg);
  }
  &:nth-child(3) {
    //background-image: url(https://i.postimg.cc/TY0xQ41T/photo-1433840496881-cbd845929862.jpg);
  }
}

/* Set stacking context of slides */
@for $i from 1 to ($slide-number + 1) {
  .background:nth-child(#{$i}) {
    z-index: ($slide-number + 1) - $i;
  }
}

.content {
  &-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    //text-transform: uppercase;
    transform: translateY($content-offset);
    will-change: transform;
    backface-visibility: hidden;
    @include transition($transition-speed + .5, all, cubic-bezier(0.22, 0.44, 0, 1));
  }
  &-title {
    font-size: 12vh;
    line-height: 1.4;
  }
}

// ------------- SET TRANSFORM VALUES ------------- //

.background.up-scroll {
  transform: translate3d(0,-$parallax-offset / 2,0);
  .content-wrapper {
    transform: translateY($parallax-offset / 2);
  }
  + .background {
    transform: translate3d(0,$parallax-offset,0);
    .content-wrapper {
      transform: translateY($parallax-offset);
    }
  }
}

.background.down-scroll {
  transform: translate3d(0,-(100vh + $parallax-offset),0);
  .content-wrapper {
    transform: translateY($content-offset);
  }
  + .background:not(.down-scroll) {
    transform: translate3d(0,-$parallax-offset / 2,0);
    .content-wrapper {
      transform: translateY($parallax-offset / 2);
    }
  }
}
.home{
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
}

//.background.down-scroll ~ .background.down-scroll ~ .blue{
//  //z-index: 100;
//  transition-delay: 0.3s;
//}
</style>
