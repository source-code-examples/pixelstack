import { posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

interface PostProps {
  params: { handle: string }
}

export function generateStaticParams() {
  return posts.map((post) => ({ handle: post.handle }))
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { handle } = await params
  const post = posts.find((b) => b.handle === handle)

  if (!post) {
    return { title: 'Blog post not found' }
  }

  return {
    title: `${post.name} | Pixelstack Post`,
    description: post.overview,
    openGraph: {
      title: post.name,
      description: post.overview,
      type: 'article',
    },
  }
}

const PostDetailsSite = async ({ params }: PostProps) => {
  const { handle } = await params
  const post = posts
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .find((b) => b.handle === handle)

  if (!post) {
    return notFound()
  }

  return (
    <div className="mx-auto max-w-3xl py-16">
      <Link
        href="/posts"
        className="mb-6 inline-block text-cyan-500 hover:underline"
      >
        ← Back to all posts
      </Link>

      <h1 className="mb-4 text-4xl font-bold">{post.name}</h1>

      <p className="mb-6 text-gray-500 dark:text-gray-400">
        {new Date(post.createdAt).toLocaleDateString()} • {post.timeToRead}
      </p>

      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default PostDetailsSite
