import React from 'react'
import styled from 'styled-components/native'

export const Bar = styled.View`
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    background-color: #7159C1;
    border-bottom-color: #634DA8;
    border-bottom-width: 1px;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    position: relative;
    padding-right: 20px;
`

export const TitleCenter = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
`