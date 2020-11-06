 
// //const url = 'https://api.openweathermap.org/data/2.5/weather?q=Lahore&units=metric&appid=77f254ba41fa7cccc535ba5149bd7fb0';

// //long &clat wrong
// //const url = "http://api.openweathermap.org/data/2.5/weather?lat=31.497754&lon=&units=metric&appid=77f254ba41fa7cccc535ba5149bd7fb0";

// //long & lat right
// const url = "http://api.openweathermap.org/data/2.5/weather?lat=31.497754&lon=74.360106&units=metric&appid=77f254ba41fa7cccc535ba5149bd7fb0";
// request({url: url, json:true},(error,response)=>{

//     // console.log(response.body.main);
// //     const body=JSON.parse(response.body);
// //     console.log(body.main);
// if(error)
// {
//     console.log("Can't connect to server! check your connection");

// }
// else if(response.body.message){
//     console.log(response.body.message);

// }
// else{
// const temp = response.body.main.temp;
// const weather = response.body.weather[0].main;
// console.log(`It is currenlty ${temp} degrees out. The weather is basically ${weather}`);
// } 
// });

//  const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Lahore.json?access_token=pk.eyJ1IjoiYWxpaGFzbmFpbiIsImEiOiJja2d2dTB6OWYwMmZvMnRxdnZncWhuNzlrIn0.Z7DrnKh-D92oBrliaCjT4Q&limit=1';
//  request({url:url2 , json:true},(error,response)=>{

//     if(error)
//     {
//         console.log("Can't connect to server! check your connection");


//     }
//     else if(!response.body.features)
//     {
//         console.log("unable to find data on the loacation");

//     }
//     else{

//     const center = response.body.features[0].center;
//     console.log(center);
//     }

//  });


    const geocode = require('./utils/geocode.js');
    const openweather = require('./utils/openweather.js');


    const location = process.argv[2];
    if(location)
    {
geocode(location,(error,{latitude, longitude, location})=>{

    if(error)
    {
        return console.log(error);
    }
    
    openweather(latitude,longitude,(error,{temp, weather})=>{
        if(error)
        {
            return console.log(error);

        }

       console.log(location);
       console.log(`It is currenlty ${temp} degrees out. The weather is basically ${weather}`);
    });

});
    }
    else{
        console.log("Kindly provide a location");
    }



