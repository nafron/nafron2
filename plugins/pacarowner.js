let handler = function (m) {
  // this.sendContact(m.chat, '081252733108', 'Nafron', m)
  conn.sendContact(m.chat, '6281252733108' , 'Masih Jomblo', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
