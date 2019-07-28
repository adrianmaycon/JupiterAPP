import React from 'react'
import styled from 'styled-components/native'

export const Header = styled.View`
    height: 150px;
    justify-content: center;
    align-items: center;
    margin-top: 25%;
`

export const Label = styled.Text`
    margin: 3% 10%;
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
`

export const InputText = styled.TextInput`
    margin: 0px 10%;
    padding: 8px;
    border: solid 1px #FFF;
    border-radius: 5px;
    font-size: 20px;
    color: #FFF;
`

export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    margin: 22px 10%;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
`

export const Footer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8px;
`