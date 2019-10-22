import React from "react";
import styles from "./App.css";
class Card1 extends React.Component{
render(){
    return(
        
            <div class="jumbotron jumbotron-fluid design1">
            <div class="container ">
                <div>
                    <h1 class="display-7 text-center">Wel-Come</h1>  
                </div>
                <div className="card mx-auto" style={{width:"390px"}}>
                    <div className="card-body text-center mx-auto">
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-sm mx-auto" style={{width:"350px"}}/>
                    <br />
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-sm mx-auto" style={{width:"350px"}}/>
                    <br />
                    <div>
                        <button type="button" class="btn btn-link">Login</button>
                        <button type="button" class="btn btn-link">Sign Up</button>
                    </div>
                    </div>
                </div>   
                    
            </div>
            </div>
       
    );
}
}
export default Card1;