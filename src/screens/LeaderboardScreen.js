import React from 'react';
import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';
import { GiLaurelsTrophy } from 'react-icons/gi';

const LeaderboardScreen = () => {
  return (
    <Container>
      <TopBar>
        <MapLink>Check the footprint map</MapLink>
        <MapIcon>➡️</MapIcon>
      </TopBar>

      <TrophyIcon>
        <GiLaurelsTrophy size={50} />
      </TrophyIcon>

      <LeaderboardTitle>Leaderboard</LeaderboardTitle>

      <UserCount>Total: 30,452,010 users</UserCount>

      <LeaderboardCard>
        <UserDetails>
          <FaPaw size={24} />
          <Username>reutercom</Username>
        </UserDetails>
        <UserRank>#28,517,114</UserRank>
        <UserPoints>1,529 PAWS</UserPoints>
      </LeaderboardCard>

      <RankedList>
        <RankedItem>
          <FaPaw size={20} />
          <RankedUserInfo>
            <Username>imGet</Username>
            <UserPoints>72,729,032 PAWS</UserPoints>
          </RankedUserInfo>
          <RankIcon>🥇</RankIcon>
        </RankedItem>

        <RankedItem>
          <FaPaw size={20} />
          <RankedUserInfo>
            <Username>Pishnahad_Sup</Username>
            <UserPoints>57,642,584 PAWS</UserPoints>
          </RankedUserInfo>
          <RankIcon>🥈</RankIcon>
        </RankedItem>

        <RankedItem>
          <FaPaw size={20} />
          <RankedUserInfo>
            <Username>Esalat</Username>
            <UserPoints>49,256,421 PAWS</UserPoints>
          </RankedUserInfo>
          <RankIcon>🥉</RankIcon>
        </RankedItem>

        <RankedItem>
          <FaPaw size={20} />
          <RankedUserInfo>
            <Username>mehranseydi</Username>
            <UserPoints>48,601,772 PAWS</UserPoints>
          </RankedUserInfo>
          <UserRank>#4</UserRank>
        </RankedItem>
      </RankedList>
    </Container>
  );
};

export default LeaderboardScreen;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0e0e10;
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

const TrophyIcon = styled.div`
  color: #ffc107;
  margin-bottom: 10px;
`;

const LeaderboardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const UserCount = styled.p`
  color: #9a9a9a;
  font-size: 14px;
  margin-bottom: 20px;
`;

const LeaderboardCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222224;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Username = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const UserRank = styled.p`
  font-size: 14px;
  color: #9a9a9a;
`;

const UserPoints = styled.p`
  font-size: 14px;
  color: white;
`;

const RankedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const RankedItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c1c1e;
  padding: 15px;
  border-radius: 8px;
`;

const RankedUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RankIcon = styled.div`
  font-size: 16px;
`;
