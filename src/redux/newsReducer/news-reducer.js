


const initialState = {
    posts: [
        {"id": "1", "contentType": "gallery", "title": "Gallery type", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "22/10/2020", "hints": "20", "creator": "Andrey Yakov", 
        "imgUrl": [
            "https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j",
            "https://www.schirn.de/fileadmin/SCHIRN/Magazin/Abbildungen_2018/Kontext/Wildnis/Cerdeira/header2_14_Wald_2.jpg",
            "https://i.pinimg.com/originals/e8/c0/e8/e8c0e8bc9bac9cd31463e134d7613579.jpg"
        ], "srcUrl": "#"},
        {"id": "2", "contentType": "audio", "title": "Audio type", "text": "Lorem iiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiii iiiiwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwww wwwwww psum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "15/02/2008", "hints": "880", "creator": "Ivan Ivanov", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"},
        {"id": "3", "contentType": "video", "title": "Video type", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "18/01/2008", "hints": "38", "creator": "SeerXiao", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"},
        {"id": "4", "contentType": "standart", "title": "Standart post", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "01/12/2009", "hints": "90", "creator": "Kirill stepanov", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"},
        {"id": "5", "contentType": "standart", "title": "Standart post", "text": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", "date": "07/03/2021", "hints": "3", "creator": "Ivan Ivanov", "imgUrl": ["https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/forest-footprint-banner3.jpg?h=33ea6421&itok=L8Kw2Z-j"], "srcUrl": "#"}
    ],

}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};



export default newsReducer;