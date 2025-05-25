export async function sendTelegramMessage(messageData) {
  const res = await fetch(
    'https://hook.us2.make.com/zr86l288kqu8ntni1e7kwt4xwwfqde90',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to send message');
  }

  return;
}
