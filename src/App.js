import React, {Component} from 'react';
import Layout from './hoc/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder'

class App extends Component {
    state = {
        show:true
}
//test interceptors remove
    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.setState({show:false})
    //     },5000)
    // }

    render() {
        return (
            <div className="App">
                <Layout>
                    {/*{this.state.show?<BurgerBuilder/>: null}*/}
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;
