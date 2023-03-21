export interface IHeader{
    icon?: any
    title: string
    textButton: string
    onclick?: ()=>void
    exclude?: ()=>void
    navigate?: string 
}