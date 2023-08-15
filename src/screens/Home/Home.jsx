import './Home.css'
import { Layout, DrinkCards } from '../../components'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <DrinkCards />
      </div>
    </Layout>
  )
}

export default Home
