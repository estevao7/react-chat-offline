import { useState } from 'react'
import type { Message } from '../types/message'
import MessageList from './MessageList'

export default function Chat() {
  const [messages] = useState<Message[]>([])

  return (
    <main className="h-dvh bg-stone-200">
      <div className="mx-auto flex h-dvh max-w-2xl flex-col bg-stone-100">
        <MessageList messages={messages} />
      </div>
    </main>
  )
}
