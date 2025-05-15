import React, { useState } from "react";
import data from "../data/bucketList.json";

type Subtask = {
  id: number;
  text: string;
  completed: boolean;
};

type Item = {
  id: number;
  text: string;
  completed: boolean;
  subtasks?: Subtask[];
};

export const BucketList = () => {
  const [items, setItems] = useState<Item[]>(data);

  const toggleItem = (id: number) => {
    setItems(prevItems => {
      const updated = prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      return updated.sort((a, b) => Number(a.completed) - Number(b.completed));
    });
  };

  const toggleSubtask = (parentId: number, subtaskId: number) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === parentId && item.subtasks) {
          const updatedSubtasks = item.subtasks.map(sub =>
            sub.id === subtaskId ? { ...sub, completed: !sub.completed } : sub
          );
          return { ...item, subtasks: updatedSubtasks };
        }
        return item;
      })
    );
  };

  return (
    <div style={{ padding: "16px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>My Bucket List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map(item => (
          <li
            key={item.id}
            style={{
              marginBottom: "12px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
                style={{ marginRight: "8px" }}
              />
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "#888" : "#000"
                }}
              >
                {item.text}
              </span>
            </div>

            {/* Render Subtasks if Present */}
                {item.subtasks && (
                <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "8px" }}>
                    {[...item.subtasks]
                    .sort((a, b) => Number(a.completed) - Number(b.completed))
                    .map(sub => (
                        <li key={sub.id} style={{ marginBottom: "4px" }}>
                        <input
                            type="checkbox"
                            checked={sub.completed}
                            onChange={() => toggleSubtask(item.id, sub.id)}
                            style={{ marginRight: "8px" }}
                        />
                        <span
                            style={{
                            textDecoration: sub.completed ? "line-through" : "none",
                            color: sub.completed ? "#888" : "#000"
                            }}
                        >
                            {sub.text}
                        </span>
                        </li>
                    ))}
                </ul>
                )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;
