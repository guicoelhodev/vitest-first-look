import "./style.scss";
import { CounterComponent } from "../components/Counter";
import { ListName } from "../components/ListName";

export const App = () => {
  return (
    <div className="app">
      <CounterComponent />
      <ListName />
    </div>
  );
};
