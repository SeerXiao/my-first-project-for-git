


const initialState = {
    posts: [
        {"id": "1", "title": "Lorem", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "22/10/2020", "hints": "20", "creator": "Andrey Yakov", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"},
        {"id": "2", "title": "Lorem", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "15/02/2008", "hints": "880", "creator": "Ivan Ivanov", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"},
        {"id": "3", "title": "Lorem", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "18/01/2008", "hints": "38", "creator": "SeerXiao", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"},
        {"id": "4", "title": "Lorem", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "01/12/2009", "hints": "90", "creator": "Kirill stepanov", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"},
        {"id": "5", "title": "Lorem", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "07/03/2021", "hints": "3", "creator": "Ivan Ivanov", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"}
    ],

}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};



export default newsReducer;