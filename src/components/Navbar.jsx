import React from 'react'
import styled from 'styled-components';
import { Search } from "@material-ui/icons"
import Badge from '@material-ui/core/Badge';
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom"
import { mobile } from "../responsive"



const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    ${mobile({ padding: "10px 0" })}
`
const Left = styled.div`
    flex:1;
    display: flex;  
`

const Language = styled.span`
    font-size: 14px;
    display: flex;   
    align-items: center;
    ${mobile({ display: "none" })}
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
    ${mobile({ width: "70px" })}
`

const Center = styled.div`
    flex:1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px",  })}
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link style={{ textDecoration: "none", color: "Black" }} to='/Home'>
                        <Logo>
                            YOOX.
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    <MenuItem>
                        <Badge badgeContent={8} color="primary">
                            <MenuItem><Link to="/register">REGISTER</Link></MenuItem>
                            <MenuItem><Link to="/login">SIGN IN</Link></MenuItem>
                            <MenuItem>
                                <Link to="/cart">
                                    <ShoppingCartOutlined />
                                </Link>
                            </MenuItem>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
