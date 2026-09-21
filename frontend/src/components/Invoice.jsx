function Invoice({ order, onClose }) {
  if (!order) return null;

  const subtotal = order.product.price * order.product.quantity;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-overlay">
      <div className="invoice-container">
        <div className="invoice-actions">
          <button
            className="invoice-print-btn"
            onClick={handlePrint}
          >
            Print / Save PDF
          </button>

          <button
            className="invoice-close-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="invoice">
          <div className="invoice-header">
            <div>
              <h1>VPLAK</h1>
              <p>Order Invoice</p>
            </div>

            <div className="invoice-number">
              <strong>Invoice</strong>
              <span>{order.id}</span>
            </div>
          </div>

          <div className="invoice-info">
            <div>
              <strong>Customer</strong>
              <p>{order.customer.name}</p>
              <p>{order.customer.email}</p>
              <p>{order.customer.mobile}</p>
              <p>{order.customer.state}</p>
            </div>

            <div>
              <strong>Order Details</strong>
              <p>Order ID: {order.id}</p>
              <p>Date: {order.date}</p>
              <p>Payment: {order.paymentMethod}</p>
              <p>Status: {order.status}</p>
            </div>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Model</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{order.product.name}</td>
                <td>{order.product.model}</td>
                <td>{order.product.quantity}</td>
                <td>₹{order.product.price}</td>
                <td>₹{subtotal}</td>
              </tr>
            </tbody>
          </table>

          <div className="invoice-summary">
            <div>
              <span>Subtotal</span>
              <strong>₹{subtotal}</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>₹{order.product.delivery}</strong>
            </div>

            <div>
              <span>Charges</span>
              <strong>₹{order.product.charges}</strong>
            </div>

            <div>
              <span>Discount</span>
              <strong>- ₹{order.product.discount}</strong>
            </div>

            <div className="invoice-total">
              <span>Grand Total</span>
              <strong>₹{order.total}</strong>
            </div>
          </div>

          <div className="invoice-footer">
            <p>Thank you for your order.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;