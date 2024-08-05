import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import GenProfile from './components/GenProfiling/GenProfile';
import AnalyticsHub from './components/AnalyticsHub/AnalyticsHub';
import GenCalci from './components/GenCalci/GenCalci';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gen" element={<GenProfile/>} />
      <Route path="/analytics" element={<AnalyticsHub />} />
      <Route path="/gen-calci" element={<GenCalci />} />
    </Routes>
    </>
  )
}