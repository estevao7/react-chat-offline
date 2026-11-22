import { useEffect, useRef } from 'react'
import type { Sender } from '../types/message'
import SenderToggle from './SenderToggle'

type ChatInputProps = {
  text: string
  sender: Sender
  onTextChange: (text: string) => void
  onSend: () => void
  onToggleSender: () => void
}

export default function ChatInput({
  text,
  sender,
  onTextChange,
  onSend,
  onToggleSender,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canSend = text.trim().length > 0

  useEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) {
      return
    }

    textarea.style.height = '40px'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 144)}px`
  }, [text])

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key.toLowerCase() === 'enter' && !event.shiftKey) {
      event.preventDefault()

      if (canSend) {
        onSend()
      }
    }
  }

  const cardBorder =
    sender === 'robot'
      ? 'border-2 border-purple-500'
      : 'border border-stone-200'

  return (
    <div
      className={`rounded-lg bg-white p-4 shadow-sm transition-colors duration-200 ${cardBorder}`}
    >
      <div className="flex items-end gap-2">
        <SenderToggle sender={sender} onToggle={onToggleSender} />
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma mensagem..."
          rows={1}
          className="h-10 max-h-36 min-h-10 flex-1 resize-none overflow-y-auto bg-transparent px-2 py-2 leading-6 text-stone-900 placeholder:text-stone-500 outline-none"
        />
        <button
          type="button"
          onClick={onSend}
          disabled={!canSend}
          className="h-10 rounded-md bg-stone-800 px-4 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
