let analysis = (req, res) => {
  let obj = {
    name: req.file.originalname,
    type: req.file.mimetype,
    sizeinBytes: req.file.size
  }
  res.json(obj)
}


module.exports = analysis