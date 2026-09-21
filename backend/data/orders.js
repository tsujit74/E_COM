const orders = [
  {
    id: "ORD-10482",
    date: "18-09-2026 10:42:18",
    paymentMethod: "Online",
    customer: {
      name: "Neha Verma",
      state: "Maharashtra",
      email: "neha.verma@example.com",
      mobile: "9812345670"
    },
    total: 1849,
    product: {
      name: "Wireless Bluetooth Headphones",
      model: "WH-X200",
      price: 1999,
      quantity: 1,
      delivery: 0,
      charges: 0,
      discount: 150,
      image: "/products/headphones.jpg"
    },
    status: "Delivered",
    tracking: [
      { status: "Order Placed", completed: true },
      { status: "Confirmed", completed: true },
      { status: "Packed", completed: true },
      { status: "Shipped", completed: true },
      { status: "Out for Delivery", completed: true },
      { status: "Delivered", completed: true }
    ]
  },

  {
    id: "ORD-10517",
    date: "19-09-2026 14:15:32",
    paymentMethod: "COD",
    customer: {
      name: "Rohit Singh",
      state: "Uttar Pradesh",
      email: "rohit.singh@example.com",
      mobile: "9123456781"
    },
    total: 2499,
    product: {
      name: "Smart LED Monitor",
      model: "SM-24FHD",
      price: 2699,
      quantity: 1,
      delivery: 100,
      charges: 50,
      discount: 350,
      image: "/products/monitor.jpg"
    },
    status: "Shipped",
    tracking: [
      { status: "Order Placed", completed: true },
      { status: "Confirmed", completed: true },
      { status: "Packed", completed: true },
      { status: "Shipped", completed: true },
      { status: "Out for Delivery", completed: false },
      { status: "Delivered", completed: false }
    ]
  },

  {
    id: "ORD-10603",
    date: "20-09-2026 09:28:45",
    paymentMethod: "UPI",
    customer: {
      name: "Priya Nair",
      state: "Kerala",
      email: "priya.nair@example.com",
      mobile: "9987654321"
    },
    total: 799,
    product: {
      name: "Portable Power Bank",
      model: "PB-20K",
      price: 899,
      quantity: 1,
      delivery: 0,
      charges: 0,
      discount: 100,
      image: "/products/powerbank.jpg"
    },
    status: "Processing",
    tracking: [
      { status: "Order Placed", completed: true },
      { status: "Confirmed", completed: true },
      { status: "Processing", completed: true },
      { status: "Packed", completed: false },
      { status: "Shipped", completed: false },
      { status: "Delivered", completed: false }
    ]
  },

  {
    id: "ORD-10674",
    date: "20-09-2026 18:36:11",
    paymentMethod: "Debit Card",
    customer: {
      name: "Arjun Mehta",
      state: "Karnataka",
      email: "arjun.mehta@example.com",
      mobile: "9876501234"
    },
    total: 3299,
    product: {
      name: "Mechanical Keyboard",
      model: "MK-87RGB",
      price: 3499,
      quantity: 1,
      delivery: 0,
      charges: 100,
      discount: 300,
      image: "/products/keyboard.jpg"
    },
    status: "Confirmed",
    tracking: [
      { status: "Order Placed", completed: true },
      { status: "Confirmed", completed: true },
      { status: "Processing", completed: false },
      { status: "Packed", completed: false },
      { status: "Shipped", completed: false },
      { status: "Delivered", completed: false }
    ]
  },

  {
    id: "ORD-10721",
    date: "21-09-2026 08:12:27",
    paymentMethod: "Wallet",
    customer: {
      name: "Karan Patel",
      state: "Gujarat",
      email: "karan.patel@example.com",
      mobile: "9765432108"
    },
    total: 1450,
    product: {
      name: "Running Shoes",
      model: "RS-410",
      price: 1599,
      quantity: 1,
      delivery: 80,
      charges: 0,
      discount: 229,
      image: "/products/shoes.jpg"
    },
    status: "Out for Delivery",
    tracking: [
      { status: "Order Placed", completed: true },
      { status: "Confirmed", completed: true },
      { status: "Packed", completed: true },
      { status: "Shipped", completed: true },
      { status: "Out for Delivery", completed: true },
      { status: "Delivered", completed: false }
    ]
  },

  {
    id: "ORD-10789",
    date: "21-09-2026 11:47:53",
    paymentMethod: "Credit Card",
    customer: {
      name: "Sneha Das",
      state: "West Bengal",
      email: "sneha.das@example.com",
      mobile: "9098765432"
    },
    total: 4199,
    product: {
      name: "Smart Watch",
      model: "SW-Pro-5",
      price: 4499,
      quantity: 1,
      delivery: 0,
      charges: 100,
      discount: 400,
      image: "/products/smartwatch.jpg"
    },
    status: "Processing",
    tracking: [
      { status: "Order Placed", completed: true },
      { status: "Confirmed", completed: true },
      { status: "Processing", completed: true },
      { status: "Packed", completed: false },
      { status: "Shipped", completed: false },
      { status: "Delivered", completed: false }
    ]
  }
];

export default orders;