import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const sidebarStyles = {
    width: isCollapsed ? '80px' : '250px',
    height: '100%',
    background: isCollapsed
      ? 'linear-gradient(45deg, #2b2d42, #3a3a52)'
      : 'linear-gradient(45deg, #3a3a52, #2b2d42)',
    paddingTop: '20px',
    position: 'fixed',
    transition: 'width 0.5s ease, background 0.3s ease',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  };

  const headerStyles = {
    padding: '0 20px',
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
  };

  const navItemStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background 0.3s ease, padding-left 0.3s ease',
    position: 'relative',
  };

  const dropdownMenuStyles = {
    display: 'none',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    background: '#3a3a52',
    position: 'absolute',
    left: '0',
    top: '100%',
    width: '100%',
    transition: 'opacity 0.3s ease',
  };

  const activeDropdownStyles = {
    display: 'block',
  };

  const collapsedNavItemStyles = {
    display: 'block',
  };

  const toggleBtnStyles = {
    width: '20px',
    height: '20px',
    background: '#6c63ff',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    position: 'absolute',
    right: '-10px',
  };

  const mainContentStyles = {
    marginLeft: isCollapsed ? '80px' : '250px',
    padding: '40px',
    width: isCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 250px)',
    transition: 'margin-left 0.5s ease',
    background: '#f3f4f6',
  };

  return (
    <div style={sidebarStyles}>
      <div style={headerStyles}>
        <h3 style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-anchor" style={{ marginRight: '10px', fontSize: '28px' }}></i>
          <span style={{ display: isCollapsed ? 'none' : 'inline' }}>MyApp</span>
        </h3>
        <div style={toggleBtnStyles} onClick={toggleSidebar}>
          <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`} style={{ fontSize: '10px' }}></i>
        </div>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
        <li>
          <a href=" " style={navItemStyles}>
            <span className="nav-icon" style={{ width: '35px', minWidth: '35px', height: '35px', lineHeight: '35px', textAlign: 'center', marginRight: '10px' }}>
              <i className="fas fa-home"></i>
            </span>
            <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Home</span>
          </a>
        </li>
        <li>
          <a href=" " style={navItemStyles}>
            <span className="nav-icon" style={{ width: '35px', minWidth: '35px', height: '35px', lineHeight: '35px', textAlign: 'center', marginRight: '10px' }}>
              <i className="fas fa-user"></i>
            </span>
            <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Profile</span>
          </a>
        </li>
        <li>
          <a href=" " style={navItemStyles}>
            <span className="nav-icon" style={{ width: '35px', minWidth: '35px', height: '35px', lineHeight: '35px', textAlign: 'center', marginRight: '10px' }}>
              <i className="fa-solid fa-chart-line"></i>
            </span>
            <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Dashboard</span>
          </a>
        </li>
        <li className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
          <a href=" " style={navItemStyles} onClick={() => toggleDropdown(0)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <span className="nav-icon" style={{ width: '35px', minWidth: '35px', height: '35px', lineHeight: '35px', textAlign: 'center', marginRight: '10px' }}>
                <i className="fas fa-cogs"></i>
              </span>
              <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Settings</span>
            </div>
            <i className={`fas ${activeDropdown === 0 ? 'fa-chevron-down' : 'fa-chevron-right'}`} style={{ display: isCollapsed ? 'none' : 'inline', fontSize: '14px', transition: 'transform 0.3s ease' }}></i>
          </a>
          <ul style={activeDropdown === 0 ? { ...dropdownMenuStyles, ...activeDropdownStyles } : dropdownMenuStyles}>
            <li><a href=" " style={navItemStyles}>General</a></li>
            <li><a href=" " style={navItemStyles}>Privacy</a></li>
            <li><a href=" " style={navItemStyles}>Notifications</a></li>
          </ul>
        </li>
      </ul>
      <div style={mainContentStyles}>Main content here</div>
    </div>
  );
};

export default Sidebar;
