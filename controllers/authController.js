const jwt =require("jsonwebtoken");
const User = require("../models/User");

exports.login = async (req, res) => {
    const { pseudo } = req.body;
    if (!pseudo) return res.status(400).json({ message: "Pseudo requis" });
    let user = await User.findOne({pseudo});
    if (!user) {
        user = new User({ pseudo });
        await user.save();
    }
    const token  = jwt.sign(
        {
            id: user._id,pseudo: user.pseudo , bestscore: user.bestscore
        },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );
    res.json({ token });
};