# Technologies used:

- uses Next js 13

- useContext was used to manage global state of Cart and its toggling, uses cartProducts and setCartProducts to handle products in the cart as well as persisten localStorage. cartOpen and setCartOpen are used to toggle the cart view globally, so when clicking in Add to Cart it shows and if opened when clicking in a navigation Link it closes.

- when a product is added to the cart it verifies that it isnt there yet, if it is, the product is not added again and an alert is displayed letting the user know that the product is already in the cart.

- alerts where created usin sweetAlert2 : npm install sweetalert2

- all other dependencies can be install through npx create-next-app@latest, such as tailwindcss and typescript


## Getting Started

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


