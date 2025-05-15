// src/components/BucketList.tsx
import React, { useState } from "react";

const initialItems = [
  { id: 1, text: "Travel to Japan", completed: false },
  { id: 2, text: "Learn Guitar", completed: false },
  { id: 3, text: "Run a Marathon", completed: false },
];

export const BucketList = () => {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id: number) => {
    setItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      // Sort: incomplete items first, then completed
      return updatedItems.sort((a, b) => Number(a.completed) - Number(b.completed));
    });
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2>My Bucket List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map(item => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
              style={{ marginRight: "8px" }}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                color: item.completed ? "#888" : "#000",
              }}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
