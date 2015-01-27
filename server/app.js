var express = require('express');
var app = express();

require('node-jsx').install({extension:'.jsx'});

var port = process.env.PORT || 8000;

app.set('views', __dirname+'/views');

app.use('/scripts', express.static(__dirname+'/scripts'));

app.use('/', function(req, res){
  res.render('index.ejs')
  //ReactAsync.renderToStringAsync(App(),function(err, markup) {
  //  res.send('<!DOCTYPE html>'+markup);
  //});
});

console.log('Server running on port %d', port);
app.listen(port);