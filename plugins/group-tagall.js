const wm = '𝐫𝐞𝐲𝐞𝐬 𝟑𝟑𝟑';

const handler = async (m, { conn, participants, isAdmin, isOwner }) => {
  if (!m.isGroup) return global.dfail('group', m, conn);
  if (!isAdmin && !isOwner) return global.dfail('admin', m, conn);

  const texto = (m.text || '').trim();
  const mensaje = texto.replace(/^(\.|)?(tagall|invocar|invocacion|invocación|todos|talibanes)/i, '').trim();

  const emojis = ['🕷️', '🕷️'];
  const lista = participants
    .map((u, i) => `${emojis[i % emojis.length]} @${u.id.split('@')[0]}`)
    .join('\n');

  const textoFinal = [
    '|  𝐋𝐄𝐕𝐀𝐍𝐓𝐄𝐍𝐒𝐄 𝐇𝐔𝐄𝐕𝐎𝐍𝐄𝐒🗣️',
    '',
    '|',
    '',
    mensaje ? `|          *${mensaje}*` : '|          𝐈𝐧𝐯𝐨𝐜𝐚𝐧𝐝𝐨𝐥𝐨𝐬 📞',
    '',
    lista,
    '',
    wm
  ].join('\n');

  await conn.sendMessage(m.chat, {
    text: textoFinal,
    mentions: participants.map(u => u.id)
  });
};

handler.command
handler.group = true;
handler.admin = true;

export default handler;