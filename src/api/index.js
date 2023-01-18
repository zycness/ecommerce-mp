export const getProducts = async () => {
  const data = await fetch(
    "https://633602a065d1e8ef2667068c.mockapi.io/api/v1/products"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => data);

  return data;
};
