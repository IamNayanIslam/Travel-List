import { useState } from "react";
import Item from "../Item/Item";

export default function PackingList({
  items,
  removeItem,
  togglePacked,
  handleReset,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  /*  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localCompare(b.description)); */

  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) =>
      a.description.localeCompare(b.description, undefined, {
        sensitivity: "base",
      })
    );

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            togglePacked={togglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={handleReset} disabled={items.length === 0}>
          Clear List
        </button>
      </div>
    </div>
  );
}
