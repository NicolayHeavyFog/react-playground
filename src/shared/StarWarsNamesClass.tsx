import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

interface IStarWarsNameClassState {
  name: string;
  count: number;
}

export class StarWarsNameClass extends React.PureComponent<
  {},
  IStarWarsNameClassState
> {
  state: Readonly<IStarWarsNameClassState> = {
    name: this.randomName(),
    count: 0,
  };

  public render() {
    console.log(this.state.count);
    return (
      <section>
        <span>{this.state.name}</span>
        <button onClick={this.handleClick}> Сгенерировать новое имя </button>
      </section>
    );
  }

  public randomName(): string {
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }

  private handleClick = () => {
    this.setState({ name: this.randomName() });
    this.setState((state, props) => ({ count: state.count + 1 }));
  };
}
