import Link from "next/link";
import dynamic from "next/dynamic";

import { convertDateFormat } from "@/lib/date-util";

import { blog } from "@prisma/client";

import Image from "next/image";

import { Ad1, Ad2, Ad3, Ad5, Ad6, Ad7, Ad8 } from "@/components/ads/ads";
import { MiddleArticleBlogs } from "@/components/etc/middle-article-blogs";
import { Separator } from "@/components/ui/separator";

interface blogUser extends blog {
  Author: {
    name: string;
    img: string;
  };
  blog: any;
}

const BlogMain = ({ blog, link }: { blog: blogUser; link: string }) => {
  const BlogGen = dynamic(() => import("@/components/blogs/BlogGen"), {
    ssr: false,
  });

  const adElement2 = {
    type: "Ad",
    data: Ad3,
  };

  const adElement3 = {
    type: "Ad",
    data: Ad2,
  };

  const adElement4 = {
    type: "Ad",
    data: MiddleArticleBlogs,
  };

  const adElement5 = {
    type: "Ad",
    data: Ad1,
  };

  const adElement6 = {
    type: "Ad",
    data: Ad6,
  };
  const adElement7 = {
    type: "Ad",
    data: Ad7,
  };
  const adElement8 = {
    type: "Ad",
    data: Ad8,
  };

  blog.blog.splice(1, 0, adElement4);
  blog.blog.splice(4, 0, adElement3);
  blog.blog.splice(7, 0, adElement2);
  blog.blog.splice(10, 0, adElement5);
  blog.blog.splice(12, 0, adElement6);
  blog.blog.splice(15, 0, adElement7);
  blog.blog.splice(18, 0, adElement8);

  return (
    <article className="flex flex-col w-full">
      <BlogGen blog={blog.blog} />
      <div className="border-y-2 border-black padding">
        <div className="flex gap-2 sm:gap-0 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-full">
              <Image
                src={blog?.Author?.img}
                alt="Author"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <Link
              href={`/author/${blog?.author}`}
              className="text-xs sm:text-sm hover:underline"
            >
              {blog?.Author?.name}
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Link
              href={link}
              className="hover:underline capitalize hidden xss:block sm:text-sm"
            >
              {blog?.category.slice(1).replace("-", " ")}
            </Link>
            <Separator orientation="vertical" />
            <time
              className="text-xs sm:text-sm"
              dateTime={convertDateFormat(blog.date)}
            >
              {convertDateFormat(blog.date)}
            </time>
          </div>
        </div>
      </div>
      <Ad5 />
    </article>
  );
};

export default BlogMain;
