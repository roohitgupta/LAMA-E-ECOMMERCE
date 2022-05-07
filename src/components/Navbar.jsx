import React from 'react'
import styled from 'styled-components';
import { Search } from "@material-ui/icons"
import Badge from '@material-ui/core/Badge';
import { ShoppingCartOutlined } from '@material-ui/icons'




const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`
const Left = styled.div`
    flex:1;
    display: flex;  
`

const Language = styled.span`
    font-size: 14px;
    display: flex;   
    align-items: center;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex:1;
    align-items: center;
    display: flex;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                        <SearchContainer>
                            <Input />
                            <Search style={{color:"gray"}} />
                        </SearchContainer>
                    </Language>
                </Left>
                <Center>
                    <Logo>
                        LAMA.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Badge badgeContent={8} color="primary">
                          <MenuItem>REGISTER</MenuItem>
                          <MenuItem>SIGN IN</MenuItem>
                          <MenuItem>
                            <ShoppingCartOutlined />
                          </MenuItem> 
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
