import { Bot, User } from 'lucide-react'
import type { Sender } from '../types/message'

type SenderToggleProps = {
  sender: Sender
  onToggle: () => void
}

export default function SenderToggle({sender, onToggle}: SenderToggleProps) {
  const isRobot = sender === 'robot'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Remetente atual: ${isRobot ? 'robô' : 'usuário'}. Clique para alternar`}
      aria-pressed={isRobot}
      className="flex h-10 min-w-24 items-center justify-center gap-2 rounded-md bg-stone-100 px-3 text-sm text-stone-700"
    >
      {isRobot ? (
        <Bot aria-hidden="true" className="h-4 w-4" />
      ) : (
        <User aria-hidden="true" className="h-4 w-4" />
      )}
      <span>{isRobot ? 'Robô' : 'Usuário'}</span>
    </button>
  )
}
