import './App.css';
import MainNav from './components/navbar/Navbar';
import QrCode from './components/qrcode/QrCode';
function App() {
  return (
    <div className="App">
      <MainNav/>
      <QrCode></QrCode>
    </div>
  );
}

export default App;
