import { useEffect, useState } from 'react';
import useMountTransition from './useMountTransition';

export default function AES() {
    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(true, 100);

    useEffect(() => {
        setIsMounted(true)
    })

    return (hasTransitionedIn || isMounted) && (
        <div className={`py-8 sm:py-0 animate-section ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
            <h1 className="text-4xl font-bold text-slate-700 py-2">
                Automated Essay Scoring Feedback Generator
            </h1>
            <h3 className="text-slate-700 font-bold">
                AI Application | Python
            </h3>
            <div className="flex my-6">
                <div className="bg-slate-700 w-[4px] rounded"></div>
                <div className="pl-6 text-justify">
                    <p className="text-slate-700 mb-4">
                        Designed a custom essay evaluation model that combined a Concurrent Neural Network, Long Short-Term Memory Model, and Attention Mechanism to achieve 27% improved performance over baselines.
                    </p>
                    <p className="text-slate-700 my-4">
                    Built a feedback model that provided actionable spelling and grammar critiques which increased essay scores by 2.4%.
                    </p>
                    <p className="text-slate-700 mt-4">
                    Trained and evaluated 4 baseline machine learning and deep learning essay evaluation models including Neural Networks, Regression Models, and Attention Models.
                    </p>
                </div>
            </div>
            <div className="text-right mt-8">
                <btn className="bg-slate-700 text-sm text-slate-300 p-3 rounded-md 
                                hover:bg-slate-300 hover:outline hover:outline-2 hover:outline-slate-700 hover:text-slate-700
                                transition:all">
                    <a className="py-8" href="https://github.com/bryannho/automated-essay-scoring" target="_blank" rel="noreferrer">
                        View On Github
                    </a>
                    
                </btn>
            </div>
        </div>
    )
}