import React, {Component} from 'react';
import Classes from './Model.css'
import Axi from "../../../hoc/Aux/axi";
import Backdrop from "../Backdrop/Backdrop";
class Model extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show
    }
    componentWillUpdate() {
        console.log("[Model] will update")
    }

    render(){
        return(
            <Axi>
                <div className={Classes.Modal}
                     style={{
                         transform:this.props.show?'translateY(0)':'translateY(-100)',
                         opacity:this.props.show?1:0,
                         zIndex:this.props.show?1000:-6000
                     }}

                >
                    {this.props.children}
                </div>
                <Backdrop show={this.props.show}  clicked={this.props.modelClosed}/>
            </Axi>
        )

    }
}

export default Model;