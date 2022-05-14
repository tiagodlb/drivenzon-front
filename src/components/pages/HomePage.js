import styled from "styled-components";


export default function HomePage() {


    return(
        <Grid>
            <Header className="rows">
                <div>
                    <span className="brand">Drivazon</span>
                </div>
                <div>
                    <span>Cart</span>
                    <span>Sign In</span>
                </div>
            </Header>
            <Main className="rows center">
                <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                    <li>Product 4</li>
                    <li>Product 5</li>
                </ul>
            </Main>
            <Footer className="rows center">
                All right reserved
            </Footer>
        </Grid>
    )
}


const Grid = styled.div`
    display: grid;
    grid-template-areas:
    'Header'
    'Main'
    'Footer';
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr 5rem;
    height: 100vh;

    .rows{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    span:hover{
        color: #746267;
    }

    Header span{
        color: #fffdfd;
        padding: 1rem;
    }

    span.brand{
        color: #fffdfd;
        font-size: 3rem;
        font-weight: bold;
    }

    .rows.center{
        justify-content: center;
    }
`

const Header = styled.header`
    grid-area: Header;
    background-color: #EB3C85;
`

const Main = styled.main`
    grid-area: Main;
    padding: 1rem;

`

const Footer = styled.footer`
    grid-area: Footer;
    background-color: #EB3C85;
    color: #fffdfd;
`

