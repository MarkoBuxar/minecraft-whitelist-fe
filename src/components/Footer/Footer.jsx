import React from "react";
import styled from "styled-components";
import {
  FlexRowSpaceBetweenHorizontal,
  FlexRowCenter,
} from "../Default/Default";
import { theme } from "../Theme";

export class Footer extends React.Component {
  render() {
    return (
      <FooterComponent>
        <InnerDiv>
          <Text> Made with &lt;3 by Marko Buxar </Text>
          <SocMedia>
            <a href="https://github.com/markobuxar">
              <Image src="/assets/github-white.svg" alt="Twitter" />
            </a>
          </SocMedia>
        </InnerDiv>
      </FooterComponent>
    );
  }
}

const FooterComponent = styled(FlexRowCenter)`
  height: 60px;
  background: ${theme.color.secondary};
  padding: 0 20px 0 20px;

  /* border-top: 2px solid black; */
  /* box-shadow: 0px -2px 13px 0px rgba(0, 0, 0, 0.4); */
  /* margin-top: 10px; */
  z-index: ${theme.zIndex.menu};
`;

const InnerDiv = styled(FlexRowSpaceBetweenHorizontal)`
  width: 100%;
  max-width: ${theme.maxWidth};
  align-items: center;
`;

const Text = styled.span`
  color: #fff;
  font-size: ${theme.font.size.XS};
`;

const SocMedia = styled(FlexRowSpaceBetweenHorizontal)``;

const Image = styled.img`
  height: 30px;
  width: auto;
  padding: 10px;
  cursor: pointer;
`;
