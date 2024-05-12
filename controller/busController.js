const Bus = require("../model/busModel");
const createBus = async (req, res, next) => {
  const { source, destination, bus_id, bus_name } = req.body;
  try {
    const bus = new Bus({
      source,
      destination,
      bus_id,
      bus_name,
    });
    await bus.save();
    res.status(200).json({ bus });
  } catch (e) {
    console.log(e);
  }
};

const getBus = async (req, res, next) => {
  try {
    const bus = await Bus.find({});
    return res.status(200).json({ bus });
  } catch (e) {
    console.log(e);
  }
};

const update = async (req, res, next) => {
  try {
    const { busId } = req.params;
    const { seats } = req.body;

    // Find the bus by ID and update the seats available
    const updatedBus = await Bus.findByIdAndUpdate(
      busId,
      { seats: seats },
      { new: true } // Return the updated document
    );

    if (!updatedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    return res.status(200).json({ updatedBus });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const findBusById = async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findOne({ _id: id });
    return res.status(200).json({ bus });
  } catch (e) {}
};

module.exports = { createBus, getBus, update, findBusById };
