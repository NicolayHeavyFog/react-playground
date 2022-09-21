import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

interface IStarWarsNameFunctionState {
  name: string;
  count: number;
}

export function StarWarsNameFunction() {
  const randomName = (): string =>
    uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });

  // const [name, setName] = React.useState(randomName());
  // const [count, setCount] = React.useState(0);

  const [state, setState] = React.useState<IStarWarsNameFunctionState>({
    name: randomName(),
    count: 0,
  });
  const handleClick = () => {
    setState((prevState) => ({
      name: randomName(),
      count: prevState.count + 1,
    }));
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };
  return (
    <section>
      <span>{state.name}</span>
      <button onClick={handleClick}> Сгенерировать новое имя </button>
    </section>
  );
}
