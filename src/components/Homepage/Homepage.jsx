import React from "react";
import { Intro } from "./Intro/Intro";
import { Info } from "./Info/Info";

export class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      count: null,
    };
  }

  componentWillMount() {
    // fetch("/whitelist/count")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ ...data });
    //   });
    this.setState({ count: 100 });
  }

  render() {
    return (
      <div>
        <Intro />
        <Info users={this.state.count} />
      </div>
    );
  }
}
