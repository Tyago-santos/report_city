import WrapperPage from "./WrapperPage";
import Image from "next/image";
import { MapPin, ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";

import cityIssuePosts from "@/src/data/posts";

export default function ContentPost() {
  return (
    <WrapperPage>
      <div>
        {cityIssuePosts.map((post) => (
          <article
            className="mt-5 bg-white rounded-lg shadow-md cursor-pointer "
            key={post.id}
          >
            <div>
              <Image
                src={post.imageUrl}
                alt="imagem de um post sobre cidade"
                width={1200}
                height={800}
                className="h-auto w-full object-cover rounded-t-lg "
                priority
              />
            </div>

            <div className="flex flex-col justify-between p-4">
              <h3 className="text-text text-lg text-wrap font-bold">
                {post.title}
              </h3>
            </div>

            <div className="px-4 flex items-center gap-2 pb-4">
              <MapPin className="text-text size-3" />
              <p className="text-[10px]">{post.location}</p>
              <div className="size-2 block bg-gray-600 rounded-full"></div>
              <p className="text-[10px]">{post.postedAt}</p>
            </div>

            <p className="text-text/50 px-4 pb-4 font-normal">
              {post.description}
            </p>

            <div className="m-auto w-[90%] h-[1px] bg-gray-300"></div>

            <div className="p-4 flex gap-2 items-center justify-around ">
              <div className="flex gap-2">
                <ThumbsUp className="text-text size-5 " />
                <span>{post.likes}</span>
              </div>
              <div className="flex gap-2">
                <ThumbsDown className="text-text size-5  " />
                <span>{post.dislikes}</span>
              </div>
              <div className="flex gap-2">
                <MessageCircle className="text-text size-5  " />
                <span>{post.comments}</span>
              </div>

              <button
                className="hover:bg-accent/50 hover:cursor-pointer  bg-accent  
              hover:border-accent/50 border text-white py-2 px-3 md:text-[12px] text-[8px] font-bold rounded-full "
              >
                Favoritar
              </button>
            </div>
          </article>
        ))}
      </div>
    </WrapperPage>
  );
}
