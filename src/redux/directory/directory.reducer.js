import img1 from './images/blog-1.jpg';
import img2 from './images/blog-3.jpg';
import img3 from './images/item-11.jpg';
import img4 from './images/img_bg_2.jpg';
import img5 from './images/person1.jpg';
import img6 from './images/item-10.jpg';
import img7 from './images/men.jpg';
import img8 from './images/person3.jpg';

const INITIAL_STATE = {
    sections : [
        {
            title: 'hats',
            imageUrl: img1,
            id:1,
            linkUrl : 'shop/hats'
        },

        {
            title: 'Sneakers',
            imageUrl: img3,
            id:2,
            linkUrl : 'shop/sneakers'
        },

        {
            title: 'Bags',
            imageUrl: img4,
            id:3,
            linkUrl : 'shop/woman'
        },

        {
            title: 'Woman',
            imageUrl: img5,
            id:4,
            linkUrl : 'shop/woman'
        },

        {
            title: 'Man',
            imageUrl: img2,
            id:5,
            linkUrl : 'shop/man'
        },

        {
            title: 'G-shock',
            imageUrl: img6,
            id:6,
            linkUrl : 'shop/gshock'
        },
        {
            title: 'shoes',
            imageUrl: img7,
            size: 'large',
            id:7,
            linkUrl : 'shop/shoes'
        },
        {
            title: 'women',
            imageUrl: img8,
            size: 'large',
            id:8,
            linkUrl : 'shop/woman'
        }
    
        ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer; 