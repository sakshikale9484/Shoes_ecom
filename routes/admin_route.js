var express = require('express');
var exe = require('./../connection');

var router = express.Router();

router.get("/",function(req,res){
    res.render("admin/home.ejs")
});
router.get("/product_brands",async function(req,res){
    var sql = "select * from product_brands";
    var brands = await exe(sql)
    res.render("admin/product_brands.ejs",{brands})
});
router.post("/save_product_brand",async function(req,res){
    var product_brand_name = req.body.product_brand_name;
    var sql = "insert into product_brands (product_brand_name) values (?)";
    var result = await exe(sql,[product_brand_name])
    res.redirect("/admin/product_brands");

});

router.get("/product_styles", async function (req, res) {
    var sql = "SELECT * FROM product_styles";
    var styles = await exe(sql);
    res.render("admin/product_styles.ejs", { styles });
});

router.post("/save_product_style", async function (req, res) {

    var file_name = null;

    if (req.files && req.files.product_style_image) {
        file_name = Date.now() + "_" + req.files.product_style_image.name;

        await req.files.product_style_image.mv(
            "public/styles/" + file_name
        );
    }

    try {
        var sql = `
            INSERT INTO product_styles 
            (product_style_name, product_style_image) 
            VALUES (?,?)
        `;
        await exe(sql, [
            req.body.product_style_name,
            file_name
        ]);
    } catch (err) {
        console.log(err);
    }

    res.redirect("/admin/product_styles");
});


router.get("/product_types", async function (req, res) {
    var sql = "SELECT * FROM product_type";
    var types = await exe(sql);
    res.render("admin/product_types.ejs", { types });
});

router.post("/save_product_type", async function (req, res) {

    var file_name = null;

    if (req.files && req.files.product_type_image) {
        file_name = Date.now() + "_" + req.files.product_type_image.name;

        await req.files.product_type_image.mv(
            "public/types/" + file_name
        );
    }

    try {
        var sql = `
            INSERT INTO product_type 
            (product_type_name, product_type_image) 
            VALUES (?,?)
        `;
        await exe(sql, [
            req.body.product_type_name,
            file_name
        ]);
    } catch (err) {
        console.log(err);
    }

    res.redirect("/admin/product_types");
});
router.get("/add_products",function(req,res){
    res.render("admin/add_product.ejs")
})

module.exports = router;
