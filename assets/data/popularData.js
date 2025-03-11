const popularData = [
  {
    id: "1",
    image: require("../images/pizza1.png"),
    title: "Primavera pizza",
    rating: "5.0",
    weight: "500 gr",
    price: 3.99,
    sizeName: "Medium",
    sizeNumber: 14,
    crust: "Thin crust",
    deliveryTime: 30,
    ingredients: [
      {
        ind: "1",
        name: "Ham",
        image: require("../images/ham.png"),
      },
      {
        ind: "2",
        name: "Tomato",
        image: require("../images/tomato.png"),
      },
      {
        ind: "3",
        name: "Cheese",
        image: require("../images/cheese.png"),
      },
      {
        ind: "4",
        name: "Garlic",
        image: require("../images/garlic.png"),
      },
    ],
  },
  {
    id: "2",
    image: require("../images/pizza2.png"),
    title: "Vegeterian pizza",
    rating: "3.0",
    weight: "450 gr",
    price: 5.99,
    sizeName: "Small",
    sizeNumber: 10,
    crust: "Thick crust",
    deliveryTime: 40,
    ingredients: [
      {
        ind: "1",
        name: "Cheese",
        image: require("../images/cheese.png"),
      },
      {
        ind: "2",
        name: "Garlic",
        image: require("../images/garlic.png"),
      },
    ],
  },
  {
    id: "3",
    image: require("../images/pizza3.png"),
    title: "Pepperoni pizza",
    rating: "4.0",
    weight: "700 gr",
    price: 9.99,
    sizeName: "Large",
    sizeNumber: 18,
    crust: "Thin crust",
    deliveryTime: 20,
    ingredients: [
      {
        ind: "1",
        name: "Tomato",
        image: require("../images/tomato.png"),
      },
      {
        ind: "2",
        name: "Cheese",
        image: require("../images/cheese.png"),
      },
    ],
  },
];
export default popularData;
