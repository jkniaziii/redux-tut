import React from "react";

function Home(props) {
   console.log('Home' , props)
    
    const dataObject = {
        price: 1000,
        name: "I phone 11",
    }
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://e7.pngegg.com/pngimages/450/269/png-clipart-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-thumbnail.png" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => {
                            props.addToCartHandler({
                                dataObject
                            });
                        }}
                    >
                        Add To Cart
                    </button>
                    <button
                        onClick={() => {
                            props.removeToCartHandler();
                        }}
                    >
                        Remove Cart
                    </button>
                </div>
               
            </div>
            <button
            onClick={()=>props.addConterHandler()}
            >Add</button>
            <h1>Counter: {props.conterData} </h1>
            <button
             onClick={()=>props.removeConterHandler()}
            
            >Remove</button>
        </div>
    );
}

export default Home;
