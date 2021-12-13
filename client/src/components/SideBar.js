import React from 'react'
import styled from 'styled-components'

function SideBar() {
    return (
        <SideNav>
            SideBar
        </SideNav>
    )
}

export default SideBar

const SideNav = styled.nav `
position: absolute;
left: 0;
height: 100%;
width: 10%;
background-color: #323232;

`