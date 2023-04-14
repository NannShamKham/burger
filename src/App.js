import React, {Component} from 'react';
import Layout from './components/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <BurgerBuilder/>

                </Layout>
            </div>
        );
    }
}

export default App;
