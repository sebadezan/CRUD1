var pool = require('./bd');  // Verifica que este módulo funcione correctamente

async function getNovedades() {
  try {
    var query = 'SELECT * FROM novedades';
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.error('Error al obtener novedades:', error);
    throw error; 
  }
}

async function deleteNovedadesById(id) {
  try {
    var query = 'DELETE FROM novedades WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
  } catch (error) {
    console.error('Error al eliminar novedad:', error);
    throw error;
  }
}

module.exports = { getNovedades, deleteNovedadesById };
