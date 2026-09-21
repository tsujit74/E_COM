import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchOrders from "./components/SearchOrders";
import OrderList from "./components/OrderList";
import TrackingModal from "./components/TrackingModal";

function App() {
  const [orders, setOrders] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders");

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch orders");
        }

        setOrders(result.data);
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
    alert(`Invoice generation for ${order.id}`);
  };

  return (
    <>
      <Navbar />

      <main className="page-container">
        <SearchOrders onResults={setSearchResults} />

        {searchResults && (
          <p className="result-info">{searchResults.length} order(s) found</p>
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
    </>
  );
}

export default App;
