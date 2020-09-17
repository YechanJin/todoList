const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');

const indexRouter = require('./routes');
const taskRouter = require('./routes/task');
const app = express();
app.set('port', process.env.PORT || 8080);

sequelize.sync({force:false})
    .then(()=>{
        console.log("Connected with Database");
    })
    .catch((err)=>{
        console.error(err);
    });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/',indexRouter);
app.use('/tasks',taskRouter);

app.use((req,res,next)=>{
    res.status(404).send('Not Found');
});

app.listen(app.get('port'),() => {
    console.log(app.get('port'),' is waitting...');
});