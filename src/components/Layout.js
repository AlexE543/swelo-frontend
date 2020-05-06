import ReactRouter from './Routes';
import NavigationBar from './NavigationBar';
import React from 'react';


export default class Layout extends React.Component {

    render() {
    // const { classes } = this.props;

    return (
        <div>
            <NavigationBar></NavigationBar>
            <main>
                <ReactRouter></ReactRouter>
            </main>
        </div>
    )}
}