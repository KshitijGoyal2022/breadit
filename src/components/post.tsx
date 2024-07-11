import { Post, User, Vote } from '@prisma/client';
import React from 'react';
import { formatTimeToNow } from '@/lib/utils';

interface PostProps {
  subredditName: string;
  post: Post &{
    author: User,
    votes: Vote[]
  }
}

const Post = ({ subredditName,post }: PostProps) => {
  return (
    <div className='rounded-md bg-white shadow'>
      <div className='px-6 py-4 flex justify-between'>
        {/* TODO: PostVotes */}

        <div className='w-0 flex-1'>
          <div className='max-h-40 mt-1 text-xs text-gray-500'>
            {subredditName ? (
              <>
                <a
                  href={`/r/${subredditName}`}
                  className='underline text-zinc-900 text-sm underline-offset-2'
                >
                  r/{subredditName}
                </a>
                <span className='px-1'>-</span>
              </>
            ) : null}
            <span>Post by u/{post.author.name}</span>{' '}
            {formatTimeToNow(new Date(post.createdAt))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
