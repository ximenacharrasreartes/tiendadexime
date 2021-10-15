import React from "react";
import ItemCard from "./components/Items/ItemCard";
import data from "./components/Items/data";

const Home = () => {
    return (
        <>
            <h1 className="text-center mt-3">Cápsulas </h1>

                <section className="py-4 container"> 
                    <div className="row justify-content-center">
                    {data.productData.map((item, index)=>{
                        return(
                            <ItemCard
                             img={item.img} 
                             title={item.title} 
                             desc={item.desc} 
                             price={item.price} 
                             item={item} 
                             key={index}
                             
                             />

                        )
                        })}

            </div>
            </section>
        </>
    );
}

export default Home; 