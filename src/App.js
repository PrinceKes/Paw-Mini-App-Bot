import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import FriendScreen from './screens/FriendScreen';
import EarnScreen from './screens/EarnScreen';
import GlobalStyle from './styles/GlobalStyles';
import { FaHome, FaTrophy, FaUserFriends, FaWallet } from 'react-icons/fa';
import styled from 'styled-components';

const App = () => {
  const [selected, setSelected] = useState('home'); // Manage selected icon

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/leaderboard" element={<LeaderboardScreen />} />
        <Route path="/friend" element={<FriendScreen />} />
        <Route path="/earn" element={<EarnScreen />} />
      </Routes>

      {/* The Navbar will always be shown */}
      <NavBarContainer>
        <NavItem
          selected={selected === 'home'}
          onClick={() => {
            setSelected('home');
            window.location.href = '/'; // Navigate to home
          }}
        >
          <FaHome size={30} />
          <NavText selected={selected === 'home'}>Home</NavText>
        </NavItem>
        <NavItem
          selected={selected === 'leaderboard'}
          onClick={() => {
            setSelected('leaderboard');
            window.location.href = '/leaderboard'; // Navigate to leaderboard
          }}
        >
          <FaTrophy size={30} />
          <NavText selected={selected === 'leaderboard'}>Leaderboard</NavText>
        </NavItem>
        <NavItem
          selected={selected === 'friends'}
          onClick={() => {
            setSelected('friends');
            window.location.href = '/friend'; // Navigate to friends
          }}
        >
          <FaUserFriends size={30} />
          <NavText selected={selected === 'friends'}>Friends</NavText>
        </NavItem>
        <NavItem
          selected={selected === 'earn'}
          onClick={() => {
            setSelected('earn');
            window.location.href = '/earn'; // Navigate to earn
          }}
        >
          <FaWallet size={30} />
          <NavText selected={selected === 'earn'}>Earn</NavText>
        </NavItem>
      </NavBarContainer>
    </Router>
  );
};

export default App;

// Styled Components for NavBar
const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  background-color: #111113;
  border-radius: 12px;
  position: fixed; /* Fixed at the bottom of the screen */
  bottom: 0;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.2s ease-in-out;
  color: ${(props) => (props.selected ? '#1e90ff' : '#bbb')};

  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
  }
`;

const NavText = styled.div`
  font-size: 12px;
  color: ${(props) => (props.selected ? '#1e90ff' : '#bbb')}; /* Change text color based on selection */
  margin-top: 5px;
`;
