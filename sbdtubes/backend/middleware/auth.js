module.exports = (req, res, next) => {
  const role = req.headers.role;

  if (!role) {
    return res.status(401).send('Unauthorized');
  }

  req.user = { role };
  next();
};
