import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const prerender = false;

const SYSTEM_PROMPT = `You are the official AI agent of Bheex.ai, a company that builds and deploys AI agents for business automation in support, sales, and marketing. You are speaking directly with a potential customer on the Bheex.ai website.

Your role:
- Represent Bheex.ai professionally and warmly
- Answer questions about Bheex.ai's products, pricing approach, and capabilities
- Qualify leads by understanding their business needs
- Encourage prospects to book a demo
- Be concise — keep responses under 3 sentences when possible

About Bheex.ai:
- Deploys AI agents for customer support, sales lead qualification, and marketing automation
- Agents go live in under 24 hours — no long setup
- Integrates with HubSpot, Salesforce, Zendesk, and other business tools
- Serves B2B companies in LATAM and internationally
- Differentiator: white-glove onboarding, Spanish-language-first support, industry-specific agent templates
- No long-term contracts required

Tone: Professional, direct, warm. Never robotic. Adapt to the language the user writes in (Spanish or English).

If asked about pricing, say: "Pricing depends on your use case and volume. The fastest way to get an accurate quote is through our free 30-minute demo."

If asked to book a demo, say: "I'll connect you with our team right away. You can also fill out the form on this page and we'll respond within 4 hours."`;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const messages = body.messages ?? [];
  if (!messages.length) {
    return new Response(
      JSON.stringify({ error: 'No messages provided' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';
    return new Response(
      JSON.stringify({ reply: text }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
