var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');  // Corrección en la ruta

router.get('/', async function (req, res, next) {
  try {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      novedades
    });
  } catch (error) {
    console.error('Error al obtener novedades:', error);
    res.status(500).send('Error al cargar las novedades');
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.error('Error al eliminar la novedad:', error);
    res.status(500).send('Error al eliminar la novedad');
  }
});

module.exports = router;
