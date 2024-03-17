import { pool } from '../../src/db/db.js';
import format from 'pg-format';
import filterQuery from '../helpers/filters.js';

const getJoyasLimitModel = async ( order_by = "id_ASC", limit = 1, page = 1 ) => {
      const [field, direction] = order_by.split("_");
      const offset = (page) * limit;
  const formatQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    field,
    direction,
    limit,
    offset
  );
  
  const response = await pool.query(formatQuery);
  return response.rows;
  };


  const getJoyasFilterModel = async (filter) => {
    const { query, values } = await filterQuery("inventario", filter);
    const formatQuery = {
        text: query,
        values: values,
    };
    const response = await pool.query(formatQuery);
    return response.rows;
};

  // const getJoyasFilterModel = async ({ precio_max, precio_min, categoria, metal }) => {
    
  //   const query = 'SELECT * FROM inventario WHERE true ';
  //     const queryParams = [];
  
  //     if (precio_max) {
  //       query += 'AND precio <= $1 ';
  //       queryParams.push(precio_max);
  //     }
  //     if (precio_min) {
  //       query += 'AND precio >= $2 ';
  //       queryParams.push(precio_min);
  //     }
  //     if (categoria) {
  //       query += 'AND categoria = $3 ';
  //       queryParams.push(categoria);
  //     }
  //     if (metal) {
  //       query += 'AND metal = $4 ';
  //       queryParams.push(metal);
  //     }
  
  //     const { rows } = await pool.query(query, queryParams);
  
  //     const joyas = rows.map(joya => {
  //       return {
  //         id: joya.id,
  //         nombre: joya.nombre,
  //         categoria: joya.categoria,
  //         metal: joya.metal,
  //         precio: joya.precio,
  //         stock: joya.stock,
  //         links: {
  //           self: `/inventario/${joya.id}`
  //         }
  //       };
  //     });
  
  //     res.json({
  //       data: joyas
  //     });
  
  // };

  export { getJoyasLimitModel, getJoyasFilterModel};