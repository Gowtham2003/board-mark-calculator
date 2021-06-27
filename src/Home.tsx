import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps {}

export default function Home(props: HomeProps): ReactElement | null {
    return (
        <div className="container p-4 flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
            <ul className="flex flex-col divide divide-y">
                <li>
                    <div className="select-none cursor-pointer items-center p-4">
                        <Link
                            key="bio"
                            to="/bio"
                            className="font-medium dark:text-white"
                        >
                            Biology Group
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="select-none cursor-pointer  items-center p-4">
                        <Link
                            key="cs"
                            to="/cs"
                            className="font-medium dark:text-white"
                        >
                            Computer Science Group
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="select-none cursor-pointer items-center p-4">
                        <Link
                            key="ps"
                            to="/ps"
                            className="font-medium dark:text-white"
                        >
                            Pure Science Group
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}
