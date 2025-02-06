import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        addToCart: './addToCart.html',
        contact: './contact.html',
        products: './products.html',
        login: './login.html',
        register: './register.html',
        myorder: './myorder.html',
        about: './about.html',
      },
    },
  },
});