import {Telegraf, Markup} from 'telegraf';
import {message} from 'telegraf/filters';

const token = '6945772404:AAFOThuol5cUfgJUcUi7ZbU8z4nT5DfnTm4';
const bot = new Telegraf(token);
const webAppUrl = 'https://angular-tg-app-test-for-bot.web.app';

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello, I\'m a test TG bot! Press on button bellow to get started',
        Markup.keyboard([
            Markup.button.webApp('💌 Send a feedback', webAppUrl + '/feedback'),
            Markup.button.url('📞 Call us for more info: 1234567890', `tel:1234567890`),
            Markup.button.contactRequest('📞 Call us for more info', false, { user_phone_number: '+1234567890' }), // bot.on(message('contact')
        ]).resize(),
    );
});

bot.on(message('contact'), async (ctx) => {
    const { phone_number, first_name } = ctx.message.contact;
    ctx.reply(`Received contact: ${first_name} (${phone_number})`);
});

bot.on(message('web_app_data'), async (ctx) => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'Не удалось получить сообщение');
});

bot.launch();