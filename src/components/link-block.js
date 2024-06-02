import React from 'react'
import Block from './block'
import { Link } from 'react-router-dom'

export default function LinkBlock({href, text}) {
  return (
    <Link to={href} className="text-center col-span-12 xs:col-span-4">
        <Block className="hover:bg-zinc-600 active:bg-zinc-400 transition">
            <p>{text}</p>
        </Block>
    </Link>
  )
}
