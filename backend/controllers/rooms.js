import Rooms from "../models/rooms.js";

export const getRooms = async (req, res) => {
  try {
    // retieve all posts we have in the data base
    const rooms = await Rooms.find();

    res.status(200).json(rooms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRoom = async (req, res) => {
  const { id } = req.params;
  const url = id;
  try {
    const room = await Rooms.findOne({ url });
    res.status(200).json(room);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postRoom = async (req, res) => {
  try {
    console.log("Room backend api")
    const formData = req.body.formdata; // get data from the body 
    const selectedAmenities = req.body.selectedAmenities; // get data from the body 

    const room = {
      url: formData.url,
      title: formData.title,
      description: formData.description,
      view: formData.view,
      size: formData.size,
      adults: formData.adults,
      children: formData.children,
      bedding: formData.bedding,
      amenities: selectedAmenities,
      paragraph: formData.paragraph,
      mainImage: `${formData.url}.jpg`,
      subImage: `${formData.url}_sub.jpg`,
      price: formData.price

    };

    // create a new room in MongoDB
    const result = await Rooms.create(room)

    res.status(200).json(result)

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const deleteRoom = async (req, res) => {
  const id = req.body;

  try {
    const result = await Rooms.findByIdAndDelete(id)
    res.status(200).json({ result: result })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

export const updateRoom = async (req, res) => {
  try {
    const id = req.body.id;
    const data = req.body.data;

    const room = {
      url,
      title,
      titleHeader,
      description,
      header,
      subheader,
      view,
      size,
      adults,
      children,
      bedding,
      amenities,
      paragraph,
      subImage,
      rooms,
      price
    } = data;

    const result = await Rooms.findByIdAndUpdate(id, room)
    res.status(200).json(result);
  } catch {
    res.status(404).json({ message: error.message })
  }
};
