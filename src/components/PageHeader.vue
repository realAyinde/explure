<template>
  <div class="page-header">
    <a href="" class="btn-icon-sm"
      ><icon-base
        width="14"
        height="14"
        fill="#113460"
        stroke="none"
        viewBox="0 0 320 512"
        icon-name="icon-chevronleft"
        ><icon-chevronleft /></icon-base
    ></a>
    <h2 class="title">{{ title }}</h2>
    <a href="" class="avatar"
      ><icon-base
        width="32"
        height="32"
        stroke="none"
        fill="white"
        viewBox="0 0 448 512"
        icon-name="icon-user"
        ><icon-user /></icon-base
    ></a>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: { type: String, Default: "" },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style.scss";

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: .5em 1.5em;
  background-color: #fff;
  // height: px;

  .title {
    font-size: 1.2em;
    line-height: 32px;
    font-weight: bold;
  }

  a {
    line-height: 32px;
    align-self: center;
  }

  .avatar {
    height: 32px;
    width: 32px;
    border: 2ppx solid white;
    background-color: $secondary-color;
    border-radius: 50%;

    svg {
      border-radius: 50%;
    }
  }
}
</style>