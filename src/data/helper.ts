// Navbar Icons Data
export const navbarIcons = [
    {
      name: "Home",
      icon: "/icons/home.png",
      iconDark: "/icons/homedark.png",
      pathname: "/",
    },
    {
      name: "Coffee",
      icon: "/icons/coffee.png",
      iconDark: "/icons/coffeedark.png",
      pathname: "/products",
    },
    {
      name: "Cart",
      icon: "/icons/cart.png",
      iconDark: "/icons/cartdark.png",
      pathname: "/cart",
    },
    {
      name: "User",
      icon: "/icons/user.png",
      iconDark: "/icons/userdark.png",
      pathname: "/profile",
    },
  ];

  // Filter Options
  export const filterOptions: string[] = [
    "Vegan",
    "Sugar-Free",
    "Fresh",
    "Coffee",
    "Cake",
    "Lactose-Free",
    "Gluten-Free",
    "Vegetarian",
    "Fruity",
  ];

  // Login & Signup 
  export const inputClass = `text-3xl text-black p-4 rounded-lg`;

  export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  