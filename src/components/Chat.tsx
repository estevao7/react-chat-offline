import { useState } from 'react'
import type { Message } from '../types/message'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [text, setText] = useState('')

  function handleSend() {
    const trimmedText = text.trim()

    if (!trimmedText) {
      return
    }

    const message: Message = {
      id: crypto.randomUUID(),
      text: trimmedText,
      sender: 'user',
    }

    setMessages([...messages, message])
    setText('')
  }

  return (
    <main className="h-dvh bg-stone-200">
      <div className="mx-auto flex h-dvh max-w-2xl flex-col bg-stone-100">
        <MessageList messages={messages} />
        <div className="px-4 pb-4">
          <ChatInput text={text} onTextChange={setText} onSend={handleSend} />
        </div>
      </div>
    </main>
  )
}
