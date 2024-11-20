import React from 'react'
import fetch from '@/lib/fetch'
import Link from 'next/link'
import Header from './(app)/Header'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

export const dynamic = 'force-dynamic'

const Home = async () => {
    const data = await fetch('/api/deal/list/today')
    const deals = data.deals

    return (
        <>
            <Header />
            <main className="w-full min-w-full bg-[#fafafa]">
                <div className="main-content my-5 w-full flex">
                    <div
                        className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-6 gap-4 px-2"
                    >
                        {deals.map((deal, dealIndex) => (
                            <div key={dealIndex}
                                className="break-inside-avoid overflow-hidden mb-4"
                                style={{ position: 'relative', padding: '12px', border: 'none', borderRadius: '8px', boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, .1), 0px 3px 10px 0px rgba(0, 0, 0, .1)', backgroundColor: '#fff' }}
                            >
                                {deal.photos.map((photo, photoIndex) => (
                                    <div key={photoIndex} className="break-inside-avoid">
                                        <img
                                            className="w-full object-cover cursor-pointer"
                                            src={photo}
                                            alt={`Deal photo ${photoIndex + 1}`}
                                        />
                                    </div>
                                ))}
                                <Separator className="my-1 w-[80%] margin-center" />
                                <div className="p-1 flex overflow-hidden whitespace-nowrap">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex items-center">
                                                    <i className="bi bi-pin-map-fill pr-1"></i>
                                                    {deal.stores.map((store, storeIndex) => (
                                                        <Link key={storeIndex} href={`/store/${store.id}`}
                                                            className="text[rgb(66, 66, 66)] underline"
                                                            style={{ fontSize: "0.875rem", fontWeight: 400, letterSpacing: 0, lineHeight: "1.25rem" }}>
                                                            <div className="text-sm truncate px-1 rounded">
                                                                {store.name}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {deal.stores.map((store, storeIndex) => (
                                                    <Link key={storeIndex} href={`/store/${store.id}`}
                                                        className="text[rgb(66, 66, 66)] underline"
                                                        style={{ fontSize: "0.875rem", fontWeight: 400, letterSpacing: 0, lineHeight: "1.25rem" }}>
                                                        <div className="text-sm truncate px-1 rounded">
                                                            {store.name}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
