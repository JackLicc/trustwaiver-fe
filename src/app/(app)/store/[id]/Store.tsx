'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Store = ({ data }) => {

    const router = useRouter()
    const deals = data.deals
    const store = data.store

    return (
        <>
            <main className="mt-1 w-full min-w-full">
                <div className="w-full text-gray-500 text-sm p-2">
                    <span onClick={() => router.back()} className='cursor-pointer hover:text-blue-500'><i className="bi bi-arrow-left "></i> 返回</span> | <Link href="/store/list" className="hover:text-blue-500">店铺特价</Link> <i className="bi bi-chevron-compact-right"></i> 特价详情
                </div>
                <div className="w-full mb-4 pt-2">
                    <div className="flex items-start px-1 pl-0 bg-white shadow-md overflow-hidden">
                        <div
                            className="w-1/3 h-28 w-32 bg-cover bg-center"
                            style={{ backgroundImage: `url(${store.photos[0]})` }}
                        >
                        </div>
                        <div className="w-2/3 px-3 py-2">
                            <h1 style={{ fontSize: "1.2rem", fontWeight: 400, letterSpacing: 0, lineHeight: "1.35rem" }}>
                                <span>{store.name}</span>
                            </h1>

                            <div className='mt-1'>
                                <a
                                    href={"http://maps.google.com/?q=" + encodeURIComponent(store.address)}
                                    target='_blank'
                                    className="text-[rgb(66, 66, 66)] underline"
                                    style={{ fontSize: "0.875rem", fontWeight: 400, letterSpacing: 0, lineHeight: "1.25rem" }}
                                >
                                    <address className="not-italic"><i className="bi bi-pin-map-fill mr-1"></i> {store.address}</address>
                                </a>
                            </div>

                            <div className='mt-1'>
                                <span
                                    className="text-[rgb(66, 66, 66)] underline"
                                    style={{ fontSize: "0.875rem", fontWeight: 400, letterSpacing: 0, lineHeight: "1.25rem" }}
                                >
                                    <i className="bi bi-telephone-fill mr-1"></i> {store.phone}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content w-full mt-3">
                    {deals.length > 0 ? (
                        <>
                            <div className="w-full px-3 mb-2">
                                <h2 className="text-base font-semibold">
                                    今日特价 <span className="inline-block w-6 h-6 text-center text-white bg-red-500 rounded-full">{deals.length}</span>
                                </h2>
                            </div>
                            <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-6 gap-4 px-2">
                                {deals.flatMap((deal) => deal.photos).map((photo, index) => (
                                    <div key={index} className="mb-4 break-inside-avoid">
                                        <img
                                            className="w-full object-cover mb-4 cursor-pointer"
                                            src={photo}
                                            alt={`Deal photo ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="w-full px-3 mb-2 h-40 flex items-center justify-center">
                            <h4 className="text-base">
                                今日无特价活动
                            </h4>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default Store