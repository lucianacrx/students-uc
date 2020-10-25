import React from 'react';
import Auxiliar from '../Auxiliar/Auxiliar';
import Toolbar from '../../components/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Auxiliar>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </Auxiliar>
    )
};

export default layout;