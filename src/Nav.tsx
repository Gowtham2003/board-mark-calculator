import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export interface NavProps {}

export default function Nav(props: NavProps): ReactElement | null {
    return (
        <nav className="bg-blue-600 p-5">
            <Link
                to="/"
                className="font-medium text-white cursor-pointer font-bold"
            >
                Home
            </Link>
        </nav>
    );
}
