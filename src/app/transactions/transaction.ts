import { Account } from "./account";

export interface Transaction{
    id: string,
    concept: string,
    description: string,
    ammount: number,
    date: string,
    accountId: string,
    candidateId?: string
}