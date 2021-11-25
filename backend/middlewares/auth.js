module.exports = {
  loginCheckMiddleware: function (req, res, next) {
    if (req.session.member) {
      // 有 member 且不是 null
      next();
    } else {
      // 沒有 member 或 member 為 null
      return res.sendStatus(401);
    }
  },
  // ... 還可以有其他的 (ex. adminCheckMiddleware)
};
