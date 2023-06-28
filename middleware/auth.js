require("dotenv").config();


exports.auth = (req, res, next) => {
    try {
        const token = req.body.token;
        // const token = req.cookie.token 

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "token missing"
            })
        }