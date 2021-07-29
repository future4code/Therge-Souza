import {Request, Response} from 'express'
import {countries} from '../data'

export const getAllCountries = (req: Request, res: Response): void => {

    console.log(req.query)

    const result = countries.map(countrie => ({
        id: countrie.id,
        name: countrie.name
    }))

    console.log(result)
    res.statusMessage = "Mensagem Customizada"
    res.send(result)
}