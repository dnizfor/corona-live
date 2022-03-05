import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import useSWR from 'swr'
import CountrySelect from '../components/CountrySelect'
import LineChart from '../components/LineChart'
import fetcher from "../helpers/fetcher"

type Icountry = {
  "Country": string,
  "Slug": string,
  "ISO2": string,

}

const Home = ({ countries }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const [target, setTarget] = useState<string>("turkey")

  let { data, error } = useSWR(`https://api.covid19api.com/country/${target}`, fetcher)

  data = (data?.filter((data: any) => (new Date(data.Date).getDate() % 30 === 0)))

  return (
    <div>

      <CountrySelect data={countries} />

      <LineChart data={data}/>


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
