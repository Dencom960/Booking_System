import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Persik from './panels/Persik';
import Example from './panels/example';
import User_menu from './panels/user_menu';
import Sitting from './panels/sitting'



const Routes = {
	USER_MENU:'user_menu',
	EXAMPLE:'Example',
	PERSIK:'Persik',
	SITTING:'sitting'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(Routes.USER_MENU);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);


	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};


	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot mode={"partial"}>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<User_menu id={Routes.USER_MENU} go={go} />
								<Sitting id={Routes.SITTING} go={go} />
								<Example id={Routes.EXAMPLE} go={go} />
								<Persik id={Routes.PERSIK} go={go} />

							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
