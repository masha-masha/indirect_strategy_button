import { useState } from "react";
import { data } from "./data/data";
function App() {
 const getRandomNumberBetweenOneAnd114 = () =>
  Math.floor(Math.random() * 114) + 1;

 const [text, setText] = useState("");

 const getText = () => {
  const number = getRandomNumberBetweenOneAnd114();
  const text = data.find((el) => el.id === number);
  setText(text.text);
 };

 return (
  <>
   <div className="container">
   <h1>Система Брайна Ино и Питера Шмидта</h1>
   <p>
    Предположим, у вас есть идея, но вы зашли в тупик. Вы не знаете, куда двигаться
    дальше.
    Нажмите на кнопку и старайтесь следовать инструкции, которую
    получите.
   </p>
   <button className="btn" onClick={getText}>
    Жать
   </button>
  </div>
  <div className="instruction">{text}</div>
  </>
 );
}

export default App;
