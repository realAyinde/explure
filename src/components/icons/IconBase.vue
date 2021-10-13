<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
    stroke="black"
    stroke-width="6"
    :viewBox="viewBox" 
    :aria-labelledby="iconName"
    :fill="iconColor"
  >
    <title :id="iconName" lang="en">{{iconName}}</title>
    <!-- <g :fill="iconColor"> -->
      <slot />
    <!-- </g> -->
  </svg>
</template>
<script>
export default {
  props: {
    viewBox: { type: String, default: '0 0 24 24'},
    iconName: { type: String, default: ''},
    width: { type: [Number, String], default: 32 },
    height: {type: [Number, String], default: 32 },
    iconColor: {type: String, default: 'white'}
  }
}
</script>