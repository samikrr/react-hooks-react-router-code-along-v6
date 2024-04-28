import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"></input>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Login;