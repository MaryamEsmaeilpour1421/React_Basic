import React from 'react';

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state={date:new Date()};
    }


    componentDidMount(){
        this.timerId=setInterval(() =>{
            this.setState({date:new Date()});
        },1000);
    }
    
    componentWillMount(){
        clearInterval();
    }


    render(){
        return(
            <div>
                <h1>
                    {this.state.date.toLocaleString()}
                </h1>
            </div>
        );
    }
}
export default Clock;