"use client";

import { BlogCard } from "@/components/client/BlogCard";
import type { blogConfig } from "@/lib/types";
import { FilterControls, useFilter } from "@/hooks/useFilter";

export default function FilterBlog({ items }: { items: blogConfig[] }) {
  const filter = useFilter(items, "blog");
  const { filteredAndSortedItems } = filter;

  return (
    <div className="flex flex-col gap-3 animation">
      <FilterControls filter={filter} />

      {filteredAndSortedItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 border border-border p-12">
          <p className="text-lg font-medium">Coming soon</p>
          <p className="paragraph text-muted-foreground">Blog posts are on the way. Stay tuned.</p>
        </div>
      ) : (
        <div className="space-y-0 border border-border p-6">
          {filteredAndSortedItems.map((item) => (
            <BlogCard key={item.id} item={item as blogConfig} />
          ))}
        </div>
      )}
    </div>
  );
}
