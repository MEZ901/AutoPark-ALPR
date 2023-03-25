import { useSelector } from "react-redux";
import { StatCard } from "../../components/stats";

const Stats = () => {
  const { numberOfVehiclesInGarage } = useSelector((state) => state.vehicles);
  const TOTAL_CAPACITY = 500;
  return (
    <div>
        <h1 className="my-5 text-4xl font-bold text-center">Stats</h1>
        <div className="flex gap-9 flex-wrap justify-center mt-5">
            <StatCard title='Total capacity of the garage' number={TOTAL_CAPACITY} />
            <StatCard title='The current number of the vehicles in the garage' number={numberOfVehiclesInGarage} />
        </div>
    </div>
  )
}

export default Stats;