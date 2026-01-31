// Drag-and-drop state management
import type { InventoryItem } from './types';

const ACTIVATED_ZONES_KEY = 'temple-of-gong-activated-zones';

// Currently dragged item
let draggedItem = $state<InventoryItem | null>(null);

// Set of activated zone IDs (persisted to session storage)
function loadActivatedZones(): Set<string> {
  if (typeof window === 'undefined') return new Set();

  const stored = sessionStorage.getItem(ACTIVATED_ZONES_KEY);
  if (stored) {
    try {
      return new Set(JSON.parse(stored));
    } catch {
      return new Set();
    }
  }
  return new Set();
}

function saveActivatedZones(zones: Set<string>) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(ACTIVATED_ZONES_KEY, JSON.stringify([...zones]));
  }
}

let activatedZones = $state<Set<string>>(loadActivatedZones());

export function startDrag(item: InventoryItem) {
  draggedItem = item;
}

export function endDrag() {
  draggedItem = null;
}

export function getDraggedItem(): InventoryItem | null {
  return draggedItem;
}

export function activateZone(zoneId: string) {
  activatedZones = new Set([...activatedZones, zoneId]);
  saveActivatedZones(activatedZones);
}

export function isZoneActivated(zoneId: string): boolean {
  return activatedZones.has(zoneId);
}

export function resetActivatedZones() {
  activatedZones = new Set();
  saveActivatedZones(activatedZones);
}

export const dragState = {
  get draggedItem() {
    return draggedItem;
  },
  get activatedZones() {
    return activatedZones;
  }
};
