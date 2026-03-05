import {BarChart,Bar,XAxis,YAxis,Tooltip} from "recharts"

const data=[
 {len:"10",value:4},
 {len:"12",value:12},
 {len:"14",value:25},
 {len:"15",value:30},
 {len:"17",value:20},
 {len:"18",value:10},
]

export default function CDR3Histogram(){

 return(

  <div className="card">

   <h2>CDR3 Length Distribution</h2>

   <BarChart width={500} height={300} data={data}>
     <XAxis dataKey="len"/>
     <YAxis/>
     <Tooltip/>
     <Bar dataKey="value" fill="#3b82f6"/>
   </BarChart>

  </div>

 )

}