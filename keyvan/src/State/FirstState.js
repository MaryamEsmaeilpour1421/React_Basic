import React from 'react';


class Info extends React.Component{
    constructor(props){
        super(props);
        this.state={weight : '57' , age : '20' , name:'Maryam'}
    }

    Change =() =>{
        this.setState({weight : '58', age: '21', name:'Zahra'})
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {name: props.name};
    //   }
    componentDidMount(){
        setInterval(()=>{
            this.setState({weight : '50', age: '19',name:'mina'})
        },3000)
    }


    render(){
        return(
            <div>
                <h1>
                    My weight is {this.state.weight}
                </h1>
                <h2>
                    My Age is {this.state.age}
                </h2>
                <h3>
                    My name is {this.state.name}
                </h3>
                <button type='button' onClick={this.Change} >
                    Click Me!
                </button>
            </div>
        )
    }

}
export default Info;