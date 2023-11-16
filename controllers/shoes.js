var shoes = require('../models/shoes');

// List of all shoes
exports.shoes_list = async function(req, res) {
    try{
    theshoes = await shoes.find();
    res.send(theshoes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// VIEWS
// Handle a show all view
exports.shoes_view_all_Page = async function(req, res) {
    try{
        theshoes = await shoes.find();
    res.render('shoes', { title: 'shoes Search Results', results: theshoes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


    // Handle shoes create on POST.
exports.shoes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new shoes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"shoes_type":"goat", "cost":12, "size":"large"}
    document.shoes_brand = req.body.shoes_brand;
    document.shoes_quantity = req.body.shoes_quantity;
    document.shoes_cost = req.body.shoes_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){S
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    
// List of all shoes
//exports.shoes_list = function(req, res) {
//res.send('NOT IMPLEMENTED: shoes list');
//};
// for a specific shoes.
exports.shoes_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await shoes.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle shoes create on POST.
//exports.shoes_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: shoes create POST');
//};
// Handle shoes delete on DELETE.
exports.shoes_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await shoes.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle shoes update form on PUT.
exports.shoes_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await shoes.findById( req.params.id)
// Do updates of properties
if(req.body.shoes_brand)
toUpdate.shoes_brand = req.body.shoes_brand;
if(req.body.shoes_quantity) toUpdate.shoes_quantity = req.body.shoes_quantity;
if(req.body.shoes_cost) toUpdate.shoes_cost = req.body.shoes_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle a show one view with id specified by query
exports.shoes_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await shoes.findById( req.query.id)
res.render('shoesdetail',
{ title: 'shoes Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a shoes.
// No body, no in path parameter, no query.
// Does not need to be async
exports.shoes_create_Page = function(req, res) {
console.log("create view")
try{
res.render('shoescreate', { title: 'shoes Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};



// Handle building the view for updating a shoes.
// query provides the id
exports.shoes_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await shoes.findById(req.query.id)
    res.render('shoesupdate', { title: 'shoes Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    // Handle a delete one view with id from query
exports.shoes_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await shoes.findById(req.query.id)
    res.render('shoesdelete', { title: 'shoes Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    