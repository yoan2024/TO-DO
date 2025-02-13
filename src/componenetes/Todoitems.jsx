import { useState } from "react";
import image from "/src/image.png";
import { useEffect } from "react";

const Todoitems = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [showItems, setShowItems] = useState([]);
  const [showBolean, setShowBolean] = useState(false);
  const [elimIndex, setElimIndex] = useState(null);

  const handleOnclick = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleEliminar = (index) => {
    setElimIndex(index);

    setTimeout(() => {
      setItems(items.filter((item, i) => i !== index));
      setElimIndex(null);
    }, 900);
  };

  const handleBolean = () => {
    setShowBolean(!showBolean);
  };

  const handleEmilinarTodo = () => {
    setItems([]);
  };

  return (
    <div className="container1">
      <div className="container">
        <div className="h11">
          <h1>Agrega tu TO-DO gratis en esta app</h1>
        </div>
        <div className="input-buttons">
          <input
            type="text"
            className="btn btn-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu tarea..."
          />
          <button className="btn btn-botton " onClick={handleOnclick}>
            AGREGAR
          </button>

          <button
            className="btn btn-botton btn-eliminar-all"
            onClick={handleEmilinarTodo}
            disabled={items.length === 0}
          >
            ELIMINAR
          </button>
        </div>
        <ol className="lista">
          {items.map((item, index) => (
            <li
              className={`li-lista ${elimIndex === index ? `fade-out` : ``}`}
              key={index}
            >
              <span>{item}</span>
              <button className="btn-completada">✔️</button>
              <button className="btn1" onClick={() => handleEliminar(index)}>
                X
              </button>
            </li>
          ))}
        </ol>
        {/*<ol className="lista">
        <li className="li-lista">
          <span>lecheeeeeeee</span> <button className="btn1">x</button>
        </li>
      </ol> */}
        <button className="btn-bolean" onClick={handleBolean}>
          {showBolean ? "ocultar" : "mostrar"}
        </button>
      </div>
      <img src={image} alt="ese es un basurero" className="basurero" />
    </div>
  );
};

export default Todoitems;
