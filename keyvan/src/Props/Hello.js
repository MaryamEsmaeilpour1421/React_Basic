/*import React from 'react';


class Hello extends React.Component{
    render(){
        return (<div>
            <h1>Hello {this.props.name}</h1>
        </div>);
    }
}
*/





function Hello(props){
return <div>
    <h1>Hello {props.name}</h1>
</div>
}

export default Hello;