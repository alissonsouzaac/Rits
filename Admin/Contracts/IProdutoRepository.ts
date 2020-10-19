export interface IProdutoRepository<T> {
    save(repository: T): Promise<T>
    getAll(): Promise<T[] | undefined>
    getByName(name: String): Promise<T | undefined>
    search(search: Object): Promise<T[] | undefined>
   // delete(name: String): Promise<T | undefined>
}