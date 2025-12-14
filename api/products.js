import { Router } from 'express';
import { supabase } from './supabaseClient.js';

const router = Router();

/**
 * Listar todos os produtos
 */
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('produtos')
    .select('*')
    .order('criado_em', { ascending: false });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

export default router;
