import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { Tag, TagCategory } from "@/pages/index.astro";

import { formSchema } from "./PostList";

type Props = {
  tagCategories: TagCategory[];
  tags: Tag[];
  handleSubmit: (data: z.infer<typeof formSchema>) => void;
};

export const PostFilter = ({ tagCategories, tags, handleSubmit }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: [],
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="tags"
          render={() => {
            return (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {tagCategories.map(({ id, label }) => {
                  return (
                    <FormItem key={id}>
                      <div className="mb-4">
                        <FormLabel className="text-base font-bold">
                          {label}
                        </FormLabel>
                      </div>
                      {tags
                        .filter((tag) => tag.category === id)
                        .map((tag) => (
                          <FormField
                            key={tag.id}
                            control={form.control}
                            name="tags"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={tag.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(tag.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              tag.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== tag.id,
                                              ),
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {tag.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      <FormMessage />
                    </FormItem>
                  );
                })}
              </div>
            );
          }}
        />
        <Button type="submit">検索する</Button>
      </form>
    </Form>
  );
};
