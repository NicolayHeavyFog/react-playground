import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./header.scss";
import { StarWarsNameClass } from "../shared/StarWarsNamesClass.tsx";
import { StarWarsNameFunction } from "../shared/StarWarsNamesFunction.tsx";
// ReactDom.hydrate(
//   <StarWarsNameClass />,
//   document.getElementById("react_root")
// );
function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example}>Hello React!</h1>
      <StarWarsNameFunction />
    </header>
  );
}

export const Header = hot(HeaderComponent);
