import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import './user_menu.css';

const Example = props => (
    <Panel id={props.id}>
        <PanelHeader
            before={<PanelHeaderBack onClick={props.go} data-to="Persik"/>}
        >
            Твой билет
        </PanelHeader>
    </Panel>
);

Example.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Example;

