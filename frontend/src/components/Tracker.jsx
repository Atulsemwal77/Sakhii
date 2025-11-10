import CyclePhasePanel from "./CyclePhasePanel"
import HealthTrackerPanel from "./HealthTrackerPanel"
import StatsLogPanel from "./StatsLogPanel"



const Tracker = () => {
  return (
    <div className="max-w-screen-2xl mx-auto" >
     <CyclePhasePanel />
     <StatsLogPanel />
     <HealthTrackerPanel />
    </div>
  )
}

export default Tracker
