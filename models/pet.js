import { Schema, model, models } from 'mongoose';

const PetSchema = new Schema({
  ownerId: {
    type: String,
    required: [true, 'OwnerID is required!'],
  },
  petImage: {
    image: {
      type: String,
      required: [true, 'Pet image is required!'],

    }, public: {
      type: String,
      required: [true, 'Is the image public?'],
    }
  },
  petName: {
    text: {
      type: String,
      required: [true, 'Pet name is required!'],
    },
    public: {
      type: String,
      required: [true, 'Is the image public?'],
    }
  },
  dob: {
    birthday: {
      type: String,
    },
    public: {
      type: String,
      required: [true, 'Is the birthday public?'],
    }
  },
  breed: {
    text: {
      type: String,
      required: [true, 'Pet breed is required!'],
    },
    public: {
      type: String,
      required: [true, 'Is the breed public?'],
    }
  },
  color: {
    text: {
      type: String,
      required: [true, 'Pet color is required!'],
    },
    public: {
      type: String,
      required: [true, 'Is the color public?'],
    }
  },
  homeAddress: {
    text: {
      type: String,
      required: [true, 'Pet home address is required!'],
    },
    public: {
      type: String,
      required: [true, 'Is the address public?'],
    }
  },
  what3words: {
    w3w: {
      type: String,
    },
    public: {
      type: String,
      required: [true, 'Is the w3w public?'],
    }
  },
  message: {
    text: {
      type: String,
    },
    public: {
      type: String,
      required: [true, 'Is the message public?'],
    }
  },
  scanHistory: {
    id: {
      type: String,
      required: [true, 'id required!'],
    },
    dateTime: {
      type: String,
      required: [true, 'Date / Time?'],
    },
    coordinates: {
      type: String,
      required: [true, 'Coordinates required'],
    },
    message: {
      type: String,
    },
    scannerName: {
      type: String,
    }
  },

});

const Pet = models.Pet || model("Pet", PetSchema);

export default Pet;