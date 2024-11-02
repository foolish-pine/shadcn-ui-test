import { useState } from "react";
import { z } from "zod";

import { PostCard } from "@/components/PostCard";
import { PostFilter } from "@/components/PostFilter";
import type { Post, Tag, TagCategory } from "@/pages/index.astro";

type Props = {
  tagCategories: TagCategory[];
  tags: Tag[];
  posts: Post[];
};

export const formSchema = z.object({
  tags: z.array(z.string()),
});

export const PostList = ({ tagCategories, tags, posts }: Props) => {
  const [selectedTags, setSelectedTags] = useState<Set<Tag["id"]>>(new Set());

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const { tags } = data;

    setSelectedTags(new Set(tags));
  };

  const filteredPosts = selectedTags.size
    ? posts.filter((post) => {
        const tagIds = new Set(post.tags.map((tag) => tag.id));
        return selectedTags.intersection(tagIds).size !== 0;
      })
    : posts;

  return (
    <>
      <PostFilter
        tagCategories={tagCategories}
        tags={tags}
        handleSubmit={handleSubmit}
      />
      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};
