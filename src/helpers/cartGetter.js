
export const getCart = (state) => {
  
  const carrito = state.cart.items;
  const catalogo = state.products.source;

  return carrito.map(i => {
      
      let id, name, img, price, quantity, total;

      id = i.id;
      quantity = i.quantity;

      const catalogoItem = catalogo.find(ic => ic.id === id);
      name = catalogoItem.name;
      img = catalogoItem.img;
      price = catalogoItem.price;

      total = price * quantity;

      return {
          id,
          name,
          img,
          price,
          quantity,
          total
      }

  });
}