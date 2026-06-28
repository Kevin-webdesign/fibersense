"use client"

import { useMemo, useRef, useState, type FormEvent } from "react"
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import type { ApiEnvelope } from "@/lib/api-types"
import type { RoleKey } from "@/lib/roles"

type ChatRole = Extract<RoleKey, "admin" | "engineer" | "operations">

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

const quickQuestions: Record<ChatRole, string[]> = {
  admin: [
    "How do I change a user role?",
    "How do I generate a system report?",
    "Where do I set the AI request limit?",
  ],
  engineer: [
    "How do I assess a detected fault?",
    "Where can I see previous assessments?",
    "How do I monitor network performance?",
  ],
  operations: [
    "How do I assign a repair task?",
    "Where do I monitor critical faults?",
    "How do I escalate a fault?",
  ],
}

export function HelpChatbot({ role }: { role: RoleKey }) {
  const allowed = role === "admin" || role === "engineer" || role === "operations"
  const chatRole = role as ChatRole
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi, I can help with faults, assessments, task assignment, reports, users, and system settings.",
    },
  ])
  const formRef = useRef<HTMLFormElement>(null)

  const suggestions = useMemo(
    () => (allowed ? quickQuestions[chatRole] : []),
    [allowed, chatRole]
  )

  if (!allowed) return null

  async function ask(nextQuestion?: string) {
    const text = (nextQuestion ?? question).trim()
    if (!text || loading) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    }

    setMessages((current) => [...current, userMessage])
    setQuestion("")
    setLoading(true)

    try {
      const response = await fetch("/api/ai/help", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: text, role: chatRole }),
      })
      const payload = (await response.json()) as ApiEnvelope<{ answer?: string; message?: string }>

      if (!response.ok || payload.status !== "ok") {
        throw new Error(payload.data.message ?? "Could not answer right now.")
      }

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: payload.data.answer ?? "I could not find an answer.",
        },
      ])
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not answer right now."
      toast.error(message)
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: message,
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    void ask()
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 print:hidden">
      {open && (
        <div className="mb-3 flex h-[520px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                <Bot className="size-4 text-primary" />
              </span>
              <div>
                <p className="text-sm font-medium">FiberSense Help</p>
                <p className="text-xs text-muted-foreground">Quick system questions</p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close help chat"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </Button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                {message.content}
              </div>
            ))}
            {loading && (
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
                <Loader2 className="size-3.5 animate-spin" />
                Thinking
              </div>
            )}
          </div>

          <div className="border-t border-border p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => void ask(item)}
                  disabled={loading}
                >
                  {item}
                </button>
              ))}
            </div>
            <form ref={formRef} onSubmit={submit} className="flex items-end gap-2">
              <Textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask for help..."
                className="max-h-28 min-h-10 resize-none text-sm"
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault()
                    formRef.current?.requestSubmit()
                  }
                }}
              />
              <Button type="submit" size="icon" disabled={loading || !question.trim()}>
                {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
              </Button>
            </form>
          </div>
        </div>
      )}

      <Button
        type="button"
        size="lg"
        className="h-12 rounded-full shadow-lg"
        onClick={() => setOpen((value) => !value)}
      >
        <MessageCircle className="size-5" />
        Help Chat
      </Button>
    </div>
  )
}
