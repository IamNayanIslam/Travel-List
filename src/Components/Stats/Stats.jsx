export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed);
  const numPackedItems = packedItems.length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <>
      <footer className="stats">
        {percentage === 100 ? (
          <em>You got everything! Ready to go ✈️</em>
        ) : numItems === 0 ? (
          <em>Start adding some items to your packing list 🚀</em>
        ) : (
          <em>
            💼 You have {numItems} items on your list, and you have already
            packed {numPackedItems} ({percentage} %)
          </em>
        )}
      </footer>
    </>
  );
}
