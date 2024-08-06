let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
let gata = `*Instalar* °🌟*SonGOKU-MD*🌟°

*◈ ━━━━━━━ ⸙ ━━━━━━━ ◈ *
 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙉 𝙏𝙀𝙍𝙈𝙐𝙓
◈ ━━━━━━━ ⸙ ━━━━━━━ ◈
cd && termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 

git clone https://github.com/YerTX2/SonGoku-MD

cd SonGoku-MD

yarn install

npm install

npm update

npm start 

       𝘼𝙇𝙊𝙅𝘼𝙈𝙄𝙀𝙉𝙏𝙊 𝘽𝙊𝙏 24/7 
        𝙲𝚘𝚗𝚜𝚒𝚐𝚞𝚎 𝚝𝚞 𝚋𝚘𝚝  
*╔─━━━━━━━━░★░━━━━━━━━━─╗*                             
           𝙄𝙉𝙁𝙄𝙉𝙄𝙏𝙔-𝙒𝘼 
*╚─━━━━━━━━░★░━━━━━━━━━─╝* 
🔵 \`\`\`Información del Host\`\`\

*🌐 Página:*
https://infinitywa-host.com/

*🚩 Dashboard:*
https://dash.infinitywa-host.com

*💻 Panel:*
https://panel.infinitywa-host.com

*〽️ Estado de nuestros servicios:*
https://status.infinitywa-host.com/

*🔰 Discord :*
https://discord.com/invite/JNJYqP52

📢 *Canal de WhatsApp*
https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/J7DTlOOCuEhJS7CW6OSINJ

*═════ ♢.⚔️YerTX2⚔️.♢ ═════ *

❖ ── ✦ ──『${vs}』── ✦ ── ❖`
await conn.sendFile(m.chat, gataImg.getRandom(), 'lp.jpg', gata, fkontak, false, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 𝑽1 𝒃𝒚 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb.getRandom()}}})}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentascd'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler