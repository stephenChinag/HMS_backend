import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState();
  const playerName = useRef();

  const onClickHandler = () => {
    setName(playerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
