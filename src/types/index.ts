export type RatingType = {
  Source: string
  Value: string
}

export type CardType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export type DetailsType = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Type: string
  Poster: string
  Ratings: RatingType[]
}
