import React from 'react';
import img1 from './images/blog-1.jpg';
import img2 from './images/blog-3.jpg';
import img3 from './images/item-11.jpg';
import img4 from './images/img_bg_2.jpg';
import img5 from './images/person1.jpg';
import img6 from './images/item-10.jpg';
import img7 from './images/men.jpg';
import img8 from './images/person3.jpg';

import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component{
    constructor(){
        super ();

        this.state = {
         sections : [
            {
                title: 'hats',
                imageUrl: img1,
                id:1,
                linkUrl : 'shop'
            },

            {
                title: 'Sneakers',
                imageUrl: img3,
                id:2,
                linkUrl : ''
            },

            {
                title: 'Bags',
                imageUrl: img4,
                id:3,
                linkUrl : ''
            },

            {
                title: 'Woman',
                imageUrl: img5,
                id:4,
                linkUrl : ''
            },

            {
                title: 'Man',
                imageUrl: img2,
                id:5,
                linkUrl : ''
            },

            {
                title: 'robot',
                imageUrl: img6,
                id:6,
                linkUrl : ''
            },
            {
                title: 'robot',
                imageUrl: img7,
                size: 'large',
                id:7,
                linkUrl : ''
            },
            {
                title: 'robot',
                imageUrl: img8,
                size: 'large',
                id:8,
                linkUrl : ''
            }
        
            ]
        }
    }

    render (){
        return (
            <div className="directory-menu">
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />))
            }
            </div>

        );
    }

}

export default Directory;

// {
//     this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
//     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl = {linkUrl} />))
// }