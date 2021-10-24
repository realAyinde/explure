<template>
  <app-pageheader title="Home Repair" />
  <div class="repair">
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
        <button class="collapsible-btn">Repair</button>
        <div class="collapsible-content">
          <ul>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Walton Fridge</div>
                <div class="price">$36</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Ponda Gas</div>
                <div class="price">$99</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Walton AC</div>
                <div class="price">$78</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Walton Fridge</div>
                <div class="price">$24</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapsible-card">
        <button class="collapsible-btn">Plumbing</button>
         <div class="collapsible-content">
          <ul>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Walton Fridge</div>
                <div class="price">$36</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Ponda Gas</div>
                <div class="price">$99</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapsible-card">
        <button class="collapsible-btn">Plumbing</button>
         <div class="collapsible-content">
          <ul>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Ponda Gas</div>
                <div class="price">$99</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Walton AC</div>
                <div class="price">$78</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
            <li class="item">
              <div class="icon-container"></div>
              <div class="mid">
                <div class="name">Walton Fridge</div>
                <div class="price">$24</div>
              </div>
              <div class="increment">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <app-menu />
</template>

<script>
export default {
  name: "Repair",
  components: {},

  mounted() {
    var coll = document.getElementsByClassName("collapsible-btn");
    // var i;
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  },
};
</script>

<style lang="scss">
@import "~@/assets/style.scss";

.repair {
  color: $primary-color;
  margin: 60px 0;

  .container {
    margin: 16px 1.5em;
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

      &:active,
      &:hover {
        border: 1px solid $secondary-color-2;
      }
    }
  }

  .collapsible-card {
    margin: 1em 0;
    // padding: 1.5em 1em;
    background-color: $primary-bg;
    border-radius: 12px;

    .collapsible-btn {
      background-color: transparent;
      color: $primary-color;
      cursor: pointer;
      border-radius: 0 12px 12px 0;
      padding: 1em;
      width: 100%;
      border: none;
      text-align: left;
      font-size: 1.2em;
      font-weight: bold;
      outline: none;

      &:after {
        content: "\002B";
        color: $primary-color;
        font-weight: bold;
        float: right;
        margin-left: 5px;
        transform: rotateZ(0deg);
        transition: transform 0.2s ease-out;
      }

      &.active:after {
        transform: rotateZ(45deg);
      }
    }

    .collapsible-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
      padding: 0 1em;

      ul {
        display: flex;
        flex-direction: column;
        width: 100%;

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

            button {
              color: $primary-color;
              font-weight: bold;
              font-size: 1.3em;
              height: 28px;
              width: 28px;
              line-height: 28px;
              background-color: $primary-faded-1;
              border-radius: 10px;
              text-align: center;
            }

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
}
</style>