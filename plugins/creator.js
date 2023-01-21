import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;𝙳𝚊𝚛𝚔𝚡\nNICKNAME:👑 Owner 𝙳𝚊𝚛𝚔𝚡\nORG:NexEp\nTITLE:soft\nitem1.TEL;waid=6282285357346:+62 822-8535-7346\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://instagram.com/mydiam.is.fun\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: satriopambudi866@gmail.com\nitem3.X-ABLabel:💌 Mail Owner 𝙳𝚊𝚛𝚔𝚡𝙱𝚘𝚝\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 24 Mei 2023\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler