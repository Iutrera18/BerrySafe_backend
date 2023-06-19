const Router = require('koa-router');

const router = new Router();

router.post('/uploadimg', async (ctx) => {
  // Codigo para subir una foto a BDD
  try {
    const newImage = await ctx.orm.Image.create(ctx.request.body);
    ctx.body = newImage;
    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error;
  }
});

router.get('/img/:link', async (ctx) => {
  // Codigo para mostrar una foto por id
  try {
    const imageurl = await ctx.orm.Image.findOne({ where: { url: ctx.params.link } });
    if (imageurl) {
      ctx.body = imageurl;
    } else {
      ctx.body = "not-found";
    }
    ctx.status = 201
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('/savedimgs', async (ctx) => {
  // Codigo para mostrar todas las fotos
  try {
    const urls = await ctx.orm.Image.findAll();
    ctx.body = {
      report: "Bien",
      imgs: urls
    };
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('/delete/:link', async (ctx) => {
  // Codigo para borrar imagen de BDD
  try {
    const imageToDelete = await ctx.orm.Image.findByPk(ctx.params.link);
    if (imageToDelete) {
      imageToDelete.destroy();
      ctx.body = "Imagen eliminada exitosamente";
    } else {
      ctx.body = "not-found";
    }
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('/deleteall', async (ctx) => {
  try {
    const images = await ctx.orm.Image.findAll();
    console.log(images);
    for (let i = 0; i < images.length; i += 1) {
      await images[i].destroy();
    }
    ctx.body = { response: "Deleted succesfully" };
    ctx.status = 201;
  } catch (error) {
    ctx.body = error;
    console.log(error);
    ctx.status = 400;
  }
});

module.exports = router;
