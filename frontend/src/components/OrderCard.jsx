function OrderCard({ order, onTrack, onInvoice }) {
  return (
    <article className="order-card">
      <div className="order-header">
        <div>
          <h3>{order.id}</h3>
          <p>{order.date}</p>
        </div>

        <span className={`order-status ${order.status.toLowerCase().replaceAll(" ", "-")}`}>
          {order.status}
        </span>
      </div>

      <div className="order-info">
        <div>
          <strong>Payment</strong>
          <span>{order.paymentMethod}</span>
        </div>

        <div>
          <strong>Customer</strong>
          <span>{order.customer.name}</span>
        </div>

        <div>
          <strong>State</strong>
          <span>{order.customer.state}</span>
        </div>

        <div>
          <strong>Email</strong>
          <span>{order.customer.email}</span>
        </div>

        <div>
          <strong>Mobile</strong>
          <span>{order.customer.mobile}</span>
        </div>

        <div>
          <strong>Total</strong>
          <span>₹{order.total}</span>
        </div>
      </div>

      <div className="product-section">
        <img
          src={order.product.image}
          alt={order.product.name}
          className="product-image"
        />

        <div className="product-details">
          <h4>{order.product.name}</h4>
          <p>Model: {order.product.model}</p>

          <div className="product-meta">
            <span>Price: ₹{order.product.price}</span>
            <span>Qty: {order.product.quantity}</span>
            <span>Delivery: ₹{order.product.delivery}</span>
            <span>Charges: ₹{order.product.charges}</span>
            <span>Discount: ₹{order.product.discount}</span>
          </div>
        </div>
      </div>

      <div className="order-actions">
        <button
          className="track-btn"
          onClick={() => onTrack(order)}
        >
          TRACK
        </button>

        <button
          className="invoice-btn"
          onClick={() => onInvoice(order)}
        >
          Generate Invoice
        </button>
      </div>
    </article>
  );
}

export default OrderCard;