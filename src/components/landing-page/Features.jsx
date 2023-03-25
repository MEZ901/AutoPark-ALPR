import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HistoryIcon from '@mui/icons-material/History';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
        icon: <SafetyCheckIcon color='primary' />,
        title: 'Safety and security',
        description: 'Our system uses advanced security measures to ensure the safety of your vehicle and personal belongings while parked. From security cameras to on-site personnel, you can have peace of mind knowing that your vehicle is in good hands.'
    },
    {
        icon: <LocalParkingIcon color='primary' />,
        title: 'Hassle-free parking',
        description: 'Our system uses Automatic License Plate Recognition technology to make parking a breeze. No need to worry about tickets or parking meters!'
    },
    {
        icon: <SyncAltIcon color='primary' />,
        title: 'Real-time availability',
        description: 'Our system provides real-time updates on available parking spots, so you can easily find a spot without driving around in circles.'
    },
    {
        icon: <HistoryIcon color='primary' />,
        title: 'Vehicle entry and exit tracking',
        description: 'Keep track of your vehicle\'s entry and exit times, giving you peace of mind and ensuring the security of your vehicle.'
    },
    {
        icon: <TagFacesIcon color='primary' />,
        title: 'Easy reservations',
        description: 'Our user-friendly interface makes it easy to reserve a parking spot in advance, so you never have to worry about finding a spot when you arrive.'
    },
    {
        icon: <SupportAgentIcon color='primary' />,
        title: '24/7 customer support',
        description: 'Our support team is available round the clock to help you with any issues or questions you may have.'
    },
  ]; 

  return (
    <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Enjoy Seamless Parking Management</h2>
                <p className="text-gray-500 sm:text-xl">Effortlessly manage your parking needs with these powerful features.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {features.map((feature, index) => (
                    <div key={index}>
                        <FeatureCard feature={feature} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features;