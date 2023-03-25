const StatCard = ({title, number}) => {
  return (
    <div>
        <div className="bg-glass max-w-sm h-56 p-4 flex flex-col justify-evenly">
            <h2 className="text-center text-2xl font-semibold">{title}</h2>
            <h1 className="text-center text-4xl font-extrabold my-6">{number}</h1>
        </div>
    </div>
  )
}

export default StatCard;