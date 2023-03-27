const StatisticCard = ({stat}) => {
  return (
    <>
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{stat.num}</dt>
        <dd className="font-light text-gray-500">{stat.title}</dd>   
    </>
  )
}

export default StatisticCard;   