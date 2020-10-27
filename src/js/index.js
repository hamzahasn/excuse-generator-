import "../style/index.scss";

let pronoun = ["A", "The"];
let subject = ["demon", "dracula", "ghost", "ghoul", "centaur", "monster"];
let action = ["took my", "threw my", "stole my", "destroyed my", "bit my"];
let possession = ["homework", "candy", "lunch", "tools", "food"];
let where = [
  "in the underworld",
  "in another universe",
  "on the moon",
  "on mars",
  "in the castle"
];

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
