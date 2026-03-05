export default function RecentJobs(){

 const jobs=[
  {file:"B_cell_repertoire.tsv",status:"Success"},
  {file:"Lung_TCR.fastq",status:"Running"},
  {file:"Control_sample.fasta",status:"Success"},
 ]

 return(
  <div className="card">
   <h2>Recent Jobs</h2>
   <table width="100%">
    <thead>
     <tr>
      <th>File</th>
      <th>Status</th>
     </tr>
    </thead>

    <tbody>

     {jobs.map((j,i)=>(
      <tr key={i}>
       <td>{j.file}</td>
       <td>{j.status}</td>
      </tr>
     ))}

    </tbody>

   </table>

  </div>

 )

}