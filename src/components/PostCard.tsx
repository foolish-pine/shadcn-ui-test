import { memo } from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import thumbnailImage from "@/images/thumbnail.jpg";
import type { Post } from "@/pages/index.astro";

interface Props {
  post: Post;
}

export const PostCard = memo(({ post: { title, tags } }: Props) => {
  return (
    <Card className="shadow-none">
      <img src={thumbnailImage.src} alt="" className="rounded-t-lg" />
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>サブタイトル</CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0">
        <ul className="flex flex-wrap gap-1.5 text-sm">
          {tags.map(({ id, label }) => (
            <li key={id}>#{label}</li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
});
