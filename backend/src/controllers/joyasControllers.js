import { getJoyasLimitModel, getJoyasFilterModel} from '../../src/models/joyasModels.js';
import HATEOAS from '../helpers/hateoas.js';
import { findError } from '../utils/utils.js';

const getJoyasLimitController = async (req, res) => {
    try {
      const { order_by, limit, page } = req.query;
      const results = await getJoyasLimitModel(order_by, limit, page);
      const styleHateos = await HATEOAS(results)
      res.status(200).json(styleHateos);
    } catch (error) {
      const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
    }
  };

  const getJoyasFilterController = async (req, res) => {
    try {
        const query = req.query;
        const data = await getJoyasFilterModel(query);
        res.status(200).json(data);
    }
    catch (error) {
      const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
    }
};

  export { getJoyasLimitController, getJoyasFilterController};