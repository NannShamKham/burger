import React, {Component} from 'react';
import Axi from "../Aux/axi";
import Classes from './Layout.css'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        ShowSideDrawer:false,
    }
    CloseSideDrawerHandler=()=>{
        this.setState({ShowSideDrawer:false})
    }
    DrawerToggleHandler=()=>{
       this.setState((preState)=>{
           return {ShowSideDrawer:!preState.ShowSideDrawer}
       })
    }
    render() {
        return (
            <Axi>
                <Toolbar drawerToggle={this.DrawerToggleHandler}/>
                <SideDrawer open={this.state.ShowSideDrawer} closed={this.CloseSideDrawerHandler} />
                <main className={Classes.content}>
                    {this.props.children}
                </main>
            </Axi>
        )
    }
}

export default Layout;