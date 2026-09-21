import { useState } from "react";

function SearchOrders({ onResults }) {
  const [type, setType] = useState("orderId");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!value.trim()) {
      onResults([]);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/orders/search?type=${type}&value=${encodeURIComponent(
          value.trim()
        )}`
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Search failed");
      }

      onResults(result.data);
    } catch (error) {
      console.error(error);
      onResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setValue("");
    onResults(null);
  };

  return (
    <section className="search-section">
      <h2 className="section-title">Search Orders</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-toolbar">

          <div className="search-options">
            <label className="search-option">
              <input
                type="radio"
                value="orderId"
                checked={type === "orderId"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Order ID</span>
            </label>

            <label className="search-option">
              <input
                type="radio"
                value="mobile"
                checked={type === "mobile"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Mobile</span>
            </label>

            <label className="search-option">
              <input
                type="radio"
                value="name"
                checked={type === "name"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Name</span>
            </label>

            <label className="search-option">
              <input
                type="radio"
                value="email"
                checked={type === "email"}
                onChange={(e) => setType(e.target.value)}
              />
              <span>Email</span>
            </label>
          </div>

          <input
            className="search-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter ${
              type === "orderId" ? "Order ID" : type
            }`}
          />

          <button
            className="search-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>

          <button
            className="reset-btn"
            type="button"
            onClick={handleReset}
            disabled={loading}
          >
            Reset
          </button>

        </div>
      </form>
    </section>
  );
}

export default SearchOrders;