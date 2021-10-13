<template>
  <div class="home">
    <div class="section">
      <AdCarousel />
    </div>
    <div class="section">
      <div class="contents">
        <h1>Salon to your Home</h1>
        <p>Comfort | Personalized Service</p>
        <div class="cards-container">
          <div class="card">
            <img src="~@/assets/illustrators/mobile-login.png" alt="" />
            <p class="title">Barbing</p>
          </div>
          <div class="card">
            <img src="~@/assets/illustrators/mobile-login.png" alt="" />
            <p class="title">Shaving</p>
          </div>
          <div class="card">
            <img src="~@/assets/illustrators/mobile-login.png" alt="" />
            <p class="title">Plaiting</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="contents">
        <h1>Home & Office Repairs at your tip!</h1>
        <p>with well trained and certified technicians</p>
      </div>
    </div>
    <div class="section">
      <div class="contents">
        <h1>Sparkling Neat & Hygeinic Cleaning</h1>
        <p>safe & hygeniec cleaning from verified professionals</p>
        <div class="cards-container">
          <div class="card">
            <img src="~@/assets/illustrators/mobile-login.png" alt="" />
            <p class="title">Disinfectation</p>
          </div>
          <div class="card">
            <img src="~@/assets/illustrators/mobile-login.png" alt="" />
            <p class="title">Office Cleaning</p>
          </div>
          <div class="card">
            <img src="~@/assets/illustrators/mobile-login.png" alt="" />
            <p class="title">After party cleaning</p>
          </div>
          <div class="card">
            <img src="~@/assets/illustrators/mobile-login.png" alt="" />
            <p class="title">deep cleaning</p>
          </div>
        </div>
      </div>
      <a class="all" href="">View all Explure services</a>
    </div>

    <div class="section">
      <div class="contents">
        <h1>Recommended</h1>
        <div class="recommeded-cards">
          <div class="card">
            <img class="card-image" src="~@/assets/agents/person_1.jpg" alt="">
            <div class="card-details">
              <div class="top">
                <p class="rating">4.1</p>
                <p class="discount">off 30%</p>
              </div>
              <h2 class="title">Home Cleaning</h2>
              <p class="agent">By Emran Emon</p>
               <p> #<span class="rate">2400</span><sub>/hr</sub> 
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src="~@/assets/agents/person_2.jpg" alt="">
            <div class="card-details">
              <div class="top">
                <p class="rating">4.0</p>
                <p class="discount">off 25%</p>
              </div>
              <h2 class="title">Kitchen Cleaning</h2>
              <p class="agent">By Imran Khan</p>
               <p> #<span class="rate">5800</span><sub>/hr</sub> 
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src="~@/assets/agents/person_3.jpg" alt="">
            <div class="card-details">
              <div class="top">
                <p class="rating">4.7</p>
                <p class="discount">off 37%</p>
              </div>
              <h2 class="title">Cooking</h2>
              <p class="agent">By Jane Doe</p>
              <p> #<span class="rate">2000</span><sub>/hr</sub> 
              </p>
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
import AdCarousel from "@/components/adCarousel.vue";

export default {
  name: "Home",
  components: {
    Menu,
    AdCarousel,
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: #e9e9eb;
  min-height: 100vh;

  .section {
    // min-height: 200px;
    width: auto;
    background-color: #ffffff;
    margin-bottom: 12px;
    padding: 1em;

    &:last-child {
      margin-bottom: 60px;
    }

    .contents {
      h1 {
        font-size: 1.2em;
        font-weight: bold;
      }

      p {
        font-size: 0.8em;
        color: grey;
      }

      .cards-container {
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
          // background: #eee;
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
      background-color: #b1d0fc;

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
        padding: .75em;
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
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
