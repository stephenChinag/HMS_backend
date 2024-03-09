import { useEffect, useState } from "react";
import "./test.css";

const Component = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to track if the multiselect is open or closed

  useEffect(() => {
    setItems([
      { label: "d", value: "d" },
      { label: "a", value: "a" },
      { label: "b", value: "b" },
      { label: "c", value: "c" },
    ]);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown state
  };

  const handleItemClick = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value)); // If item is already selected, remove it
    } else {
      setSelected([...selected, value]); // Otherwise, add it to the selected items
    }
  };

  return (
    <div className="container">
      <div onClick={toggleDropdown} style={{ background: "pink" }}>
        {isOpen ? (
          <div>
            {items.map((item) => (
              <label key={item.value}>
                {/* <input
                  type="checkbox"
                  value={item.value}
                  checked={selected.includes(item.value)}
                  onChange={() => handleItemClick(item.value)}
                /> */}
                <input
                  type="checkbox"
                  value={item.value}
                  checked={selected.includes(item.value)}
                  onChange={() => handleItemClick(item.value)}
                />

                {item.label}
              </label>
            ))}
          </div>
        ) : (
          <div>{selected.join(", ")}</div> // Show selected items separated by comma when closed
        )}
      </div>
    </div>
  );
};

export default Component;
