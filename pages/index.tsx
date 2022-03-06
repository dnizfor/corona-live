import { Container, CssBaseline } from '@mui/material'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import CountrySelect from '../components/CountrySelect'
import LineChart from '../components/LineChart'
import Box from '@mui/material/Box';

type Icountry = {
  "Country": string,
  "Slug": string,
  "ISO2": string,

}

const Home = ({ countries }: InferGetStaticPropsType<typeof getStaticProps>) => {



  return (
    <div>

      <Container>

        <CssBaseline />

        <Box sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height:"100vh",
          justifyContent:"center",
          alignItem :"center",
        }}>

          <CountrySelect data={countries} />

          <LineChart />

        </Box>



      </Container>




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
