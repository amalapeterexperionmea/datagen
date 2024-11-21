const User = require('../models/User');



//userlist
exports.userlist = async (req, res) => {
    try {
      
      const allUsers = await User.find();
     
      return res.status(200).json({
        message: 'User list fetched successfully!',
        users: allUsers,
      });
  
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({
        message: 'Internal server error',
        details: error.message, 
      });
    }
  };


  //adduser

  exports.adduser = async (req, res) => {
    const { name, username, user_type, email, password, confirm_password } = req.body;
    try {

        if (password !== confirm_password) {
            return res.status(400).json({ message: 'Passwords do not match!' });
          }

       const existingUser = await User.findOne({ username });
      if (!existingUser || existingUser.email !== email) {
        const newUser = new User({ name, username, user_type, email, password, confirm_password });
        await newUser.save();
        return res.status(201).json({ message: 'User added successfully!' });
      }
  
      return res.status(401).json({ message: 'User already exists!' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error', details: error.message });
    }
  };