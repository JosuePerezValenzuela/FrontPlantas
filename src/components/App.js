import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from "../components/pages/home/home";
import SingUp from "../components/pages/singUp/singUp";
import ModifyPlants from "../components/pages/modifyPlants/modifyPlants";
import DetailsPlant from '../components/pages/detailPlant/detailPlant';
import RegisterPlants from '../components/pages/registerPlants/registerPlants';


const App = () => (
  <>
    <Router>
      <Route path ="/" component={Home} />
      <Route path ="/iniciar_sesion" component={SingUp} />
      <Route path ="/modificar_plantas" component={ModifyPlants} />
      <Route path ="/detalle_planta" component={DetailsPlant} />
      <Route path ="/registrar_planta" component={RegisterPlants} />
    </Router>
  </>
)
// =(
export default App;
