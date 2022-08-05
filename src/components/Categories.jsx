import { useEffect } from 'react'
import styled from 'styled-components'
import useApi from '../hooks/useApi'
import CategoryItem from './CategoryItem'
import Loading from './Loading'
import Alert from './Alert'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {

  const [fetchData, { response, error, loading }] = useApi()

    useEffect(() => {
      fetchData('categories')
    }, [])

  return  (
    <Container>
      {loading ? <Loading /> : response.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
      {error && <Alert open={true} message={`url: ${error?.url} - error: ${error?.message}`} />}
    </Container>
  )
}

export default Categories