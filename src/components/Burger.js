import React from 'react';
import { useState } from "react"
import styled from "styled-components";

const Button = styled.button`
  display: none;

  @media (max-width: 426px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
    background: none;
    margin-right: 30px;
    font-size: 40px;
    color: white;
    cursor: pointer;
  }
`

const Burger = (props) => {
    const { open, setOpen } = useState(false)
   
    return (
        <div>
            <Button onClick={() => setOpen(!open)} >☰</Button>
        </div>
    );
};

export default Burger;