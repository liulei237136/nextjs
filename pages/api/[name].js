module.exports = (req, res)=>{
    res.json({
        body: req.body,
        query: req.body,
        cookies: req.cookies
    });
}p