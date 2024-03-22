import { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Bot",
        "botConversationDescription": "Synxkill Support Bot",
        "botId": "22d3979d-3510-4742-b102-3f02429c390c",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "22d3979d-3510-4742-b102-3f02429c390c",
        "webhookId": "c00f771f-4628-43e9-b3d0-db6c9bf5141d",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Synxkill",
        "avatarUrl": "https://cdn.discordapp.com/attachments/1199433438755819570/1200109191906472026/Logo3.png?ex=65c4fbc8&is=65b286c8&hm=f3d345a08b9fd4f9a4adce7b8d1a6c238159c2a8958881d36a6dfbc2a3372fe3&",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/81b062f2-5808-4d29-b8be-c2b64efce5fe/v87952/style.css",
        "frontendVersion": "v1",
        "showBotInfoPage": true,
        "theme": "prism",
        "themeColor": "#2563eb"
    });
    };

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}, []);

    return <div id="botpress-webchat"></div>;
};

export default Chat;
