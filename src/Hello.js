import React from 'react';
import ReactDOM from 'react-dom/client';

class Hello extends React.Component{
    render(){
        return(
            //parent div:
            <div>
                <h1>
                    {this.props.t}
                </h1>
            </div>
        )
    }
}

export default Hello