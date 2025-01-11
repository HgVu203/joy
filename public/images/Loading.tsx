import React from 'react'

const Loading = ( { className }: { className?: string } ) =>
{
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g id="icon-left-xl">
                <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M11 2C11 1.44772 11.4477 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 11.4477 1.44772 11 2 11C2.55228 11 3 11.4477 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C11.4477 3 11 2.55228 11 2Z" fill="#D0FBEE" />
            </g>
        </svg>

    )
}

export default Loading
