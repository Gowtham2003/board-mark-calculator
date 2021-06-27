import React, { ReactElement } from 'react';

export interface NotFoundProps {}

export default function NotFound(props: NotFoundProps): ReactElement | null {
    return (
        <div className="bg-white dark:bg-gray-800 ">
            <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-gray-600 dark:text-white sm:text-4xl">
                    Oops, Somehow You Took The Wrong Path
                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0 mt-10">
                    <div className=" inline-flex rounded-md shadow">
                        <a
                            href="/"
                            type="button"
                            className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Go Back
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
