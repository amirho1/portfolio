"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  ASSISTANT_SUGGESTIONS,
  getAssistantAnswer,
  type AssistantAnswer,
} from "@/lib/portfolio-data";
import { ArrowRight, Bot, Send, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CONDUCTOR_OPEN_EVENT, JourneyLink } from "./JourneyLink";

interface ConversationMessage {
  id: number;
  role: "assistant" | "visitor";
  text: string;
  answer?: AssistantAnswer;
}

const initialMessage: ConversationMessage = {
  id: 0,
  role: "assistant",
  text: "Welcome aboard. I can help you explore Amir's projects, experience, technical strengths, and contact details.",
};

export default function ConductorAI() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ConversationMessage[]>([initialMessage]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageId = useRef(1);
  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function openConductor() {
      setOpen(true);
    }

    window.addEventListener(CONDUCTOR_OPEN_EVENT, openConductor);
    return () => window.removeEventListener(CONDUCTOR_OPEN_EVENT, openConductor);
  }, []);

  useEffect(() => {
    if (!open || messages.length <= 1) return;
    latestMessageRef.current?.scrollIntoView({
      block: "nearest",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [messages, open]);

  function askQuestion(value: string) {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion) return;

    const visitorMessage: ConversationMessage = {
      id: messageId.current++,
      role: "visitor",
      text: trimmedQuestion,
    };
    const answer = getAssistantAnswer(trimmedQuestion);
    const assistantMessage: ConversationMessage = {
      id: messageId.current++,
      role: "assistant",
      text: answer.text,
      answer,
    };

    setMessages(currentMessages => [...currentMessages, visitorMessage, assistantMessage]);
    setQuestion("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    askQuestion(question);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        className="conductor-dock"
        aria-label="Open Conductor AI"
        onClick={() => setOpen(true)}
      >
        <span className="conductor-dock-icon" aria-hidden="true">
          <Sparkles />
        </span>
        <span>
          <small>Portfolio guide</small>
          Ask Conductor AI
        </span>
      </button>

      <DialogContent
        className="conductor-dialog"
        onOpenAutoFocus={event => {
          event.preventDefault();
          inputRef.current?.focus();
        }}
      >
        <div className="conductor-header">
          <span className="conductor-orbit" aria-hidden="true">
            <Sparkles />
          </span>
          <div>
            <span className="eyebrow">Portfolio guide · local</span>
            <DialogTitle className="conductor-title">Conductor AI</DialogTitle>
          </div>
        </div>
        <DialogDescription className="conductor-description">
          Ask about Amir&apos;s work and experience. Responses come from this portfolio&apos;s
          verified content; no message is sent to an external AI service.
        </DialogDescription>

        <div className="conductor-messages" aria-live="polite">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="conductor-message"
              data-role={message.role}
              ref={index === messages.length - 1 ? latestMessageRef : undefined}
            >
              {message.role === "assistant" && (
                <span className="message-avatar" aria-hidden="true">
                  <Bot />
                </span>
              )}
              <div className="message-bubble">
                <p>{message.text}</p>
                {message.answer?.target && message.answer.actionLabel && (
                  <JourneyLink
                    target={
                      message.answer.target.slice(1) as
                        "home" | "projects" | "experience" | "about" | "contact"
                    }
                    className="message-action"
                    onNavigate={() => setOpen(false)}
                  >
                    {message.answer.actionLabel}
                    <ArrowRight aria-hidden="true" />
                  </JourneyLink>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="conductor-suggestions" aria-label="Suggested questions">
          {ASSISTANT_SUGGESTIONS.map(suggestion => (
            <button key={suggestion} type="button" onClick={() => askQuestion(suggestion)}>
              <span>{suggestion}</span>
              <ArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>

        <form className="conductor-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="conductor-question" className="sr-only">
            Ask Conductor AI a question
          </label> */}
          <input
            ref={inputRef}
            id="conductor-question"
            value={question}
            onChange={event => setQuestion(event.target.value)}
            placeholder="Ask about Amir's work…"
            autoComplete="off"
          />
          <button type="submit" aria-label="Send question" disabled={!question.trim()}>
            <Send aria-hidden="true" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
