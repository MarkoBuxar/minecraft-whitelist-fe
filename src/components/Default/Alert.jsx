import React from 'react';
import styled from 'styled-components';
import { FlexColCenterVertical } from './Default';
import { theme } from '../Theme';

export class Alert extends React.Component {
	componentDidMount() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	componentDidUpdate(prevProps) {
		if (prevProps.children !== this.props.children) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	render() {
		const { children, code } = this.props;
		return (
			<AlertComponent code={code}>
				<Text>{children}</Text>
			</AlertComponent>
		);
	}
}

const AlertComponent = styled(FlexColCenterVertical)`
	position: absolute;
	width: 100%;
	top: 70px;
	min-height: 40px;
	text-align: center;
	background: ${props => (props.code === 200 ? '#2ecc71' : '#e74c3c')};
	animation: fade-in 0.6s forwards 1 ease-in-out;
	overflow: hidden;

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Text = styled.span`
	font-size: ${theme.font.size.m};
	color: ${theme.font.color.title};
	padding: 10px;
`;
