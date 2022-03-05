import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Icountry = {
    "Country": string,
    "Slug": string,
    "ISO2": string,
  
  }

export default function LineChart({ data }: {data : Icountry[]}) {

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

    if(typeof window !== "undefined"){

        return(<Chart options={options} series={series} type="line" width={1500} height={320} />)

    }
    return (<div>Windows undefıned</div>)

}
