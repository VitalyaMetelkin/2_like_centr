const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')


helper.logStart()

const bot = new TelegramBot(config.TOKEN, {
  polling: true
})

bot.on('message', msg => {
  console.log('Working', msg.from.first_name)

    const chatId = helper.getChatId(msg)

  switch (msg.text) {
    case kb.home.kursi:
      bot.sendMessage(chatId, `Пожалуйста, выберите интересующий вас курс:`, {
        reply_markup: {keyboard: keyboard.kursi}
      })
        break
      case kb.home.pomosh:
          bot.sendMessage(chatId, `❓Какие актуальные цены на курсы?
🔹Смотреть ответ: /question__price

❓Где проходят мероприятия?
🔹Смотреть ответ: /question__geolocation

❓Что я получу на мероприятии?
🔹Смотреть ответ: /question__what

❓С кем связаться по поводу оплаты?
🔹Смотреть ответ: /question__contact`, {
              reply_markup: {
                  keyboard: keyboard.pomosh,
                  resize_keyboard: true
              }
          })
          break
      case kb.pomosh.vopros:
          bot.sendMessage(chatId, `Задать любой интересующий вас вопрос вы можете в этом чате`, {
              reply_markup: {
              inline_keyboard: [
          [
              {
                  text: 'Перейти в чат',
                  url: 'https://t.me/joinchat/DhkZ10YEL1VZQ5Vjt_FvBg'
              }
          ]
          ]
          }}
          )
          break
      case kb.pomosh.nazad:
          bot.sendMessage(chatId, `Выберите то, что вас интересует:`, {
              reply_markup: {keyboard: keyboard.home},
              resize_keyboard: true
          })
          break

      case kb.kursi.concentratic:
          bot.sendMessage(chatId, '/concentrat', {
                  reply_markup: {
                  keyboard: keyboard.pomoshtwo,
                  resize_keyboard: true
                  }
  }
          )
          break

      case kb.kursi.dolina:
          bot.sendMessage(chatId, '/dolina', {
                  reply_markup: {
                      keyboard: keyboard.pomoshtwo,
                      resize_keyboard: true
                  }
              }
          )
          break

      case kb.kursi.zapusk:
          bot.sendMessage(chatId, '/zapusk', {
                  reply_markup: {
                      keyboard: keyboard.pomoshtwo,
                      resize_keyboard: true
                  }
              }
          )
          break

      case kb.kursi.nastavnik:
          bot.sendMessage(chatId, '/nastavnik', {
                  reply_markup: {
                      keyboard: keyboard.pomoshtwo,
                      resize_keyboard: true
                  }
              }
          )
          break

      case kb.kursi.nazad:
          bot.sendMessage(chatId, `Выберите то, что вас интересует:`, {
              reply_markup: {keyboard: keyboard.home}
          })
          break

      case kb.pomoshtwo.nazad:
          bot.sendMessage(chatId, `Выберите то, что вас интересует:`, {
              reply_markup: {keyboard: keyboard.kursi}
          })
          break


const caption = `Название`

  }
})

bot.on('message', msg => {
    const chatId = msg.chat.id
    if (msg.text === 'Долина') {
        bot.sendMessage(chatId, '<b>Долина</b> – это пошаговое РУКОВОДСТВО для создания, запуска и развития прибыльного бизнеса. Это концентрат нашего опыта в виде техник, инструментов и схем работы, которые помогли нам сделать миллиард и которые мы продолжаем использовать в группе компаний Лайк. В программе мы на практике показываем, как: \n' +
            '\n' +
            '- выбрать жизнеспособную идею \n' +
            '- проанализировать рынок \n' +
            '- разработать и упаковать ваш уникальный продукт \n' +
            '- привлекать потоки клиентов \n' +
            '- привлекать инвестиции \n' +
            '- построить системность в бизнесе, перевести все из хаоса к порядку\n' +
            '- формировать результативную команду' +
            '\n' +
            '-----------------------------------------------------------\n' +
            '\n' +
            'Дата следующего тренинга: <b>23 декабря</b>\n' +
            'http://likebz.org/new_biz2', {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Забронировать билет',
                            url: 'https://telegram.me/BARS4224'
                        }
                    ]
                ]
            }
        })
    } else if (msg.text === 'Концентрат') {
        bot.sendMessage(chatId, '<b>Что такое концентрат:</b> \n' +
            '\n' +
            '- новое окружение (более 10 000 предпринимателей и тех, кто мечтает ими стать); \n' +
            '- новые знания (3 дня абсолютной бизнес-прокачки - инструменты, практики, тренинги - все для старта и развития вашей бизнес-идеи или бизнеса); \n' +
            '- новую цель и новые возможности; \n' +
            '- новые инсайты; \n' +
            '- новые знакомства; \n' +
            '- новую атмосферу драйва, осмысления и потока информации; \n' +
            '- новые эмоции (“безумные” танцы и самая горячая afterparty).' +
            '\n' +
            '-----------------------------------------------------------\n' +
            '\n' +
            'Дата следующего тренинга: <b>26-28 января</b>\n' +
            'http://likebz.ru/concentrat', {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Забронировать билет',
                            url: 'https://telegram.me/BARS4224'
                        }
                    ]
                ]
            }
        })
    } else if (msg.text === 'Запуск') {
        bot.sendMessage(chatId, '<b>"Запуск" позволит вам: </b> \n' +
            '\n' +
            '👉Минимизировать затраты;\n' +
            '👉Составить грамотный список must-have;\n' +
            '👉Создать ажиотаж вокруг открытия;\n' +
            '👉Ускорить выход на точку самоокупаемости и прибыльности;\n' +
            '👉За короткий срок (день, неделя) получить максимальную прибыль (как за несколько месяцев); \n' +
            '\n' +
            'Хотите научиться использовать ЗАПУСК в своем бизнесе? Жмите на кнопку <b>"ХОЧУ"</b>' +
            '\n' +
            '-----------------------------------------------------------\n' +
            '\n' +
            'Дата следующего тренинга: <b>21 декабря</b>\n' +
            'https://likebz.ru/zapusk', {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'ХОЧУ',
                            url: 'https://telegram.me/BARS4224'
                        }
                    ]
                ]
            }
        })
    } else if (msg.text === 'Наставничество') {
        bot.sendMessage(chatId, '<b>Кто такой наставник?</b> \n' +
            '\n' +
            '- У него есть действующий бизнес или группа бизнесов.\n' +
            '- Чистая прибыль компаний более 0,5 млн руб.\n' +
            '- Носитель практических знаний по развитию малого бизнеса.\n' +
            '- Он уверен в своих силах благодаря опыту.\n' +
            '- Это человек, который научился достигать целей и фокусироваться на задачах кратного роста \n' +
            '\n' +
            '<b>ИЗ ЧЕГО СОСТОИТ КУРС?</b> \n' +
            '\n' +
            '🔎 Подбор наставника по специфике бизнеса и по предпочтениям участника курса.\n' +
            '⚙Аудит компании и поиск истинных проблем.\n' +
            '⭐️Постановка (уточнение) цели, декомпозиция на задачи.\n' +
            '📝️Разработка индивидуального плана работы по проекту\n' +
            '👣Фокус на нужных задачах, корректировка каждую неделю и доведение до результата.\n' +
            '👌️Достижение поставленной цели, при выполнении всех рекомендаций.\n' +
            '\n' +
            '-----------------------------------------------------------\n' +
            '\n' +
            'Дата следующего потока: <b>сейчас</b>\n' +
            'https://likebz.ru/mentors_training', {
            parse_mode: "HTML",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Выбрать наставника',
                            url: 'https://telegram.me/BARS4224'
                        }
                    ]
                ]
            }
        })
    } else if (msg.text === 'Оставить номер') {
        bot.sendMessage(chatId, '<b>Спасибо за обращение!</b> \n' +
            'Мы вам обязательно перезвоним', {
            parse_mode: "HTML"
        })
    }
    bot.on('callback_query', query => {
        const {chat, message_id, text} = query.message

        switch (query.data) {
            case 'nastavnik':
                //куда, откуда, что
                bot.forwardMessage(293063356, chat.id, message_id)
                break
        }
        bot.answerCallbackQuery({
            callback_query_id: query.id
        })
    })
})


bot.onText(/\/start/, msg => {

  const text = `Здравствуйте, ${msg.from.first_name}\nВыберите то, что вас интересует`
  bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
      keyboard: keyboard.home
    }
  })

})

bot.onText(/\/question__price/, msg => {

    const text = `Актуальные цены на курсы:
    
    1) Концентрат:
    VIP - 100 т.р
    Профи - 5 т.р
    Стандарт - 1 т.р
    
    2) Долина:
    VIP - 100 т.р
    Профи - 50 т.р
    Стандарт - 25 т.р
    
    3) Запуск:
    VIP - 100 т.р
    Стандарт - 1 т.р
    
    4) Наставничество:
    Зависит от выбора наставника. 
    Ценник от 1 млн. до 14 тыс. р`



    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            parse_mode: "HTML",
            keyboard: keyboard.pomosh,
            disable_web_page_preview: true,
            resize_keyboard: true
        }
    })

})

bot.onText(/\/question__geolocation/, msg => {

    const text = `Офлайн мероприятия в Красноярске проходят по адресу: 
    ул. Магнитогорская, 1`
    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            parse_mode: "HTML",
            keyboard: keyboard.pomosh,
            disable_web_page_preview: true,
            resize_keyboard: true
        }
    })

})

bot.onText(/\/question__what/, msg => {

    const text = `На любом из мероприятий Like холдинга вы получаете:`
    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            parse_mode: "HTML",
            keyboard: keyboard.pomosh,
            disable_web_page_preview: true,
            resize_keyboard: true
        }
    })

})

bot.onText(/\/question__contact/, msg => {

    const text = `За всей необходимой информацией обращайтесь по телефону: +7 (999) 999-99-99 (с 9:00 до 21:00) или пишите на почту Stas.den@mail.ru`
    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            parse_mode: "HTML",
            keyboard: keyboard.pomosh,
            disable_web_page_preview: true,
            resize_keyboard: true
        }
    })

})



