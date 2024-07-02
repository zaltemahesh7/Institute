import React, { useState } from 'react';
import './CircularMenu.css'; // Import the CSS file for styling

const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  { id: 4, name: 'Item 4', description: 'Description for Item 4' },
  { id: 5, name: 'Item 5', description: 'Description for Item 5' },
  { id: 6, name: 'Item 6', description: 'Description for Item 6' },
];

const CircularMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="circular-menu-container">
      <div className="circular-menu">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="circular-menu-item"
            style={{ transform: `rotate(${(360 / items.length) * index}deg) translate(10em) rotate(-${(360 / items.length) * index}deg)` }}
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="item-details">
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CircularMenu;
