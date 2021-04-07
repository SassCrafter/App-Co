import React from 'react'
import { Container, List, Tab, TabIcon, TabTitle, Pane, PaneList, PaneItem, PaneIcon, PaneSameIcon, PaneTitle, PaneDescription, PaneContainer } from './styles/tabs'

function Tabs({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			{children}
		</Container>
	)
}

export default Tabs

Tabs.List = function TabsList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>
}

Tabs.Tab = function TabsTab({ children, tabId, setActiveTabId, ...restProps }) {
	const clickHandler = () => {
		console.log('click')
		console.log(tabId);
		setActiveTabId(tabId);
	}
	return <Tab onClick={clickHandler} {...restProps}>{children}</Tab>
}

Tabs.TabIcon = function TabsIcon({ children, ...restProps }) {
	return <TabIcon {...restProps}>{children}</TabIcon>
}

Tabs.TabTitle = function TabsTitle({ children, ...restProps }) {
	return <TabTitle {...restProps}>{children}</TabTitle>
}


Tabs.Pane = function TabsPane({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>
}

Tabs.PaneList = function TabsPaneList({ children, ...restProps }) {
	return <PaneList {...restProps}>{children}</PaneList>
}

Tabs.PaneItem = function TabsPaneItem({ children, width='100%', ...restProps }) {
	return <PaneItem width={width} {...restProps}>{children}</PaneItem>
}

Tabs.PaneSameIcon = function TabsPaneSameIcon({ children, ...restProps }) {
	return <PaneSameIcon {...restProps}>{children}</PaneSameIcon>
}

Tabs.PaneIcon = function TabsPaneIcon({ children, ...restProps }) {
	return <PaneIcon {...restProps}>{children}</PaneIcon>
}

Tabs.PaneTitle = function TabsPaneTitle({ children, ...restProps }) {
	return <PaneTitle {...restProps}>{children}</PaneTitle>
}

Tabs.PaneDescription = function TabsPaneDescription({ children, ...restProps }) {
	return <PaneDescription {...restProps}>{children}</PaneDescription>
}

Tabs.PaneContainer = function TabsPaneContainer({ children, mb=0, ...restProps }) {
	return <PaneContainer mb={mb} {...restProps}>{children}</PaneContainer>
}