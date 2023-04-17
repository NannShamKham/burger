import React from "react";
import Axi from "../Aux/axi";
const withErrorHandler =(WrappedComponent)=>{
    return (props)=>{
        return (
           <Axi>
               <WrappedComponent {...props}/>
           </Axi>

        )
    }
}

export default withErrorHandler;