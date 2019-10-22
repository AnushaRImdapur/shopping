import React from "react";
import styles from "./Cart.css";
class Cart extends React.Component{
   constructor(props){
       super(props);
        this.state={
            cart:[
                {
                    id:1,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    seller:"Harshil Home Applience",
                    old_price:"18,000",
                    new_price:"16,490",
                    save:"SAVE FOR LATER",
                    remove:"REMOVE"
                },
                {
                    id:2,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    seller:"Harshil Home Applience",
                    old_price:"18,000",
                    new_price:"16,490",
                    save:"SAVE FOR LATER",
                    remove:"REMOVE"
                },
                {
                    id:3,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    seller:"Harshil Home Applience",
                    old_price:"18,000",
                    new_price:"16,490",
                    save:"SAVE FOR LATER",
                    remove:"REMOVE"
                },
                {
                    id:4,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    seller:"Harshil Home Applience",
                    old_price:"18,000",
                    new_price:"16,490",
                    remove:"REMOVE"
                },
                {
                    id:4,
                    src:"https://www.makeinker.com/wp-content/uploads/2019/03/redmi-note-5-pro-64-blue.jpg",
                    name:"Lg 190L Direct Cool Single Door",
                    seller:"Harshil Home Applience",
                    old_price:"18,000",
                    new_price:"16,490",
                    remove:"REMOVE"
                },
            ]
        }
        
    }
    render(){
        console.log(this.state.cart)
        return(
           
                <div className="container">
                 
               
                        {this.state.cart.map(cart =>{
                            return (
                                <div className="card mb-3 border-0 bg-transperency">
                                    <div className="row no-gutters">
                                    <div className="col-lg-2 col-md-4 col-sm-12">
                                        <img src={cart.src}  className="card-img mt-2"  style={{width:"200px",height:"200px"}}/>
                                        <div className="ml-5">
                                            <span><button className="ml-1 btn btn-outline-primary"style={{borderRadius:"30px",background:"white"}}>-</button></span>
                                            <span><button className="ml-1 btn btn-outline-primary">1</button></span>
                                            <span><button className="ml-1 btn btn-outline-primary"style={{borderRadius:"30px",background:"white"}}>+</button></span>
                                            <br />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-8 col-sm-12">
                                        <div class="card-body text_design ">
                                            <h6 className="card-title mt-3">{cart.name}</h6>
                                            <p className="card-text mt-3 text-secondary">{cart.seller}</p>
                                            <span className="card-text mt-3 text-secondary">{cart.new_price +"  "}</span>
                                            <span className="card-text mt-3 text-secondary"style={{textDecoration: "line-through"}}>{cart.old_price}</span>
                                            <p className="card-text mt-3 text-secondary">{cart.remove}</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                            )
                        })}
                   
                        
                    
                </div>
            
        )
    }
}
export default Cart;