import { generate, count } from "random-words";

export default function WordAddition() {

  return (
    <div>
      <h1 style={{color: "black", fontSize: "5.5vh", animation: "fade-in 1s"}}>{generate({ minLength: 5, maxLength: 5 })}</h1>
    </div>
  );
}