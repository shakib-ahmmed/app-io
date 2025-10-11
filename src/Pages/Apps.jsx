import { useState } from 'react';
import AppsCard from '../components/AppsCard';
import useApps from '../../public/Hooks/allapps';


const Apps = () => {

    const { apps } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term
        ? apps.filter(apps =>
            apps.title.toLocaleLowerCase().includes(term)
        )
        : apps

    console.log(searchedApps)


    return (
        <div className='flex flex-col items-center justify-center text-center pb-10 bg-gray-100'>
            <h1 className='text-[48px] flex-col block gap-0 font-bold'>
                Our All Applications
            </h1>
            <p className='text-gray-500 text-[20px]'>
                Explore All Apps on the Market developed by us. We code for Millions
            </p>

            <div className='flex justify-between py-5 items-center '>
                <h1 className='text-3xl font-semibold'>({searchedApps.length}) Apps Found</h1>
                <label className='input input-bordered'>
                    <input className='input'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="search"
                        placeholder='Search Apps' />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mg:grid-col-2 lg:grid-cols-4 gap-4 pt-10'>
                {searchedApps.map(apps => (
                    <div key={apps.id}>
                        <AppsCard apps={apps} />
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Apps