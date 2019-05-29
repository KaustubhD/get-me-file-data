let analysis = (req, res) => {
  console.log(req.file)
  let obj = {
    name: req.file.originalname,
    type: req.file.mimetype,
    sizeinBytes: req.file.size
  }
  res.json(obj)
}


module.exports = analysis