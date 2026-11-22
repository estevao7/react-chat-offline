import type { Message } from '../types/message'

type MessageBubbleProps = {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const alignment = message.sender === 'user' ? 'justify-end' : 'justify-start'
  const bubbleBackground =
    message.sender === 'user' ? 'bg-stone-200' : 'bg-white'

  return (
    <div className={`flex ${alignment}`}>
      <div className={`max-w-[80%] whitespace-pre-wrap break-words rounded-lg ${bubbleBackground} px-3 py-2 text-stone-900 shadow-sm`}>
        {message.text}
      </div>
    </div>
  )
}
