import AppsCard from '../components/AppsCard';
import useApps from '../../public/Hooks/allapps';

const Apps = () => {
    const { apps } = useApps()
    return (
        <div className='flex flex-col items-center justify-center text-center pb-10 bg-gray-100'>
            <h1 className='text-[48px] flex-col block gap-0 font-bold'>
                Trending Apps
            </h1>
            <p className='text-gray-500 text-[20px]'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className='flex justify-end  py-5 items-center '>

                <button className='btn btn-outline'>Search</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mg:grid-col-2 lg:grid-cols-4 gap-4 pt-10'>
                {apps.map(apps => (
                    <AppsCard key={apps.id} apps={apps} />
                ))}
            </div>

        </div >
    )
}

export default Apps