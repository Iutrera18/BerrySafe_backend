const Router = require('koa-router');

const router = new Router();

router.post('/uploadimg', async (ctx) => {
  // Codigo para subir una foto a BDD
})

router.get('/img/:id', async (ctx) => {
  // Codigo para mostrar una foto por id
})

router.get('/savedimgs', async (ctx) => {
  // Codigo para mostrar todas las fotos
  try {
    ctx.body = "Bien";
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
})

router.delete('/delete/:id', async (ctx) => {
  // Codigo para borrar imagen de BDD
})
module.exports = router;
