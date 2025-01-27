export async function processOperation(posUid: string, opUrl: string) {
  const res = await fetch(`${opUrl}?posUid=${posUid}`, { method: 'POST' });
  return await res.json();
}

export async function cancelOperation(posUid: string, opUrl: string) {
  const res = await fetch(`${opUrl}?posUid=${posUid}`, { method: "DELETE" });
  return await res.json();
}