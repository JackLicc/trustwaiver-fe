'use client'


import useSWR from 'swr'
import usePersistedState from '@/hooks/persistState';
import axios from '@/lib/axios';

const initializer = async () => {
    const [bookmarks, _] = usePersistedState('bookmarks', []);

    if (bookmarks.length === 0) {
        const { data: bookmarks, error, mutate } = useSWR('/api/bookmarks', () =>
            axios.get('/api/bookmarks')
                .then(res => res.data)
                .catch(error => {
                })
        );
    }

    return bookmarks || [];
}

const bookmarkReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.bookmark];
        case 'REMOVE':
            return state.filter((bookmark) => bookmark.name !== action.name);
        case 'UPDATE':
            return state.map((bookmark, index) => {
                if (index === action.index) {
                    return action.bookmark;
                }

                return bookmark;
            });
        default:
            return state
    }
}

const addBookmark = (bookmark) => ({
    type: 'ADD',
    bookmark
});

const removeBookmark = (name) => ({
    type: 'REMOVE',
    name
});

const updateBookmark = (index, bookmark) => ({
    type: 'UPDATE',
    index,
    bookmark
});

export { bookmarkReducer, initializer, addBookmark, removeBookmark, updateBookmark};
