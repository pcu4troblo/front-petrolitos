export interface JwtResponseI {
  dataUser: {
    id: number,
    name: string,
    email: string,
    tipo: String,
    accessToken: string,
    expiresIn: string
  }
}
