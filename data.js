const menuItemsToDisplay = [
  {
    name: "Margherita Pizza",
    id: "1",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicken Alfredo Pasta",
    id: "2",
    price: 15.49,
    image:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sushi Platter",
    id: "3",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=3488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cheeseburger",
    id: "4",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=3430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Caesar Salad",
    id: "5",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pad Thai",
    id: "6",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mushroom Risotto",
    id: "7",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?q=80&w=3391&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tandoori Chicken",
    id: "8",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pho Soup",
    id: "9",
    price: 11.49,
    image:
      "https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?q=80&w=3528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Grilled Salmon",
    id: "10",
    price: 20.99,
    image:
      "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beef Tacos",
    id: "11",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=3588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vegetarian Burrito",
    id: "12",
    price: 12.49,
    image:
      "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=3438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shrimp Scampi",
    id: "13",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicken Shawarma",
    id: "14",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Caprese Salad",
    id: "15",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Spaghetti Bolognese",
    id: "16",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hawaiian Poke Bowl",
    id: "17",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1556040220-704dadc2b747?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chocolate Lava Cake",
    id: "18",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=3064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicken Satay Skewers",
    id: "19",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1626005601500-44a5cf788c0d?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Greek Gyro Wrap",
    id: "20",
    price: 13.49,
    image:
      "https://images.unsplash.com/photo-1666819476544-38ea4e57a3d0?q=80&w=2587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default menuItemsToDisplay;
