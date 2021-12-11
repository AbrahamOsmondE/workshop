const calculateReveneue = (orders) => {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    sum += orders[i]?.price;
  }
  return sum;
};


export default calculateReveneue;
