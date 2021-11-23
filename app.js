import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import mCategories from "./modles/modleCategories.js";
import mProducts from "./modles/modelProduct.js"
import numeral from 'numeral'


const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));

app.engine('handlebars', engine({
    helpers: {
        format_number(val) {
            return numeral(val).format('0,0');
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(async(req, res, next) => {
    //Taking all data
    res.locals.lcCategories = await mCategories.getRawData();
    console.log(res.locals.lcCategories);
    next();
})


app.get('/', async(req, res) => {
    //Taking data to render to homepage
    const Categories = await mCategories.getAllData();
    res.render('home', {
        Categories
    });
});



import categoriesRouter from "./routers/categories.router.js";
import productsRouter from "./routers/products.router.js";

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use('/public', express.static('public'));

const port = 3000;
app.listen(port, () => {
    console.log(`Listen at http://127.0.0.1:${port}`);
})