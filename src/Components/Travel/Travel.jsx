import Form from "../Form/Form";
import Header from "../Header/Header";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";
import "./Travel.css";

export default function Travel() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
