import React from "react";
import styled from "styled-components";
import { HeadBackground, FlexColCenter, FlexRow } from "../Default/Default";
import { theme } from "../Theme";
import { Button } from "../Default/Buttons/Button";
import { Alert } from "../Default/Alert";

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      alert: { code: null, message: null },
      input: "",
      loggedIn: null,
      name: null,
      profileImage: null,
      minecraft: { name: null, lastUpdate: null },
    };
    this.handleInput = this.handleInput.bind(this);
    this.sendData = this.sendData.bind(this);
    this.clearName = this.clearName.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.setState({ ...this.props, input: this.props.minecraft.name || "" });
    // if (this.props.loggedIn !== null && !this.props.loggedIn) {
    //   window.location.replace("/auth");
    // }

    if (!this.props.subscriber) {
      this.setState({
        alert: {
          code: 400,
          message: "You need to be a subscriber to join the whitelist",
        },
      });
    }
  }

  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  handleKeyPress(e) {
    if (
      e.keyCode === 13 &&
      !(
        this.state.input === this.state.minecraft.name ||
        !this.props.subscriber ||
        this.state.input === ""
      )
    ) {
      this.sendData();
    }
  }

  sendData() {
    // fetch(`/add/${this.state.input}`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({}),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       minecraft: { ...this.state.minecraft, name: this.state.input },
    //       alert: { code: data.code, message: data.message },
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // simulate api
    this.setState({
      minecraft: { ...this.state.minecraft, name: this.state.input },
      alert: { code: 200, message: "Successfully added username" },
    });
    // simulate api
  }

  clearName() {
    // fetch(`/remove`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({}),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       input: "",
    //       minecraft: { name: "", lastUpdate: null },
    //       alert: { code: data.code, message: data.message },
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // simulate api
    this.setState({
      input: "",
      minecraft: { name: "", lastUpdate: null },
      alert: { code: 200, message: "successfully removed name" },
    });
    // simulate api
  }

  removeAlert() {
    this.setState({ alert: { message: null, code: null } });
  }

  render() {
    const { profileImage, subscriber } = this.props;
    return (
      <Wrap>
        {this.state.alert.message !== null && (
          <Alert code={this.state.alert.code} remove={this.removeAlert}>
            {this.state.alert.message}
          </Alert>
        )}
        <HeadBackground />
        <DashboardComponent>
          {this.props.loggedIn !== null && this.props.loggedIn && (
            <React.Fragment>
              <ImageContainer>
                <ProfileImage src={profileImage} />
              </ImageContainer>
              <InputWrap>
                <Input
                  placeholder="Minecraft Username"
                  onChange={this.handleInput}
                  value={this.state.input}
                  onKeyDown={this.handleKeyPress}
                />
                <Buttons>
                  <Button
                    click={this.sendData}
                    disabled={
                      this.state.input === this.state.minecraft.name ||
                      !subscriber ||
                      this.state.input === ""
                        ? true
                        : false
                    }
                    background={theme.color.twitchPurple}
                    hoverBackground="#593a93"
                    clickBackground="#4e3380"
                    fontSize={theme.font.size.M}
                  >
                    {" "}
                    Submit
                  </Button>

                  <Button
                    click={this.clearName}
                    disabled={!this.state.minecraft.name ? true : false}
                    background="#e74c3c"
                    hoverBackground="#e43725"
                    clickBackground="#d62c1a"
                    fontSize={theme.font.size.M}
                  >
                    {" "}
                    Remove
                  </Button>
                </Buttons>
              </InputWrap>
            </React.Fragment>
          )}
        </DashboardComponent>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  overflow: hidden;
`;

const DashboardComponent = styled(FlexColCenter)`
  min-height: calc(100vh - 60px - 70px);
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 100%;
  /* border: 4px solid #3498db; */
  /* padding-bottom: 85px; */
  margin-bottom: 40px;

  @media only screen and (max-height: 600px) {
    margin-top: 20px;
  }
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 100%;
`;

const Input = styled.input`
  width: 200px;
  height: 35px;
  transition: all 0.1s ease-in-out;
  font-size: ${theme.font.size.L};
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  outline: none;
  margin-bottom: 20px;
  padding: 0 10px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
  }

  &:focus {
    border-bottom: 2px solid ${theme.color.twitchPurple};
  }

  &::placeholder {
    font-size: ${theme.font.size.S};
  }
`;

const InputWrap = styled(FlexRow)`
  & > * {
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Buttons = styled(FlexRow)`
  margin-left: 10px;

  & > * {
    margin-left: 10px;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
    margin: 0;

    & > * {
      margin: 0;
    }
  }

  @media only screen and (max-height: 600px) and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
