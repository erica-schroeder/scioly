import { setIndex } from '@/data/manifest';
import { Flashcard } from '@/types/domain';

export const fetchFlashcardsForSets = async (setIds: string[]): Promise<Flashcard[]> => {
    if (!setIds?.length) return [];

    const results = await Promise.all(
        setIds.map(async (id) => {
            const entry = setIndex[id];
            if (!entry) {
                console.warn(`No set found in manifest for id: ${id}`);
                return [];
            }
            const mod = await entry.load();

            return mod.default.map((card: any) => ({
                id: card.id ?? crypto.randomUUID(),
                question: card.question,
                answer: card.answer,
                frontImage: card.image ? `/images/${entry.eventId}/${card.image}` : null,
                backImage: null,
            }));
        })
    );

    return results.flat();
};