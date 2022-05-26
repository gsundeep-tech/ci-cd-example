var express = require('express');
var router = express.Router();
const { MongoClient, ObjectId } = require('mongodb')

const url = 'mongodb://localhost:27017/audio'
const client = new MongoClient(url)
client.connect()

router.post('/upload', async function(req, res) {
  const file = req.files.file
  const database = client.db('audio')
  const raw = database.collection('raw')
  const result = await raw.insertOne({
    file: file
  })
  res.send(result)
})


router.post('/metadata', async function(req, res, next) {
  const database = client.db('audio')
  const raw = database.collection('raw')
  const filter = {
    _id: ObjectId(req.body.id)
  }
  const updateObject = req.body
  updateObject.createdDt = new Date()
  const result = await raw.updateOne(filter, {
    $set: updateObject
  }, {})

  res.send(result);
});

module.exports = router;
