import React from "react";
import styled from "styled-components";
import { Button } from "../Default/Buttons/Button";
import { theme } from "../Theme";
import { TwitchDropdown } from "./TwitchDropdown";

export class Twitch extends React.Component {
  render() {
    const { loggedIn, name, profileImage, subscriber } = this.props;
    return (
      <TwitchComponent>
        {loggedIn ? (
          <TwitchDropdown
            loggedIn={loggedIn}
            name={name}
            profileImage={profileImage}
            subscriber={subscriber}
            // simulate api
            logout={this.props.logout}
            // simulate api
          />
        ) : (
          // <a href="/auth">
          <Button
            background={theme.color.twitchPurple}
            hoverBackground="#593a93"
            clickBackground="#4e3380"
            image="/assets/twitch-white.svg"
            bold="true"
            // simulate api
            click={this.props.login}
            // simulate api
            radius={theme.borderRadius}
            border={"1px solid white"}
          >
            Login
          </Button>
          // </a>
        )}
      </TwitchComponent>
    );
  }
}

const TwitchComponent = styled.div``;
