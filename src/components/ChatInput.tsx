import { useEffect, useRef } from 'react'

type ChatInputProps = {
  text: string
  onTextChange: (text: string) => void
  onSend: () => void
}

export default function ChatInput({
  text,
  onTextChange,
  onSend,
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

  return (
    <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-sm">
      <div className="flex items-end gap-2">
        <div className="flex h-10 min-w-10 items-center justify-center rounded-md bg-stone-100 px-3 text-sm text-stone-700">
          Usuario
        </div>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma mensagem..."
          rows={1}
          className="h-10 max-h-36 min-h-10 flex-1 resize-none overflow-y-auto bg-transparent px-2 py-2 leading-6 text-stone-900 outline-none"
        />
        <button
          type="button"
          onClick={onSend}
          disabled={!canSend}
          className="h-10 rounded-md bg-stone-800 px-4 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
