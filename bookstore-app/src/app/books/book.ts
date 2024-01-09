import { ILanguage } from "../languages/language"
import { IPublisher } from "../publishers/publisher"

export interface IBook {
    book_id: number,
    title: string,
    isbn13: string,
    description: string,
    num_pages: number,
    publication_date: Date,
    publisher: IPublisher,
    language: ILanguage
}
