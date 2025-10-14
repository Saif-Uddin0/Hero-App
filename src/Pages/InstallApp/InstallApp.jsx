import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { getStoreApp, removeAppFromDb } from '../../Utility/AddToDb';
import InsallAppsShow from '../InsallAppsShow/InsallAppsShow';
import { ArrowBigDownDash } from 'lucide-react';
import { toast } from 'react-toastify';

const InstallApp = () => {

    const [sort , setSort] = useState('');

    const [installList, setInstalList] = useState([]);
    const data = useLoaderData();

    const loadInstallApp = () => {
        const storedApp = getStoreApp();
        const covertedStoreApp = storedApp.map(id => parseInt(id))
        const myIntallList = data.filter(apps => covertedStoreApp.includes(apps.id))
        setInstalList(myIntallList)
    }

    const preveiouspae = useNavigate()


    useEffect(() => {
        loadInstallApp()
    }, [])


    const handleUnistall = (id) => {
        toast('apps is unistalled')
        removeAppFromDb(id.toString())
        loadInstallApp();

        window.dispatchEvent(new Event("storage"));
    }


    const handleSort =(type) => {
            setSort(type)
            if (type === 'low-High'){
                const sortedByLowToH = [...installList].sort((a,b) => a.downloads - b.downloads);
                setInstalList(sortedByLowToH)
            }
            if( type === 'High-low'){
                const sortedByHtoL = [...installList].sort((a,b) => b.downloads - a.downloads);
                setInstalList(sortedByHtoL)
            }
    }


    return (
        <div className='mt-20'>

            <Suspense fallback={<span>Loading.....</span>}>
                {
                    installList.length <= 0 ? (
                        <div className='flex flex-col items-center justify-center space-y-8 sm:space-y-50 p-2'>
                            <h1 className='text-5xl font-bold text-center mt-10'>There is no any apps has <br /> been installed yet</h1>

                            <button onClick={() => preveiouspae(-2)} className=' hover:transition-transform hover:scale-110 duration-500 text-white  btn bg-purple-500 hover:bg-purple-700   font-medium px-4 py-2 rounded-lg max-w-xs'>Go Back</button>

                        </div>
                    ) : (<div className='space-y-2'>
                        <h1 className='text-3xl font-semibold text-center'>Your Installed Apps</h1>
                        <p className='text-sm text-center font-semibold text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                        <div>
                            <div className='flex justify-between items-center p-5'>
                                <h2>({installList.length}) Apps Found</h2>
                                <div className="dropdown dropdown-center">
                                    <div tabIndex={0} role="button" className="btn m-1">sort by:{sort? sort:''}<ArrowBigDownDash className='w-4 h-5'></ArrowBigDownDash></div>
                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box  flex flex-row   shadow-sm">
                                        <li><a onClick={() =>handleSort('low-High')}>low-High</a></li>
                                        <li><a onClick={() =>handleSort('High-low')}>High-low</a></li>
                                    </ul>
                                </div>
                            </div>
                            {
                                installList.map(singleApp => <InsallAppsShow key={singleApp.id} installList={installList} singleApp={singleApp}
                                    handleUnistall={handleUnistall}
                                ></InsallAppsShow>)
                            }
                        </div>
                    </div>)
                }
            </Suspense>
        </div>
    );
};

export default InstallApp;