import React from "react";
import Card1 from "./Card1.js";
import Registration from "./Registration";
import Cart from "./Cart";
class App extends React.Component{
  render(){
    return(
      <div>
        <h1 className="text-center">Login</h1>
        <Card1 />
        <h1 className="text-center">Registration</h1>
        <Registration />
        <h1 className="text-center">Cart</h1>
        <Cart />
      </div>
    )
  }
}
export default App;