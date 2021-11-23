import express from 'express'
import morgan from 'morgan'
import {engine} from 'express-handlebars'
import mCategories from "./modles/modleCategories.js";


const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended:true
}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', async (req, res)=> {
    //Taking data to render to homepage
    const Categories = await mCategories.getAllData();
    res.render('home', {
        Categories
    });
});

import categoriesRouter from "./routers/categories.router.js";

app.use("/categories", categoriesRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Listen at http://127.0.0.1:${port}`);
})