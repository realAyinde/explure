<template>
  <app-pageheader title="Confirm Details"></app-pageheader>
  <div class="confirm-details">
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
        <dr-slider from="0" to="10" minValue="3" maxValue="5" unit="hours" />
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
  <app-menu />
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

.confirm-details {
  color: $primary-color;
  margin-top: 54px;

  .container {
    margin: 16px 1.5em;
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

      &:focus {
        outline: none;
        background-color: $primary-faded-2;
      }
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