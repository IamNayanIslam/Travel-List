export default function Item({ item, removeItem, togglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => togglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
}
