import { Request, Response } from 'express'
// import User from '../schemas/user'

let _users: object[] = []

class UserController {
    public async index (req: Request, res: Response): Promise<Response> {
        return res.json(_users)
    }

    public async create (req: Request, res: Response): Promise<Response> {
        _users.push({
            name: req.body.name,
            email: req.body.email,
            cel: req.body.cel
        })

        return res.json('User created with success!')
    }
}

export default new UserController()
