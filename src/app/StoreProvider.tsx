"use client"
import { makeStore, type AppStore } from '@/lib/store'
import React from 'react'
import { Provider } from 'react-redux';

const StoreProvider = ( { children }: { children: React.ReactNode } ) =>
{
    const storeRef = React.useRef<AppStore>( null )
    if ( !storeRef.current )
    {
        storeRef.current = makeStore();
    }
    return (
        <Provider store={ storeRef.current }>
            { children }
        </Provider>
    )
}

export default StoreProvider
