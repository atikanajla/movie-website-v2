# instalation

1. npm install react-router-dom
2. npm install react-icons --save
3. npm install react-slick --save
    - npm install slick-carousel --save
    ### Add link di index.html
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    ### import di index.js
    import "slick-carousel/slick/slick.css"; 

# .env.local 
-berisi file yang menyimpan API KEY
-diletakkan di rood dari aplikasi react
-aplikasi harus di restart untuk mengimplementasikan perubahan pada file tsb
-cara mengakses variable dari file env tsb:
    ${process.env.REACT_APP_TMDB_KEY}