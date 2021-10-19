<template>
  <div class="review">
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
      <div class="review-head">
        <h2>Reviews: 95</h2>
        <div class="stars">
          <icon-base
            width="16"
            height="16"
            stroke="none"
            fill="gold"
            viewBox="0 0 576 512"
            icon-name="icon-star"
            ><icon-star
          /></icon-base>
          <icon-base
            width="16"
            height="16"
            stroke="none"
            fill="gold"
            viewBox="0 0 576 512"
            icon-name="icon-star"
            ><icon-star
          /></icon-base>
          <icon-base
            width="16"
            height="16"
            stroke="none"
            fill="gold"
            viewBox="0 0 576 512"
            icon-name="icon-star"
            ><icon-star
          /></icon-base>
          <icon-base
            width="16"
            height="16"
            stroke="none"
            fill="gold"
            viewBox="0 0 576 512"
            icon-name="icon-star"
            ><icon-star
          /></icon-base>
          <icon-base
            width="16"
            height="16"
            stroke="none"
            fill="gold"
            viewBox="0 0 576 512"
            icon-name="icon-star"
            ><icon-star
          /></icon-base>
        </div>
      </div>
      <ul class="review-cards">
        <li>
          <a href="" class="card">
            <div class="card-top">
              <div class="commenter">
                <a href="" class="avi"
                  ><icon-base
                    width="36"
                    height="36"
                    stroke="none"
                    fill="gold"
                    viewBox="0 0 448 512"
                    icon-name="icon-user"
                    ><icon-user /></icon-base
                ></a>
                <div class="">
                  <h3 class="name">Leslie Alexander</h3>
                  <p class="occupation">UI Designer</p>
                </div>
              </div>
              <div class="rating">
                <icon-base
                  width="10"
                  height="10"
                  stroke="none"
                  fill="gold"
                  viewBox="0 0 576 512"
                  icon-name="icon-star"
                  ><icon-star /></icon-base
                >4.2
              </div>
            </div>
            <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta, labore explicabo tempora facilis nobis.
            </p>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <div class="card-top">
              <div class="commenter">
                <a href="" class="avi"
                  ><icon-base
                    width="36"
                    height="36"
                    stroke="none"
                    fill="gold"
                    viewBox="0 0 448 512"
                    icon-name="icon-user"
                    ><icon-user /></icon-base
                ></a>
                <div class="">
                  <h3 class="name">Annette Black</h3>
                  <p class="occupation">Caterer</p>
                </div>
              </div>
              <div class="rating">
                <icon-base
                  width="10"
                  height="10"
                  stroke="none"
                  fill="gold"
                  viewBox="0 0 576 512"
                  icon-name="icon-star"
                  ><icon-star /></icon-base
                >4.1
              </div>
            </div>
            <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto in maxime dignissimos, adipisci necessitatibus.
            </p>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <div class="card-top">
              <div class="commenter">
                <a href="" class="avi"
                  ><icon-base
                    width="36"
                    height="36"
                    stroke="none"
                    fill="gold"
                    viewBox="0 0 448 512"
                    icon-name="icon-user"
                    ><icon-user /></icon-base
                ></a>
                <div class="">
                  <h3 class="name">Dareld Steward</h3>
                  <p class="occupation">Project Manager</p>
                </div>
              </div>
              <div class="rating">
                <icon-base
                  width="10"
                  height="10"
                  stroke="none"
                  fill="gold"
                  viewBox="0 0 576 512"
                  icon-name="icon-star"
                  ><icon-star /></icon-base
                >3.5
              </div>
            </div>
            <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est.
            </p>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <div class="card-top">
              <div class="commenter">
                <a href="" class="avi"
                  ><icon-base
                    width="36"
                    height="36"
                    stroke="none"
                    fill="gold"
                    viewBox="0 0 448 512"
                    icon-name="icon-user"
                    ><icon-user /></icon-base
                ></a>
                <div class="">
                  <h3 class="name">Cameron Wiliamson</h3>
                  <p class="occupation">CEO ofsace</p>
                </div>
              </div>
              <div class="rating">
                <icon-base
                  width="10"
                  height="10"
                  stroke="none"
                  fill="gold"
                  viewBox="0 0 576 512"
                  icon-name="icon-star"
                  ><icon-star /></icon-base
                >3.3
              </div>
            </div>
            <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat veniam impedit quos esse.
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style.scss";

.review {
  color: $primary-color;

  .container {
    margin: 16px;
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
      border: 2ppx solid white;
      background-color: $secondary-color;
      border-radius: 50%;

      svg {
        border-radius: 50%;
      }
    }
  }

  .review-head {
    display: flex;
    gap: 0.5em;

    h2 {
      font-weight: 100;
      font-size: 1.2em;
    }

    .stars {
      display: flex;
      gap: 0.2em;
    }
  }

  ul.review-cards {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      margin: 1em 0;

    li a.card {
        display: block;
        padding: 1em;
        border: 1px solid $primary-bg;
        border-radius: 10px;
        width: 100%;

        .card-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: .75em;

            .commenter {
                display: flex;
                gap: .8em;
                .avi {
                    height: 38px;
                    width: 38px;
                    border-radius: 50%;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }
            }

            .rating {
                
            }
        }
        .card-text {
            line-height: 1.5em;
        }
    }
  }
}
</style>