<template>
  <div class="confirm-details">
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
      <h2 class="title">Confirm Details</h2>
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
      <form action="" method="post">
        <label for="rname">Reciever Name</label>
        <input type="text" name="rname" id="rname" placeholder="Type name" />
        <label for="phoneNo">Phone Number</label>
        <input type="tel" name="phoneNo" id="" placeholder="Type" />
        <label for="location">Location</label>
        <input type="text" name="location" id="" placeholder="Location" />
        <label for="packageType">Package Type</label>
        <div class="options-wrapper">
          <input type="radio" name="select" id="option-1" checked />
          <input type="radio" name="select" id="option-2" />
          <label for="option-1" class="option option-1"> General </label>
          <label for="option-2" class="option option-2"> Gas Recharge </label>
        </div>
        <label for="hours">Hours</label>
        <dr-slider from="0" to="100" minValue="23" maxValue="57" />
        <label for="extraService">Extra Service</label>
        <ul class="extras">
          <li>Organizing</li>
          <li>Cooking</li>
          <li>Wash</li>
          <li>Styling</li>
        </ul>

        <a href="">Next</a>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style.scss";

.options-wrapper {
  display: flex;
  width: 100%;
  gap: 1em;

  .option {
    border-radius: 8px;
    cursor: pointer;
    color: $primary-color;
    padding: 1em 1.4em;
    border: 1px solid $primary-color;
    transition: all 0.3s ease;
  }
  input[type="radio"] {
    display: none;
  }
}

#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2 {
  border-color: $secondary-color-2;
}

.ranges-wrapper {
  position: relative;
  width: 100%;

  .container {
    position: relative;
    width: auto;
    height: 50px;

    input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      outline: none;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      background-color: transparent;
      pointer-events: none;
    }
    .slider-track {
      width: 100%;
      height: 4px;
      position: absolute;
      margin: auto;
      background-color: $primary-bg;
      top: 0;
      bottom: 0;
      border-radius: 5px;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 5px;
    }
    input[type="range"]::-moz-range-track {
      -moz-appearance: none;
      height: 5px;
    }
    input[type="range"]::-ms-track {
      appearance: none;
      height: 5px;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 1.7em;
      width: 1.7em;
      background-color: $secondary-color-2-light;
      cursor: pointer;
      margin-top: -9px;
      pointer-events: auto;
      border-radius: 50%;
      border: 1px solid $secondary-color-2;
    }
    input[type="range"]::-moz-range-thumb {
      -webkit-appearance: none;
      height: 1.7em;
      width: 1.7em;
      cursor: pointer;
      border-radius: 50%;
      pointer-events: auto;
      background-color: $secondary-color-2-light;
      border: 1px solid $secondary-color-2;
    }
    input[type="range"]::-ms-thumb {
      appearance: none;
      height: 1.7em;
      width: 1.7em;
      cursor: pointer;
      border-radius: 50%;
      background-color: $secondary-color-2-light;
      border: 1px solid $secondary-color-2;
      pointer-events: auto;
    }
    input[type="range"]:active::-webkit-slider-thumb {
      background-color: #ffffff;
      border: 3px solid #18191b;
    }
  }
}

.confirm-details {
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
      background-color: $secondary-color;
      border-radius: 50%;

      svg {
        border-radius: 50%;
      }
    }
  }

  form {
    width: 100%;
    label {
      margin: 1em 0;
    }
    input {
      width: 100%;
      padding: 1em 1.4em;
      margin: 1em 0;
      display: inline-block;
      background-color: $primary-bg;
      border: none;
      border-radius: 12px;
      font-size: 1em;
    }

    input:focus {
      text-decoration: none;
      border: none;
    }

    a {
      display: block;
      width: 100%;
      background-color: $secondary-color-2;
      color: $primary-color;
      padding: 14px 20px;
      margin: 2em 0;
      border: none;
      text-align: center;
      border-radius: 24px;
      cursor: pointer;
    }
  }

  ul.extras {
    margin: 1em 0;
    display: flex;
    gap: 1em;
    overflow: auto;
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      border-radius: 8px;
      color: $primary-color;
      padding: 1em 1.4em;
      border: 1px solid $primary-color;
      transition: all 0.3s ease;
    }
  }
}
</style>