import fs from 'fs'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'
import fetch from 'node-fetch'
import { parsePhoneNumber } from 'libphonenumber-js'
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
let picture = './media/menus/Menu1.jpg'
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
let fkontak55 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
let fake0 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")
let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'
moment.locale(mid.idioma_code)
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) {
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = countryData.name
const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
}else{
lugarMoment = moment().tz('America/Lima')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = 'America'
ciudad = 'Lima'
}      
             m.react('📚') 
let menu = `\`¡HOLA!\` 👋🏻 • @${m.sender.split`@`[0]}\n${fantasy}${conn.user.jid == global.conn.user.jid ? '' : `\n║˚₊·˚₊· ͟͟͞͞➳* 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 𝑺𝒖𝒃 𝑩𝒐𝒕 ⇢ wa.me/+${global.conn.user.jid.split`@`[0]}`}

> ├┈‧͙⁺˚*▄︻┻═┳一*˚⁺‧͙ 
> ├┈ ¿웃? ZxYerSixZxㅤも​
> ├┈ *Canal oficial:* https://whatsapp.com/channel/0029Vaj67qQJUM2Wa5Ey3y1v
    *Fecha y hora*
> ┣ 𝙵𝙴𝙲𝙷𝙰 𝚈 𝙷𝙾𝚁𝙰: \`${formatDate}\`
> ┣ 𝙿𝙰𝙸𝚂: \`${nombreLugar}\`
> ┣ 𝙲𝙸𝚄𝙳𝙰𝙳: \`${ciudad}\`
> ┣ 𝚄𝚃𝙸𝙻𝙸𝚉𝙰: ${wa}
> *╰──────•◈•──────╯* 
 ${readMore}

> *╭━ \`<FUNCIÓN DE SER UN SUB BOT/>\`
> ╠ 💫 _${usedPrefix}serbot_
> ╠ 💫 _${usedPrefix}serbot --code_
> ╠ 💫 _${usedPrefix}detener | stop_
> ╠ 💫 _${usedPrefix}code_
> *╘━ꥇ─────────────────═༻*
>  ↷ ɪɴғᴏ ᴅᴇ ʙᴏᴛ
> ├• ✐; ₊˚✦୧︰  .
> ├┈»»————- *️ ————-««
> ╠ ☬⃝ᩎ🌹 *${lenguajeCD['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *Registrados »* ${rtotalreg}/${totalreg}    
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsUptime']()}* ➺ _${uptime}_ 
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsVersion']()}* ➺ _${vs}_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🌹 *${lenguajeCD['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeCD['smsModePrivate']().charAt(0).toUpperCase() + lenguajeCD['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeCD['smsModePublic']().charAt(0).toUpperCase() + lenguajeCD['smsModePublic']().slice(1).toLowerCase()}`}_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌹 *${lenguajeCD['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ 🌹 *${lenguajeCD['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
> *╘━ꥇ۬════•| ✿ |•════╝* 

> ╭· · ─────── ·𖥸· ───── · 
> *< *información de ti* />*
> ├┈・─・﹕₊˚ ✦・୨୧・
> ┣ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}_` : '❌ _Sin registro_'}
> ┣ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
> ┣ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
> ┣ *${lenguajeCD['smsBotonM7']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
> ╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏

> *╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
> ┃*< *información* />*
> ├┈・─・﹕₊˚ ✦・୨୧・
> ╠ *${lenguajeCD['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeCD['smsResultPareja']()}`}
> ╠ *Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
> ╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏

>  *「 Info Usuario.*
> *︶︶♡꒷꒦︶꒦꒷♡꒷꒦︶꒦꒷♡︶︶*.
> ╭──╮ - ̗̀ °︹︹︹⊹︹︹︹° 
> ┊🕸️┊ꦿ⿻ ❜ೃ ¡ Tu nivel:
> ╰──╯ ░ - ̗̀↳🗝:❯ *${lenguajeCD['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}

> ╰───────────────────
> ╰──── +˚🧰 Experiencia:.
> ˙·.˙··.˙·.┊ *°*+↷❯  ${exp}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚⚓ Rango:.
> ˙·.˙··.˙·.┊ *°*+↷❯ *${lenguajeCD['smsBotonM5']().charAt(0).toUpperCase() + lenguajeCD['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚💎 Diamantes:.
> ˙·.˙··.˙·.┊ *°*+↷❯ ${limit}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚👾 *FantasyCoins* :.
> ˙·.˙··.˙·.┊ *°*+↷❯ ${money}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
> ╰──── +˚🪙 Tokens:.
> ˙·.˙··.˙·.┊ *°*+↷❯ ${joincount}
> ˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─ 

> ┎━─━─━─━─━─━─━─━─━┒ 
> ├┈ ↷   ɪɴғᴏ
> ├• ✐; ₊˚✦୧︰ Bᴏᴛ .
> ├┈・──・──・﹕₊˚ ✦・୨୧・
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}terminosycondiciones_
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}grupos_
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}estado_
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}infobot_
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}speedtest_
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}donar_
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}owner_
> ╠  ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}script_
> ┖━─━─━─━─━─━─━─━─━┚


> ╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
> ┃ *< 𝑅𝐸𝑃𝑂𝑅𝑇𝐴𝑅 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 />*
> ├┈・──・──・﹕₊˚ ✦・୨୧・
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂𖤍 💌 _${usedPrefix}reporte *texto*_
> ╠ ☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂𖤍 💌 _${usedPrefix}report *texto*_
> ╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏


> ╔─━━━━━━░★░━━━━━━─╗
> ├┈ ↷ Uɴᴇ ᴜɴ ʙᴏᴛ
> ├• ✐; ₊˚✦୧︰A ᴛᴜ ɢʀᴜᴘᴏ  .
> ┈・──・──・﹕₊˚ ✦・୨୧・
>    ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}botemporal *enlace* *cantidad*_
>    ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}addbot *enlace* *cantidad*>
> *╚─━━━━━━░★░━━━━━━─╝*

> ╔─━━━━━━░★░━━━━━━─╗
> ├┈ ↷sᴇʀ ᴜsᴜᴀʀɪᴀ(ᴏ)
> ├• ✐; ₊˚✦୧︰ᴘʀᴇᴍɪᴜᴍ  .
> ├┈・──・──・﹕₊˚ ✦・୨୧・
> ╠   ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}listapremium | listprem_
> ╠   ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}pase premium_
> ╠   ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂🐲 _${usedPrefix}pass premium_
> *╚─━━━━━━░★░━━━━━━─╝*

⚠️Warning⚠️

EL ADD Y EL KICK PUEDEN OCASIONAR QUE EL NUMERO SE VAYA A SOPORTE POR ELLO SE ACTIVA CON #enable restrict, UNIFINED NO SE HACE RESPONSABLE DEL USO, NUMEROS, PRIVACIDAD Y CONTENIDO MANDADO, USADO O GESTIONADO POR USTEDES O EL BOT

╔─━━━━━━━░★░━━━━━━━─╗
├┈ ↷ᴊᴜᴇɢᴏs, ᴇsᴘᴇʀᴏ 
├• ✐; ₊˚✦୧︰ᴛᴇ ᴅɪᴠɪᴇʀᴛᴀs.
├┈・──・──・﹕₊˚ ✦・୨୧・
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}mates | matemáticas | math_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}lanzar *cara* | *cruz*
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ppt *piedra : papel : tijera*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tictactoe | ttt *sala*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}deltictactoe | delttt_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}topgays_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}topotakus_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}toppajer@s_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}topput@s_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}topintegrantes | topintegrante_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}toplagrasa | topgrasa_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}toppanafrescos | toppanafresco_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}topshiposters | topshipost_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}toplindos | toplind@s_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}topfamosos | topfamos@s_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}topparejas | top5parejas_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}gay | gay *@tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}gay2 *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}lesbiana *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}manca *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}manco *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pajero *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pajera *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}puto *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}puta *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}rata *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}love *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}doxear *nombre : @tag*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}doxxeame_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pregunta *texto*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}apostar | slot *cantidad*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}formarpareja_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}dado_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}verdad_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}reto_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}multijuegos_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}juegos_
*╚─━━━━━━━░★░━━━━━━━─╝* 
 
╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ ɪᴀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}simi | okgoogle *texto*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}alexa | siri | cortana *texto*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}simsimi | bixby *texto*_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏* 

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
╠┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *bienvenida | welcome*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *avisos | detect*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *autonivel | autolevelup*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *restringir | restrict*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antillamar | anticall*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *publico | public*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *autovisto | autoread*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *temporal*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *stickers*_ 
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *autosticker*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *reacciones | reaction*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *audios*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *modocaliente | modohorny*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antiver | antiviewonce*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antieliminar | antidelete*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antinternacional | antifake*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antienlace | antilink*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antitiktok | antitk*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antitelegram | antitel*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antifacebook | antifb*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antinstagram | antig*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *antitwitter | antitw*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *soloprivados | pconly*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}on *:* off *sologrupos | gconly*_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏*


╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ʀᴇsᴜᴍᴇɴ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}configuracion_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}settings_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐ _${usedPrefix}vergrupo_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏* 
 ${readMore}
╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ᴅᴇsᴄᴀʀɢᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}imagen | image *texto*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pinterest | dlpinterest *texto*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}wallpaper|wp *texto*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}play | play2 *texto o link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}play.1 *texto o link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}play.2 *texto o link*_ 
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ytmp3 | yta *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ytmp4 | ytv *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pdocaudio | ytadoc *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pdocvieo | ytvdoc *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tw |twdl | twitter *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}facebook | fb *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}instagram *link video o imagen*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}verig | igstalk *usuario(a)*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ighistoria | igstory *usuario(a)*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tiktok *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tiktokimagen | ttimagen *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}mediafire | dlmediafire *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}clonarepo | gitclone *link*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}clima *país ciudad*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}consejo_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}morse codificar *texto*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}morse decodificar *morse*_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}fraseromantica_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}historia_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏*


╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ᴄʜᴀᴛ ᴀɴᴏ́ɴɪᴍᴏ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}chatanonimo | anonimochat_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}anonimoch_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}start_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}next_
╠⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}leave_
*╘━════•| ✿ |•════╝* 

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏɴ ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}add *numero*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}sacar | ban | kick  *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}grupo *abrir : cerrar*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}group *open : close*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}daradmin | promote *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}quitar | demote *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}banchat_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}unbanchat_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}banuser *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}unbanuser *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}admins *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}invocar *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tagall *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}hidetag *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}infogrupo | infogroup_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}advertencia *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}deladvertencia *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}delwarn *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}crearvoto | startvoto *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}sivotar | upvote_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}novotar | devote_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}vervotos | cekvoto_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}delvoto | deletevoto_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}enlace | link_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}newnombre | nuevonombre *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}newdesc | descripcion *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}setwelcome | bienvenida *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}setbye | despedida *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}nuevoenlace | resetlink_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}on_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}off_
*╘━ꥇ۬⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏* 

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ғᴏʀᴍᴀ ᴛᴜ ᴘᴀʀᴇᴊᴀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}listaparejas | listship_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}mipareja | mylove_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pareja | couple *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}aceptar | accept *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}rechazar | decline *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}terminar | finish *@tag*_
*╚─━━━━━━░★░━━━━━━─╝* 


╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ ᴠᴏᴛᴀᴄɪᴏɴᴇs ᴇɴ ɢʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}crearvoto | startvoto *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}sivotar | upvote_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}novotar | devote_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}vervotos | cekvoto_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}delvoto | deletevoto_
*╚─━━━━━━░★░━━━━━━─╝* 


╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ᴄᴏɴᴛᴇɴɪᴅᴏ +18
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔞➺ _${usedPrefix}hornymenu_
┣🔞_$ {usedPrefix}buscar video 🔍| xnxxsearch *texto*_
┣🔞 _${usedPrefix}pornhub | pornhubsearch *texto*_
╠🔞 _${usedPrefix}xnxxdl | xnxxdl *link para descargar*_
*╚─━━━━━━░★░━━━━━━─╝* 

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}toimg | img | jpg *sticker*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}toanime | jadianime *foto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tovn | vn *video o audio*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tovideo *audio*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tourl *video, imagen*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}toenlace  *video, imagen o audio*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tts es *texto*_
*╚─━━━━━━░★░━━━━━━─╝* 

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷  ʟᴏɢᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}logos *efecto texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}menulogos2_
╚─━━━━━━░★░━━━━━━─╝

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷  ᴇғᴇᴄᴛᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}simpcard *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}hornycard *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}lolice *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ytcomment *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}itssostupid_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}pixelar_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}blur_
╚─━━━━━━░★░━━━━━━─╝


╔─━━━━━━░★░━━━━━━─╗
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}chica_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}chico_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}cristianoronaldo_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}messi_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}meme_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}meme2_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}itzy_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}blackpink_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}kpop *blackpink : exo : bts*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}lolivid_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}loli_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}navidad_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ppcouple_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}neko_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}waifu__
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}chiho_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}elaina_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}eba_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}emilia_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}cosplay_
╚─━━━━━━░★░━━━━━━─╝
 ${readMore}
╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ Eғᴇᴄᴛᴏsᴅ ᴅᴇ 
├• ✐; ₊˚✦୧︰ Aᴜᴅɪᴏs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bass_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}blown_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}deep_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}earrape_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}fast_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}fat_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}nightcore_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}reverse_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}robot_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}slow_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}smooth_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}tupai_
╚─━━━━━━░★░━━━━━━─╝
 ${readMore}
╔─━━━━━━░★░━━━━━━─╗
├┈ ↷  ʙᴜsǫᴜᴇᴅᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}animeinfo *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐_${usedPrefix}mangainfo *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐_${usedPrefix}google *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐_${usedPrefix}letra | lirik *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐_${usedPrefix}ytsearch | yts *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐_${usedPrefix}wiki | wikipedia *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂⭐_${usedPrefix}spotify | spotifysearch *texto*_
╚─━━━━━━░★░━━━━━━─╝

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷  Aᴜᴅɪᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 🎧 _${usedPrefix}audios_
╚─━━━━━━░★░━━━━━━─╝
 ${readMore}

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ Hᴇʀʀᴀᴍɪᴇɴᴛᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}inspect *<link wa_gc>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}chatgpt *<texto>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}delchatgpt
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}readviewonce *<imagen / video>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}afk *<motivo>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}hd *<responde a imagen>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}acortar *<enlace / link / url>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}calc *<operacion math>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}del *<mensaje>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}whatmusic *<audio>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}readqr *<imagen (QR)>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}qrcode *<texto>*__
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}horario_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⚙️ _${usedPrefix}dropmail_
╚─━━━━━━░★░━━━━━━─╝
 ${readMore}

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ Rᴘɢ - Lɪᴍɪᴛᴇs
├• ✐; ₊˚✦୧︰ Eᴄᴏɴᴏᴍɪᴀ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}botemporal *enlace* *cantidad*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}addbot *enlace* *cantidad*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}pase premium_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}pass premium_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}listapremium | listprem_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}transfer *tipo cantidad @tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}dar *tipo cantidad @tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}enviar *tipo cantidad @tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}balance_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}cartera | wallet_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}experiencia | exp_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}top | lb | leaderboard_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}nivel | level | lvl_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}rol | rango_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}inventario | inventory_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}aventura | adventure_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}caza | cazar | hunt_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}pescar | fishing_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}animales_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}alimentos_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}curar | heal_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}buy_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}sell_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}verificar | registrar_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}perfil | profile_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}myns_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}unreg *numero de serie*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}minardiamantes | minargemas_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}minargatacoins | minarcoins_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}minarexperiencia | minarexp_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}minar *:* minar2 *:* minar3_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}reclamar | regalo | claim_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}cadahora | hourly_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}cadasemana | semanal | weekly_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}cadames | mes | monthly_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}cofre | abrircofre | coffer_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐  _${usedPrefix}trabajar | work_
╚─━━━━━━░★░━━━━━━─╝

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ ᴛᴏᴘ ɢʟᴏʙᴀʟ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
 『𝑇𝑂𝑃 𝐺𝐿𝑂𝐵𝐴𝐿𝐸𝑆』
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}top | lb | leaderboard_
*╚─━━━━━━░★░━━━━━━─╝* 

 ${readMore}
╔─━━━━━━░★░━━━━━━─╗
├┈ ↷sᴛɪᴄᴋᴇʀ ʏ ғɪʟᴛʀᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}sticker | s *imagen o video*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}sticker | s *url de tipo jpg*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}emojimix *😺+😆*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}scircle | círculo *imagen*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}semoji | emoji *tipo emoji*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}attp *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}attp2 *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ttp *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ttp2 *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ttp3 *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ttp4 *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ttp5 *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}ttp6 *texto*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}dado_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}stickermarker *efecto : responder a imagen*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}stickerfilter *efecto : responder a imagen*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}cs *:* cs2_
*╚─━━━━━━░★░━━━━━━─╝* 

╔─━━━━━━░★░━━━━━━─╗
『𝑀𝑂𝐷𝐼𝐹𝐼𝐶𝐴𝐹 𝑆𝑇𝐼𝐶𝐾𝐸𝑅』
├┈ ↷  ᴍᴏᴅɪғɪᴄᴀʀ
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐_${usedPrefix}wm *packname|author*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐_${usedPrefix}wm *texto1|texto2*_
*╚─━━━━━━░★░━━━━━━─╝* 

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷  Sᴛɪᴄᴋᴇʀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}palmaditas | pat *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bofetada | slap *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}golpear *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}besar | kiss *@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}alimentar | food *@tag*_
*╚─━━━━━━░★░━━━━━━─╝* 

 ${readMore}

╔─━━━━━━░★░━━━━━━─╗
├┈ ↷ *Para mi creador(a) y*
├• ✐; ₊˚✦୧︰*Mᴏᴅᴇʀᴀᴅᴏʀᴇs.*
├┈・──・──・﹕₊˚ ✦・୨୧・
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}autoadmin_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}grouplist_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}chetar_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}leavegc_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}cajafuerte_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}blocklist_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}addowner *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}delowner *<@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}block *<@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}unblock *<@tag*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}msg *<texto>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}banchat_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}unbanchat_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}resetuser *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}banuser *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}unbanuser *_@tag_*
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}dardiamantes *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}añadirxp *<@tag> 
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}banuser *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bc *<texto>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bcchats *<texto>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bcgc *<texto>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bcgc2 *<audio>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bcgc2 *<video>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bcgc2 *<imagen>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}bcbot *<texto>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}cleartpm_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}restart_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}update_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}banlist_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}addprem *<@tag> 
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}addprem2 *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}addprem3 *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}addprem4 *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}delprem *<@tag>*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}listcmd_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _*${usedPrefix}setppbot*_
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}addcmd *<texto> 
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}delcmd
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}saveimage
┣⚔️⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ ⭐ _${usedPrefix}viewimage
╚─━━━━━━━░★░━━━━━━─╝*`.trim()

//await conn.sendFile(m.chat, fantasyImg, 'lp.jpg', menu, fake0, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝙉𝙖𝙩𝙨𝙪𝙠𝙞𝘽𝙤𝙩 ', previewType: 0, thumbnail: picture, sourceUrl: nn }}})
//await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fake0)

const natsuki = ['https://telegra.ph/file/cbfe9e51c144cd2bf11f3.mp4',
'https://telegra.ph/file/e9eb6e019e4cec6e564c5.mp4',
'https://telegra.ph/file/d9942e847d6a2f7f26434.mp4']

/*await conn.sendMessage(m.chat, { video: { url: natsuki.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fake0 })*/

await conn.sendMessage(m.chat, { video: { url: natsuki.getRandom() }, gifPlayback: true, caption: menu,
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363314192605628@newsletter',
newsletterName: "[🐉SonGOKU-MD🐉]",
serverMessageId: -1
},
forwardingScore: 999,
externalAdReply: {
mentionedJid: [m.sender],
title: gt,
body: wm,
thumbnailUrl: pp,
sourceUrl: md,
mediaType: 1,
renderLargerThumbnail: false
}}})

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(m|menú2|Menú2|menu2|Menu2|menucompleto|menubot|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
