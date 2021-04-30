import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const GameOverScreen = () => {

    return (
        <Main>
            <Border>
                <GameOverTitle>
                    GAME OVER
                </GameOverTitle>
                <GameOverText>
                    You went in circles and came back to where you started.
                    Better luck next time...
                </GameOverText>
                <Link to="/">
                <RestartButton
                    type='button'
                    className='nes-btn'
                    /* onClick= {} */> {/*Gör en funktion som går tillbaka till initialState*/}
                    TRY AGAIN
                </RestartButton>
                </Link>
            </Border>
        </Main>
    )
}

export default GameOverScreen

const Main = styled.main`
    background-color: #000;
    height: 100vh;
    padding: 25px;
`
const Border = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: dashed grey 4px;
    width: 100%;
    height: 100%;
    padding: 20px;
`
const GameOverTitle = styled.h1`
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    width: 100%;
    text-align: center;
`
const GameOverText = styled.p`
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    font-size: 12px;
    width: 100%;
    text-align: center;
`
const RestartButton = styled.button`
    font-family: 'Press Start 2P', cursive;
    margin-top: 45px;
`