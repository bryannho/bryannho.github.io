import { useEffect, useState } from 'react';
import useMountTransition from './useMountTransition';

export default function FTAT() {
    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(true, 100);

    useEffect(() => {
        setIsMounted(true)
    })

    return (hasTransitionedIn || isMounted) && (
        <div className={`py-8 sm:py-0 animate-section ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
            <h1 className="text-4xl font-bold text-slate-700 py-2">
                Faculty Teaching Assignment Tracker
            </h1>
            <h3 className="text-slate-700 font-bold">
                Full-stack Application | JavaScript
            </h3>
            <div className="flex my-6">
                <div className="bg-slate-700 w-[6px] rounded"></div>
                <div className="pl-6 text-justify">
                <p className="text-slate-700 mb-4">
                    Web system designed for the USC Computer Science Department to coordinate and match faculty to course teaching assignments. The application consists of a dynamic web interface connected to a Google Sheets datastore to be used by non-technical staff.
                </p>
                <p className="text-slate-700 my-4">
                    Overhauled legacy web system using React and Google API to improve efficiency, security, and user-experience.
                </p>
                <p className="text-slate-700 mt-4">
                    Reduced process estimated time to completion by 50% and eliminated nearly 100% of errors.
                </p>
                </div>
            </div>
        </div>
    )
}