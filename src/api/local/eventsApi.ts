import { manifest } from '@/data/manifest';
import { Level } from '@/types';

export const fetchLevels = (): Level[] => {
  const levelMap: Record<string, Level> = {};

  for (const [eventId, event] of Object.entries(manifest)) {
    const levelKey = event.level;

    if (!levelMap[levelKey]) {
      levelMap[levelKey] = {
        id: levelKey,
        title: levelKey,
        events: [],
      };
    }

    levelMap[levelKey].events.push({
      id: eventId,
      key: eventId,
      title: event.displayName,
      groups: Object.entries(event.groups).map(([groupId, group]) => ({
        id: groupId,
        title: group.displayName,
        sets: Object.entries(group.sets).map(([setId, set]) => ({
          id: setId,
          title: set.displayName,
        })),
      })),
    });
  }

  return Object.values(levelMap);
};