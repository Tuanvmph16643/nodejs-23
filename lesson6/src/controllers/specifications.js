import Specifications from '../models/specifications'
import Joi from 'joi'

const spec = Joi.object({
    name: Joi.string().required(),
    attributes: Joi.array()
      .items(
        Joi.object({
          code: Joi.string().required(),
          name: Joi.string().required(),
          value: Joi.string().required(),
        })
      )
      .min(1)
      .required(),
  });

export const get = async (req, res) => {
    try {
        const data = await Specifications.find()
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
        const data = await Specifications.create(body)
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
      const data = await Specifications.findById(id);
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
       
        const data = await Specifications.findByIdAndUpdate(id, body);
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
      const data = await Specifications.findByIdAndRemove(id);
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