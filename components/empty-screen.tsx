import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Can you explain how McDonald uses nostalgia in its marketing campaigns?',
    message: 'Can you explain how McDonald uses nostalgia in its marketing campaigns?'
  },
  {
    heading: 'What are some of the psychological tricks McDonald employs to increase customer engagement?',
    message: 'What are some of the psychological tricks McDonald employs to increase customer engagement?'
  },
  {
    heading: 'How does humor play a role in McDonald advertisements?',
    message: 'How does humor play a role in McDonald advertisements?'
  },
  {
    heading: 'What are the core elements of McDonald most successful marketing campaigns?',
    message: 'What are the core elements of McDonald most successful marketing campaigns?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
