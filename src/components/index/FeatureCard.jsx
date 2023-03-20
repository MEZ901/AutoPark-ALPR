const FeatureCard = ({feature}) => {
  return (
    <>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
            {feature.icon}
        </div>
        <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
        <p className="text-gray-500">{feature.description}</p>
    </>
  )
}

export default FeatureCard;