import React from 'react'
import { Container, List, Tab, TabIcon, TabTitle, Pane, PaneList, PaneItem, PaneIcon, PaneSameIcon, PaneTitle, PaneDescription } from './styles/tabs'

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

Tabs.Tab = function TabsTab({ children, ...restProps }) {
	return <Tab {...restProps}>{children}</Tab>
}

Tabs.TabIcon = function TabsIcon({ children, ...restProps }) {
	return <TabIcon {...restProps}>{children}</TabIcon>
}

Tabs.TabTitle = function TabsTitle({ children, ...restProps }) {
	return <TabTitle {...restProps}>{children}</TabTitle>
}


Tabs.Pane = function Pane({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>
}

Tabs.PaneList = function PaneList({ children, ...restProps }) {
	return <PaneList {...restProps}>{children}</PaneList>
}

Tabs.PaneItem = function PaneItem({ children, ...restProps }) {
	return <PaneItem {...restProps}>{children}</PaneItem>
}

Tabs.PaneSameIcon = function PaneSameIcon({ children, ...restProps }) {
	return <PaneSameIcon {...restProps}>{children}</PaneSameIcon>
}

Tabs.PaneIcon = function PaneIcon({ children, ...restProps }) {
	return <PaneIcon {...restProps}>{children}</PaneIcon>
}

Tabs.PaneTitle = function PaneTitle({ children, ...restProps }) {
	return <PaneTitle {...restProps}>{children}</PaneTitle>
}

Tabs.PaneDescription = function PaneDescription({ children, ...restProps }) {
	return <PaneDescription {...restProps}>{children}</PaneDescription>
}