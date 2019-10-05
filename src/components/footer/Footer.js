import React from 'react';


const Footer = (props) => (
    <div className={props.className}>
        <footer >
            <p>{props.authorName} &copy; {props.year}</p>
        </footer>
    </div>
);

export default Footer;