import express from "express";
import conn from "./dbCon.js";
import product from "./schema.js";
const app = express();
const port = 3000;
conn('mongodb+srv://dhirajmokal13:dhiraj@cluster0.rae84.mongodb.net/forums?retryWrites=true&w=majority')
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const result = await product.find();
    let no = result.length;
    //console.log(no)
    res.render("index", { title: "Main page", no: no, product_list: result });
})

app.get('/admin', (req, res) => {
    res.render("admin", { title: "admin Panel", perform: "" });
})

app.get('/editproduct', async (req, res) => {
    const result = await product.find();
    res.render("editproduct", { title: "Update Product", product_list: result });
})
app.post('/addproducts', async (req, res) => {
    const { pname, pprice, pdesc } = req.body;
    const pr = new product({
        pname: pname,
        pprice: pprice,
        pdesc: pdesc,
    })
    await pr.save();
    res.render('admin', { title: "Admin Panel", perform: true })
})
app.post('/updateproduct', async (req, res) => {
    const { pname, pprice, pdesc, id } = req.body;
    let rest = await product.updateOne({_id:id}, {$set:{pname:pname,pprice:pprice,pdesc:pdesc}});
    res.redirect('/editproduct');
})
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})