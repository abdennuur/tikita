const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { name, date, location, price } = req.body;
    const newEvent = new Event({ name, date, location, price });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Failed to create event.' });
  }
};

exports.updateEvent = async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
  
      const updatedEvent = await Event.findByIdAndUpdate(id, updates, { new: true });
  
      if (updatedEvent) {
        res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ message: 'Failed to update event.' });
    }
  };
  

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchEvents = async (req, res) => {
  try {
    const { query } = req.query;
    const searchResults = await Event.find({ name: new RegExp(query, 'i') });
    res.json(searchResults);
  } catch (error) {
    res.status(500).send(error);
  }
};
