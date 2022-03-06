import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import fetcher from "../helpers/fetcher"
import { useAppSelector } from '../redux/hooks'
import useSWR from 'swr';



type Icountry = {
  "Country": string,
  "Slug": string,
  "ISO2": string,

}

export default function LineChart() {

  const target = useAppSelector((state) => state.target.value)

  let { data, error } = useSWR(`https://api.covid19api.com/country/${target}`, fetcher)

  data = (data?.filter((data: any) => (new Date(data.Date).getDate() % 30 === 0)))

  
  const options = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: data?.map((data: any) => new Date(data.Date).toLocaleDateString('en-US'))
    }
  }

  const series = [{
    name: 'Active',
    data: data?.map((data: any) => data.Active)
  }, {
    name: 'Confirmed',
    data: data?.map((data: any) => data.Confirmed)
  }, {
    name: 'Recovered',
    data: data?.map((data: any) => data.Recovered)
  }]


  if (typeof window !== "undefined") {

    return (<Chart options={options} series={series} type="line" width={1500} height={320} />)

  }
  return (<div>Windows undefined</div>)

}
