import {BarChart,Bar,XAxis,YAxis,Tooltip} from "recharts"

const data=[
 {gene:"TRBV20-1",value:45},
 {gene:"TRBV7-9",value:28},
 {gene:"TRBV5-1",value:18},
 {gene:"TRBV2-1",value:9},
]

export default function GeneUsageChart(){

 return(

  <div className="card">

   <h2>V Gene Usage</h2>

   <BarChart width={500} height={300} data={data}>
     <XAxis dataKey="gene"/>
     <YAxis/>
     <Tooltip/>
     <Bar dataKey="value" fill="#2563eb"/>
   </BarChart>

  </div>

 )

}