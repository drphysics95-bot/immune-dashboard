import {PieChart,Pie,Cell} from "recharts"

const data=[
 {name:"Clone A",value:12},
 {name:"Clone B",value:8},
 {name:"Others",value:80},
]

const colors=["#2563eb","#10b981","#9ca3af"]

export default function ClonalExpansion(){

 return(

  <div className="card">

   <h2>Top Clonal Expansion</h2>

   <PieChart width={300} height={300}>

    <Pie
     data={data}
     dataKey="value"
     innerRadius={60}
     outerRadius={100}
    >

    {data.map((entry,i)=>(
     <Cell key={i} fill={colors[i]}/>
    ))}

    </Pie>

   </PieChart>

  </div>

 )

}