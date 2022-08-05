import { useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import useApi from '../hooks/useApi';
import Loading from './Loading';
import Alert from './Alert';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {

  const [fetchData, { response, error, loading }] = useApi()

  useEffect(() => {
    fetchData('popular-products')
  }, [])

  return (
    <Container>
        {loading ? <Loading /> : response.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
        {error && <Alert open={true} message={`url: ${error?.url} - error: ${error?.message}`} />}
    </Container>
  )
}

export default Products