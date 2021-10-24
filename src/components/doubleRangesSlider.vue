<template>
  <div class="ranges-wrapper">
    <div class="container">
      <div class="slider-track" :style="sliderTrackStyle"></div>
      <input type="range" :min="from" :max="to" v-model="s1value" />
      <input type="range" :min="from" :max="to" v-model="s2value" />
    </div>
    <div class="values">
      <span class="value1" :style="value1style" v-text="s1()"></span>
      <span class="value2" :style="value2style" v-text="s2()"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DRSlider",
  props: {
    from: { type: [Number, String], required: true, default: 0 },
    to: { type: [Number, String], required: true, default: 10 },
    minValue: { type: [Number, String], required: true, default: 0 },
    maxValue: { type: [Number, String], required: true, default: 5 },
    unit: { type: [String], default: "" },
  },

  data() {
    return {
      minGap: 0,
      s1value: this.minValue,
      s2value: this.maxValue,
      sliderTrackStyle: "",
      value1style: "",
      value2style: "",
    };
  },
  watch: {
    s1value() {
      this.s1();
    },
    s2value() {
      this.s2();
    },
  },
  methods: {
    s1() {
      if (parseInt(this.s2value) - parseInt(this.s1value) <= this.minGap) {
        this.s1value = parseInt(this.s2value) - this.minGap;
      }
      this.fillColor();
      this.adjustValue();
      return `${this.s1value} ${this.unit}`;
    },
    s2() {
      if (parseInt(this.s2value) - parseInt(this.s1value) <= this.minGap) {
        this.s2value = parseInt(this.s1value) + this.minGap;
      }
      this.fillColor();
      this.adjustValue();
      return `${this.s2value} ${this.unit}`;
    },
    fillColor() {
      const percent1 = (this.s1value / this.to) * 100;
      const percent2 = (this.s2value / this.to) * 100;
      this.sliderTrackStyle = `background: linear-gradient(to right, #dadae5 ${percent1}% , #fbaf60 ${percent1}% , #fbaf60 ${percent2}%, #dadae5 ${percent2}%)`;
    },
    adjustValue() {
      const position1 = (this.s1value / this.to) * 100;
      const position2 = (this.s2value / this.to) * 100;
      this.value1style = `left: ${position1}%`;
      this.value2style = `left: ${position2}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style.scss";

.ranges-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 1em;

  .values {
    width: 100%;
    position: relative;
    margin: auto;
    text-align: center;
    color: #ffffff;
    height: 15px;

    .value1,
    .value2 {
      position: absolute;
      left: 0;
      font-size: 0.8em;
      color: $primary-color;
      transform: translateX(-50%);
    }
  }

  .container {
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    height: 40px;

    input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      outline: none;
      position: absolute;
      // margin: auto;
      padding: 0;
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
      background-color: $secondary-color;
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
      background-color: $secondary-color;
      border: 1px solid $secondary-color-2;
    }
    input[type="range"]::-ms-thumb {
      appearance: none;
      height: 1.7em;
      width: 1.7em;
      cursor: pointer;
      border-radius: 50%;
      background-color: $secondary-color;
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