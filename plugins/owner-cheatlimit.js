let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `𝗔𝗻𝗷𝗮𝘆 𝗖𝗵𝗲𝗮𝘁 𝗮𝘄𝗼𝗸𝗮𝘄𝗼𝗸`, m)
        global.db.data.users[m.sender].money = 100000000000
        global.db.data.users[m.sender].limit = 100000000000
        global.db.data.users[m.sender].level = 10000
        global.db.data.users[m.sender].exp = 1000000000
}
handler.command = /^(curang)$/i

handler.mods = true

export default handler
