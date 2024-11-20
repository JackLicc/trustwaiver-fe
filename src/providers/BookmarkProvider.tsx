'use client'

import React, { createContext, useReducer } from 'react'
import { bookmarkReducer, initializer } from '@/reducers/bookmarkReducer'

export const BookmarkContext = createContext(null)
export const BookmarkDispatchContext = createContext(null)

const BookmarkProvider = ({ children }) => {
    const [bookmarks, dispatch] = useReducer(bookmarkReducer, [], initializer)

    return (
        <BookmarkContext.Provider value={bookmarks}>
            <BookmarkDispatchContext.Provider value={dispatch}>
                {children}
            </BookmarkDispatchContext.Provider>
        </BookmarkContext.Provider>
    )
}

export default BookmarkProvider