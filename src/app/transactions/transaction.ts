export interface Transaction{
    id: string,
    concept: string,
    description?: string,
    amount: number,
    date?: Date
}