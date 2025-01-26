import "./style.css";

// Prueba de concepto 1 - Barajar las cartas

const animalsArray: string[] = [
  "🐭",
  "🐭",
  "🦊",
  "🦊",
  "🐮",
  "🐮",
  "🐷",
  "🐷",
  "🐸",
  "🐸",
  "🐻",
  "🐻",
];

const barajarCartas = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

barajarCartas(animalsArray);

console.log(barajarCartas(animalsArray));
console.log(barajarCartas(animalsArray));
console.log(barajarCartas(animalsArray));
