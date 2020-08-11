import React from 'react';
import styled from 'styled-components';
import {
	FlexRowCenter,
	FlexCol,
	FlexRowCenterVertical,
} from '../../Default/Default';
import { theme } from '../../Theme';
import { Circle } from '../../Default/Circle';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export class Info extends React.Component {
	constructor() {
		super();
		this.state = {
			isVisible: false,
		};
	}

	onEnterViewport() {
		this.setState({ isVisible: true });
	}

	render() {
		const background = '#3498db';
		const size = '100px';
		const color = 'white';
		const fontSize = theme.font.size.L;
		const mobileSize = '75px';
		const breakpoint = '430px';

		return (
			<ScrollTrigger
				onEnter={() => {
					this.onEnterViewport();
				}}
				triggerOnLoad={false}
			>
				<InfoComponent>
					<InnerComponent>
						<Lines>
							<Line>
								<Circle
									size={size}
									background={background}
									color={color}
									mobileSize={mobileSize}
									breakpoint={breakpoint}
									fontSize={fontSize}
									bold
								>
									{this.props.users && this.state.isVisible ? (
										<CountUp end={this.props.users} duration={5} />
									) : (
										'?'
									)}
								</Circle>
								<Text> Total whitelisted users </Text>
							</Line>
							<Line>
								<Circle
									size={size}
									background={background}
									color={color}
									mobileSize={mobileSize}
									breakpoint={breakpoint}
									fontSize={fontSize}
									bold
								>
									{this.state.isVisible ? <CountUp end={70} duration={5} /> : 0}
								</Circle>
								<Text> Available player slots </Text>
							</Line>
							<Line>
								<Circle
									size={size}
									background={background}
									color={color}
									mobileSize={mobileSize}
									breakpoint={breakpoint}
									fontSize={fontSize}
									bold
								>
									{this.state.isVisible ? (
										<CountUp end={100} suffix="%" duration={5} />
									) : (
										0
									)}
								</Circle>
								<Text> Fun! </Text>
							</Line>
						</Lines>
						<Image src="/assets/puff-cosy.png" />
					</InnerComponent>
				</InfoComponent>
			</ScrollTrigger>
		);
	}
}

const InfoComponent = styled(FlexRowCenter)`
	width: 100%;
	background: ${theme.color.primary};
`;

const InnerComponent = styled(FlexRowCenterVertical)`
	height: 100%;
	width: 100%;
	max-width: 900px;
	margin: ${theme.contentMargin};
	justify-content: space-between;

	@media only screen and (max-width: 900px) {
		flex-direction: Column;
	}
`;

const Lines = styled(FlexCol)``;

const Line = styled(FlexRowCenterVertical)`
	padding: 20px 0;
`;

const Text = styled.span`
	margin-left: 20px;
	font-size: ${theme.font.size.XXXL};
	color: ${theme.font.color.primary};
	font-weight: bold;

	@media only screen and (max-width: 550px) {
		font-size: ${theme.font.size.L};
	}

	@media only screen and (max-width: 400px) {
		font-size: ${theme.font.size.S};
	}
`;

const Image = styled.img`
	width: 250px;
	height: 250px;
	margin-top: -50px;
	@media only screen and (max-width: 900px) {
		padding-bottom: 60px;
		margin-top: 0;
	}
`;
