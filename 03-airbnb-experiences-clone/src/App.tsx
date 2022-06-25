import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

function App() {
    let cards = data.map(item =>
        <Card
            key={item.id}
            item={item}
        />);

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    );
}

export default App;
