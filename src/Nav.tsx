import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
export interface NavProps {}

export default function Nav(props: NavProps): ReactElement | null {
    return (
        <nav className="bg-blue-600 p-5 flex justify-between">
            <Link
                to="/"
                className="font-medium text-white cursor-pointer font-bold"
            >
                Home
            </Link>
            <a
                href="https://github.com/Gowtham2003/board-mark-calculator"
                className="font-medium text-white cursor-pointer font-bold mt-1"
            >
                <FiGithub />
            </a>
        </nav>
    );
}
