import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import Balloon from './Balloon'
import Dialogue from './Dialogue'

import BackgroundImgMobile from '../../assets/game-screen-mobile.jpg'
import BackgroundImg from '../../assets/game-screen.jpg'

const GameOnScreen = () => {
  const place = useSelector((store) => store.maze.coordinates)

  return (
    <Main>
      <Header>
        <HeartContainer>
          <Heart>
            <span role='img' aria-label='heart'>
              ❤️
            </span>
          </Heart>
          <Heart>
            <span role='img' aria-label='heart'>
              ❤️
            </span>
          </Heart>
          <Heart>
            <span role='img' aria-label='heart'>
              ❤️
            </span>
          </Heart>
        </HeartContainer>
        <Location>COORDINATES - {place}</Location>
      </Header>
      <Balloon />
      <Dialogue />
    </Main>
  )
}

export default GameOnScreen

const Main = styled.div`
  position: relative;
  background-image: url(${BackgroundImgMobile});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  padding: 65px 20px 0 20px;
    @media (min-width: 768px) {
      padding: 85px 20px 0 20px;
    }
    @media (min-width: 1025px) {
      background-image: url(${BackgroundImg});
    }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 40px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.397);
    @media (min-width: 768px) {
      height: 55px;
    }
`
const HeartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
    @media (min-width: 768px) {
      width: 15%;
    }
    @media (min-width: 1025px) {
      width: 10%;
    }
`
const Heart = styled.p`
  font-size: 16px;
  margin: 0;
    @media (min-width: 768px) {
      font-size: 22px;
    }
    @media (min-width: 1025px) {
      font-size: 26px;
    }
`
const Location = styled.p`
  font-family: "Press Start 2P", cursive;
  font-size: 12px;
  color: #fff;
  margin: 0;
    @media (min-width: 768px) {
      font-size: 18px;
    }
`
