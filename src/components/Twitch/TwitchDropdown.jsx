import React from "react";
import styled from "styled-components";
import {
  FlexRowCenterVertical,
  FlexColCenterVertical,
  StyledLink,
} from "../Default/Default";
import { theme } from "../Theme";

export class TwitchDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownActive: false,
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state && this.state.dropdownActive) {
        this.setState({ dropdownActive: false });
      }
      return;
    }
  }

  handleClick() {
    this.setState({ dropdownActive: !this.state.dropdownActive });
  }

  render() {
    const { name, profileImage, subscriber } = this.props;

    return (
      <div ref={this.setWrapperRef}>
        <DropdownComponent
          active={this.state.dropdownActive}
          onClick={this.handleClick}
        >
          <Image src={profileImage} />
          <Text>
            <Name>{name}</Name>
            <Status>{subscriber ? "subscribed" : "not subscribed"}</Status>
          </Text>
        </DropdownComponent>
        <Dropdown active={this.state.dropdownActive}>
          <DropdownInner>
            <StyledLink to="/dashboard">
              <Option onClick={this.handleClick}>Dashboard</Option>
            </StyledLink>
            {/* <a style={{ textDecoration: 'none' }} href="/logout">
              <Option onClick={this.handleClick}>Logout</Option>
            </a> */}
            {/* simulate api */}
            <div onClick={this.props.logout}>
              <Option onClick={this.handleClick}>Logout</Option>
            </div>
            {/* simulate api */}
          </DropdownInner>
        </Dropdown>
      </div>
    );
  }
}

const DropdownComponent = styled(FlexRowCenterVertical)`
  width: 180px;
  height: 40px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.active ? "#4e3380" : theme.color.twitchPurple};
  border-radius: ${theme.borderRadius};
  border: 1px solid white;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #593a93;
  }

  &:active {
    background-color: #4e3380;
  }
`;

const Dropdown = styled.div`
  width: 180px;
  height: ${(props) => (props.active ? "120px" : 0)};
  transition: 0.4s ease-in-out;
  border-radius: ${theme.borderRadius};
  background: ${theme.color.secondary};
  position: absolute;
  margin-top: 30px;
  &::before {
    transition: all 0.1s ease-in-out;
    opacity: ${(props) => (props.active ? 1 : 0)};
    box-sizing: border-box;
    content: "";
    position: absolute;
    left: 16px;
    top: -8px;
    width: 0;
    height: 0;
    border-left: solid 8px transparent;
    border-right: solid 8px transparent;
    border-bottom: solid 8px ${theme.color.secondary};
  }
`;

const DropdownInner = styled.div`
  overflow: hidden;
  height: 100%;
  margin-top: 20px;
`;

const Image = styled.img`
  width: auto;
  height: 60%;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid white;
  border-radius: ${theme.borderRadius};
`;

const Text = styled(FlexColCenterVertical)``;

const Name = styled.span`
  color: ${theme.font.color.title};
  font-size: ${theme.font.size.S};
  font-weight: bold;
`;

const Status = styled.span`
  color: ${theme.font.color.subtitle};
  font-size: ${theme.font.size.XXS};
`;

const Option = styled(FlexRowCenterVertical)`
  height: 40px;
  transition: all 0.4s ease-in-out;
  padding: 0 20px;
  color: ${theme.font.color.title};
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background: ${theme.color.twitchPurple};
  }

  &:active {
    background: #4e3380;
  }
`;
