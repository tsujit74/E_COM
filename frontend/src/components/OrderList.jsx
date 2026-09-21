import OrderCard from "./OrderCard";

function OrderList({ orders, onTrack, onInvoice }) {
  if (!orders.length) {
    return (
      <div className="no-orders">
        No orders found.
      </div>
    );
  }

  return (
    <section className="orders-section">
      <h2 className="section-title">Orders</h2>

      <div className="orders-list">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onTrack={onTrack}
            onInvoice={onInvoice}
          />
        ))}
      </div>
    </section>
  );
}

export default OrderList;