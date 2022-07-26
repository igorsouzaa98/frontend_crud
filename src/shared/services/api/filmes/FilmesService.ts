import {Api} from "../axios-config";
import {Environment} from "../../../environment";


interface IListagemFilme{
    id: number
    tittle: string
    description: string
}

type TFilmesTotal ={
    data: IListagemFilme[]
    totalCount: number
}

const getAll = async (page = 1, filter = '' ): Promise<TFilmesTotal | Error > =>{
    try {
        const urlRelativa = `/filmes?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&description_like=${filter}`
        const {data, headers} = await Api.get(urlRelativa)

        if(data){
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS)
            }
        }
        return new Error('Erro ao listar os filmes')
    }
    catch (error){
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao  conectar ao servidor')
    }
}

const getById = async (id: number): Promise<IListagemFilme | Error > =>{
    try {
        const {data} = await Api.get(`/filmes/${id}`)
        if(data){
            return data
        }
        return new Error('Erro ao listar o filme')
    }
    catch (error){
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao  conectar ao servidor')
    }
}

const create = async (dados: Omit<IListagemFilme, 'id'>): Promise< number | Error > =>{
    try {
        const {data} = await Api.post<IListagemFilme>('/filmes/', dados)
        if(data){
            return data.id
        }
        return new Error('Erro ao criar o filme')
    }
    catch (error){
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao  conectar ao servidor')
    }
}

const updateById = async (id: number, dados: IListagemFilme): Promise< void | Error> =>{
    try {
         await Api.put(`/filmes/${id}`, dados)
    }
    catch (error){
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao  atualizar registro')
    }
}

const deleteById = async (id: number): Promise< void | Error> =>{
    try {
        await Api.delete(`/filmes/${id}`)
    }
    catch (error){
        console.log(error)
        return new Error((error as {message: string}).message || 'Erro ao  apagar registro')
    }
}

export const FilmesService ={
    getAll,
    getById,
    create,
    updateById,
    deleteById
}