<template>
  <div class="menu">
    <a class="">
      <icon-base width="24" height="24" viewBox="0 0 576 512" icon-name="icon-home"><icon-home/></icon-base>
    </a>
    <a class="">
      <icon-base width="24" height="24" viewBox="0 0 448 512" icon-name="icon-shoppingbag"><icon-shoppingbag/></icon-base>
      <!-- <small>Bookings</small> -->
    </a>
    <a class="" href="/repair">
      <icon-base width="24" height="24" viewBox="0 0 512 512" icon-name="icon-commentdots"><icon-commentdots/></icon-base>
      <!-- <small>Tools</small> -->
    </a>
    <a class="">
      <icon-base width="24" height="24" viewBox="0 0 448 512" icon-name="icon-bell"><icon-bell/></icon-base>
      <!-- <small>Me</small> -->
    </a>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {
  width: 100%;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
//   font-size: .8em;
  display: flex;
  background-color: white;
  height: 50px;
  padding: 8px 0;
  box-shadow: rgba(27, 31, 35, 0.04) 0px -4px 2px,
    rgba(255, 255, 255, 0.25) 0px -2px 2px inset;

  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // text-align: center;
    align-items: center;
  }
}
</style>
