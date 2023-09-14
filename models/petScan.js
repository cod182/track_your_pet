import { Schema, model, models } from 'mongoose';

const PetSchema = new Schema({

  scanHistory: [{
    dateTime: {
      type: String,
      required: [true, 'Date / Time?'],
    },
    coordinates: {
      lat: { type: String },
      lng: { type: String }
    },
    message: {
      type: String,
    },
    scannerName: {
      type: String,
    },
    contactDetail: {
      type: String,
    }
  }],

});

const Scan = models.Scan || model("Pet", PetSchema);

export default Scan;