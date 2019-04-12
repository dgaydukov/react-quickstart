'use strict';

/**
 * Class for async load of files depend on url
 * Key logic is here System.import, When webpack see this construction, it automatically starts to chunk files
 */

import * as React from "react";

interface IProps {
    load: Promise<any>;
}

export default class AsyncLoader extends React.Component<IProps, any> {
    Component: any;
    
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