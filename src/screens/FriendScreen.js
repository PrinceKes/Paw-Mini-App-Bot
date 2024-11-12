import React from 'react';
import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';
import backgroundImg from '../assets/background.jpg';

const FriendScreen = () => {
  return (
    <Container>
      <TopBar>
        <MapLink>Check the footprint map</MapLink>
        <MapIcon>➡️</MapIcon>
      </TopBar>

      <Title>Invite Friends</Title>
      <Subtitle>
        SHARE YOUR INVITATION LINK & GET 10% OF FRIEND'S POINTS
      </Subtitle>

      <InviteBox>
        <IconContainer>
          <FaPaw size={50} color="#555" />
          <FaPaw size={50} color="#333" />
        </IconContainer>
        <InviteText>There is nothing else. Invite to get more rewards.</InviteText>
      </InviteBox>

      <InviteButton>Invite</InviteButton>
    </Container>
  );
};

export default FriendScreen;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImg});
  color: white;
  height: 100vh;
  padding: 20px;
  overflow-y: scroll;
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

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  color: #9a9a9a;
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const InviteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222224;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const InviteText = styled.p`
  color: #9a9a9a;
  font-size: 14px;
  text-align: center;
`;

const InviteButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;
