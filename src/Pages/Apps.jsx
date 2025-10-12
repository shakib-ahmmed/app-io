import { useState } from 'react';
import AppsCard from '../components/AppsCard';
import useApps from '../../public/Hooks/allapps';
import img from '../assets/App-Error.png'
import { Link } from 'react-router';

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

            <div className='flex justify-between w-full lg:px-60 p-6 items-center '>
                <h1 className='text-3xl font-semibold'>({searchedApps.length}) Apps Found</h1>
                <label className='input input-bordered'>
                    <input className='input'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="search"
                        placeholder='Search Apps' />
                </label>
            </div>

            {searchedApps.length === 0 ? (
                <div className='flex flex-col justify-center items-center h-screen'>
                    <img src={img} alt="App-Error.png" />
                    <h1 className='text-black text-[48px]  text-center'> OPPS!! APP NOT FOUND </h1>
                    <p className='text-[20px] text-center pb-3'>The App you are requesting is not found on our system.  please try another apps <br /> Thanks </p>
                    <Link to='/'>
                        <a className="btn bg-gradient-to-r from-[#5a22df]  to-[#9557eb] text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out ">
                            GO BACK! </a>
                    </Link>

                </div>) : (
                <>

                    <div className='grid grid-cols-1 md:grid-cols-2 mg:grid-col-2 lg:grid-cols-4 gap-4 pt-10'>
                        {searchedApps.map(apps => (
                            <div key={apps.id}>
                                <AppsCard apps={apps} />
                            </div>
                        ))}



                    </div>
                </>
            )
            }
        </div >
    )
}

export default Apps