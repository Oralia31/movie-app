export type CardTypes = {
   title: string;
   id: number;
   text:string;
   image: string;
   vote_average: number;
   arrayLabels: number[];
   onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  };