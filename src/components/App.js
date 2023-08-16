import "./App.css";
import Question from "./Question";
import Input from "./Input";

const serviceLevel = [
  "Absolutely amazing! (20%)",
  "It was good (15%)",
  "It was fine (10%)",
  "It was bad (5%)",
];

function App() {
  return (
    <div className="App">
      <div>
        <Question>How much was the bill?</Question>
        <span>
          <Input key={1}>
            <input type="number"></input>
          </Input>
        </span>
      </div>
      <div>
        <Question>How did you like the service?</Question>
        <span>
          <Input key={2}>
            <select>
              {serviceLevel.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </Input>
        </span>
      </div>
      <div>
        <Question>How did your friend like the service?</Question>
        <span>
          <Input key={3}>
            <select>
              {serviceLevel.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </Input>
        </span>
      </div>
    </div>
  );
}

export default App;
