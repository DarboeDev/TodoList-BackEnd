const express = require('express');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const connectDB = require('../connection');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  // Use express.urlencoded() instead of body-parser
// Routes
app.use('/tasks', taskRoutes); // Use '/tasks' as the base path for task-related routes
app.use('/categories', categoryRoutes); // Use '/categories' as the base path for category-related routes



const server = http.createServer(app);



connectDB().then(() => {
  server.listen(8000, () => {
    console.log('Server running on port: 8080');
  });
}).catch(err => {
  console.error(err);
}) ;
