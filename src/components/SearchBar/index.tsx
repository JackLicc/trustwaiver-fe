'use client';

import React, { useState } from 'react';
import { Search, Loader, Star, SearchCheck } from 'lucide-react';
import axios from '@/lib/axios';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Site } from './constants';
import { BookmarkContext, BookmarkDispatchContext } from '@/providers/BookmarkProvider';
import { addBookmark as _addBookmark, removeBookmark as _removeBookmark } from '@/reducers/bookmarkReducer';

const SearchBar = () => {
    const doneTypingInterval = 300;

    const [open, setOpen] = useState(false);
    const [searching, setSearching] = useState(false);
    const [query, setQuery] = useState('');
    const [typingTimer, setTypingTimer] = useState(null);

    const [results, setResults] = useState({
        chains: [],
        sites: [],
        tags: []
    });

    const bookmarks = React.useContext(BookmarkContext);
    const dispatch = React.useContext(BookmarkDispatchContext);

    const addBookmark = (e: any, site: Site) => {
        e.preventDefault();
        console.log(bookmarks)


        dispatch(_addBookmark(site))

        console.log(bookmarks)

        axios.post('/api/bookmark/sync', { bookmarks }).then((response) => {
        }).catch((error) => {
            console.log(error)
        })
    }

    const removeBookmark = (e: any, site: Site) => {
        e.preventDefault();
        dispatch(_removeBookmark(site.name))

        axios.post('/api/bookmark/sync', { bookmarks }).then((response) => {
        }).catch((error) => {
            console.log(error)
        })
    }

    const search = () => {
        if (query.length < 2) {
            setResults({
                chains: [],
                sites: [],
                tags: []
            })
            return
        }

        setSearching(true)

        axios.post('/api/search', {
            query: query
        }).then((response) => {
            setResults(response.data)
        }).catch((error) => {
        }).finally(() => {
            setSearching(false)
        })
    }

    const onKeyup = () => {
        clearTimeout(typingTimer);
        setTypingTimer(setTimeout(search, doneTypingInterval));
    }

    const onKeydown = () => {
        clearTimeout(typingTimer);
    }

    const renderSearchResults = () => {
        if (results.chains.length === 0 && results.sites.length === 0) {
            return (
                <div className="text-[#6a6a6a] flex flex-row items-center justify-center min-h-[150px]">
                    <SearchCheck className="size-8 mr-2" /> <span className="text-[1.2rem]">Type to search...</span>
                </div>
            )
        }

        return (
            <>
                {results.sites.length > 0 && (
                    results.sites.map((site: Site) => {
                        const isBookmarked = bookmarks.find((item) => item.name === site.name);
                        const star = isBookmarked ?
                            <Star className="size-5 text-black cursor-pointer" fill="black"
                                onClick={(e) => removeBookmark(e, { name: site.name, logo: site.logo, url: site.url })}
                            /> :
                            <Star className="size-5 text-black cursor-pointer" fill="white"
                                onClick={(e) => addBookmark(e, { name: site.name, logo: site.logo, url: site.url })}
                            />

                        return (
                            <a href={site.url}
                                className="rounded cursor-pointer flex items-center justify-between p-4 bg-white focus-visible:ring-0 hover:outline hover:outline-blue-600 hover:outline-4 m-1 mb-3">
                                <div className="flex items-center w-full">
                                    <img src={site.logo} alt={site.name} className="w-8 h-8 rounded-full" />
                                    <div className="ml-4">
                                        <div className="text-sm">{site.name}</div>
                                    </div>
                                    <div className="ml-auto bg-[#e6e6e6] hover:bg-[#949494] hover:text-white p-1">
                                        {star}
                                    </div>
                                </div>
                            </a>
                        )
                    })
                )}

                {results.chains.length > 0 && (
                    results.chains.map(chain => (
                        <a href={`/chain/${chain.short_name}`}
                            className="rounded cursor-pointer flex items-center justify-between p-4 bg-white focus-visible:ring-0 hover:outline hover:outline-blue-600 hover:outline-4 m-1 mb-3">
                            <div className="flex items-center w-full">
                                <img src={chain.logo} alt={chain.name} className="w-8 h-8 rounded-full" />
                                <div className="ml-4">
                                    <div className="text-sm">{chain.name}</div>
                                </div>
                            </div>
                        </a>
                    ))
                )}
            </>
        )
    }

    return (
        <div className="bg-white relative pointer-events-auto">
            <Dialog open={open} onOpenChange={(v) => setOpen(v)}>
                <DialogTrigger asChild>
                    <Button className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 bg-white hover:bg-white rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
                            <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                            </path>
                            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                        </svg>Search<span className="ml-auto p-1 flex-none text-xs font-semibold border">/</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[625px] m-0 p-0 rounded-0 border-0">
                    <div className="relative w-full items-center">
                        <div className="w-full relative">
                            <input onKeyUp={onKeyup} onKeyDown={onKeydown} onChange={e => setQuery(e.target.value)} id="search" type="text" placeholder="Search..."
                                autoComplete="off"
                                className="pl-10 h-14 text-medium w-full border-0 rounded-0 focus-visible:ring-0 hover:outline-none outline-none" />

                            <span className="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                                {!searching ? <Search className="size-6 text-muted-foreground" /> : <Loader className="size-6 text-muted-foreground" />}
                            </span>
                        </div>
                        <div className="w-full min-h-[150px] max-h-[700px] bg-[#e6e6e6] p-4 overflow-y-auto">
                            {renderSearchResults()}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SearchBar;