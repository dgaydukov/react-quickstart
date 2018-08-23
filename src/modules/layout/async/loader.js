'use strict';

/**
 * Class for async load of files depend on url
 * Key logic is here System.import, When webpack see this construction, it automatically starts to chunk files
 */

import React from 'react';
import PropTypes from 'prop-types';


export default class AsyncLoader extends React.Component {
    componentWillMount(){
        this.props.load.then(Component => {
            this.Component = Component;
            this.forceUpdate();
        })
    }
    render(){
        return(
            this.Component ? <this.Component.default {...this.props}/> : null
        )
    }
}


AsyncLoader.propTypes = {
    load: PropTypes.instanceOf(Promise).isRequired,
}