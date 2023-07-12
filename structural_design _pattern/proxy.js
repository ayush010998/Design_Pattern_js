//the proxy pattern provides a substitue or placeholder for other objects.

const jwt = require('jsonwebtoken')

module.exports = function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token === null) return res.status(401).send(JSON.stringify('No access token provided'))
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send(JSON.stringify('Wrong token provided'))
      req.user = user
      next()
    })
}

//
router.get('/:jobRecordId', authenticateToken, async (req, res) => {
    try {
      const job = await JobRecord.findOne({_id: req.params.jobRecordId})
      res.status(200).send(job)
  
    } catch (err) {
      res.status(500).json(err)
    }
  })

  