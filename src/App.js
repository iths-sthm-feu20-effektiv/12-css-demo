import Primary from './components/button/Primary'
import Ghost from './components/button/Ghost'
import Transforming from './components/button/Transforming'
import Images from './components/Images'
import './App.css';

function App() {
    return (
        <div className="App">
            <Primary> Fancy button </Primary>
            <Ghost> Less fancy button </Ghost>
            <br/>
            <Transforming> Transforming button </Transforming>
            <Images />
        </div>
    );
}

export default App;
