import { writable } from 'svelte/store';
import type { NameIdMapping } from './converter';

export const dataStore = writable<NameIdMapping[]>([])