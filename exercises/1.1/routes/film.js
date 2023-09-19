var express = require('express');
var router = express.Router();

const FILMS = [
    {
        id: 1,
        title: 'Frozen',
        duration: 66,
        budget: 4,
        link: 'https://fr.wikipedia.org/wiki/La_Reine_des_neiges_(film,_2013)'
    },

    {
        id: 2,
        title: 'Spiderman',
        duration: 125,
        budget: 15,
        link: 'https://fr.wikipedia.org/wiki/Spider-Man'
    },

    {
        id: 3,
        title: 'Pokemon',
        duration: 101,
        budget: 9,
        link: 'https://fr.wikipedia.org/wiki/Pok%C3%A9mon,_le_film_:_Mewtwo_contre-attaque'
    }
];


router.get('/', (req, res, next) => {
    return res.json(FILMS);
  });

module.exports = router;
