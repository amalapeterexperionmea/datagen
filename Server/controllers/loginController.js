  
  const User = require('../models/User'); 
  

  
  exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid Credentials!' });
      }
      const { username, user_type } = user;
      
      res.status(200).json({
        message: 'Login successful',
        user: {
          username,
          user_type,
          email,
        },
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: 'Internal server error', details: error.message });
    }
  };