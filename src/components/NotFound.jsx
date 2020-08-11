import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexColCenter, HideMobile, HeadBackground } from './Default/Default';
import { theme } from './Theme';

export class NotFound extends React.Component {
	render() {
		return (
			<React.Fragment>
				<HeadBackground />
				<NotFoundComponent>
					<Content>
						<HideMobile breakpoint="450px">
							<Image src="/assets/puff.png" alt="puff - not found" />
						</HideMobile>

						<Text>
							<ErrorCode>
								404 <HideMobile breakpoint="450px">|</HideMobile>
							</ErrorCode>
							<span> Webpage not found</span>
						</Text>
						<StyledLink to="/">
							<SubText>Return to homepage</SubText>
						</StyledLink>
					</Content>
				</NotFoundComponent>
			</React.Fragment>
		);
	}
}

const NotFoundComponent = styled(FlexColCenter)`
	height: calc(100vh - 60px - 70px);
	width: 100%;
	background: ${theme.color.primary};
`;

const Content = styled(FlexColCenter)`
	margin: ${theme.contentMargin};
	max-width: ${theme.maxWidth};
`;

const Image = styled.img`
	width: 90px;
	height: auto;
	padding: 15px;
`;

const Text = styled.span`
	color: ${theme.font.color.secondary};
	font-size: ${theme.font.size.XXXL};
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 450px) {
		flex-direction: column;
		text-align: center;
	}
`;

const SubText = styled.span`
	color: ${theme.font.color.greyText};
	font-size: ${theme.font.size.L};
	transition: all 0.1s ease-in-out;
`;

const StyledLink = styled(Link)`
	margin-top: 15px;
	text-decoration: none;
	& > span:hover {
		color: ${theme.font.color.secondary};
	}
`;

const ErrorCode = styled.div`
	font-weight: bold;
	display: flex;

	& > div {
		padding: 0 10px;
	}

	@media only screen and (max-width: 450px) {
		justify-content: center;
	}
`;
