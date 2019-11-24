import React from 'react';

class Footer extends React.Component {
    render () {
        const { current, onFilter} = this.props;
        const filters = [
            'All',
            'Active', 
            'Completed'
        ]
        const btns = filters.map((item, key) => 
            <button key={key} onClick={() => onFilter(key)} style={{color: current === key ? 'red' : 'black', margin: '4px 8px'}}>{item}</button>
        );
        return <div>
        <span>Show:</span>
        {btns}
        </div>;
    }
}

export default Footer;