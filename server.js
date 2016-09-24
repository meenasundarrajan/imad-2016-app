var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'articleone':{
    title:'article-one',
    heading:'MY ARTICLE-ONE',
    date:'01-Oct-2016',
    content:'<p> hi this is article one .article two and article three also will represented in following pages..................</p>'
},
  'articletwo':{
    title:'article-two',
    heading:'MY ARTICLE-TWO',
    date:'01-Sep-2016',
    content:'<p> hi this is article one .article two and article three also will represented in following pages..................</p>'
},
    'articlethree':{
        title:'article-three',
    heading:'MY ARTICLE-THREE',
    date:'01-NOV-2016',
    content:'<p> hi this is article one .article two and article three also will represented in following pages..................</p>' 
        
    },
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;


var htmlTemplate=`<!DOCTYPE html>
    <title>
        ${title}
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
    
    <div class=container>
        <div>
    <a href="/">Home</a>
</div>
    ${heading} 
    <div>
        ${date}
    </div>

<p>
    ${content}
</p>

</div>
</html>
`;
return htmlTemplate;
}

 app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
