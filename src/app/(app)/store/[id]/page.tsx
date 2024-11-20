import React from 'react'
import fetch from '@/lib/fetch'
import Header from '../../Header'
import Store from './Store'

export const dynamic = 'force-dynamic'

async function getDealsToday(id: number) {
    const data = await fetch('/api/store/' + id + '/dealsToday', { cache: 'no-store' })
    return data
}


const Page = async ({ params }: { params: { id: number } }) => {

    const data = await getDealsToday(params.id)

    return (
        <>
            <Header />
            <Store data={data} />
        </>
    )
}

export default Page