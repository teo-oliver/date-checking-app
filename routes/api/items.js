const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

// @route     Get api/items
// @desc      Get items
// @access    Public
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/items
// @desc      Create item
// @access    Public
router.post('/', async (req, res) => {
  const {
    name,
    sku,
    expDate,
    quantity,
    section,
    user,
    reduceToHalf,
    reduceto10
  } = req.body;

  try {
    let item = await Item.findOne({ name });
    if (item) {
      return res.status(400).json({
        errors: [{ msg: 'Item already logged' }]
      });
    }

    item = new Item({
      name,
      sku,
      expDate,
      quantity,
      section,
      user,
      reduceToHalf,
      reduceto10
    });

    await item.save();
    res.json(item);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
