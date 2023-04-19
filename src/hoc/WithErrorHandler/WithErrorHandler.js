import React, {Component} from "react";
import Axi from "../Aux/axi";
import Model from "../../components/UI/Model/Model";
const withErrorHandler =(WrappedComponent,instance)=>{
    return class extends Component{
        state={
            error:null
        }
        componentWillMount() {
           this.reqInterceptors = instance.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
            })
          this.resInterceptors=  instance.interceptors.response.use(res=>res,error => {
                this.setState({error:error})
            })
        }
        componentWillUnmount(){
            // console.log(this.resInterceptors,this.reqInterceptors);
            instance.interceptors.request.eject(this.reqInterceptors);
            instance.interceptors.response.eject(this.resInterceptors);
        }
        errorConfirmedHandler=()=>{
           this.setState({error:null})
        }
        render() {
            return (
                <Axi>
                    <Model show={this.state.error} modelClosed={this.errorConfirmedHandler} >
                        {this.state.error &&this.state.error.message}
                    </Model>
                    <WrappedComponent {...this.props}/>
                </Axi>

            )
        }
    }
}

export default withErrorHandler;