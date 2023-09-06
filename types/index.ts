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

export interface petMessage {
  message: string;
  public: boolean;
}

export interface petScanHistory {
  dateTime: string;
  coordinates?: string;
  message?: string;
  scannerName?: string;
}

export interface petProps {
  ownerId: string;
  ownerName: string;
  petImage: petImage;
  petName: petOption;
  dob: petBirthday;
  breed: petOption;
  color: petOption;
  homeAddress: petOption;
  what3words: petOption;
  message: petMessage;
  scanHistory?: petScanHistory[];
}
