import React, { createContext, Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';

export const { Provider, Consumer } = createContext({});

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailsScreen
    }
});
  
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  state = { 
      store: { 
          myText: "Clique no botão"
      },
      actions: { 
          sayHello: () => this.setState({store:{myText:"Hello World!"}})
      }
  }

  render() { 
      return(
          <Provider value={this.state}>
              <AppContainer />
          </Provider>
      );
  }
}
