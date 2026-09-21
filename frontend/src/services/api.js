const API_URL = import.meta.env.VITE_API_URL;

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/api/orders`);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch orders");
  }

  return result.data;
};

export const searchOrders = async (type, value) => {
  const params = new URLSearchParams({
    type,
    value: value.trim(),
  });

  const response = await fetch(
    `${API_URL}/api/orders/search?${params.toString()}`,
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Search failed");
  }

  return result.data;
};
