import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://files.catbox.moe/9syqr3.jpg`)).buffer()
let img = catalogo
 global.fake = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363418345562911@newsletter",
      serverMessageId: 100,
      newsletterName: '𝗕𝗮𝗻𝗲𝗮𝗱𝗼 𝗕𝗼𝘁',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: 'https://files.catbox.moe/eivdme.jpg',
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363418345562911@newsletter",
serverMessageId: 100,
newsletterName: '𝗕𝗮𝗻𝗲𝗮𝗱𝗼 𝗕𝗼𝘁',
},
externalAdReply: { 
showAdAttribution: true,
title: '𝗕𝗮𝗻𝗲𝗮𝗱𝗼 - 𝗕𝗼𝘁',
body: '𝗕𝗮𝗻𝗲𝗮𝗱𝗼',
previewType: "PHOTO",
thumbnailUrl: 'https://files.catbox.moe/9syqr3.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
},},}
	
}
