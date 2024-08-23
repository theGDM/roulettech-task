import { Box } from '@mui/material'
import Topbar from './components/Topbar';
import Dashboard from './pages/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';

//setting up the routes, global topbar
function App() {
  return (
    <Box>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Box>
  );
}

export default App;
