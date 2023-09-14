import { Schema, model, models } from 'mongoose';

const PetScansSchema = new Schema({

  scanHistory: {
    petId: {
      type: String,
      required: [true, 'Pet ID Needed'],
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
    },
    ip: {
      type: String,
    }
  },

});

const PetScan = models.Scan || model("PetScan", PetScansSchema);

export default PetScan;