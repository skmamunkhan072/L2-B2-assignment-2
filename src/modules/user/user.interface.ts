// user name type
export type TUserName = {
  firstName: string
  lastName: string
}

// user address type
export type TUserAddress = {
  street: string
  city: string
  country: string
}

// user all information type
export type TUser = {
  userId: string
  username: string
  password: string
  gender: 'male' | 'female' | 'other'
  fullName: TUserName
  age: number
  email: string
  hobbies: string[]
  address: TUserAddress
  isActive: boolean
}
