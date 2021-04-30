const order = {
  name: 'Luíz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      pizza1: {
        name: 'muzzarella',
        amount: 1,
        price: 20,
      },
      pizza2: {
        name: 'Calabresa',
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (order) => {  
  console.log(`Olá ${order.order.delivery.deliveryPerson}, 
entrega para ${order.name}, telefone: ${order.phoneNumber},
R. ${order.address.street}
Nº.${order.address.number}
AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const name = order.name;
  const pizza1 = order.order.pizza.pizza1.name;
  const pizza2 = order.order.pizza.pizza2.name;
  const drink = order.order.drinks.coke.type;
  const totalPrice = order.payment.total;
  console.log(`Olá ${name} o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é de R$${totalPrice}`);
 
}

orderModifier(order);