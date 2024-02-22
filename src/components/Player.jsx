import { useState } from "react";

export default function Player() {
  const [updated, setUpdatedName] = useState();
  const [name, setName] = useState();

  const onClickHandler = () => {
    console.log(name);
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <section id="player">
      <h2>Welcome {updated}</h2>
      <p>
        <input type="text" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
