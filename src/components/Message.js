import React from 'react';
import styled, {keyframes} from 'styled-components';
import { flash } from 'react-animations';
import './Message.module.css';

function Message (props){
        const Bounce = styled.div`animation 3s ${keyframes`${flash}`} infinite`;
        let name = props.match.params.name;
        console.log(name);
        return <Bounce><h1>Don't look, {name}!</h1></Bounce>
            
        
}
export default Message;