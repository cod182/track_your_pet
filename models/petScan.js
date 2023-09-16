import { Schema, model, models } from 'mongoose';

const PetScansSchema = new Schema({

  petId: {
    type: String,
    required: [true, 'Pet ID Needed'],
  },
  typeOfScan: {
    type: String,
    required: [true, 'Type of scan is needed']
  },
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
  }

});

const PetScan = models.PetScan || model("PetScan", PetScansSchema);

export default PetScan;