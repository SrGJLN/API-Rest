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
      return res.status(500).json({ message: error.message });
    }
  };

  const getJoyasFilterController = async (req, res) => {
    try {
        const query = req.query;
        const data = await getJoyasFilterModel(query);
        res.status(200).json(data);
    }
    catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

  export { getJoyasLimitController, getJoyasFilterController};