import React from 'react';
import PropTypes from 'prop-types';

import {Panel, PanelHeaderBack, PanelHeader, ButtonGroup, Button} from '@vkontakte/vkui';
import { Icon20Flash } from '@vkontakte/icons';
import { Icon20Favorite } from '@vkontakte/icons';
import { Icon20RadioOn } from '@vkontakte/icons';
import './sitting.css';
const Sitting = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="user_menu"/>}
		>
			Стулья
		</PanelHeader>


		<ButtonGroup mode="vertical" gap="s" align="center">
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>1</Button>
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>2</Button>
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>3</Button>
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>4</Button>
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>5</Button>
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>6</Button>
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>7</Button>
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>8</Button>
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>9</Button>
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="negative" before={<Icon20Favorite  />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>10</Button>
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>11</Button>
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
				<Button size="m" appearance="accent" before={<Icon20Flash />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>12</Button>
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>12</Button>
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>12</Button>
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>12</Button>
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>12</Button>
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>12</Button>
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
			</ButtonGroup>
			<ButtonGroup mode="horizontal" gap="s" align="center">
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="neutral" mode={"secondary"}>12</Button>
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
				<Button size="m" appearance="positive" before={<Icon20RadioOn />} />
			</ButtonGroup>

		</ButtonGroup>
	</Panel>
);




Sitting.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Sitting;
