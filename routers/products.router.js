import express from 'express'
import mProducts from "../modles/modelProduct.js";

const app = express.Router();

app.get('/', (req, res) => {
    res.send('abc');
});

app.get('/:id', async(req, res) => {
    const ID = req.params.id;
    const products = await mProducts.getDataWithCatID(ID);

    res.locals.lcCategories.forEach(element => {
        if (element.CatID === +ID)
            element.isActive = true;
    });

    res.render('product', {
        products,
        ID
    })
});

app.get('/user/:id', async(req, res) => {
    const ID = req.params.id;
    const products = await mProducts.getDataWithCatID(ID);

    res.locals.lcCategories.forEach(element => {
        if (element.CatID === +ID)
            element.isActive = true;
    });

    res.render('productUser', {
        products,
        ID
    })
})

export default app;