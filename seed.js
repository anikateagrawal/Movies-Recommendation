const mongoose=require('mongoose');
const movies=require('./models/movies.js');

mongoose.connect('mongodb+srv://Anikate7316ag:Anikate%4025@cluster0.ofjnmbo.mongodb.net/moviesDb').then(()=>console.log('DB Connected')).catch((e)=>console.log(e));

const series=[
    {
        name: 'Money Heist',
        date: 2016,
        rating: 8.2,
        watched: false
      },
      {
        name: 'The Witcher',
        date: 2022,
        rating: 9.2,
        watched: true
      },
      {
        name: 'Lucifer',
        rating: 9,
        date: 2018,
        watched: true
      },
      {
        name: 'friends',
        date: 2018,
        rating: 9.8,
        watched: false,
        __v: 0
      }
]

movies.insertMany(series);