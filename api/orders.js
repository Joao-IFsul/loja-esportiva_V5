import { Router } from 'express';
import { supabase } from './supabaseClient.js';

const router = Router();

/**
 * Criar pedido
 */
router.post('/', async (req, res) => {
  const { usuario_id, total, status } = req.body;

  const { data, error } = await supabase
    .from('pedidos')
    .insert([
      {
        usuario_id,
        total,
        status: status || 'pendente'
      }
    ]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
});

/**
 * Listar pedidos de um usuário
 */
router.get('/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;

  const { data, error } = await supabase
    .from('pedidos')
    .select('*')
    .eq('usuario_id', usuario_id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

export default router;