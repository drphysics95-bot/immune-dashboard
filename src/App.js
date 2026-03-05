import "./styles.css"

import UploadPanel from "./components/UploadPanel"
import SummaryStats from "./components/SummaryStats"
import GeneUsageChart from "./components/GeneUsageChart"
import CDR3Histogram from "./components/CDR3Histogram"
import ClonalExpansion from "./components/ClonalExpansion"
import RecentJobs from "./components/RecentJobs"

function App() {

  return (
    <div className="container">

      <h1>Immune Repertoire Dashboard</h1>

      <div className="grid2">

        <UploadPanel/>
        <ClonalExpansion/>

      </div>

      <SummaryStats/>

      <div className="grid2">

        <GeneUsageChart/>
        <CDR3Histogram/>

      </div>

      <RecentJobs/>

    </div>
  )

}

export default App