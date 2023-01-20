import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
    const ultah = new Date('Mei 24 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let sewa = `*🎏 Bot Aktif Kak*

${wm}
${botdate}
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, await (await fetch(`https://telegra.ph/file/fb70c8eca0191f1f66065.jpg`)).buffer(), [["🗳️𝗠𝗘𝗡𝗨", usedPrefix + "menu"], ["🔭𝗗𝗢𝗡𝗔𝗦𝗜", usedPrefix + "donasi"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `Yoi : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `𝙵𝚘𝚕𝚕𝚘𝚠 𝙸𝚐 𝚐𝚠 𝙲𝚘𝚔!!`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://i.ibb.co/RTnnbMm/k.jpg`)).buffer(),
                        sourceUrl: 'https://instagram.com/mydiam.is.fun'
            }
        }
    })
}
handler.help = ['tesbot']
handler.tags = ['owner']
handler.command = ['tesbot']
handler.owner = true
export default handler
