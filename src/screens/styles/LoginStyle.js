import React from 'react'
import styled from 'styled-components/native'

export const Header = styled.View`
    height: 200px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const Label = styled.Text`
    margin: 10px 40px;
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
`

export const InputText = styled.TextInput`
    margin: 0px 40px;
    padding: 8px;
    border: solid 1px #fff;
    border-radius: 5px;
    font-size: 20px;
`

export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    margin: 22px 40px;
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