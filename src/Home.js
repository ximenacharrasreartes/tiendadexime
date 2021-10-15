import React from "react";
import ItemCard from "./components/Items/ItemCard"

function Home(props) {
    return (
        <div>
            <h1 className="text-center mt-3">Cápsulas </h1>

            <section className="py-4 container"> </section>
            <div className="row justify-content-center">

                <ItemCard img="" title="title" desc="desc" />

            </div>

        </div>
    );
}

export default Home; 