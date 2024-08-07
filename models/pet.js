import { Schema, model, models } from 'mongoose';

const PetSchema = new Schema({
  ownerId: {
    type: String,
    required: [true, 'OwnerID is required!'],
  },
  ownerName: {
    text: {
      type: String,
      required: [true, 'owner name is required!'],
    },
    public: {
      type: Boolean,
      required: [true, 'Is the image public?'],
    }
  },
  petImage: {
    image: {
      type: String,
      required: [true, 'Pet image is required!'],

    },
    public: {
      type: Boolean,
      required: [true, 'Is the image public?'],
    }
  },
  petName: {
    text: {
      type: String,
      required: [true, 'Pet name is required!'],
    },
    public: {
      type: Boolean,
      required: [true, 'Is the image public?'],
    }
  },
  dob: {
    birthday: {
      type: String,
    },
    public: {
      type: Boolean,
      required: [true, 'Is the birthday public?'],
    }
  },
  breed: {
    text: {
      type: String,
      required: [true, 'Pet breed is required!'],
    },
    public: {
      type: Boolean,
      required: [true, 'Is the breed public?'],
    }
  },
  color: {
    text: {
      type: String,
      required: [true, 'Pet color is required!'],
    },
    public: {
      type: Boolean,
      required: [true, 'Is the color public?'],
    }
  },
  homeAddress: {
    text: {
      type: String,
    },
    public: {
      type: Boolean,
      required: [true, 'Is the address public?'],
    }
  },
  what3words: {
    w3w: {
      type: String,
    },
    public: {
      type: Boolean,
      required: [true, 'Is the w3w public?'],
    }
  },
  message: {
    message: {
      type: String,
    },
    public: {
      type: Boolean,
      required: [true, 'Is the message public?'],
    }
  },
  petType: {
    type: String,
    required: [true, 'Type of per required']
  },
  contactNumber: {
    phone: {
      type: String,
    },
    public: {
      type: Boolean,
      required: [true, 'Is the number public?'],
    }
  },
  contactEmail: {
    email: {
      type: String,
    },
    public: {
      type: Boolean,
      required: [true, 'Is the email public?'],
    }
  }
});

const Pet = models.Pet || model("Pet", PetSchema);

export default Pet;