import Device from "../models/device";
import Joi from "joi";

const specifications = Joi.object({
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

const images = Joi.object({
  base_url: Joi.string().required(),
  is_gallery: Joi.boolean(),
  label: Joi.string().allow(null),
  large_url: Joi.string().required(),
  medium_url: Joi.string().required(),
  position: Joi.string().allow(null),
  small_url: Joi.string().required(),
  thumbnail_url: Joi.string().required(),
});
// const Brand = Joi.object({});

const deVice = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  original_price: Joi.number().required(),
  description: Joi.string().required(),
  images: Joi.array().items(images).min(1).required(),
  brandId: Joi.object(),
  specifications: Joi.array().items(specifications).min(1).required(),
});

export const searchbyName = async (req, res) => {
  try {
    const name = req.query.name;
    const data = await Device.filter(function (item) {
      return item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    res.send(data);
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

export const searchbyDes = async (req, res) => {
  try {
    const des = req.query.descriptions;
    const data = await Device.filter(function (item) {
      return item.des.toLowerCase().indexOf(des.toLowerCase()) !== -1;
    });
    res.send(data);
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

export const get = async (req, res) => {
  try {
    // const data = await Device.find().populate('brandId');

    const { textSearch, sort, filter, pagination } = req.query

    const query = {}
    if (textSearch) {
        query["$text"] = {
            $search: textSearch
        }
    }

    const data = await Device.find(query).populate('brandId')

    res.send({
      message: "Get products successfully",
      data: data,
    });
    res.end()
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Device.findById(id).populate({
      path: 'brandId'
    });
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

export const create = async (req, res) => {
  try {
    const body = req.body;
    const { error } = deVice.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const data = await Device.create(body);
      res.send({
        message: "Create successfully",
        data: data,
      });
    }
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
    const { error } = deVice.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const data = await Device.findByIdAndUpdate(id, body);
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
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Device.findByIdAndRemove(id);
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
