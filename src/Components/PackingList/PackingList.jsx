import Item from "../Item/Item";

export default function PackingList({ items, removeItem, togglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            togglePacked={togglePacked}
          />
        ))}
      </ul>
    </div>
  );
}
