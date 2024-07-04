import Tender from '../models/tenderModel.js';

export const createTender = async (req, res) => {
  const { title, description, deadline } = req.body;

  try {
    const tender = await Tender.create({ title, description, deadline, userId: req.userId });
    res.status(201).send(tender);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getTenders = async (req, res) => {
  try {
    const tenders = await Tender.findAll();
    res.status(200).send(tenders);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
