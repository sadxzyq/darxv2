let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap Mr.Darkx tadi ketiduran😊* ')
}


handler.tags = ['main']
handler.command = /^(darkon)$/i

handler.admin = true

export default handler