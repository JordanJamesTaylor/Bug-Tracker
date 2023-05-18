import React, { Fragment } from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import BugList from '../components/BugList';

export default function Home() {
    return (
        <Fragment>
            <h1>HOME PAGE</h1>
            <Header />
            <Searchbar />
            <Sidebar />
            <BugList />
        </Fragment>
    );
};