const Client = require('../models/Client');

//clientlist 
exports.clientlist = async (req, res) => {
  try {
    
    const allClients = await Client.find();
   
    return res.status(200).json({
      message: 'Client list fetched successfully!',
      clients: allClients,
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      message: 'Internal server error',
      details: error.message, 
    });
  }
};


//add client 
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
