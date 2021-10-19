<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
    :stroke="stroke"
    :stroke-width="strokeWidth"
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
    viewBox: { type: String, default: '0 0 448 512'},
    iconName: { type: String, default: ''},
    strokeWidth: { type: [Number, String], default: '' },
    width: { type: [Number, String], default: 32 },
    height: {type: [Number, String], default: 32 },
    stroke: {type: String, default: 'none'},
    iconColor: {type: String, default: '#113460'}
  }
}
</script>