import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';
import { IoWalletOutline } from 'react-icons/io5';
import { FaHome, FaTrophy, FaUserFriends, FaWallet } from 'react-icons/fa';
import backgroundImg from '../assets/background.jpg';

const HomeScreen = () => {
  const [selected, setSelected] = useState('home');
  const [walletAddress, setWalletAddress] = useState(null);

  // Placeholder function to simulate TON wallet connection
  const connectTonWallet = async () => {
    // Here, you would add the actual logic to connect the TON wallet
    // For this example, let's simulate a successful wallet connection
    return "ton-wallet-address-123"; // Replace with actual wallet address
  };

  const handleConnectWallet = async () => {
    try {
      // Connect the user's TON wallet
      const address = await connectTonWallet();

      // Save wallet address in state
      setWalletAddress(address);

      // Replace this with the actual Telegram user ID, if you have it from user authentication
      const telegramId = "<TELEGRAM_USER_ID>";

      // Send wallet address and Telegram ID to the bot's endpoint
      await fetch('https://your-bot-api.com/connect-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telegramId: telegramId,
          walletAddress: address,
        }),
      });

      alert('Wallet connected successfully!');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet');
    }
  };

  return (
    <Container>
      <TopBar>
        <MapLink>Check the footprint map</MapLink>
        <MapIcon>➡️</MapIcon>
      </TopBar>

      <WalletButton onClick={handleConnectWallet}>
        <IoWalletOutline /> {walletAddress ? 'Wallet Connected' : 'Connect Wallet'}
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

// Styled Components (for styling)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  height: 100vh;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MapLink = styled.div`
  font-size: 16px;
  color: #fff;
`;

const MapIcon = styled.div`
  font-size: 16px;
  color: #fff;
`;

const WalletButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffc107;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
`;

const PointsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #fff;
`;

const PawIcon = styled.div`
  margin-bottom: 10px;
`;

const Points = styled.div`
  font-size: 24px;
`;

const Rank = styled.div`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.secondary ? '#f8f9fa' : '#007bff')};
  color: ${(props) => (props.secondary ? '#333' : '#fff')};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
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
