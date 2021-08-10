import React from 'react'

class Event extends React.Component{


    eventHandler=(enter)=>{
        alert (enter);
    }


    render(){
        return(
            <div>
                <h1>Hi their how are you?</h1>
                <button onClick={()=>{this.eventHandler('hiiiiiiiiiii')}}>Click me!!!</button>
                <a href="/page" onClick={()=>{this.eventHandler('Im Find')}}>Link Page</a>
            </div>
        )
    }
}
export default Event;
