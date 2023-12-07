import {Telegraf, Markup} from 'telegraf';

const token = '6945772404:AAFOThuol5cUfgJUcUi7ZbU8z4nT5DfnTm4';
const bot = new Telegraf(token);
const webAppUrl = 'https://angular-tg-app-test-for-bot.web.app';

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello, I\'m a test TG bot! Press on button bellow to get started',
        Markup.keyboard([
            Markup.button.webApp(
                'Click here to open webApp',
                webAppUrl
            )
        ]),
    );
});

bot.launch();