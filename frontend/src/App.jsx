import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchOrders from "./components/SearchOrders";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <>
      <Navbar />

      <main className="page-container">
        <SearchOrders onResults={setSearchResults} />

        {searchResults && (
          <p className="result-info">{searchResults.length} order(s) found</p>
        )}
      </main>
    </>
  );
}

export default App;
