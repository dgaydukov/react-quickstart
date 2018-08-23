'use strict';

/*
* Header component
 */

import React, {PureComponent} from 'react';

class Footer extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer>
                Footer
            </footer>
        )
    }
}


Footer.propTypes = {
};

export default Footer