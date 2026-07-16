import Image from "next/image";

import { BOOKS } from "@/constants/books";

import BookInfo from "@/components/books/BookInfo";

import BookActions from "@/components/books/BookActions";

interface Props{

    params:Promise<{

        id:string;

    }>;

}

export default async function BookDetailsPage({

    params

}:Props){

    const {id}=await params;

    const book=BOOKS.find(

        b=>b.id===Number(id)

    );

    if(!book){

        return(

            <div className="p-10">

                Book not found

            </div>

        );

    }

    return(

        <main className="mx-auto max-w-7xl p-8">

            <div className="grid gap-10 lg:grid-cols-2">

                <div className="relative h-[600px]">

                    <Image

                        src={book.cover}

                        alt={book.title}

                        fill

                        className="rounded-3xl object-cover"

                    />

                </div>

                <div>

                    <BookInfo book={book}/>

                    <BookActions/>

                </div>

            </div>

        </main>

    );

}