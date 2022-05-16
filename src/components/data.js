
import p1 from "./../assets/images/p1.jpg"
import p2 from "./../assets/images/p2.jpeg"
import p3 from "./../assets/images/p3.jpg"
import p4 from "./../assets/images/p4.jpeg"
import p5 from "./../assets/images/p5.jpg"
import p6 from "./../assets/images/p6.jpg"

const data = {
  products: [
    {
      _id: "1",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: p1,
      price: 120,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      descripttion: "High quality shirt",
    },
    {
      _id: "2",
      name: "Lacoste Slim Shirt",
      category: "Shirts",
      image: p2,
      price: 110,
      brand: "Lacoste",
      rating: 4.0,
      numReviews: 8,
      descripttion: "Medium quality shirt",
    },
    {
      _id: "3",
      name: "Khaki Pant",
      category: "Pants",
      image: p3,
      price: 80,
      brand: "Khaki",
      rating: 3.5,
      numReviews: 15,
      descripttion: "A khaki pant",
    },
    {
      _id: "4",
      name: "Adidas Slim Shirt",
      category: "Shirts",
      image: p4,
      price: 30,
      brand: "Adidas",
      rating: 2.0,
      numReviews: 20,
      descripttion: "Poor quality shirt",
    },
    {
      _id: "5",
      name: "Adidas pant",
      category: "Pants",
      image: p5,
      price: 10,
      brand: "Adidas",
      rating: 0.5,
      numReviews: 2,
      descripttion: "HIgh quality light Khaki pant",
    },
    {
      _id: "6",
      name: "Light Khaki Pant",
      category: "Shirts",
      image: p6,
      price: 1000,
      brand: "Khaki",
      rating: 5,
      numReviews: 180,
      descripttion: "High quality shirt deluxe edition",
    },
  ],
};

export default data;
