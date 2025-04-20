/**
 * Api service to fetch data from the cat breeds API
 * @param limit number of items to fetch
 * @param page page number to fetch
 * @returns
 */
export const fetchCatBreeds = async (limit = 15, page = 1) => {
  const response = await fetch(
    `https://catfact.ninja/breeds?limit=${limit}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

/**
 * Api service to fetch data from the cat facts API
 * @param limit number of items to fetch
 * @param page page number to fetch
 * @returns
 */
export const fetchCatFacts = async (limit = 15, page = 1) => {
  const response = await fetch(
    `https://catfact.ninja/facts?limit=${limit}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};
