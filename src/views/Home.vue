<template>
  <div class="home">
    <div class="section">
      <div class="contents">
        <h2>Category</h2>
        <ul class="categories">
          <li class="item">
            <a href="#" class="category-item">
              <div class="illustrator-container">

              </div>
              <h3 class="name">Cleaning</h3>
            </a>
          </li>
          <li class="item">
            <a href="#" class="category-item">
              <div class="illustrator-container">

              </div>
              <h3 class="name">Baking</h3>
            </a>
          </li>
          <li class="item">
            <a href="#" class="category-item">
              <div class="illustrator-container">

              </div>
              <h3 class="name">Disinfecting</h3>
            </a>
          </li>
          <li class="item">
            <a href="#" class="category-item">
              <div class="illustrator-container">

              </div>
              <h3 class="name">Repairing</h3>
            </a>
          </li>
          <li class="item">
            <a href="#" class="category-item">
              <div class="illustrator-container">
              </div>
              <h3 class="name">Laundry</h3>
            </a>
          </li>
          <li class="item">
            <a href="#" class="category-item">
              <div class="illustrator-container">

              </div>
              <h3 class="name">Painting</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="contents">
        <h2>Recommended</h2>
        <div class="recommeded-cards">
          <div class="card">
            <img
              class="card-image"
              src="~@/assets/agents/person_1.jpg"
              alt=""
            />
            <div class="card-details">
              <div class="top">
                <p class="rating"><icon-base
                  width="12"
                  height="12"
                  stroke="none"
                  fill="gold"
                  viewBox="0 0 576 512"
                  icon-name="icon-star"
                  ><icon-star /></icon-base
                > 4.1</p>
                <p class="discount">off 30%</p>
              </div>
              <h2 class="title">Home Cleaning</h2>
              <p class="agent">By Emran Emon</p>
              <p>#<span class="rate">2400</span><sub>/hr</sub></p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-image"
              src="~@/assets/agents/person_2.jpg"
              alt=""
            />
            <div class="card-details">
              <div class="top">
                <p class="rating"><icon-base
                  width="12"
                  height="12"
                  stroke="none"
                  fill="gold"
                  viewBox="0 0 576 512"
                  icon-name="icon-star"
                  ><icon-star /></icon-base
                > 4.0</p>
                <p class="discount">off 25%</p>
              </div>
              <h2 class="title">Kitchen Cleaning</h2>
              <p class="agent">By Imran Khan</p>
              <p>#<span class="rate">5800</span><sub>/hr</sub></p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-image"
              src="~@/assets/agents/person_3.jpg"
              alt=""
            />
            <div class="card-details">
              <div class="top">
                <p class="rating"><icon-base
                  width="12"
                  height="12"
                  stroke="none"
                  fill="gold"
                  viewBox="0 0 576 512"
                  icon-name="icon-star"
                  ><icon-star /></icon-base
                > 4.7</p>
                <p class="discount">off 37%</p>
              </div>
              <h2 class="title">Cooking</h2>
              <p class="agent">By Jane Doe</p>
              <p>#<span class="rate">2000</span><sub>/hr</sub></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Menu />
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/menu.vue";
// import AdCarousel from "@/components/adCarousel.vue";

export default {
  name: "Home",
  components: {
    Menu,
    // AdCarousel,
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/style.scss';

.home {
  min-height: 100vh;

  .section {
    // min-height: 200px;
    width: auto;
    margin:1em;
    margin-bottom: 12px;
    padding: 1em;


    &:last-child {
      margin-bottom: 60px;
    }

    .contents {
      h2 {
        font-size: 1.4em;
        margin-bottom: .5em;
        // font-weight: bold;
      }

      p {
        // font-size: 0.8em;
        // color: grey;
      }

      .cards-container {
        color: $primary-color;
        margin-top: 1.2em;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;

        .card {
          width: 100%;
          cursor: pointer;
          border-radius: 0.25rem;
          margin: 0;
          margin-bottom: 1em;
          flex: 0 1 calc(50% - 0.5em);

          img {
            height: 80px;
            width: 100%;
            border-radius: 8px;
          }
        }
      }
    }
  }

  .all {
    display: block;
    margin: 16px 0 0 0;
    padding: 0.75em 1em;
    background-color: #fed2a1;
    font-size: 0.9em;
    text-align: center;
    // width: 100%;
    border: 1px solid #e4730c;
    border-radius: 8px;
  }

  .recommeded-cards {
    display: flex;
    gap: 1em;
    margin-top: 1em;
    flex-direction: column;

    .card {
      display: flex;
      height: 120px;
      width: 100%;
      background-color: $primary-faded-2;

      .card-image {
        height: 100%;
        flex: 1;
      }

      .card-details {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-items: stretch;
        justify-content: space-evenly;
        padding: 0.75em;
        line-height: 1.5em;

        .top {
          display: flex;
          justify-content: space-between;
        }

        h2.title {
          font-size: 1.2em;
        }

        p > .rate {
          display: inline;
          font-size: 1.5em;
          // color: #000;
          font-weight: bold;
        }
      }
    }
  }

  ul.categories {
    display: flex;
    gap: 1em;
    overflow: auto;
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    li.item {
      flex: 1;

      .category-item {
        
        .illustrator-container {
          height: 75px;
          width: 75px;
          border: 1px solid $primary-bg;
          border-radius: 50%;
          margin: .75em 0;
        }

        &:active, &:hover .illustrator-container {
        box-shadow: rgba(131, 154, 177, 0.04) 0px -4px 2px,
    rgba(139, 106, 106, 0.25) 0px -2px 2px inset;
        }

        &:active, &:hover .name {
       font-weight: bold;
        }

        .name {
          text-align: center;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
