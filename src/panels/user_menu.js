import React from 'react';
import PropTypes from 'prop-types';

import {Panel, ContentCard, Group, PanelHeaderBack, PanelHeader} from '@vkontakte/vkui';

import './user_menu.css';


const User_menu = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="Persik"/>}
		>
			Твой билет
		</PanelHeader>

		<Group>
			<Group mode="plain" separator={"hide"} padding={"m"}>
				<ContentCard
					onClick={props.go} data-to="sitting"
					src="https://sun2-20.userapi.com/impg/PzK0odsWVVySOPCoGN5yTuU7dGp1FTGl0Y94nQ/4PoOuI3XCQ0.jpg?size=1280x720&quality=95&sign=2b3267d989a8f14364a4b505e7fbb06d&type=album"
					alt="Picture of brown and gray mountains under blue sky during daytime photo"
					header={"Студенческая весна"}

				/>
			</Group>
			<Group mode="plain" separator={"hide"}>
				<ContentCard
					onClick={() => {}}
					src="https://sun2-20.userapi.com/impg/PzK0odsWVVySOPCoGN5yTuU7dGp1FTGl0Y94nQ/4PoOuI3XCQ0.jpg?size=1280x720&quality=95&sign=2b3267d989a8f14364a4b505e7fbb06d&type=album"
					alt="Picture of brown and gray mountains under blue sky during daytime photo"
					maxHeight={100}
				/>
			</Group>

		</Group>
	</Panel>
);




User_menu.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default User_menu;
