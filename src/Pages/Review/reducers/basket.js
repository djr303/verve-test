const basket = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      if (state.find(item => item.id === action.id)) {
        return state.map((item, index) => {
          if (item.id === action.id) {
            return {
              id: action.id,
              title: action.title,
              price: action.price,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          price: action.price,
          quantity: 1,
        },
      ];

    case 'REMOVE_FROM_BASKET':
      return state.map((item, index) => {
        if (item.id === action.id && item.quantity >= 1) {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default basket;
