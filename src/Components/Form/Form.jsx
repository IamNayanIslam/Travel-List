export default function Form({
  handleSubmit,
  description,
  setDescription,
  quantity,
  setQuantity,
}) {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you 🤩 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
