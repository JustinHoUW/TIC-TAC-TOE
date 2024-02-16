import './App.css';
import Board from './components/Board';


function App() {
  return (
<>
<div>
  {/* Top Navigation Section */}
  <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <a href="/#" className="navbar-brand">Tic-Tac-Toe React App</a>
    </div>
  </nav>
  {/* Content Section */}
  <div className="container gameContainer">
    <Board />
  </div>
  {/* Footer Section */}
  <div className="card border-secondary mb-3" style={{ 'max-width': '100%' }}>
    <div className="card-header">Play Tic-Tac-Toe</div>
    <div className="card-body">
      <p className="card-text">Thank you for using this Tic-Tac-Toe game.</p>
    </div>
  </div>
</div>
</>  
);
}

export default App;
