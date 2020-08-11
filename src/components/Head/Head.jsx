import React from "react";
import styled from "styled-components";
import {
  FlexRowCenter,
  FlexRowSpaceBetweenHorizontal,
  StyledLink,
} from "../Default/Default";
import { Twitch } from "../Twitch/Twitch";
import { theme } from "../Theme";

export class Head extends React.Component {
  constructor() {
    super();
    this.state = {
      isTop: true,
    };
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    this.setState({ isTop: window.scrollY === 0 ? true : false });
  };

  render() {
    const { loggedIn, name, profileImage, subscriber } = this.props;
    return (
      <HeadContainer
        isTop={this.state.isTop}
        location={window.location.pathname}
      >
        {this.state.isTop && window.location.pathname === "/" ? (
          ""
        ) : (
          <InnerContent>
            <StyledLink to="/">
              <h1 style={{ color: "white" }}>Home</h1>
            </StyledLink>
            <Twitch
              loggedIn={loggedIn}
              name={name}
              profileImage={profileImage}
              subscriber={subscriber}
              // simulate api
              login={this.props.login}
              logout={this.props.logout}
              // simulate api
            />
          </InnerContent>
        )}
      </HeadContainer>
    );
  }
}

const HeadContainer = styled(FlexRowCenter)`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 100;
  background: ${(prop) =>
    prop.isTop && prop.location === "/"
      ? "transparent"
      : theme.color.secondary};
  transition: all 0.2s ease-in-out;
`;

const InnerContent = styled(FlexRowSpaceBetweenHorizontal)`
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: ${theme.maxWidth};
  margin: ${theme.contentMargin};
`;
