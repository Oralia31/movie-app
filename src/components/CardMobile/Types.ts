export type CardTypes = {
  //list: any[];
  title: string;
  id: number;
  image: string;
  vote_average: number;
  arrayLabels: number[];
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type arrayInfo = {
  title: string;
  id: string;
  image: string;
  vote_average: number;
  arrayLabels: number[];
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
