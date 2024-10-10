import { useEffect, useState } from 'react';
import useMountTransition from './useMountTransition';

export default function Skills() {
    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(true, 100);

    useEffect(() => {
        setIsMounted(true)
    })

    return (hasTransitionedIn || isMounted) && (
        <div id="main"
            className={`animate-section ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
            <h1 className="text-3xl font-bold text-slate-700 my-2">
                Skills
            </h1>
            <div className="flex my-4">
                <div className="bg-slate-700 w-[2px] rounded"></div>
                <div className="pl-6 text-justify">
                    <p className="text text-slate-700 mb-2">
                        Programming Languages: Python, JavaScript, TypeScript, Java, SQL
                    </p>
                    <p className="text text-slate-700 my-2">
                        Frameworks: FastAPI, Flask, React, Node.js, SQLAlchemy, Pytest, PyTorch, Scikit-Learn, HTML5, CSS
                    </p>
                    <p className="text text-slate-700 mt-2">
                        Tools: AWS, Docker, MySQL, PostgreSQL, NoSQL, MongoDB, Git, Linux
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-3xl font-bold text-slate-700 my-2">
                    Education
                </h1>
                <div className="flex my-4">
                    <div className="bg-slate-700 w-[2px] rounded"></div>
                    <div className="pl-6 text-justify">
                        <p className="text text-slate-700 mb-2">
                            B.S. Computer Science | University of Southern California | GPA 3.7 | May 2022
                        </p>
                        <p className="text text-slate-700 mt-2">
                            M.S. Computer Science | University of Southern California | GPA 3.6 | December 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}