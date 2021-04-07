import styled from 'styled-components/macro';

export const Container = styled.div``

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 2rem;
`

export const Tab = styled.div`
	width: calc(50% - 1rem);
	padding: 3rem;
	margin: 1rem 0;
	border-radius: 5px;
	box-shadow: 0 3px 15px rgba(0,0,0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color 200ms linear;

	@media screen and (min-width: 900px) {
		width: calc(25% - 1rem);
	}

	&.active,
	&:hover {
		background-color: var(--primary-color);

		h4 {
			color: #fff;
		}

		div i {
			color: white;
		}
	}
`

export const TabIcon = styled.div`
	i {
		font-size: 3rem;
		margin-bottom: 2rem;
		color: var(--primary-color);
		transition: color 200ms linear;
	}
`

export const TabTitle = styled.h4`
	margin-bottom: 0;
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 1.2;
	color: var(--blue-color);
	transotion: color 200ms linear;
`

export const Pane = styled.div`
	margin-bottom: 3rem;
`

export const PaneList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	min-height: 20rem;
`

export const PaneItem = styled.li`
	width: 100%;
	@media screen and (min-width: 768px) {
		width: ${({ width }) => width};
	}
	:not(:last-child) {
		margin-bottom: 1rem;
	}
`

export const PaneIcon = styled.div`
	padding: 1.2rem;
	background-color: ${({ bg }) => bg};
	color: white;
	margin-right: 1rem;
	border-radius: 5px;

	i {
		font-size: 2.5rem;
	}
`

export const PaneSameIcon = styled.div`
	font-size: 2.5rem;
	color: var(--blue-color);
	margin-right: 1rem;
`

export const PaneTitle = styled.h5`
	font-size: 2rem;
	font-weight: 600;
	${'' /* color: #000; */}
`

export const PaneDescription = styled.p`
	font-size: 1.4rem;
	color: var(--text-color-light);
`

export const PaneContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: ${({ mb }) => mb};
`;

