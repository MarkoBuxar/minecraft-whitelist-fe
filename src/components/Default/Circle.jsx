import React from 'react';
import styled from 'styled-components';
import { FlexColCenter } from './Default';
import { theme } from '../Theme';

export class Circle extends React.Component {
	render() {
		const {
			size,
			background,
			gradient,
			color,
			fontSize,
			bold,
			breakpoint,
			mobileSize,
			children,
		} = this.props;
		return (
			<CircleComponent
				size={size}
				background={background}
				gradient={gradient}
				color={color}
				fontSize={fontSize}
				bold={bold}
				breakpoint={breakpoint}
				mobileSize={mobileSize}
			>
				{children}
			</CircleComponent>
		);
	}
}

const CircleComponent = styled(FlexColCenter)`
	width: ${props => props.size || '60px'};
	height: ${props => props.size || '60px'};
	background-color: ${props => props.background || 'black'};
	background-image: ${props => props.gradient || ''};
	color: ${props => props.color || 'white'};
	font-size: ${props => props.fontSize || theme.font.size.M};
	font-weight: ${props => (props.bold ? 'bold' : 'normal')};
	border-radius: 100%;

	@media only screen and (max-width: ${props => props.breakpoint || ''}) {
		width: ${props => props.mobileSize || '60px'};
		height: ${props => props.mobileSize || '60px'};
	}
`;
