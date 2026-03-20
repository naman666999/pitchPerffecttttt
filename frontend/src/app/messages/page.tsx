
// src/app/messages/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import { Users, MessageCircle, BrainCircuit } from "lucide-react"; // Added BrainCircuit

export default function MessagesPage() {
  // Note: The ChatbotButton for Narrato is globally available.
  // This page will guide users to it and also house P2P messaging (coming soon).
  return (
    <div className="space-y-12">
      <section className="text-center animate-fade-in-up">
        <BrainCircuit className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold font-headline mb-3">Chat with Narrato</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Your AI assistant, Narrato, is always ready to help! Ask questions, get advice on your pitch, or explore investment strategies.
          You can find Narrato by clicking the chat bubble icon at the bottom right of your screen.
        </p>
        <div className="flex justify-center">
          <Image 
            src="data:image/png;base64,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" 
            alt="Narrato AI Assistant Visual" 
            width={150} 
            height={150} 
            className="rounded-full shadow-lg border-2 border-primary/30"
            data-ai-hint="friendly AI assistant face" 
          />
        </div>
      </section>
      
      <Separator className="my-12" />
      
      <section className="text-center animate-fade-in-up" style={{animationDelay: "200ms"}}>
        <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold font-headline mb-3">Connect & Collaborate</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Direct messaging with founders and investors is on its way! Soon, you'll be able to build connections, discuss opportunities, and collaborate right here.
        </p>
        <Card className="w-full max-w-lg mx-auto mt-8 bg-secondary/30">
          <CardHeader>
            <CardTitle className="flex items-center justify-center"><MessageCircle className="mr-2"/>Peer-to-Peer Messaging</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This feature is currently under development. Stay tuned for updates!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
