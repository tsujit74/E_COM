function Navbar() {
  const menuItems = [
    "PRODUCT",
    "BRAND",
    "CATEGORY",
    "BRAND CATEGORY",
    "ORDER'S PANEL",
    "BAR CHART",
    "BUYING GUIDE",
    "EXCEL",
    "SEO TEXT",
  ];

  const handleMenuClick = (item) => {
    if (item === "ORDER'S PANEL") return;

    alert(`${item} - Coming soon`);
  };

  const handleLogout = () => {
    alert("Logout clicked");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">VPLAK</div>
      <div className="navbar-menu">
        {menuItems.map((item) => (
          <button
            key={item}
            className={`navbar-item ${
              item === "ORDER'S PANEL" ? "active" : ""
            }`}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <button className="logout-button" onClick={handleLogout}>
        LOGOUT
      </button>
    </nav>
  );
}

export default Navbar;
