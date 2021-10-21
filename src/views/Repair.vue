<template>
  <div class="repair">
    <div class="container page-header">
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
      <h2 class="title">Home Repair</h2>
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
    <div class="container">
      <ul class="categories-slide">
        <li><a href="#">Cleaning</a></li>
        <li><a href="#">Repair</a></li>
        <li><a href="#">Laundry</a></li>
        <li><a href="#">Dressing</a></li>
        <li><a href="#">Catering</a></li>
      </ul>
    </div>
    <div class="container">
      <div class="collapsible-card">
        <div class="top">
          <h2 class="title">Repair</h2>
          <button class="top-btn">
            <icon-base
              width="10"
              height="10"
              fill="#113460"
              icon-name="icon-minus"
              ><icon-minus
            /></icon-base>
          </button>
        </div>
        <ul class="body">
          <li class="item">
            <div class="icon-container"></div>
            <div class="mid">
              <div class="name">Walton Fridge</div>
              <div class="price">$36</div>
            </div>
            <div class="increment">
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-minus"
                  ><icon-minus
                /></icon-base>
              </button>
              <span>2</span>
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-plus"
                  ><icon-plus
                /></icon-base>
              </button>
            </div>
          </li>
          <li class="item">
            <div class="icon-container"></div>
            <div class="mid">
              <div class="name">Ponda Gas</div>
              <div class="price">$99</div>
            </div>
            <div class="increment">
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-minus"
                  ><icon-minus
                /></icon-base>
              </button>
              <span>1</span>
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-plus"
                  ><icon-plus
                /></icon-base>
              </button>
            </div>
          </li>
          <li class="item">
            <div class="icon-container"></div>
            <div class="mid">
              <div class="name">Walton AC</div>
              <div class="price">$78</div>
            </div>
            <div class="increment">
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-minus"
                  ><icon-minus
                /></icon-base>
              </button>
              <span>2</span>
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-plus"
                  ><icon-plus
                /></icon-base>
              </button>
            </div>
          </li>
          <li class="item">
            <div class="icon-container"></div>
            <div class="mid">
              <div class="name">Walton Fridge</div>
              <div class="price">$24</div>
            </div>
            <div class="increment">
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-minus"
                  ><icon-minus
                /></icon-base>
              </button>
              <span>2</span>
              <button class="btn-icon-sm">
                <icon-base
                  width="10"
                  height="10"
                  fill="#113460"
                  icon-name="icon-plus"
                  ><icon-plus
                /></icon-base>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="collapsible-card">
        <div class="top">
          <h2 class="title">Plumbing</h2>
          <button>
            <icon-base
              width="10"
              height="10"
              fill="#113460"
              icon-name="icon-minus"
              ><icon-minus
            /></icon-base>
          </button>
        </div>
      </div>
      <div class="collapsible-card">
        <div class="top">
          <h2 class="title">Furnished</h2>
          <button>
            <icon-base
              width="10"
              height="10"
              fill="#113460"
              icon-name="icon-minus"
              ><icon-minus
            /></icon-base>
          </button>
        </div>
      </div>
    </div>
  </div>

  <Menu />
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/menu.vue";

export default {
  name: "Repair",
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import "~@/assets/style.scss";

.repair {
  color: $primary-color;

  .container {
    margin: 16px 1.5em;
  }

  .btn-icon-sm {
    height: 28px;
    width: 28px;
    background-color: $primary-faded-1;
    border-radius: 10px;
    text-align: center;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
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
      background-color: $secondary-color;
      border-radius: 50%;

      svg {
        border-radius: 50%;
      }
    }
  }

  ul.categories-slide {
    margin: 2em 0;
      display: flex;
      gap: 1em;
      overflow: auto;
      width: 100%;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }

      li a {
        display: block;
        border-radius: 8px;
        cursor: pointer;
        color: $primary-color;
        padding: 1em 2em;
        border: 1px solid $primary-color;
        transition: all 0.3s ease;

        &:active, &:hover {
          border: 1px solid $secondary-color-2;
        }
      }
    
  }

  .collapsible-card {
    margin: 1em 0;
    padding: 1.5em 1em;
    background-color: $primary-bg;
    border-radius: 12px;

    .top {
      display: flex;
      justify-content: space-between;
      // margin: 1em 0;

      .title {
        font-size: 1.2em;
      }

      .top-btn {
        text-decoration: none;
        background-color: transparent;
        border: none;
        text-decoration: none;
        cursor: pointer;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 1em;

      li {
        display: flex;
        margin: 0.75em 0;
        width: 100%;
        gap: 0.5em;
        align-content: center;
        // justify-content: stretch;

        .icon-container {
          height: 36px;
          background-color: $primary-faded-1;
          width: 36px;
          align-self: flex-start;
          border-radius: 12px;
        }

        .mid {
          flex: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          .price {
            font-size: 1.1em;
          }
        }

        .increment {
          align-self: center;
          display: flex;

          span {
            display: inline-block;
            line-height: 28px;
            text-align: center;
            width: 28px;
          }
        }
      }
    }
  }
}
</style>
