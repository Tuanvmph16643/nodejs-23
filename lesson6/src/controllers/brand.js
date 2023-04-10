import Brand from '../models/brand'

export const get = async (req, res) => {
    try {
        const data = await Brand.find()
        return res.send({
            data: data
        })
    } catch(err) {
        return res.send({
            message: err
        })
    }
}

export const create = async (req, res) => {
    try {
        const body = req.body
        const data = await Brand.create(body)
        res.send({
            message: "Thêm mới thành công",
            data: data
        })
    } catch(err) {
        return res.send({
            message: err
        })
    }
}

export const getById = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Brand.findById(id);
      res.send({
        message: "Get products successfully",
        data: data,
      });
    } catch (err) {
      res.status(500).send({
        message: err,
      });
    }
  };

  export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
       
        const data = await Brand.findByIdAndUpdate(id, body);
        if (data) {
          res.send({
            message: "Update successfully",
            data: data,
          });
        } else {
          res.status(400).send({
            message: "Product is not existed",
          });
        }
      }
     catch (err) {
      res.status(500).send({
        message: err,
      });
    }
  };
  
  export const remove = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Brand.findByIdAndRemove(id);
      if (data) {
        res.send({
          message: "Delete successfully",
          data: data,
        });
      } else {
        res.status(400).send({
          message: "Product is not existed",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err,
      });
    }
  };