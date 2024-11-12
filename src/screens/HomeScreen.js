import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';
import { IoWalletOutline } from 'react-icons/io5';
import backgroundImg from '../assets/background.jpg';

const HomeScreen = () => {
  const [selected, setSelected] = useState('home');
  const [tg, setTg] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      setTg(window.Telegram.WebApp);  // Initialize tg if available
    }
  }, []);

  const handleWalletConnect = () => {
    if (tg) {
      tg.openLink(tonConnectUrl);
    } else {
      alert("Telegram WebApp is not available. Please open this in the Telegram app.");
    }
  };

  return (
    <Container>
      <TopBar>
        <MapLink>Check the footprint map</MapLink>
        <MapIcon>➡️</MapIcon>
      </TopBar>

      <WalletButton onClick={handleWalletConnect}>
        <IoWalletOutline /> Connect wallet
      </WalletButton>

      <PointsSection>
        <PawIcon>
          <FaPaw size={60} />
        </PawIcon>
        <Points>1,529 PAWS</Points>
        <Rank>NEWCOMER ✨ RANK</Rank>
      </PointsSection>

      <ButtonContainer>
        <ActionButton>Join our community</ActionButton>
        <ActionButton secondary>Check your rewards</ActionButton>
      </ButtonContainer>
    </Container>
  );
};

export default HomeScreen;


// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100vh;
  padding: 20px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;





const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const MapLink = styled.span`
  color: #9a9a9a;
  font-size: 14px;
`;

const MapIcon = styled.span`
  color: #9a9a9a;
`;

const WalletButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;

const PointsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const PawIcon = styled.div`
  color: white;
  margin-bottom: 10px;
`;

const Points = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
`;

const Rank = styled.p`
  color: #9a9a9a;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  width: 100%;
  background-color: ${({ secondary }) => (secondary ? "#222224" : "#1e90ff")};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
`;





// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaPaw } from 'react-icons/fa';
// import { IoWalletOutline } from 'react-icons/io5';
// import { FaHome, FaTrophy, FaUserFriends, FaWallet } from 'react-icons/fa';
// import backgroundImg from '../assets/background.jpg';

// const HomeScreen = () => {
//   const [selected, setSelected] = useState('home');

//   return (
//     <Container>
//       <TopBar>
//         <MapLink>Check the footprint map</MapLink>
//         <MapIcon>➡️</MapIcon>
//       </TopBar>

//       <WalletButton>
//         <IoWalletOutline /> Connect wallet
//       </WalletButton>

//       <PointsSection>
//         <PawIcon>
//           <FaPaw size={60} />
//         </PawIcon>
//         <Points>1,529 PAWS</Points>
//         <Rank>NEWCOMER ✨ RANK</Rank>
//       </PointsSection>

//       <ButtonContainer>
//         <ActionButton>Join our community</ActionButton>
//         <ActionButton secondary>Check your rewards</ActionButton>
//       </ButtonContainer>
//     </Container>
//   );
// };

// export default HomeScreen;

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: white;
//   height: 100vh;
//   padding: 20px;
//   background-image: url(${backgroundImg});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;





// const TopBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 20px;
// `;

// const MapLink = styled.span`
//   color: #9a9a9a;
//   font-size: 14px;
// `;

// const MapIcon = styled.span`
//   color: #9a9a9a;
// `;

// const WalletButton = styled.button`
//   display: flex;
//   align-items: center;
//   background-color: #1e90ff;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   padding: 10px 20px;
//   font-size: 16px;
//   margin-bottom: 20px;
//   cursor: pointer;

//   svg {
//     margin-right: 8px;
//   }
// `;

// const PointsSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const PawIcon = styled.div`
//   color: white;
//   margin-bottom: 10px;
// `;

// const Points = styled.h1`
//   font-size: 36px;
//   font-weight: bold;
//   margin: 0;
// `;

// const Rank = styled.p`
//   color: #9a9a9a;
//   font-size: 14px;
// `;

// const ButtonContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const ActionButton = styled.button`
//   width: 100%;
//   background-color: ${({ secondary }) => (secondary ? "#222224" : "#1e90ff")};
//   color: white;
//   border: none;
//   border-radius: 8px;
//   padding: 15px;
//   font-size: 16px;
//   cursor: pointer;
// `;






// // import React, { useState } from 'react';
// // import styled from 'styled-components';
// // import { FaPaw } from 'react-icons/fa';
// // import { IoWalletOutline } from 'react-icons/io5';


// // import { FaHome, FaTrophy, FaUserFriends, FaWallet } from 'react-icons/fa';
  

// // const HomeScreen = () => {

// //   const [selected, setSelected] = useState('home');


// //   return (
// //     <Container>
// //       <TopBar>
// //         <MapLink>Check the footprint map</MapLink>
// //         <MapIcon>➡️</MapIcon>
// //       </TopBar>

// //       <WalletButton>
// //         <IoWalletOutline /> Connect wallet
// //       </WalletButton>

// //       <PointsSection>
// //         <PawIcon>
// //           <FaPaw size={60} />
// //         </PawIcon>
// //         <Points>1,529 PAWS</Points>
// //         <Rank>NEWCOMER ✨ RANK</Rank>
// //       </PointsSection>

// //       <ButtonContainer>
// //         <ActionButton>Join our community</ActionButton>
// //         <ActionButton secondary>Check your rewards</ActionButton>
// //       </ButtonContainer>
// //     </Container>
// //   );
// // };

// // export default HomeScreen;

// // // Styled Components
// // const Container = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   // background-color: #0e0e10;
// //   color: white;
// //   height: 100vh;
// //   padding: 20px;
// // `;

// // const TopBar = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   width: 100%;
// //   margin-bottom: 20px;
// // `;

// // const MapLink = styled.span`
// //   color: #9a9a9a;
// //   font-size: 14px;
// // `;

// // const MapIcon = styled.span`
// //   color: #9a9a9a;
// // `;

// // const WalletButton = styled.button`
// //   display: flex;
// //   align-items: center;
// //   background-color: #1e90ff;
// //   color: white;
// //   border: none;
// //   border-radius: 8px;
// //   padding: 10px 20px;
// //   font-size: 16px;
// //   margin-bottom: 20px;
// //   cursor: pointer;

// //   svg {
// //     margin-right: 8px;
// //   }
// // `;

// // const PointsSection = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   margin-bottom: 20px;
// // `;

// // const PawIcon = styled.div`
// //   color: white;
// //   margin-bottom: 10px;
// // `;

// // const Points = styled.h1`
// //   font-size: 36px;
// //   font-weight: bold;
// //   margin: 0;
// // `;

// // const Rank = styled.p`
// //   color: #9a9a9a;
// //   font-size: 14px;
// // `;

// // const ButtonContainer = styled.div`
// //   width: 100%;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 10px;
// //   margin-bottom: 20px;
// // `;

// // const ActionButton = styled.button`
// //   width: 100%;
// //   background-color: ${({ secondary }) => (secondary ? "#222224" : "#1e90ff")};
// //   color: white;
// //   border: none;
// //   border-radius: 8px;
// //   padding: 15px;
// //   font-size: 16px;
// //   cursor: pointer;
// // `;
