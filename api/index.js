import 'dotenv/config';
import express from 'express';

import productsRoutes from './products.js';
import ordersRoutes from './orders.js';
import usersRoutes from './users.js';

const app = express();
app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/users', usersRoutes);

export default app;