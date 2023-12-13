import { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";
import "./Travel.css";

export default function Travel() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return alert("You must insert a Item Name!");
    const items = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    setDescription("");
    setQuantity(1);

    console.log(items);
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
      <PackingList />
      <Stats />
    </div>
  );
}
