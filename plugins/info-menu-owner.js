import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fake0 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `${lenguajeCD['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}\n${gt}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}

╭━─━─━─━─≪✠≫─━─━─━─━╮
|‧͙
├┈  🌟ZxYerSixZx🌟
╭───────╯•╰───────╮ 
├┈ ↷  ʜᴏʀᴀʀɪᴏ
├• ✐; ₊˚✦୧︰  .
├┈‧͙⁺˚*･༓☾　　☽༓･*˚⁺‧͙ 
┣ ⭐ \`\`\`${horarioFecha}\`\`\`
*╘━ꥇ۬════•| 🌟 |•════╝* 
 ${readMore}

╭━─━──━─━─━━─≪✠≫─━──━─━─━╮
├┈ ↷ *Para mi creador(a) y*
├• ✐; ₊˚✦୧︰*Mᴏᴅᴇʀᴀᴅᴏʀᴇs.*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣  ⫸⚔ _${usedPrefix}autoadmin_
┣  ⫸⚔ _${usedPrefix}grouplist_
┣  ⫸⚔ _${usedPrefix}chetar_
┣  ⫸⚔_${usedPrefix}leavegc_
┣  ⫸⚔_${usedPrefix}cajafuerte_
┣. ⫸⚔ _${usedPrefix}blocklist_
┣  ⫸⚔ _${usedPrefix}addowner *<@tag>*_
┣  ⫸⚔ _${usedPrefix}delowner *<@tag*_
┣  ⫸⚔ _${usedPrefix}block *<@tag*_
┣  ⫸⚔ _${usedPrefix}unblock *<@tag*_
┣  ⫸⚔ _${usedPrefix}msg *<texto>*_
┣  ⫸⚔ _${usedPrefix}banchat_
┣  ⫸⚔ _${usedPrefix}unbanchat_
┣  ⫸⚔ _${usedPrefix}resetuser *<@tag>*_
┣  ⫸⚔ _${usedPrefix}banuser *<@tag>*_
┣  ⫸⚔ _${usedPrefix}unbanuser *_@tag_*
┣  ⫸⚔ _${usedPrefix}dardiamantes *<@tag>*_
┣ ⫸⚔ _${usedPrefix}añadirxp *<@tag> 
┣ ⫸⚔ _${usedPrefix}banuser *<@tag>*_
┣ ⫸⚔ _${usedPrefix}bc *<texto>*_
┣ ⫸⚔ _${usedPrefix}bcchats *<texto>*_
┣ ⫸⚔ _${usedPrefix}bcgc *<texto>*_
┣ ⫸⚔ _${usedPrefix}bcgc2 *<audio>*_
┣ ⫸⚔ _${usedPrefix}bcgc2 *<video>*_
┣ ⫸⚔ _${usedPrefix}bcgc2 *<imagen>*_
┣ ⫸⚔ _${usedPrefix}bcbot *<texto>*_
┣ ⫸⚔ _${usedPrefix}cleartpm_
┣ ⫸⚔ _${usedPrefix}restart_
┣ ⫸⚔ _${usedPrefix}update_
┣ ⫸⚔ _${usedPrefix}banlist_
┣ ⫸⚔ _${usedPrefix}addprem *<@tag> 
┣ ⫸⚔ _${usedPrefix}addprem2 *<@tag>*_
┣ ⫸⚔ _${usedPrefix}addprem3 *<@tag>*_
┣ ⫸⚔ _${usedPrefix}addprem4 *<@tag>*_
┣ ⫸⚔ _${usedPrefix}delprem *<@tag>*_
┣ ⫸⚔ _${usedPrefix}listcmd_
┣ ⫸⚔ _*${usedPrefix}setppbot*_
┣ ⫸⚔ _${usedPrefix}addcmd *<texto> 
┣ ⫸⚔ _${usedPrefix}delcmd
┣ ⫸⚔ _${usedPrefix}saveimage
┣ ⫸⚔ _${usedPrefix}viewimage
╰━─━─━─━─━─≪✠≫─━──━─━━─━╯*`.trim()
//await conn.sendFile(m.chat, FantasyVidMenu.getRandom(), 'error.mp4', menu, fake0)

const natsuki = ['https://telegra.ph/file/9b06a891c9a6d4fe30de4.mp4',
'https://telegra.ph/file/9b06a891c9a6d4fe30de4.mp4',
'https://telegra.ph/file/55b10d3aed098b3c06294.mp4']

await conn.sendMessage(m.chat, { video: { url: natsuki.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fake0 }) 

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menuowner|Menuowner|menuow|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}