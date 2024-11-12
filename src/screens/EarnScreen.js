import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/background.jpg';

const EarnScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'One falls, one rises', points: 250, claimed: false },
    { id: 2, title: 'Put 🐾 in your name', points: 5000, claimed: false },
    { id: 3, title: 'Boost PAWS channel', points: 2500, claimed: false },
  ]);

  const handleClaim = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, claimed: !task.claimed } : task
      )
    );
  };

  return (
    <Container>
      <TopBar>
        <FootprintMapButton>Check the footprint map</FootprintMapButton>
      </TopBar>
      <Title>TASKS</Title>
      <Subtitle>GET REWARDS FOR COMPLETING QUESTS</Subtitle>
      <TabMenu>
        <Tab>Limited</Tab>
        <Tab active>In-game</Tab>
        <Tab>Partners</Tab>
      </TabMenu>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskInfo>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskPoints>+ {task.points} PAWS</TaskPoints>
            </TaskInfo>
            <ClaimButton
              claimed={task.claimed}
              onClick={() => handleClaim(task.id)}
            >
              {task.claimed ? 'Claim' : 'Start'}
            </ClaimButton>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default EarnScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${backgroundImg});
  color: #fff;
  height: 100vh;
  overflow-y: auto;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
`;

const FootprintMapButton = styled.button`
  background: #3d9df6;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: #a0a0a0;
  margin-top: 5px;
`;

const TabMenu = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Tab = styled.button`
  background: ${({ active }) => (active ? '#fff' : '#333')};
  color: ${({ active }) => (active ? '#000' : '#fff')};
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

const TaskList = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e1e1e;
  padding: 15px;
  border-radius: 10px;
`;

const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const TaskPoints = styled.span`
  font-size: 0.9rem;
  color: #a0a0a0;
  margin-top: 5px;
`;

const ClaimButton = styled.button`
  background: ${({ claimed }) => (claimed ? '#3d9df6' : '#ffffff')};
  color: ${({ claimed }) => (claimed ? '#ffffff' : '#000000')};
  border: none;
  border-radius: 15px;
  padding: 5px 15px;
  cursor: pointer;
  font-weight: bold;
`;
