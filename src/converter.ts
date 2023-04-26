export type NameIdMapping = {
  name: string;
  ping: string;
  id3: string;
  url: string;
}

function convertSteam3ToSteam64(id3: string): string {
  const baseID = BigInt('76561197960265728');
  const id64 = BigInt(id3) + baseID;
  return id64.toString();
}

export function parseNameIdPairs(text: string): NameIdMapping[] {
  const regex = /"(.+)"\s+\[U:(\d+):(\d+)\]\s+(\d+:\d+)\s+(\d+)/g;
  const mappings: NameIdMapping[] = [];

  let match: RegExpExecArray | null;
  while ((match = regex.exec(text))) {
    const [, name, id_prefix, id, time_connected, ping] = match;
    const id3 = `[U:${id_prefix}:${id}]`;
    const url = `https://steamcommunity.com/profiles/${convertSteam3ToSteam64(id)}/`;
    mappings.push({ name, ping, id3, url });
  }

  return mappings
}