import { Router } from 'express';
import { supabase } from './supabaseClient.js';

const router = Router();

router.post('/', async (req, res) => {
  const { nome, email } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nome, email }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
});

export default router;
