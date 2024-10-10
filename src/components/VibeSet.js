import { useEffect, useState } from 'react';
import useMountTransition from './useMountTransition';

export default function VibeSet() {
    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(true, 100);

    useEffect(() => {
        setIsMounted(true)
    })

    return (hasTransitionedIn || isMounted) && (
        <div className={`py-8 sm:py-0 animate-section ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
            <h1 className="text-4xl font-bold text-slate-700 py-2">
                    VibeSet
            </h1>
            <h3 className="text-slate-700 font-bold">
                Full-stack Application | JavaScript
            </h3>
            <div className="flex my-6">
                <div className="bg-slate-700 w-[2px] rounded"></div>
                <div className="pl-6 text-justify">
                    <p className="text-slate-700 mb-4">
                        Integrated Spotify API to perform authentication, generate playlists, and share user profiles.
                    </p>
                    <p className="text-slate-700 my-4">
                        Constructed a full-stack web application using React, Node, and Express.
                    </p>
                    <p className="text-slate-700 mt-4">
                        Wrote a specialized algorithm to sort a playlist of songs by fluctuating energy level.
                    </p>
                </div>
            </div>
            <div className="text-right mt-8">
                <btn className="bg-slate-700 text-sm text-slate-300 p-3 rounded-md 
                                hover:bg-slate-300 hover:outline hover:outline-2 hover:outline-slate-700 hover:text-slate-700
                                transition:all">
                    <a href="https://github.com/bryannho/vibeset" target="_blank" rel="noreferrer" className="py-8">
                        View On Github
                    </a>
                </btn>
            </div>
        </div>
    )
}