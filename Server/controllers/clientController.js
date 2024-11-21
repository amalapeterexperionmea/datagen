const Client = require('../models/Client');

exports.addclient = async (req, res) => {
    const { name,shortName,domain,postgres,mongodb } = req.body;
  
    try {
      const existingClient = await Client.findOne({ name });
      if (!existingClient || existingClient.shortName !== shortName) {
        const newClient  = new Client({ name, shortName, domain, postgres, mongodb});
        await newClient.save(); 
        res.status(201).json({ message: 'Client added successfully!'  });
      }
      
       res.status(401).json({ message: 'client already exists!' });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: 'Internal server error', details: error.message });
    }
  };