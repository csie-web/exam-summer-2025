export default (err, req, res, next) => {
  console.warn(err)
  res.status(500).json({ status: 'server error' })
}