import express from 'express'
import mCategories from "../modles/modleCategories.js";

const router = express.Router();

router.get('/add', (req, res)=>{
    //render to new category
    res.render('addCategories');
})

router.post('/add', async (req,res)=>{
    //Taking data from request
    console.log(req.body);
    await mCategories.addNewData(req.body);
    //Render again categories add
    res.render('addCategories');
})


router.get('/adjust/:id', (req, res) => {
    res.render('adjustCategories');
});

router.get('/delete/:id', async (req, res)=> {
    //Update data
    await mCategories.deleteData(req.params.id);

    res.redirect('/');
})


router.post('/adjust/:id', async (req, res) => {
    //Set data
    const adjustCategory = req.body;
    adjustCategory.CatID = req.params.id;
    //Update data
    await mCategories.updateData(adjustCategory);

    res.redirect('/');

})

export default router;