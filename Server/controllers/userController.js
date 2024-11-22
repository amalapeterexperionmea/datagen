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

  //updateuser

  exports.updateUser = async (req, res) => {
    const userId  = req.params.userId; 
    const { name, username, user_type, email, password, confirm_password } = req.body;
    try {
      
      if (password !== confirm_password) {
        return res.status(400).json({ message: 'Passwords do not match!' });
      }
  
      const existingUser = await User.findById(userId);

      if (!existingUser) {
        return res.status(404).json({ message: 'User not found!' });
      }
  
      existingUser.name = name || existingUser.name;
      existingUser.username = username || existingUser.username;
      existingUser.user_type = user_type || existingUser.user_type;
      existingUser.email = email || existingUser.email;
      existingUser.password = password || existingUser.password;
  
      await existingUser.save();
  
      return res.status(200).json({ message: 'User updated successfully!' });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error', details: error.message });
    }
  };
  

  //get username and usertype
  exports.user = async (req, res) => {
    const  email  = req.params.emailId;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email!' });
      }
      res.status(200).json({
        message: `successfully fetched username and user_type of email: ${email}`,
        user: {
          username: user.username,
          userType: user.user_type,
        },
      })
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: 'Internal server error', details: error.message });
    }
  };


