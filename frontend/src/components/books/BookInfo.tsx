import { Book } from "@/types/book";

interface Props{
    book:Book;
}

export default function BookInfo({book}:Props){

    return(

        <div className="space-y-4">

            <h1 className="text-4xl font-bold">
                {book.title}
            </h1>

            <p className="text-slate-600">
                {book.description}
            </p>

            <div className="grid grid-cols-2 gap-4">

                <div>

                    <strong>Subject</strong>

                    <p>{book.subject}</p>

                </div>

                <div>

                    <strong>Class</strong>

                    <p>{book.standard}</p>

                </div>

                <div>

                    <strong>Pages</strong>

                    <p>{book.pages}</p>

                </div>

                <div>

                    <strong>Downloads</strong>

                    <p>{book.downloads}</p>

                </div>

            </div>

        </div>

    );

}