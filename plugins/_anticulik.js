let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Beli Premium Dulu !」

• *Gopay:* 6281252733108
• *Telkomsel:* 6281252733108

*follow ig* https://instagram.com/Napong05

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6281252733108', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler