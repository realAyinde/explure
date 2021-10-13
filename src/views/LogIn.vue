<template>
  <div class="login">
    <div class="illustrator-art"></div>
    <div class="login-body">
      <small class="welcome-back">Welcome Back</small>
      <h1>Login with</h1>
      <form action="/">
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" />

        <a href="" class="forgot-password">Forgot password?</a>

        <input type="submit" value="Login" />
      </form>

      <div class="or">
          Or, sign in with
      </div>

      <div class="other-login">
          <div class="container">
              <div class="facebook"></div>
              <div class="google"></div>
              <div class="apple"></div>
          </div>
      </div>

      <div class="no-account">
          Don't have an account yet? <a href="">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.illustrator-art {
  background: url(~@/assets/illustrators/mobile-login.png) blue;
  background-size: cover;
  background-position: center;
  // width: 100%;
  min-height: calc(1 / 4 * 100vh);
  max-height: calc(1 / 3 * 100vh);
//   height: calc(1 / 3 * 100vh);
}

.login-body {
  padding: 1.5em;
  background-color: #fff;
  color: rgb(15, 15, 15);

  .welcome-back {
  }

  h1 {
    padding: 0.5em 0;
    font-size: 1.8em;
  }

  form {
      padding: 1.2em 0;
  }

  input,
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 12px 0;
    display: inline-block;
    border: none;
    border-radius: 12px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    background-color: orange;
    // color: white;
    padding: 16px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 24px;
    cursor: pointer;
  }

//   input[type="submit"]:hover {
//     background-color: #45a049;
//   }

  .forgot-password {
      display: block;
      text-align: right;
      text-decoration: none;
      font-size: .8em;
      color: inherit;
  }

  .or {
      text-align: center;
  }

  .other-login {
      margin: 12px 0;
      
      .container {
        //   align-self: center;
          margin: auto;
          width: fit-content;
          display: flex;
          gap: .5em;

          div {
              background-color:rgb(154, 240, 231);
              width: 50px;
              height: 50px;
              border-radius: 50%;
          }
      }
  }

  .no-account {
      text-align: center;

      a {
          color: orange;
      }
  }

}
</style>