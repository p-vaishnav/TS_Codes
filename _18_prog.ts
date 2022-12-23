// something about read-only

type User = {
    readonly _id: string,
    email: string
}

const user: User = {_id: 'SSECCUS', email: 'v@gmail.com'};

// only gives the compilation error, there is no much speciality about the read-only
user._id = 'ecnellecxE';