const Client = require('../models/Client');



//add client controller
exports.addclient = async (req, res) => {
  const { name, shortName, domain, postgres, mongodb } = req.body;

  try {
    const existingClient = await Client.findOne({ name });
    if (!existingClient || existingClient.shortName !== shortName) {
      const newClient = new Client({ name, shortName, domain, postgres, mongodb });
      await newClient.save();
      return res.status(201).json({ message: 'Client added successfully!' });
    }

    return res.status(401).json({ message: 'client already exists!' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
};
