const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { check, validationResult } = require('express-validator/check');
const Item = require('../../models/Item');

// @route     Get api/items
// @desc      Get all items
// @access    Public
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();

    if (items.length === 0) {
      return res.status(404).json({ msg: 'No items found' });
    }

    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     Get api/items/:month/:year
// @desc      Get items by month/year
// @access    Public
router.get('/:month/:year', async (req, res) => {
  try {
    const items = await Item.find({
      expMonth: req.params.month,
      expYear: req.params.year
    });
    //Todo: if(!items)

    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/items
// @desc      Create item
// @access    Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('sku', 'Please include a valid Sku Code')
      .isNumeric()
      .isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      sku,
      expDate,
      expMonth,
      expYear,
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
        expMonth,
        expYear,
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
  }
);

// @route     Patch api/items/50/:id
// @desc      Toggle reduce item by 50
// @access    Public
router.patch('/50/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item.reducedToHalf = !item.reducedToHalf;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Item not found' });
    }
  }
});

// @route     Patch api/items/90/:id
// @desc      Toggle reduce item by 90
// @access    Public
router.patch('/90/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item.reducedTo10 = !item.reducedTo10;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Item not found' });
    }
  }
});

// @route     DELETE api/items/:id
// @desc      Delete item
// @access    Public
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    await item.remove();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Item not found' });
    }
  }
});

module.exports = router;
