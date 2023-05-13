export interface StyleBook {
  link: string;
  attributes: { [title: string]: string }
  example: string;
  demo: string;
}

export interface ComponentBook {
  link: string;
  tag: string;
  component: any;
  attributes: { [title: string]: string }
  example: string;
}
