function fetchProduct(error) {
  if (error === true) {
    return Promise.reject("error");
  }

  return Promise.resolve({ title: "apple", count: 1 });
}

module.exports = fetchProduct;
