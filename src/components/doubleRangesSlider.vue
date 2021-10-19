<template>
  <div class="ranges-wrapper">
    <div class="container">
      <div class="slider-track"></div>
      <input
        type="range"
        :min="from"
        :max="to"
        :value=minValue
        ref="slide1"
      />
      <input
        type="range"
        :min="from"
        :max="to"
        :value="maxValue"
        ref="slide2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DRSlider",
  props: {
    from: { type: [Number, String],  required:true, default: 0 },
    to: { type: [Number, String],  required:true, default: 10 },
    minValue: { type: [Number, String], required:true, default: 0 },
    maxValue: { type: [Number, String], required:true, default: 5 },
  },
 
  data() {
      return {
          minGap: 0,
          s1value: {type: [Number, String], default: 50}
      }
  },
  computed: {

  },
  watch: {
      'minValue'() {
          console.log(this.minValue)
      }
    //   slideOne() {
    //    if (parseInt(this.$refs.slide2.value)- parseInt(this.$refs.slide1.value) <= this.minGap){
    //           this.$refs.slide1.value = parseInt(this.$refs.slide2.value) - this.minGap;
    //           let gh = this.$refs.slide1.value

    //           console.log(gh)
    //       }
    //   }

  },
  methods: {
      slideOne() {
        //   if (parseInt(this.$refs.slide2.value)- parseInt(this.$refs.slide1.value) <= this.minGap){
        //       this.$refs.slide1.value = parseInt(this.$refs.slide2.value) - this.minGap;

              let change = this.$refs.slide1.value
              console.log(change)
        //   }
      }
    

  },
//   created() {
//       let gh = this.$refs.slide1.value
//               console.log(gh)
//   },
  mounted() {
      this.s1value = this.$refs.slide1.value
              console.log(this.s1value)
    //    slideOne() { 
        //   if (parseInt(this.$refs.slide2.value)- parseInt(this.$refs.slide1.value) <= this.minGap){
        //       this.$refs.slide1.value = parseInt(this.$refs.slide2.value) - this.minGap;

        //       let debug=this.$refs.slide1.value
        //       console.log(debug)
        //   }
    //   console.log(this.)
    // window.onload = function () {
    //   slideOne();
    //   slideTwo();
    // };

    // let sliderOne = document.getElementById("slider-1");
    // let sliderTwo = document.getElementById("slider-2");
    // let displayValOne = document.getElementById("range1");
    // let displayValTwo = document.getElementById("range2");
    // let minGap = 0;
    // let sliderTrack = document.querySelector(".slider-track");
    // let sliderMaxValue = document.getElementById("slider-1").max;

    // function slideOne() {
    //   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    //     sliderOne.value = parseInt(sliderTwo.value) - minGap;
    //   }
    //   displayValOne.textContent = sliderOne.value;
    //   fillColor();
    // }
    // function slideTwo() {
    //   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    //     sliderTwo.value = parseInt(sliderOne.value) + minGap;
    //   }
    //   displayValTwo.textContent = sliderTwo.value;
    //   fillColor();
    // }
    // function fillColor() {
    //   percent1 = (sliderOne.value / sliderMaxValue) * 100;
    //   percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    //   sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    // }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style.scss";

.ranges-wrapper {
  position: relative;
  width: 100%;

  .container {
    position: relative;
    width: auto;
    height: 50px;

    input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      outline: none;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      background-color: transparent;
      pointer-events: none;
    }
    .slider-track {
      width: 100%;
      height: 4px;
      position: absolute;
      margin: auto;
      background-color: $primary-bg;
      top: 0;
      bottom: 0;
      border-radius: 5px;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 5px;
    }
    input[type="range"]::-moz-range-track {
      -moz-appearance: none;
      height: 5px;
    }
    input[type="range"]::-ms-track {
      appearance: none;
      height: 5px;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 1.7em;
      width: 1.7em;
      background-color: $secondary-color-2-light;
      cursor: pointer;
      margin-top: -9px;
      pointer-events: auto;
      border-radius: 50%;
      border: 1px solid $secondary-color-2;
    }
    input[type="range"]::-moz-range-thumb {
      -webkit-appearance: none;
      height: 1.7em;
      width: 1.7em;
      cursor: pointer;
      border-radius: 50%;
      pointer-events: auto;
      background-color: $secondary-color-2-light;
      border: 1px solid $secondary-color-2;
    }
    input[type="range"]::-ms-thumb {
      appearance: none;
      height: 1.7em;
      width: 1.7em;
      cursor: pointer;
      border-radius: 50%;
      background-color: $secondary-color-2-light;
      border: 1px solid $secondary-color-2;
      pointer-events: auto;
    }
    input[type="range"]:active::-webkit-slider-thumb {
      background-color: #ffffff;
      border: 3px solid #18191b;
    }
  }
}
</style>