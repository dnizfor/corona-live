import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import CountrySelect from '../components/CountrySelect'
import LineChart from '../components/LineChart'


type Icountry = {
  "Country": string,
  "Slug": string,
  "ISO2": string,

}

const Home = ({ countries }: InferGetStaticPropsType<typeof getStaticProps>) => {



  return (
    <div>

      <CountrySelect data={countries} />

      <LineChart/>


    </div>


  )
}

export const getStaticProps: GetStaticProps = async (context) => {


  const response = await fetch("https://api.covid19api.com/countries")

  const countries: Icountry[] = await response.json()



  return {
    props: {

      countries,

    }
  }
}




export default Home
