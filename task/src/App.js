import './App.css';
import Home from './Components/Home';
import Card from './Components/Card';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          margin: '100px'
        }}
      >
        <Box sx={{
          position: 'absolute',
          zIndex: 2,
          top: 20,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: "700px"
        }}>
          <Home />
        </Box>

        <Box sx={{
          position: 'absolute', 
          zIndex: 1, 
          width: '100%', 
          top: 0, 
        }}>
          <Card/>
        </Box>


      </Box>

    </div>
  );
}

export default App;
