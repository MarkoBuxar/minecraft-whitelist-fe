import React from 'react';
import styled from 'styled-components';

export class Button extends React.Component {
	render() {
		let {
			children,
			color,
			fontSize,
			width,
			height,
			radius,
			background,
			gradient,
			hoverBackground,
			clickBackground,
			image,
			imageAlt,
			imageSize,
			bold,
			border,
			click,
			disabled,
		} = this.props;

		const handleClick = () => {
			if (click) {
				click();
			}
		};

		return (
			<ButtonComponent
				color={color}
				fontSize={fontSize}
				width={width}
				height={height}
				radius={radius}
				background={background}
				hoverBackground={hoverBackground}
				clickBackground={clickBackground}
				gradient={gradient}
				bold={bold}
				border={border}
				onClick={handleClick}
				disabled={disabled ? disabled : false}
			>
				{image ? (
					<Image src={image} alt={imageAlt} imageSize={imageSize} />
				) : (
					''
				)}
				<Text>{children}</Text>
			</ButtonComponent>
		);
	}
}

const ButtonComponent = styled.button`
	border: ${props => props.border || 'none'};
	transition: all 0.2s ease-in-out;
	width: ${props => props.width || '120px'};
	height: ${props => props.height || '40px'};
	border-radius: ${props => props.radius || '5px'};
	color: ${props => props.color || 'white'};
	font-size: ${props => props.fontSize || '14px'};
	font-weight: ${props => (props.bold ? 'bold' : 'normal')};
	vertical-align: middle;
	cursor: pointer;
	background-color: ${props => props.background || 'black'};
	background-image: ${props => props.gradient || ''};
	background-size: 1px 200px;
	background-position: 0 -100px;

	&:hover {
		background-color: ${props => props.hoverBackground || 'black'};
		background-position: 0 -50px;
	}
	&:active {
		background-color: ${props => props.clickBackground || 'black'};
		background-position: 0 0;
	}

	&:disabled {
		background-color: grey;
		opacity: 0.8;
		cursor: not-allowed;
	}
`;

const Image = styled.img`
	width: auto;
	height: ${props => props.imageSize || '40%'};
	object-fit: contain;
	padding-right: 5px;
	vertical-align: middle;
`;

const Text = styled.span``;
