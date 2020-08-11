import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../Theme';

export const Flex = styled.div`
	display: flex;
`;

export const FlexRow = styled(Flex)`
	flex-direction: row;
`;

export const FlexCol = styled(Flex)`
	flex-direction: column;
`;

export const FlexRowCenterHorizontal = styled(FlexRow)`
	justify-content: center;
`;

export const FlexRowCenterVertical = styled(FlexRow)`
	align-items: center;
`;

export const FlexRowCenter = styled(FlexRow)`
	justify-content: center;
	align-items: center;
`;

export const FlexColCenterHorizontal = styled(FlexCol)`
	align-items: center;
`;

export const FlexColCenterVertical = styled(FlexCol)`
	justify-content: center;
`;

export const FlexColCenter = styled(FlexCol)`
	justify-content: center;
	align-items: center;
`;

export const FlexColSpaceBetweenHorizontal = styled(FlexCol)`
	align-items: space-between;
`;

export const FlexColSpaceBetweenVertical = styled(FlexCol)`
	justify-content: space-between;
`;

export const FlexRowSpaceBetweenHorizontal = styled(FlexRow)`
	justify-content: space-between;
`;

export const FlexRowSpaceBetweenVertical = styled(FlexRow)`
	align-items: space-between;
`;

export const FlexColSpaceAroundHorizontal = styled(FlexCol)`
	align-items: space-around;
`;

export const FlexColSpaceAroundVertical = styled(FlexCol)`
	justify-content: space-around;
`;

export const FlexRowSpaceAroundHorizontal = styled(FlexRow)`
	justify-content: space-around;
`;

export const FlexRowSpaceAroundVertical = styled(FlexRow)`
	align-items: space-around;
`;

export const HideMobile = styled.div`
	@media only screen and (max-width: ${props => props.breakpoint || '600px'}) {
		display: none;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const HeadBackground = styled.div`
	height: 70px;
	width: 100%;
	background: ${theme.color.secondary};
`;
