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

router.get('/:id', (req, res) => {
    console.log(`GET /films/${req.params.id}`);
  
    const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);
  
    if (indexOfFilmFound < 0) return res.sendStatus(404);
  
    res.json(FILMS[indexOfFilmFound]);
  });


router.get('/', (req, res, next) => {
   const minimuduration = req.query['minimum-duration'] ?? undefined;
   const orderByTitle = req?.query?.order?.includes('title') ? req.query.order : undefined;
   const orderByChar = req.query.char ?? undefined;
   let filtre;
   let filtre2;

  if(orderByChar) {
    filtre2 = [];
    for (const film of FILMS) {
      console.log(film.title.charAt(0));
      if(film.title.charAt(0) == orderByChar) {
          filtre2.push(film);
      } 
  }
  res.json(filtre2 ?? FILMS);
  }
  else if(orderByTitle) {
    let orderedMenu;
    if (orderByTitle) orderedMenu = [...FILMS].sort((a, b) => a.title.localeCompare(b.title));
    if (orderByTitle === '-title') orderedMenu = orderedMenu.reverse();
    res.json(orderedMenu ?? FILMS);
  } 
  else{
    filtre = [];
    for (const film of FILMS) {
        if(film.duration >= minimuduration) {
            filtre.push(film);
        } 
    }
    res.json(filtre ?? FILMS);
  }
});


router.post('/', (req, res) => {
    const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
    const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;
  
    if (!budget || !duration) return res.sendStatus(400); // error code '400 Bad request'
  
    const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
    const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
    const nextId = lastId + 1;
  
    const newFilm = {
      id: nextId,
      title: title,
      duration: duration,
      budget: budget,
      link: link
    };
    FILMS.push(newFilm);
    res.json(newFilm);
  });
  

module.exports = router;
