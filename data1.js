const menuItemsToDisplay1 = [
  {
    name: "Margherita Pizza",
    id: "1",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Indulge in the classic simplicity of a Margherita Pizza, adorned with fresh mozzarella, ripe tomatoes, and fragrant basil. Each bite is a harmonious blend of flavors that transports you to the heart of Italy.",
  },
  {
    name: "Chicken Alfredo Pasta",
    id: "2",
    price: 15.49,
    image:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Delight your taste buds with the creamy richness of Chicken Alfredo Pasta, featuring perfectly cooked fettuccine enveloped in a luscious Alfredo sauce and complemented by tender, savory chicken.",
  },
  {
    name: "Sushi Platter",
    id: "3",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=3488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Embark on a culinary journey with our exquisite Sushi Platter. Immerse yourself in the delicate flavors of fresh, expertly crafted sushi rolls that promise an authentic taste of Japan.",
  },
  {
    name: "Cheeseburger",
    id: "4",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=3430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Satisfy your cravings with our classic Cheeseburger. Juicy, flame-grilled beef patty topped with melted cheese, crisp lettuce, and ripe tomatoes, all nestled within a soft, toasted bun.",
  },
  {
    name: "Caesar Salad",
    id: "5",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience the crisp freshness of our Caesar Salad. Crisp romaine lettuce, savory croutons, and shaved Parmesan cheese, all tossed in a creamy Caesar dressing for a light and flavorful dish.",
  },
  {
    name: "Pad Thai",
    id: "6",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Transport your taste buds to the streets of Thailand with our flavorful Pad Thai. Rice noodles stir-fried with tofu, shrimp, or chicken, and tossed in a tangy, sweet, and savory sauce.",
  },
  {
    name: "Mushroom Risotto",
    id: "7",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?q=80&w=3391&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Indulge in the rich and creamy goodness of our Mushroom Risotto. Arborio rice cooked to perfection, infused with savory mushroom flavors, and finished with a touch of Parmesan cheese.",
  },
  {
    name: "Tandoori Chicken",
    id: "8",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Savor the aromatic spices of our Tandoori Chicken. Succulent chicken marinated in a blend of traditional Indian spices and yogurt, then roasted to perfection in a tandoor for an explosion of flavors.",
  },
  {
    name: "Pho Soup",
    id: "9",
    price: 11.49,
    image:
      "https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?q=80&w=3528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Warm your soul with our comforting Pho Soup. Fragrant broth, rice noodles, and your choice of beef or chicken, topped with fresh herbs and a squeeze of lime for a Vietnamese culinary experience.",
  },
  {
    name: "Grilled Salmon",
    id: "10",
    price: 20.99,
    image:
      "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Indulge in the healthful goodness of our Grilled Salmon. Premium salmon fillet marinated in herbs and grilled to perfection, delivering a delectable combination of flavors and omega-3 goodness.",
  },
  {
    name: "Beef Tacos",
    id: "11",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=3588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience the bold and spicy flavors of our Beef Tacos. Succulent beef, seasoned to perfection, nestled in warm tortillas, and topped with fresh salsa, lettuce, and cheese for a taste of Mexico.",
  },
  {
    name: "Vegetarian Burrito",
    id: "12",
    price: 12.49,
    image:
      "https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=3438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Delight in the freshness of our Vegetarian Burrito. Packed with a medley of grilled vegetables, black beans, rice, and cheese, all wrapped in a soft tortilla for a satisfying and flavorful meal.",
  },
  {
    name: "Shrimp Scampi",
    id: "13",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Elevate your dining experience with our delectable Shrimp Scampi. Succulent shrimp, garlic-infused butter, and a splash of white wine, all combined to create a mouthwatering symphony of flavors.",
  },
  {
    name: "Chicken Shawarma",
    id: "14",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Treat your taste buds to the exotic flavors of Chicken Shawarma. Marinated chicken, slow-roasted to perfection, and wrapped in a warm pita with a medley of fresh veggies and tahini sauce.",
  },
  {
    name: "Caprese Salad",
    id: "15",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Savor the simplicity of our Caprese Salad. Ripe tomatoes, fresh mozzarella, and basil leaves drizzled with balsamic glaze, creating a refreshing and delightful dish inspired by the flavors of Italy.",
  },
  {
    name: "Spaghetti Bolognese",
    id: "16",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience the rich and hearty taste of Spaghetti Bolognese, a traditional Italian pasta dish. Our flavorful meat sauce, made with minced beef and tomatoes, generously coats al dente spaghetti for a satisfying and comforting meal.",
  },
  {
    name: "Hawaiian Poke Bowl",
    id: "17",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1556040220-704dadc2b747?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Transport yourself to the tropical paradise with our Hawaiian Poke Bowl. Fresh and colorful ingredients like raw fish, avocado, and tropical fruits are combined in a bowl, creating a healthy and delicious fusion dish.",
  },
  {
    name: "Chocolate Lava Cake",
    id: "18",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=3064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Indulge your sweet tooth with our decadent Chocolate Lava Cake. As you dig into the moist chocolate exterior, a luscious molten center oozes out, creating a heavenly dessert experience that's perfect for chocolate lovers.",
  },
];

export default menuItemsToDisplay1;