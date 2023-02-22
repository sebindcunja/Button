import { Component } from "react";
class state extends Component{
    // constructor(props){
    //     super(props);
    //      this.state={
    //          msg:"Welcome to react"
           
    //      }
    //  }
    state={
        msg:"Welcome",
        success:"data"
    }

    
    render(){
        return(
            <>
            <h1>{this.state.msg}</h1>
            <h2>{this.state.success}</h2>
                                                                                                                                                                                    
            </>
        )
    }

}
export default state;