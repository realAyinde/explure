<template>
  <div class="menu">
    <div class="menu-item">
      <a class="">
        <icon-base
          width="24"
          height="24"
          viewBox="0 0 576 512"
          icon-name="icon-home"
          ><icon-home
        /></icon-base>
      </a>
    </div>
    <div class="menu-item">
      <a class="">
        <icon-base
          width="24"
          height="24"
          viewBox="0 0 448 512"
          icon-name="icon-shoppingbag"
          ><icon-shoppingbag
        /></icon-base>
        <!-- <small>Bookings</small> -->
      </a>
    </div>
    <div class="menu-item-mid">
      <div class="">
        <!-- <a href="" class="scan">
          </a> -->
      </div>
    </div>
    <div class="menu-item">
      <a class="" href="/repair">
        <icon-base
          width="24"
          height="24"
          viewBox="0 0 512 512"
          icon-name="icon-commentdots"
          ><icon-commentdots
        /></icon-base>
        <!-- <small>Tools</small> -->
      </a>
    </div>
    <div class="menu-item">
      <a class="">
        <icon-base
          width="24"
          height="24"
          viewBox="0 0 448 512"
          icon-name="icon-bell"
          ><icon-bell
        /></icon-base>
        <!-- <small>Me</small> -->
      </a>
    </div>

    <a class="menu-mid">
       <icon-base
          width="24"
          height="24"
          viewBox="0 0 448 512"
          icon-name="icon-bell"
          ><icon-qrcode
        /></icon-base>
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
@import "~@/assets/style.scss";

.menu {
  width: 100%;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  //   font-size: .8em;
  display: flex;
  height: 52px;

  .menu-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // text-align: center;
    align-items: center;
    // padding-top: 8px;
    background-color: #ffffff;
    border: none;
  }

  .menu-item-mid {
    background-color: transparent;
    z-index: -1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    min-width: 70px;

    div {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30%;
        width: 68px;
        height: 68px;
        border-radius: 100%;
        box-shadow: 0px 52px 0px 52px #ffffff;
      }
    }
  }

  .menu-mid {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -24px);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: $secondary-color-2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(131, 154, 177, 0.04) 0px -4px 2px,
    rgba(139, 106, 106, 0.25) 0px -2px 2px inset;
    
  }
}
</style>
