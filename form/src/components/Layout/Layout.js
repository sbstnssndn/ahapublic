import React from 'react';

const Layout = (props) => (
    <React.Fragment>
        <main>
            {props.children}
        </main>

        <div>Footer</div>
    </React.Fragment>
)

export default Layout;