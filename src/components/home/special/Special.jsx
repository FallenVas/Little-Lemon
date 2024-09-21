import React from "react";
import greeksalad from "../../../assets/greeksalad.jpg";
import restauranfood from "../../../assets/restauranfood.jpg";
import lemondessert from "../../../assets/lemondessert.jpg";
import Card from "../card/Card";

const Special = () => {
  return (
    <section id="menu" className="my-5">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 md:gap-10 mb-5">
        <h1 className="text-3xl font-bold">This Week's Specials!</h1>
        <div>
          <button className="bg-secondary text-black px-5 py-2 rounded-lg">
            Online Menu
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-col md:flex-row justify-center w-full gap-10 my-5 px-4 xl:px-64">
        <Card
          title="Greek Salad"
          image={greeksalad}
          price="$19.45"
          description="A refreshing mix of crisp lettuce, ripe tomatoes, cucumbers, olives, and feta cheese."
        />
        <Card
          title="Restaurant Food"
          image={restauranfood}
          price="$25.45"
          description="Savor our delightful chef's special, a fine mix of gourmet flavors served fresh."
        />
        <Card
          title="Lemon Dessert"
          image={lemondessert}
          price="$10.75"
          description="Indulge in our tangy and sweet lemon-flavored dessert, the perfect way to end your meal."
        />
      </div>
    </section>
  );
};

export default Special;
