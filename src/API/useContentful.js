import { createClient } from 'contentful';

const useConentful = () => {
  const client = createClient({
    space: 'uabv1jusvls7',
    accessToken: 'm2mzPUNwhEuVoNU5WN79GbYUeQS3A7cAqLOWYZfbKTM',
    host: 'preview.contentful.com',
  });

  const getPlayers = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'player',
        select: 'fields',
        order: 'fields.punkte',
      });

      const players = entries.items.map((item) => {
        const team = item.fields.team.fields.name;
        return {
          ...item.fields,
            team,
        };
      });

      return players;
    } catch {
      console.log(`Error fetching players`);
    }
  };

  return { getPlayers };
};

export default useConentful;