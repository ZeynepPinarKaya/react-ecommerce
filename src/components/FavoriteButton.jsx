import { useState } from 'react'
import { FavoriteBorderOutlined, FavoriteOutlined} from '@material-ui/icons'
import styled, { css } from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'

const Icon = styled.div`
    display: flex;
    cursor: pointer;
    background-color: white;
    align-items: center;
    justify-content: center;
    ${({ big }) =>
      big
        ? css`
            width: 40px;
            height: 40px;
            cursor: pointer;
            border-radius: 50%;
            margin: 10px;
          `
        : ''};
`

function FavoriteButton({ productId, big = false }) {
  const { setValue, getValue } = useLocalStorage()

  const [isFav, setIsFav] = useState((getValue('favorites') || []).includes(productId))

  const toggleFavorite = () => {
    setIsFav((prevIsFav) => {
        const favs = getValue('favorites') || []
        const newFavs = prevIsFav ? favs.filter((f) => f !== productId) : [...favs, productId]
        setValue('favorites', newFavs)
        return !prevIsFav
    })
  }

  return (
    <Icon onClick={toggleFavorite} big={big}>
        {isFav ? <FavoriteOutlined />: <FavoriteBorderOutlined/>}
    </Icon>
  )
}

export default FavoriteButton