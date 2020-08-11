import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Head } from "./components/Head/Head.jsx";
import styled from "styled-components";
import { Footer } from "./components/Footer/Footer.jsx";
import { Main } from "./Main.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null,
      name: null,
      profileImage: null,
      minecraft: { name: null, lastUpdate: null },
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    // fetch('/user')
    // 	.then(response => response.json())
    // 	.then(data => {
    // 		this.setState({ ...data });
    // 	});
  }

  // simulate api
  login() {
    this.setState({
      loggedIn: true,
      name: "username",
      subscriber: true,
      profileImage:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      minecraft: { name: "minecraft name", lastUpdate: {} },
    });
  }

  logout() {
    this.setState({
      loggedIn: null,
      name: null,
      profileImage: null,
      minecraft: { name: null, lastUpdate: null },
    });
    window.location.replace("/");
  }

  render() {
    const { loggedIn, name, profileImage, subscriber, minecraft } = this.state;
    return (
      <Root>
        <Router>
          <React.Fragment>
            <Head
              loggedIn={loggedIn}
              name={name}
              // simulate api
              login={this.login}
              logout={this.logout}
              // simulate api
              profileImage={profileImage}
              subscriber={subscriber}
            />
            <Main
              loggedIn={loggedIn}
              name={name}
              profileImage={profileImage}
              subscriber={subscriber}
              minecraft={minecraft}
            />
            <Footer />
          </React.Fragment>
        </Router>
      </Root>
    );
  }
}

const Root = styled.div``;

export default App;
