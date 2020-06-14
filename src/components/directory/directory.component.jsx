import React from 'react';
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from  'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory  = ({ sections }) => {
    // constructor(){
    //     super ();

    //     this.state = {
    //      sections : [
    //         {
    //             title: 'hats',
    //             imageUrl: img1,
    //             id:1,
    //             linkUrl : 'shop'
    //         },

    //         {
    //             title: 'Sneakers',
    //             imageUrl: img3,
    //             id:2,
    //             linkUrl : ''
    //         },

    //         {
    //             title: 'Bags',
    //             imageUrl: img4,
    //             id:3,
    //             linkUrl : ''
    //         },

    //         {
    //             title: 'Woman',
    //             imageUrl: img5,
    //             id:4,
    //             linkUrl : ''
    //         },

    //         {
    //             title: 'Man',
    //             imageUrl: img2,
    //             id:5,
    //             linkUrl : ''
    //         },

    //         {
    //             title: 'robot',
    //             imageUrl: img6,
    //             id:6,
    //             linkUrl : ''
    //         },
    //         {
    //             title: 'robot',
    //             imageUrl: img7,
    //             size: 'large',
    //             id:7,
    //             linkUrl : ''
    //         },
    //         {
    //             title: 'robot',
    //             imageUrl: img8,
    //             size: 'large',
    //             id:8,
    //             linkUrl : ''
    //         }
        
    //         ]
    //     }
    // }

    
        return (
            <div className="directory-menu">
            {
                sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />))
            }
            </div>

        );

};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);

// {
//     this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
//     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl = {linkUrl} />))
// }