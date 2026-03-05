export default function SummaryStats(){

 const stats = [
  {name:"Total Clonotypes", value:"1,245,890"},
  {name:"Unique CDR3s", value:"842,103"},
  {name:"Shannon Diversity", value:"12.45"},
  {name:"Simpson Index", value:"0.9982"},
 ]

 return(

  <div className="stats">

   {stats.map((s,i)=>(
    <div key={i} className="card">

     <p>{s.name}</p>
     <h2>{s.value}</h2>

    </div>
   ))}

  </div>

 )

}