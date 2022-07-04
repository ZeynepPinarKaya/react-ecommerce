import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
`

const Announcement = () => {
  return (
    <Container>
      Super Sale! All products are 25% OFF
    </Container>
  )
}

export default Announcement
