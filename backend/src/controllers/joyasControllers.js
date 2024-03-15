import { getJoyasLimitModel, getAllJoyasModel} from '../../src/models/joyasModels.js';
import paginator from '../helpers/paginator.js';

const getJoyasLimitController = async (req, res) => {
    try {
      const { order_by, limit, page } = req.query;
      const results = await getJoyasLimitModel(order_by, limit, page);
      res.status(200).json({ results: results });
    } catch (error) {
      const errorFound = findError(error.code);
      return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
    }
  };

  const getJoyasHateoas = async (req, res) => {
    try {
      const results = await getAllJoyasModel();
      const resultHateoas = await HATEOAS( 'results', results );
      res.status(200).json({ results: resultHateoas });
    } catch (error) {
      const errorFound = findError(error.code);
      return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
    }
  };

  const getPaginator = async (req, res) => {
    try {
      const { items, page } = req.query;
      const results = await getAllJoyasModel();
      const paginationData = paginator(results, items, page);
      res.status(200).json(paginationData);
    } catch (error) {
      console.log("error", error);
      const errorFound = findError(error.code);
      return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
    }
  };

  export { getJoyasLimitController, getJoyasHateoas};