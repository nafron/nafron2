let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• FRON BOT
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┣━━°❀❬ *DONASI* ❭❀°━━┓]
┣➥ *Dana:* [081252733108]
┣➥ *Gopay:* [081252733108]
┣➥ *Ovo:* [081252733108]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6281252733108*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Fron BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
