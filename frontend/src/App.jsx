import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchOrders from "./components/SearchOrders";
import OrderList from "./components/OrderList";
import TrackingModal from "./components/TrackingModal";
import Invoice from "./components/Invoice";
import { getOrders } from "./services/api";

function App() {
  const [orders, setOrders] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [invoiceOrder, setInvoiceOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();

        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const displayedOrders = searchResults ?? orders;

  const handleTrack = (order) => {
    setSelectedOrder(order);
  };

  const handleInvoice = (order) => {
    setInvoiceOrder(order);
  };

  return (
    <>
      <Navbar />

      <main className="page-container">
        <SearchOrders onResults={setSearchResults} />

        {searchResults && (
          <p className="result-info">
            {searchResults.length} order(s) found
          </p>
        )}

        <OrderList
          orders={displayedOrders}
          onTrack={handleTrack}
          onInvoice={handleInvoice}
        />
      </main>

      <TrackingModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />

      <Invoice
        order={invoiceOrder}
        onClose={() => setInvoiceOrder(null)}
      />
    </>
  );
}

export default App;