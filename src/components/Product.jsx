import styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined} from '@material-ui/icons'
import { Link } from "react-router-dom";
import FavoriteButton from './FavoriteButton';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0, 0.2) ;
    z-index: 3;
    display:flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    margin: 5px;
    width: calc(25% - 10px);
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }

    svg {
        color: initial !important;
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to={`/detail/${item.id}`}>
                    <SearchOutlined/>
                </Link>
            </Icon>
            <FavoriteButton productId={item.id} big />
        </Info>
    </Container>
  )
}

export default Product