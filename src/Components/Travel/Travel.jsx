import { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";
import "./Travel.css";

export default function Travel() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function togglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return alert("You must insert a Item Name!");
    const newItems = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    handleAddItems(newItems);
    setDescription("");
    setQuantity(1);

    console.log(newItems);
  }
  return (
    <div className="app">
      <Header />
      <Form
        handleSubmit={handleSubmit}
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <PackingList
        items={items}
        removeItem={removeItem}
        togglePacked={togglePacked}
      />
      <Stats />
    </div>
  );
}
