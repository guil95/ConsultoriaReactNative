import { StackNavigator } from  'react-navigation'

import CenaPrincipal from './src/pages/CenaPrincipal'
import CenaClientes from './src/pages/CenaClientes'


const App = StackNavigator({
  CenaPrincipal: { screen: CenaPrincipal },
  CenaClientes: { screen: CenaClientes }
})

export default App