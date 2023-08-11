"use client";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from '../ui/input';
import Image from 'next/image';

import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from '@/lib/actions/thread.actions';

interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}


const Comment = ({
  threadId,
  currentUserId,
  currentUserImg
}:Props) => {
  const pathname = usePathname();

  // const form = useForm({
  //       resolver: zodResolver(CommentValidation),
  //       defaultValues: {
  //           thread: "",
            
  //       }
  //   });
  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);

    form.reset();

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
      <FormField
      control={form.control}
      name='thread'
      render={({ field }) => (
        <FormItem className='flex items-center gap-3 w-full'>
          <FormLabel>
            <Image
              src={currentUserImg}
              alt='current image'
              width={48}
              height={48}
              className='rounded-full object-cover'
            />
          </FormLabel>
          <FormControl className="border-none bg-transparent">
            <Input
              type='text'
              placeholder='Comment...'
              className='no-focus text-light-1 outline-none'
              {...field}
            />
          </FormControl>
          
        </FormItem>
      )}
    />

    <Button type="submit" className="comment-form_btn">
        Reply
    </Button>
    </form>
    </Form>
  )
}

export default Comment;
