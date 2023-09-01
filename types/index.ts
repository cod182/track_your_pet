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
