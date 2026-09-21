import orders from "../data/orders.js";

export const getOrders = (req, res) => {
  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders
  });
};

export const getOrderById = (req, res) => {
  const { id } = req.params;

  const order = orders.find((order) => order.id === id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found"
    });
  }

  res.status(200).json({
    success: true,
    data: order
  });
};

export const searchOrders = (req, res) => {
  const { type, value } = req.query;

  if (!type || !value) {
    return res.status(400).json({
      success: false,
      message: "Search type and value are required"
    });
  }

  const searchValue = value.toLowerCase().trim();

  const results = orders.filter((order) => {
    switch (type) {
      case "orderId":
        return order.id.toLowerCase().includes(searchValue);

      case "mobile":
        return order.customer.mobile.includes(searchValue);

      case "name":
        return order.customer.name.toLowerCase().includes(searchValue);

      case "email":
        return order.customer.email.toLowerCase().includes(searchValue);

      default:
        return false;
    }
  });

  res.status(200).json({
    success: true,
    count: results.length,
    data: results
  });
};