function TrackingModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="tracking-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h2>Order Tracking</h2>
            <p>{order.id}</p>
          </div>

          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="tracking-timeline">
          {order.tracking.map((item, index) => (
            <div className="tracking-item" key={item.status}>
              <div
                className={`tracking-dot ${
                  item.completed ? "completed" : ""
                }`}
              >
                {item.completed ? "✓" : ""}
              </div>

              <div className="tracking-content">
                <strong>{item.status}</strong>

                {index < order.tracking.length - 1 && (
                  <div
                    className={`tracking-line ${
                      item.completed ? "completed" : ""
                    }`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button className="invoice-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackingModal;