

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestStartupTagsInputSchema = z.object({
  industry: z.string().describe('The industry of the startup.'),
  pitchSummary: z.string().describe('A brief summary of the startup pitch.'),
});
export type SuggestStartupTagsInput = z.infer<typeof SuggestStartupTagsInputSchema>;

const SuggestStartupTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of suggested tags for the startup.'),
});
export type SuggestStartupTagsOutput = z.infer<typeof SuggestStartupTagsOutputSchema>;

export async function suggestStartupTags(input: SuggestStartupTagsInput): Promise<SuggestStartupTagsOutput> {
  return suggestStartupTagsFlow(input);
}

const suggestStartupTagsPrompt = ai.definePrompt({
  name: 'suggestStartupTagsPrompt',
  input: {schema: SuggestStartupTagsInputSchema},
  output: {schema: SuggestStartupTagsOutputSchema},
  prompt: `You are an expert in startup tagging and SEO.

  Given the industry and pitch summary below, suggest 5 relevant tags that a founder can use to improve the visibility of their startup to potential investors.

  Industry: {{{industry}}}
  Pitch Summary: {{{pitchSummary}}}

  Tags:`, // Ensure the LLM knows to populate the `tags` field.
});

const suggestStartupTagsFlow = ai.defineFlow(
  {
    name: 'suggestStartupTagsFlow',
    inputSchema: SuggestStartupTagsInputSchema,
    outputSchema: SuggestStartupTagsOutputSchema,
  },
  async input => {
    const {output} = await suggestStartupTagsPrompt(input);
    return output!;
  }
);
