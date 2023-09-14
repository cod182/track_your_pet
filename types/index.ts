export interface infoIcons {
  id: number;
  title: string;
  icon: string;
}

export interface infoText {
  id: number;
  line: string;
}

export interface infoSquareProps {
  id: number;
  icons: infoIcons[];
  text: infoText[];
}

export interface petImage {
  image: string;
  public: boolean;
}

export interface petBirthday {
  birthday: string;
  public: boolean;
}

export interface petOption {
  text: string;
  public: boolean;
}

export interface petW3w {
  w3w: string;
  public: boolean;
}

export interface petMessage {
  message: string;
  public: boolean;
}

export interface petPhoneOption {
  phone: string;
  public: boolean;
}

export interface petEmailOption {
  email: string;
  public: boolean;
}

export interface coordsProps {
  lat: string;
  lng: string;
}

export interface petScanHistory {
  dateTime: string;
  coordinates?: coordsProps;
  message?: string;
  scannerName?: string;
  ip?: string;
}

export interface petProps {
  _id?: string;
  ownerId: string;
  ownerName: string;
  petImage: petImage;
  petName: petOption;
  dob?: petBirthday;
  breed: petOption;
  color: petOption;
  homeAddress?: petOption;
  what3words?: petW3w;
  message?: petMessage;
  petType: string;
  contactNumber: petPhoneOption;
  contactEmail: petEmailOption;
  scanHistory?: petScanHistory[];
}
export interface petFormQuestionProps {
  required?: boolean;
  placeholder: string;
  objectName: string; // e.g petName or petImage
  objectKeyOne: string; // E.G text or message
  infoMessage?: string; //Message displayed under
  infoLink?: string; // Link displayed under
}
