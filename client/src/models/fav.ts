export interface IFav {
  id: number;
  name: string;
  avatar: string;
  url: string;
}

export interface serverResponse {
  favourites: IFav[];
}