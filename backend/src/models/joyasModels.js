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

  export { getJoyasLimitModel, getJoyasFilterModel};