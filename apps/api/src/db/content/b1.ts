import type { CourseSpec } from './types';

export const b1: CourseSpec = {
  title: 'Work & Life — курс (B1)',
  description: 'Курс для взрослых уровня B1: работа, учёба, технологии, деньги и путешествия — с грамматикой, словарём и практикой говорения.',
  level: 'B1',
  audience: 'ADULTS',
  moduleTitle: 'Модуль 1: Работа и карьера',
  vocabulary: [
    { word: 'balance', ru: 'баланс', def: 'equal importance given to different parts of your life', transcription: '/ˈbæləns/', example: "It's not easy to find a balance between work and family life." },
    { word: 'workload', ru: 'объём работы', def: 'the amount of work that a person or machine has to do', transcription: '/ˈwɜːkləʊd/', example: 'Her workload has increased a lot since she got promoted.' },
    { word: 'exhausted', ru: 'измотанный', def: 'extremely tired', transcription: '/ɪɡˈzɔːstɪd/', example: 'I was completely exhausted after the night shift.' },
    { word: 'deadline', ru: 'срок, дедлайн', def: 'the time by which something must be finished', transcription: '/ˈdedlaɪn/', example: 'We have to finish the report before the deadline on Friday.' },
    { word: 'flexible', ru: 'гибкий', def: 'able to change or adapt easily to different situations', transcription: '/ˈfleksəbl/', example: 'My new job offers flexible working hours.' },
    { word: 'overtime', ru: 'сверхурочные', def: 'extra time worked beyond the normal working hours', transcription: '/ˈəʊvətaɪm/', example: 'He often works overtime to finish his projects on time.' },

    { word: 'interview', ru: 'собеседование', def: 'a formal meeting in which someone is asked questions, for example about a job', transcription: '/ˈɪntəvjuː/', example: 'She felt nervous before her first job interview.' },
    { word: 'qualification', ru: 'квалификация', def: 'a skill, degree or achievement that makes someone suitable for a job', transcription: '/ˌkwɒlɪfɪˈkeɪʃn/', example: 'You need a teaching qualification to work at this school.' },
    { word: 'strength', ru: 'сильная сторона', def: 'a good quality or skill that someone has', transcription: '/streŋθ/', example: 'One of my strengths is working well under pressure.' },
    { word: 'weakness', ru: 'слабая сторона', def: 'a fault or area that needs improvement', transcription: '/ˈwiːknəs/', example: "Everyone has to talk about a weakness in an interview." },
    { word: 'confident', ru: 'уверенный в себе', def: 'feeling sure about your own abilities', transcription: '/ˈkɒnfɪdənt/', example: 'He answered every question in a calm, confident voice.' },
    { word: 'impression', ru: 'впечатление', def: 'the opinion or feeling that someone forms about another person', transcription: '/ɪmˈpreʃn/', example: 'First impressions are very important at a job interview.' },

    { word: 'curriculum', ru: 'учебная программа', def: 'the subjects that are taught by a school, college or course', transcription: '/kəˈrɪkjʊləm/', example: 'Foreign languages were added to the school curriculum last year.' },
    { word: 'memorize', ru: 'запоминать наизусть', def: 'to learn something so that you can remember it exactly', transcription: '/ˈmeməraɪz/', example: 'It took her weeks to memorize all the new vocabulary.' },
    { word: 'revise', ru: 'повторять материал', def: 'to study something again, usually before an exam', transcription: '/rɪˈvaɪz/', example: 'I need to revise my notes before the final test.' },
    { word: 'skill', ru: 'навык', def: 'the ability to do something well, usually gained through training or practice', transcription: '/skɪl/', example: 'Listening is just as important a skill as speaking.' },
    { word: 'motivated', ru: 'мотивированный', def: 'feeling eager and determined to do something', transcription: '/ˈməʊtɪveɪtɪd/', example: 'A good teacher keeps students motivated even when the topic is difficult.' },
    { word: 'lecture', ru: 'лекция', def: 'a talk that is given to teach people about a particular subject', transcription: '/ˈlektʃə/', example: 'The professor gave a fascinating lecture on climate change.' },

    { word: 'device', ru: 'устройство', def: 'a piece of equipment that is made for a particular purpose', transcription: '/dɪˈvaɪs/', example: 'Smartphones are the most common electronic device today.' },
    { word: 'upgrade', ru: 'обновление, улучшение', def: 'to change something to a newer or better version', transcription: '/ˈʌpɡreɪd/', example: 'I decided to upgrade my laptop because the old one was too slow.' },
    { word: 'convenient', ru: 'удобный', def: 'easy to use, or saving time and effort', transcription: '/kənˈviːniənt/', example: 'Online banking is much more convenient than going to the bank.' },
    { word: 'reliable', ru: 'надёжный', def: 'able to be trusted to work well or do what is expected', transcription: '/rɪˈlaɪəbl/', example: 'We need a reliable internet connection for video calls.' },
    { word: 'access', ru: 'доступ', def: 'the right or ability to use, enter or reach something', transcription: '/ˈækses/', example: 'Almost everyone in the city has access to the internet now.' },
    { word: 'invent', ru: 'изобретать', def: 'to design or create something that did not exist before', transcription: '/ɪnˈvent/', example: 'Scientists are constantly trying to invent faster ways to charge batteries.' },

    { word: 'pollution', ru: 'загрязнение', def: 'harmful substances or waste that damage the environment', transcription: '/pəˈluːʃn/', example: 'Air pollution is a serious problem in big cities.' },
    { word: 'recycle', ru: 'перерабатывать', def: 'to treat waste so that it can be used again', transcription: '/riːˈsaɪkl/', example: 'We recycle paper, glass and plastic at home.' },
    { word: 'sustainable', ru: 'устойчивый, экологичный', def: 'able to continue for a long time without causing damage to the environment', transcription: '/səˈsteɪnəbl/', example: 'The company promised to use only sustainable materials.' },
    { word: 'waste', ru: 'отходы; расходовать впустую', def: 'material that is thrown away, or to use something carelessly', transcription: '/weɪst/', example: 'Food waste is a huge problem in restaurants.' },
    { word: 'reduce', ru: 'сокращать', def: 'to make the amount or size of something smaller', transcription: '/rɪˈdjuːs/', example: 'The government wants people to reduce their use of plastic bags.' },
    { word: 'resource', ru: 'ресурс', def: 'something useful or valuable, such as a material or supply', transcription: '/rɪˈsɔːs/', example: 'Fresh water is a limited natural resource.' },

    { word: 'custom', ru: 'обычай', def: 'a traditional way of behaving that is typical of a society or place', transcription: '/ˈkʌstəm/', example: "It's a local custom to remove your shoes before entering a house." },
    { word: 'tradition', ru: 'традиция', def: 'a belief or activity that has existed for a long time and is passed between generations', transcription: '/trəˈdɪʃn/', example: 'Celebrating the New Year with fireworks is a tradition in many countries.' },
    { word: 'abroad', ru: 'за границей', def: 'in or to a foreign country', transcription: '/əˈbrɔːd/', example: 'She decided to study abroad for a year.' },
    { word: 'etiquette', ru: 'этикет', def: 'the accepted rules of polite behaviour in society or a profession', transcription: '/ˈetɪket/', example: 'Business etiquette can be very different from one country to another.' },
    { word: 'diverse', ru: 'разнообразный', def: 'including many different types of people or things', transcription: '/daɪˈvɜːs/', example: 'London is one of the most culturally diverse cities in the world.' },
    { word: 'fascinating', ru: 'увлекательный', def: 'extremely interesting', transcription: '/ˈfæsɪneɪtɪŋ/', example: 'I find the history of ancient Egypt absolutely fascinating.' },

    { word: 'budget', ru: 'бюджет', def: 'a plan that shows how much money you will earn and spend', transcription: '/ˈbʌdʒɪt/', example: 'We made a budget to control our monthly spending.' },
    { word: 'income', ru: 'доход', def: 'the money that a person or organization earns', transcription: '/ˈɪnkʌm/', example: 'Her monthly income increased after the promotion.' },
    { word: 'expense', ru: 'расход', def: 'an amount of money that has to be spent on something', transcription: '/ɪkˈspens/', example: 'Rent is our biggest monthly expense.' },
    { word: 'afford', ru: 'позволить себе', def: 'to have enough money to be able to pay for something', transcription: '/əˈfɔːd/', example: "We can't afford a new car this year." },
    { word: 'save', ru: 'копить, экономить', def: 'to keep money instead of spending it, usually for future use', transcription: '/seɪv/', example: 'They are saving money to buy a house.' },
    { word: 'debt', ru: 'долг', def: 'a sum of money that you owe to someone', transcription: '/det/', example: 'It took him three years to pay off his debt.' },

    { word: 'fitness', ru: 'физическая форма', def: 'the condition of being physically healthy and strong', transcription: '/ˈfɪtnəs/', example: 'Regular exercise is essential for good fitness.' },
    { word: 'endurance', ru: 'выносливость', def: 'the ability to keep doing something difficult or tiring for a long time', transcription: '/ɪnˈdjʊərəns/', example: 'Marathon runners need a lot of endurance.' },
    { word: 'injury', ru: 'травма', def: 'damage caused to a part of the body', transcription: '/ˈɪndʒəri/', example: 'He missed the match because of a knee injury.' },
    { word: 'nutrition', ru: 'питание', def: 'the process of eating the right kind of food for good health', transcription: '/njuːˈtrɪʃn/', example: 'Good nutrition is just as important as exercise.' },
    { word: 'routine', ru: 'распорядок, режим', def: 'a fixed and regular way of doing things', transcription: '/ruːˈtiːn/', example: 'I try to follow the same morning routine every day.' },
    { word: 'improve', ru: 'улучшать(ся)', def: 'to become better, or to make something better', transcription: '/ɪmˈpruːv/', example: 'Her English has improved a lot since she moved to Canada.' },

    { word: 'trust', ru: 'доверие', def: 'the belief that someone is honest and can be relied on', transcription: '/trʌst/', example: 'Trust is the most important part of any relationship.' },
    { word: 'conflict', ru: 'конфликт', def: 'a serious disagreement between people', transcription: '/ˈkɒnflɪkt/', example: 'They tried to solve the conflict calmly, without shouting.' },
    { word: 'apologize', ru: 'извиняться', def: 'to say that you are sorry for something you have done', transcription: '/əˈpɒlədʒaɪz/', example: 'He apologized for arriving late to the meeting.' },
    { word: 'support', ru: 'поддержка; поддерживать', def: 'help, encouragement or comfort given to someone', transcription: '/səˈpɔːt/', example: 'Her friends gave her a lot of support during a difficult time.' },
    { word: 'misunderstanding', ru: 'недопонимание', def: 'a failure to understand something correctly', transcription: '/ˌmɪsʌndəˈstændɪŋ/', example: 'The whole argument started because of a simple misunderstanding.' },
    { word: 'honest', ru: 'честный', def: 'telling the truth and not hiding or lying about things', transcription: '/ˈɒnɪst/', example: 'Being honest with your partner builds a stronger relationship.' },

    { word: 'journey', ru: 'путешествие, поездка', def: 'an act of travelling from one place to another', transcription: '/ˈdʒɜːni/', example: 'The journey across the mountains took almost ten hours.' },
    { word: 'adventure', ru: 'приключение', def: 'an exciting or unusual experience', transcription: '/ədˈventʃə/', example: 'Backpacking through South America was the biggest adventure of her life.' },
    { word: 'unexpected', ru: 'неожиданный', def: 'not expected or predicted', transcription: '/ˌʌnɪkˈspektɪd/', example: 'We met an old friend in a completely unexpected place.' },
    { word: 'memorable', ru: 'запоминающийся', def: 'worth remembering because it is special or unusual', transcription: '/ˈmemərəbl/', example: 'Our trip to the coast was one of the most memorable weekends of the year.' },
    { word: 'delay', ru: 'задержка', def: 'a period of time when something happens later than planned', transcription: '/dɪˈleɪ/', example: 'The flight delay meant we missed our connecting train.' },
    { word: 'luggage', ru: 'багаж', def: 'the bags and suitcases that you take with you when you travel', transcription: '/ˈlʌɡɪdʒ/', example: 'She lost her luggage at the airport and had to wait two days for it.' },
  ],
  lessons: [
    {
      title: 'Work-Life Balance',
      description: 'Как говорить о балансе между работой и личной жизнью и использовать Present Perfect Continuous.',
      estimatedMinutes: 28,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'В этом уроке вы узнаете, как говорить о балансе между работой и личной жизнью, а также научитесь использовать Present Perfect Continuous для описания действий, которые начались в прошлом и продолжаются сейчас.' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['balance', 'workload', 'exhausted', 'deadline', 'flexible', 'overtime'] } },
        { type: 'GRAMMAR', title: 'Present Perfect Continuous', content: { explanation: "Present Perfect Continuous (have/has been + глагол с окончанием -ing) используется, когда мы говорим о действии, которое началось в прошлом и продолжается до настоящего момента, либо недавно закончилось, но его результат ощущается сейчас. Формула: have/has + been + V-ing. Например: 'I have been working on this project since March.' (Я работаю над этим проектом с марта — и продолжаю работать.) Мы часто используем это время с предлогами for (в течение) и since (с какого-то момента): 'She has been feeling exhausted for two weeks.' В вопросах: 'How long have you been studying English?'" } },
        { type: 'READING', title: 'Why work-life balance matters', content: { text: "Many people today have been working longer hours than ever before. Technology has made it easy to answer emails at any time, even late at night or on weekends. As a result, more and more employees have been feeling exhausted and stressed. Doctors say that a poor work-life balance can lead to serious health problems, including sleep disorders and anxiety. Some companies have started offering flexible schedules so that employees can manage their workload more easily. For example, workers can choose to start earlier and finish earlier, or they can work from home two days a week. Experts have been studying this trend for several years, and the results are clear: employees with a better balance are usually more productive, not less. In the end, taking care of your personal life is not a luxury — it is a necessity for long-term success at work." } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the correct sentence.', options: ['She have been working here for three years.', 'She has been working here for three years.', 'She has being working here for three years.', 'She has been work here for three years.'], correctIndex: 1, explanation: "После he/she/it используется 'has', а глагол после 'been' всегда в форме -ing: has been working." } },
            { type: 'FILL_BLANK', content: { text: "I ___ (work) on this report since nine o'clock this morning.", answers: ['have been working', "'ve been working"] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: 'Talk about something you have been doing lately to improve your work-life balance. How long have you been doing it, and what results have you noticed?', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'VOCABULARY', content: { question: "What does 'overtime' mean?", options: ['Extra time worked beyond normal hours', 'A short break during work', 'The official end of a shift', 'A type of holiday pay'], correctIndex: 0, explanation: "'Overtime' — сверхурочные, время, отработанное сверх обычной нормы." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите абзац (6-8 предложений) о том, как вы поддерживаете баланс между работой и личной жизнью. Используйте хотя бы четыре новых слова: balance, workload, exhausted, deadline, flexible, overtime.' } },
      ],
    },
    {
      title: 'Job Interview Basics',
      description: 'Подготовка к собеседованию и Second Conditional для гипотетических советов.',
      estimatedMinutes: 28,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'Этот урок посвящён подготовке к собеседованию при приёме на работу. Вы также научитесь строить советы и гипотетические ситуации с помощью Second Conditional.' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['interview', 'qualification', 'strength', 'weakness', 'confident', 'impression'] } },
        { type: 'GRAMMAR', title: 'Second Conditional', content: { explanation: "Second Conditional (условное предложение второго типа) используется для описания гипотетических, нереальных или маловероятных ситуаций в настоящем или будущем, а также часто для советов. Формула: If + подлежащее + Past Simple, + подлежащее + would (not) + инфинитив без to. Например: 'If I were you, I would ask about the salary.' (Если бы я был на твоём месте, я бы спросил о зарплате.) 'If she prepared more, she would feel more confident.' Обратите внимание: с глаголом be традиционно используется форма 'were' для всех лиц: 'If I were...', хотя в разговорной речи иногда встречается 'was'. 'Would' часто сокращается до 'd: 'I'd ask...'" } },
        { type: 'READING', title: 'Getting ready for an interview', content: { text: "Preparing for a job interview can feel stressful, but a little planning makes a big difference. Career coaches often say that if candidates researched the company beforehand, they would feel much more confident. It also helps to think about your strengths and weaknesses before the interview, because almost every interviewer asks about them. If you were asked 'What is your biggest weakness?', you could mention something real, but also explain how you are working to improve it. Body language matters too: if you made eye contact and smiled naturally, you would create a better impression. Many experts agree that if candidates practised their answers out loud, they would sound far more confident during the real interview. Finally, always prepare a few questions to ask at the end — if you asked nothing, the interviewer might think you weren't really interested in the job." } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the correct sentence.', options: ['If I was you, I will prepare more.', 'If I were you, I would prepare more.', 'If I would be you, I prepare more.', 'If I am you, I would prepare more.'], correctIndex: 1, explanation: "Во втором типе условных предложений после 'if' используется Past Simple (were), а в главной части — would + инфинитив." } },
            { type: 'FILL_BLANK', content: { text: 'If she ___ (have) more confidence, she would answer the questions more calmly.', answers: ['had'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: "Imagine a friend is nervous about an upcoming job interview. What advice would you give them? Use sentences like 'If I were you, I would...'", rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'GRAMMAR', content: { question: 'Which sentence correctly uses the Second Conditional?', options: ['If I get the job, I would be very happy.', 'If I got the job, I would be very happy.', 'If I will get the job, I would be very happy.', 'If I got the job, I will be very happy.'], correctIndex: 1, explanation: 'В условной части используется Past Simple, а в главной части — would + инфинитив, а не will.' } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: "Напишите пять советов для подготовки к собеседованию, используя конструкцию 'If I were you, I would...'. Используйте хотя бы четыре новых слова: interview, qualification, strength, weakness, confident, impression." } },
      ],
    },
    {
      title: 'Education and Learning Styles',
      description: 'Стили обучения и модальные глаголы should/must/have to для советов и обязанностей.',
      estimatedMinutes: 27,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'В этом уроке мы обсудим разные стили обучения и разницу между модальными глаголами should, must и have to.' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['curriculum', 'memorize', 'revise', 'skill', 'motivated', 'lecture'] } },
        { type: 'GRAMMAR', title: 'Should / Must / Have to', content: { explanation: "Модальные глаголы should, must и have to выражают совет или обязанность, но с разными оттенками. Should — это совет или рекомендация, не строгое правило: 'You should revise your notes before the exam.' (Тебе следует повторить конспекты.) Must — сильная необходимость, часто связанная с правилами или личным убеждением говорящего: 'Students must switch off their phones during the lecture.' Have to — обязанность, которая исходит извне (от правил, других людей), часто используется в повседневной речи: 'I have to attend every lecture this semester.' В прошедшем времени have to меняется на had to, а у must нет формы прошедшего времени, поэтому вместо него тоже используется had to." } },
        { type: 'READING', title: 'Finding your learning style', content: { text: 'Everyone learns in a different way, and understanding your own learning style can make studying much easier. Some students must see information written down or drawn in diagrams to remember it — these are visual learners. Others learn best by listening, so they should record lectures and listen to them again later. Kinaesthetic learners often have to move around or use their hands while they study, for example by writing flashcards or acting out new vocabulary. Teachers say that students should try several different techniques before deciding which one works best for them. In most universities, students have to attend a minimum number of lectures to pass a course, but attending is not enough on its own — they must also revise regularly and practise what they have learned. If you want to remember something for a long time, you should review it several times over a few weeks, instead of memorizing it the night before a test.' } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Which sentence expresses a strong rule, not just advice?', options: ['You should read more books.', 'You must bring your ID card to the exam.', 'You could try a different method.', 'You might enjoy this course.'], correctIndex: 1, explanation: "'Must' выражает строгую необходимость или правило, в отличие от 'should', которое — просто совет." } },
            { type: 'FILL_BLANK', content: { text: "Students ___ (have to) submit their assignments before midnight, or the system won't accept them.", answers: ['have to'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: 'What is your own learning style? Describe what you should do, and what you have to do, to study a new subject effectively.', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'VOCABULARY', content: { question: "What does 'curriculum' mean?", options: ['A list of subjects taught in a course', 'A type of exam', "A student's final grade", "A teacher's private notes"], correctIndex: 0, explanation: "'Curriculum' — учебная программа, набор предметов, которые преподаются в курсе." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите абзац о своём любимом способе учиться, используя should, must и have to, а также хотя бы четыре новых слова: curriculum, memorize, revise, skill, motivated, lecture.' } },
      ],
    },
    {
      title: 'Technology in Daily Life',
      description: 'Технологии в повседневной жизни и пассивный залог в настоящем и прошедшем времени.',
      estimatedMinutes: 28,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'В этом уроке мы поговорим о технологиях в повседневной жизни и научимся строить предложения в пассивном залоге.' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['device', 'upgrade', 'convenient', 'reliable', 'access', 'invent'] } },
        { type: 'GRAMMAR', title: 'Passive Voice (Present & Past Simple)', content: { explanation: "Пассивный залог (Passive Voice) используется, когда важнее само действие или объект действия, а не то, кто его совершает (или исполнитель неизвестен либо неважен). Формула: быть (am/is/are — настоящее, was/were — прошедшее) + причастие прошедшего времени (V3/-ed). Present Simple Passive: 'Millions of devices are produced every year.' (Миллионы устройств производятся каждый год.) Past Simple Passive: 'The first smartphone was invented in the 1990s.' (Первый смартфон был изобретён в 1990-х.) Если нужно указать исполнителя действия, используется 'by': 'This app was designed by a small team of engineers.'" } },
        { type: 'READING', title: 'How technology changes our day', content: { text: 'Technology changes the way we live every single day. New devices are released almost every month, and many of them are bought within hours of becoming available. Smartphones are used for almost everything now: shopping, banking, studying and even controlling home appliances. The first touchscreen phone was developed in the early 2000s, and since then, millions of apps have been created for different purposes. In many offices, paperwork is now replaced by digital documents that are stored in the cloud. Even simple household tasks are being changed by technology — lights can be switched on by voice commands, and groceries can be ordered through an app. However, not everything about technology is positive. Personal data is sometimes collected without people fully realizing it, and privacy has become a serious concern. Because of this, new laws are being written in many countries to protect users better.' } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the sentence in the correct passive form.', options: ['This phone was design in Japan.', 'This phone designed in Japan.', 'This phone was designed in Japan.', 'This phone is designed in Japan last year.'], correctIndex: 2, explanation: 'Past Simple Passive образуется по формуле was/were + причастие прошедшего времени (V3): was designed.' } },
            { type: 'FILL_BLANK', content: { text: 'Most modern laptops ___ (make) in large factories in Asia.', answers: ['are made'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: 'Describe a piece of technology that is used in your daily life. How was it invented, and how is it used today?', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'GRAMMAR', content: { question: 'Which sentence is in the passive voice?', options: ['Engineers developed the new app last year.', 'The new app was developed by engineers last year.', 'Engineers are developing a new app.', 'Engineers will develop a new app.'], correctIndex: 1, explanation: "В пассивном залоге подлежащее получает действие: 'The new app was developed...' — акцент на приложении, а не на инженерах." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите абзац о технологии, которую вы используете каждый день, используя пассивный залог (is/are + V3, was/were + V3) и хотя бы четыре новых слова: device, upgrade, convenient, reliable, access, invent.' } },
      ],
    },
    {
      title: 'Environment and Recycling',
      description: 'Экология и переработка отходов; Present Perfect (опыт) против Past Simple.',
      estimatedMinutes: 27,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'Тема урока — экология и переработка отходов. Вы потренируетесь выбирать между Present Perfect (для опыта) и Past Simple (для конкретного момента в прошлом).' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['pollution', 'recycle', 'sustainable', 'waste', 'reduce', 'resource'] } },
        { type: 'GRAMMAR', title: 'Present Perfect vs. Past Simple', content: { explanation: "Present Perfect (have/has + V3) используется, когда мы говорим об опыте в жизни без указания точного времени — важен сам факт, а не то, когда это произошло: 'I have visited a recycling centre.' (Я бывал на центре переработки — когда-то, неважно когда.) Past Simple используется, когда мы указываем конкретное время действия в прошлом: 'I visited a recycling centre last month.' Сравните: 'Have you ever recycled plastic bottles?' — спрашиваем об опыте в целом. 'Did you recycle the bottles yesterday?' — спрашиваем о конкретном случае. Слова ever, never, already, yet чаще используются с Present Perfect, а yesterday, last week, in 2020 — с Past Simple." } },
        { type: 'READING', title: 'Our growing waste problem', content: { text: 'Pollution has become one of the biggest problems of our time. Many cities have already introduced strict rules about plastic waste, and some countries have banned single-use plastic bags completely. Have you ever wondered what happens to the plastic bottle you throw away? Most plastic takes hundreds of years to break down naturally, which is why recycling is so important. Last year, a small town in Germany reduced its waste by almost forty percent simply by teaching children how to sort rubbish at school. Scientists have studied ocean pollution for decades, but the problem has only recently started to receive serious global attention. In 2019, several major companies promised to use more sustainable packaging, and some of them have already kept that promise. If every family reduced its waste by just a little, the effect on the environment would be enormous.' } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the correct sentence.', options: ['I have recycled plastic bottles yesterday.', 'I recycled plastic bottles yesterday.', 'I have recycle plastic bottles yesterday.', 'I recycling plastic bottles yesterday.'], correctIndex: 1, explanation: "Слово 'yesterday' указывает на конкретное время в прошлом, поэтому используется Past Simple, а не Present Perfect." } },
            { type: 'FILL_BLANK', content: { text: 'Have you ever ___ (recycle) glass bottles at home?', answers: ['recycled'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: 'Have you ever taken part in a recycling programme or reduced waste in some way? Describe your experience, and compare it with what you did last week.', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'VOCABULARY', content: { question: "What does 'sustainable' mean?", options: ['Able to continue without harming the environment', 'Extremely expensive', 'Made only from plastic', 'Impossible to recycle'], correctIndex: 0, explanation: "'Sustainable' — устойчивый, не наносящий долгосрочного вреда окружающей среде." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите абзац о своём опыте заботы об окружающей среде: что вы уже делали (Present Perfect) и что вы делали в конкретный момент (Past Simple). Используйте хотя бы четыре новых слова: pollution, recycle, sustainable, waste, reduce, resource.' } },
      ],
    },
    {
      title: 'Cultural Differences and Travel',
      description: 'Культурные различия в путешествиях и косвенная речь (Reported Speech).',
      estimatedMinutes: 29,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'В этом уроке речь пойдёт о культурных различиях во время путешествий. Вы научитесь пересказывать чужие слова с помощью косвенной речи (Reported Speech).' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['custom', 'tradition', 'abroad', 'etiquette', 'diverse', 'fascinating'] } },
        { type: 'GRAMMAR', title: 'Reported Speech (утверждения)', content: { explanation: "Косвенная речь (Reported Speech) используется, когда мы пересказываем слова другого человека, не цитируя их напрямую. При переходе от прямой речи к косвенной время обычно сдвигается на один шаг в прошлое (backshift): Present Simple → Past Simple, Present Continuous → Past Continuous, Present Perfect → Past Perfect. Например, прямая речь: 'I live in Spain.' → косвенная речь: 'She said that she lived in Spain.' Также меняются местоимения и некоторые слова времени: 'today' → 'that day', 'tomorrow' → 'the next day'. После глагола 'tell' нужно указать, кому сказали: 'She told me that she lived in Spain.', а после 'say' человека напрямую не указывают." } },
        { type: 'READING', title: 'Lessons from travelling', content: { text: 'Travelling abroad often teaches us how different customs can be from one country to another. A friend of mine who travelled to Japan told me that people there almost never raise their voices in public, even when they disagree. She said that tipping was actually considered rude in many restaurants, which surprised her a lot. In some Middle Eastern countries, it is polite to accept food or drink when it is offered, even if you are not hungry — a local once told a tourist that refusing hospitality could be seen as impolite. Business etiquette also varies widely: in Germany, people said that punctuality was extremely important, while in some Latin American countries, arriving a little late to a meeting is completely normal. Understanding these traditions before travelling can prevent embarrassing misunderstandings and help you make a better impression. Experienced travellers often say that the most fascinating part of visiting a new culture is simply watching how everyday life is organized differently.' } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: "Choose the correct reported speech sentence for: 'I am learning French.'", options: ['She said that she is learning French.', 'She said that she learns French.', 'She said that she was learning French.', 'She said that she will learn French.'], correctIndex: 2, explanation: 'В косвенной речи Present Continuous меняется на Past Continuous: was learning.' } },
            { type: 'FILL_BLANK', content: { text: 'He said that he ___ (visit) Thailand the previous year.', answers: ['had visited'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: 'Think of something interesting someone once told you about another culture or country. Report what they said, using reported speech.', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'GRAMMAR', content: { question: "Which sentence correctly reports: 'We live in Canada.'?", options: ['They said that they live in Canada.', 'They said that they lived in Canada.', 'They said that they are living in Canada.', 'They said we live in Canada.'], correctIndex: 1, explanation: "Present Simple в прямой речи ('live') превращается в Past Simple ('lived') в косвенной речи." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите короткий рассказ (6-8 предложений) о культурных различиях, которые вы заметили сами или о которых вам рассказывали друзья, используя косвенную речь. Используйте хотя бы четыре новых слова: custom, tradition, abroad, etiquette, diverse, fascinating.' } },
      ],
    },
    {
      title: 'Money and Budgeting',
      description: 'Деньги и планирование бюджета; First Conditional для реальных планов на будущее.',
      estimatedMinutes: 27,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'В этом уроке мы обсудим управление деньгами и бюджетирование, а также научимся строить First Conditional для реальных ситуаций в будущем.' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['budget', 'income', 'expense', 'afford', 'save', 'debt'] } },
        { type: 'GRAMMAR', title: 'First Conditional', content: { explanation: "First Conditional (условное предложение первого типа) описывает реальные или вполне вероятные ситуации в будущем и их последствия. Формула: If + подлежащее + Present Simple, + подлежащее + will (won't) + инфинитив. Например: 'If you make a budget, you will control your spending better.' (Если ты составишь бюджет, ты будешь лучше контролировать свои расходы.) 'If she doesn't save money now, she won't be able to afford a holiday next year.' Порядок частей можно менять: 'You will save more money if you stop buying coffee every day.' Обратите внимание: после 'if' никогда не используется 'will' — только Present Simple." } },
        { type: 'READING', title: 'Smart money habits', content: { text: "Managing money wisely is a skill that everyone needs, no matter how much they earn. Financial advisers often say that if people track their income and expenses carefully, they will have a much clearer picture of their finances. Making a monthly budget is one of the simplest ways to start: if you write down every expense, even small ones like coffee or bus tickets, you will quickly see where your money actually goes. Many young adults get into debt because they spend more than they can afford, especially with credit cards that make spending feel easy. If you want to avoid this problem, you will need some basic rules, such as saving a fixed percentage of your income every month before spending the rest. Experts also recommend building an emergency fund: if something unexpected happens, like losing a job or needing urgent repairs, you won't have to borrow money immediately. In the end, if you plan your budget carefully today, your future self will thank you for it." } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the correct First Conditional sentence.', options: ['If I save enough money, I will buy a new laptop.', 'If I will save enough money, I buy a new laptop.', 'If I saved enough money, I will buy a new laptop.', 'If I save enough money, I would buy a new laptop.'], correctIndex: 0, explanation: "В первом типе условных предложений после 'if' используется Present Simple, а в главной части — will + инфинитив." } },
            { type: 'FILL_BLANK', content: { text: "If you don't make a budget, you ___ (lose) track of your expenses.", answers: ['will lose'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: 'What will you do if you want to save more money this year? Describe at least two realistic plans using the First Conditional.', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'VOCABULARY', content: { question: "What does 'afford' mean?", options: ['To have enough money to pay for something', 'To spend money carelessly', 'To borrow money from a bank', 'To give money to charity'], correctIndex: 0, explanation: "'Afford' — позволить себе (в финансовом смысле), иметь достаточно денег для чего-то." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите свой план по управлению деньгами на следующий месяц, используя First Conditional (If..., will...). Используйте хотя бы четыре новых слова: budget, income, expense, afford, save, debt.' } },
      ],
    },
    {
      title: 'Sports and a Healthy Lifestyle',
      description: 'Спорт и здоровый образ жизни; сравнительные конструкции и "the more... the more...".',
      estimatedMinutes: 28,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'Тема урока — спорт и здоровый образ жизни. Мы повторим сравнительную степень прилагательных и выучим конструкцию "the + comparative, the + comparative".' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['fitness', 'endurance', 'injury', 'nutrition', 'routine', 'improve'] } },
        { type: 'GRAMMAR', title: 'The more..., the more...', content: { explanation: "Мы уже знаем сравнительную степень прилагательных: faster, more difficult, better. В этом уроке добавим особую конструкцию 'the + сравнительная степень..., the + сравнительная степень...', которая показывает, что два изменения происходят одновременно и связаны друг с другом: чем больше одно, тем больше другое. Например: 'The more you train, the stronger you become.' (Чем больше ты тренируешься, тем сильнее становишься.) 'The harder you work, the better your results will be.' Если прилагательное короткое, добавляем -er: 'the faster, the better'; если длинное — используем 'more': 'the more difficult, the more interesting'. Эта конструкция часто используется для советов и наблюдений о жизни и спорте." } },
        { type: 'READING', title: 'Small habits, big results', content: { text: 'Staying fit is not only about going to the gym — it is a combination of exercise, nutrition and rest. Trainers often say that the more consistent you are with your routine, the better your results will be, even if each individual workout is short. Endurance, for example, improves gradually: the more often you run, the longer distance you will be able to cover without feeling exhausted. Nutrition plays an equally important role. The healthier your diet is, the faster your body recovers after exercise. Many athletes also learn an important lesson the hard way: the harder you push yourself without enough rest, the greater the risk of injury becomes. That is why professional trainers recommend balancing intense workouts with proper recovery days. Interestingly, research shows that the more sleep people get, the better their performance is the next day, both in sports and at work. In short, a healthy lifestyle is not about doing one thing perfectly, but about improving several habits together, little by little.' } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the correct sentence.', options: ['The more you practise, the better you get.', 'The more you practise, better you get.', 'More you practise, the better you get.', 'The more you practise, the gooder you get.'], correctIndex: 0, explanation: "Правильная структура: 'the + сравнительная степень, the + сравнительная степень'; 'better' — особая форма от 'good', а не 'gooder'." } },
            { type: 'FILL_BLANK', content: { text: 'The more often you exercise, the ___ (strong) your muscles become.', answers: ['stronger'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: "Talk about your own fitness routine. Have you noticed that 'the more you train, the better you feel'? Give examples.", rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'GRAMMAR', content: { question: 'Which sentence uses the correct comparative structure?', options: ['The more careful you eat, the healthier you become.', 'The more carefully you eat, the healthier you become.', 'The carefully more you eat, the health you become.', 'More carefully you eat, healthier you become.'], correctIndex: 1, explanation: "Перед наречием 'carefully' используется 'more', а структура повторяется в обеих частях: 'the more carefully..., the healthier...'." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите абзац о здоровом образе жизни, используя как минимум две конструкции "the + comparative, the + comparative". Используйте хотя бы четыре новых слова: fitness, endurance, injury, nutrition, routine, improve.' } },
      ],
    },
    {
      title: 'Relationships and Communication',
      description: 'Отношения и общение; определительные придаточные предложения с who/which/that.',
      estimatedMinutes: 28,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'В этом уроке мы говорим об отношениях и общении, а также учимся использовать определительные придаточные предложения с who, which и that.' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['trust', 'conflict', 'apologize', 'support', 'misunderstanding', 'honest'] } },
        { type: 'GRAMMAR', title: 'Defining Relative Clauses', content: { explanation: "Определительные придаточные предложения (defining relative clauses) добавляют важную информацию, без которой непонятно, о ком или о чём идёт речь. Для людей используется 'who' (или 'that'), для вещей — 'which' (или 'that'). Такие предложения не выделяются запятыми, потому что информация в них необходима. Например: 'A good friend is someone who always tells you the truth.' (Хороший друг — это тот, кто всегда говорит тебе правду.) 'Trust is something which takes a long time to build.' В разговорной речи 'that' часто заменяет и 'who', и 'which': 'the person that helped me' = 'the person who helped me'. Если относительное местоимение является дополнением, его можно опустить: 'the advice (that) she gave me was very useful'." } },
        { type: 'READING', title: 'What makes a relationship strong', content: { text: 'Good communication is one of the things that makes a relationship strong. Couples who talk openly about their problems usually solve conflicts much faster than those who avoid difficult conversations. A misunderstanding that is not resolved quickly can grow into a much bigger problem over time. Psychologists who study relationships often say that the people who listen carefully, instead of just waiting for their turn to speak, build deeper trust with their partners. Honesty is another quality that strong relationships depend on: a friend who is honest, even when it is uncomfortable, is far more valuable than one who only says what you want to hear. Apologizing is also a skill that many people never fully learn. A simple apology that sounds sincere can repair damage that silence never could. In the end, the relationships that last the longest are usually the ones in which both people feel truly heard.' } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the correct sentence.', options: ['A person which helps others is kind.', 'A person who helps others is kind.', 'A person whom helps others is kind.', 'A person whose helps others is kind.'], correctIndex: 1, explanation: "Для людей в определительных придаточных используется 'who' (или 'that'), а не 'which'." } },
            { type: 'FILL_BLANK', content: { text: 'Trust is something ___ takes years to build but only seconds to destroy.', answers: ['that', 'which'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: "Describe the qualities of a person who makes a good friend or partner. Use relative clauses with 'who' or 'that'.", rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'VOCABULARY', content: { question: "What does 'misunderstanding' mean?", options: ['A failure to understand something correctly', 'A strong feeling of trust', 'An official apology', 'A type of argument about money'], correctIndex: 0, explanation: "'Misunderstanding' — недопонимание, ситуация, когда что-то понято неправильно." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите абзац о важных качествах в отношениях (дружба, семья или партнёрство), используя определительные придаточные предложения с who/which/that. Используйте хотя бы четыре новых слова: trust, conflict, apologize, support, misunderstanding, honest.' } },
      ],
    },
    {
      title: 'Memorable Travel Stories',
      description: 'Запоминающиеся истории путешествий и совместное использование повествовательных времён.',
      estimatedMinutes: 30,
      blocks: [
        { type: 'INTRO', title: 'Введение', content: { text: 'Финальный урок модуля — рассказы о путешествиях. Мы научимся сочетать Past Simple, Past Continuous и Past Perfect в одном повествовании.' } },
        { type: 'VOCABULARY', title: 'Новые слова', content: { words: ['journey', 'adventure', 'unexpected', 'memorable', 'delay', 'luggage'] } },
        { type: 'GRAMMAR', title: 'Narrative Tenses', content: { explanation: "Когда мы рассказываем историю о прошлом, часто используются сразу три времени. Past Simple описывает главные события по порядку: 'We arrived at the airport and checked in.' Past Continuous описывает фоновое действие, которое происходило в тот момент, когда случилось главное событие: 'While we were waiting for the flight, the gate suddenly changed.' Past Perfect (had + V3) показывает действие, которое произошло раньше, чем остальные события в рассказе — то, что случилось 'до того': 'When we got to the gate, the plane had already left.' Сочетание этих трёх времён делает рассказ живым и показывает правильную последовательность событий." } },
        { type: 'READING', title: 'An unforgettable evening', content: { text: 'Last summer, my friend and I had an adventure we will never forget. We were travelling through northern Spain when our car suddenly broke down in a small village. While we were trying to call for help, we realized that we had left our phone chargers at the last hotel, and both of our phones had almost no battery left. A local farmer who was walking past noticed us and offered to help. He explained that he had lived in the village his whole life and knew a mechanic nearby. While the mechanic was fixing the car, the farmer invited us to his house for dinner, because he had already finished his work for the day. We spent the evening listening to stories about the village, which he had never left except for his military service years earlier. By the time the car was finally ready, it was almost midnight, but we had made a new friend and heard the most memorable story of our whole trip. We later realized that the unexpected delay had turned into the best part of our journey.' } },
        {
          type: 'EXERCISE',
          title: 'Упражнения',
          exercises: [
            { type: 'MULTIPLE_CHOICE', content: { question: 'Choose the sentence that correctly combines narrative tenses.', options: ['While we waited at the station, the train had already left.', 'While we were waiting at the station, the train had already left.', 'While we were waiting at the station, the train already left.', 'While we had waited at the station, the train was leaving.'], correctIndex: 1, explanation: "Фоновое действие передаётся Past Continuous ('were waiting'), а действие, случившееся раньше — Past Perfect ('had already left')." } },
            { type: 'FILL_BLANK', content: { text: 'By the time we arrived at the hotel, the sun ___ (already / set).', answers: ['had already set'] } },
          ],
        },
        { type: 'SPEAKING', title: 'Говорение', exercises: [
          { type: 'SPEAKING', content: { prompt: 'Tell a short story about a memorable or unexpected trip you have had. Use Past Simple, Past Continuous and Past Perfect to make your story clear.', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' } },
        ] },
        { type: 'MINI_TEST', title: 'Мини-тест', exercises: [
          { type: 'MULTIPLE_CHOICE', skill: 'GRAMMAR', content: { question: 'Which sentence uses the Past Perfect correctly?', options: ['When we reached the airport, our flight had already departed.', 'When we reached the airport, our flight already departed.', 'When we reached the airport, our flight has already departed.', 'When we reached the airport, our flight was already departed.'], correctIndex: 0, explanation: "Past Perfect (had + V3) показывает действие, завершившееся раньше другого события в прошлом: 'had already departed'." } },
        ] },
        { type: 'HOMEWORK', title: 'Домашнее задание', content: { text: 'Напишите короткий рассказ (8-10 предложений) о запоминающемся путешествии, используя Past Simple, Past Continuous и Past Perfect. Используйте хотя бы четыре новых слова: journey, adventure, unexpected, memorable, delay, luggage.' } },
      ],
    },
  ],
};
