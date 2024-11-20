import React from 'react'
import Header from '../../Header'
import fetch from '@/lib/fetch'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const StoreList = async () => {
    const data = await fetch('/api/store/list')
    const stores = data.stores

    return (
        <>
            <Header />
            <main className="mt-4 flex items-start w-full min-w-full">
                <div className="main-content min-w-[100%] w-[100%] flex">
                    <ul className="w-full flex flex-wrap px-4">
                        {stores.map((store) => {
                            return (
                                <li key={store.id} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                                    <Link href={`/store/${store.id}`}
                                        className="block rounded bg-white shadow-md hover:bg-gray-100 p-4 h-full">
                                        <span className="absolute top-0 left-0 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-br">
                                            {store.num_deals > 0 ? (
                                                <>
                                                    今日特价商品{store.num_deals}种
                                                </>
                                            ) : (
                                                <>
                                                    今日无特价活动
                                                </>
                                            )}
                                        </span>
                                        <img className="w-full h-32 object-cover mb-4" src={store.photos[0]} alt={`${store.name} photo`} />
                                        <span className="block text-center font-semibold">{store.name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default StoreList
