import Resume from '../assets/Bryan_Ho_Resume.pdf'
import { useEffect, useState } from 'react';
import useMountTransition from './useMountTransition';

export default function About() {
    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(true, 100);

    useEffect(() => {
        setIsMounted(true)
    })

    return (hasTransitionedIn || isMounted) && (
        <div id="main"
            className={`animate-section ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
                <h1 className="text-6xl font-bold text-slate-700 my-4">
                Hi! I'm Bryan.
                </h1>
                <div className="flex my-6">
                    <div className="bg-slate-700 w-[8px] rounded"></div>
                    <div className="pl-6 text-justify">
                        <p className="text-slate-700">
                        I'm a software engineer based in Los Angeles, California.
                        Currently, I work at <a href="https://ploomber.io" target="_blank" rel="noopener noreferrer"><b>Ploomber.</b></a><br></br>
                        <br></br>
                        I love making software that makes people happy.
                        Check out all the stuff I've made! Or make sure that I actually have a degree (I do).
                        Or shoot me an email via the links at the top right. Do whatever you want.
                        But that's pretty much all you can do on this site.
                        </p>
                    </div>
                </div>
                <div className="my-8 text-right">
                <btn className="bg-slate-700 text-sm text-slate-200 p-3 rounded-md 
                                hover:bg-slate-300 hover:outline hover:outline-2 hover:outline-slate-700 hover:text-slate-700
                                transition:all"> 
                    <a href={Resume} target="_blank" rel="noreferrer" className="py-8">
                    View My Resume
                    </a>
                </btn>
            </div>
        </div>
    )
    
}