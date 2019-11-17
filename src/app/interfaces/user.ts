export interface User {
    _id?: String,
    nit?: String,
    name?: String,
    last_name?: String,
    location?: {
        address: String,
        city: String
    },
    phone?: String,
    birthdate?: Date,
    nickname: String,
    password: String,
}
