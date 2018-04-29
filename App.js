import { StackNavigator } from  'react-navigation'

import Home from './src/pages/Home'
import Clientes from './src/pages/Clientes'
import SobreNos from './src/pages/SobreNos'
import Servicos from './src/pages/Servicos'
import Contato from './src/pages/Contato'


const App = StackNavigator({
  Home: { screen: Home },
  Clientes: { screen: Clientes },
  Contato: { screen: Contato },
  Servicos: { screen: Servicos },
  SobreNos: { screen: SobreNos },
})

export default App