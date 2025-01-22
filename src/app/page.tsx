'use client'


import {Button} from "@/shared/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button>Hello</Button>
        <div className='flex gap-3.5'>
          <Link href="profile">profile</Link>
          <Link href="users">users</Link>
          <Link href="chat">chat</Link>
          <Link href="news">news</Link>
        </div>
    </div>
  );
}
