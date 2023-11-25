import { z } from 'zod'

// This is user Name Schema
export const userNameValidationSchema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
})

// This is user Address Schema
export const userAddressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
})

// This is main User Schema
export const userValidationSchema = z.object({
  userId: z.string().min(1),
  username: z.string().min(2).max(20),
  fullName: userNameValidationSchema,
  password: z.string().min(6).max(20),
  gender: z.enum(['male', 'female', 'other']),
  age: z.number().min(1),
  email: z.string().email(),
  hobbies: z.array(z.string()),
  address: userAddressValidationSchema,
  isActive: z.boolean().default(true),
})

export default userValidationSchema
