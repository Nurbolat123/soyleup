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
        { type: 'READING', title: 'Why work-life balance matters', content: { text: "Maria Lopez used to believe that working harder was always the right answer. As a nurse in a busy city hospital, she had been taking extra overtime shifts for almost a year, and her workload kept growing every single month. By the spring, she was constantly exhausted, and she had been missing family dinners because she was always rushing to meet one deadline or another. Her hands started shaking slightly during long shifts, and she began forgetting small things, like where she had left her car keys. Colleagues noticed the change too, but nobody said anything until Maria made a small mistake with a patient's medication schedule. One evening, after a long twelve-hour shift, her teenage daughter quietly asked why she was never home anymore, and that question stayed with Maria for days. She realized something had to change before her health or her career suffered permanently. She has been talking to her manager since that conversation, explaining honestly that she needed a better balance between her job and her family. To everyone's surprise, the hospital agreed to give her a more flexible schedule, allowing her to choose three fixed days off every week. Maria has been following this new routine for six months now, and the difference is remarkable. She sleeps better, feels calmer, and has even started cooking dinner with her daughter again, something she had almost forgotten how to enjoy. Her story shows that a heavy workload is not something you simply have to accept — sometimes you just have to find the courage to ask for change." } },
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
        { type: 'READING', title: 'Getting ready for an interview', content: { text: "Daniel had failed three job interviews in a row before he finally understood what he was doing wrong. Each time, he walked in feeling anxious, gave short answers, and barely mentioned his real strengths. After his third rejection, a career coach told him something that changed his whole approach: if he prepared specific stories about his experience instead of vague, generic answers, he would sound far more confident. Daniel started practising in front of a mirror every evening, focusing especially on how he would answer the dreaded question about his biggest weakness. He decided that if an interviewer asked him that question directly, he would be honest, but he would also explain what he was doing to improve. He learned that a strong first impression often forms within the opening minute of a conversation, so he worked on his handshake, his posture, and even the tone of his voice. He also made sure to mention a recent qualification from an online course, something he had never thought to bring up before. When his fourth interview finally arrived, at a marketing company he genuinely admired, Daniel felt surprisingly calm walking into the building. He answered every question clearly, gave real examples instead of general statements, and asked two thoughtful questions of his own at the end. A week later, the company called to offer him the job. Looking back, Daniel often tells younger colleagues that confidence rarely appears by accident — it comes from preparing so thoroughly that nerves simply have less room to grow." } },
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
        { type: 'READING', title: 'Finding your learning style', content: { text: "When Aigerim started university, she believed that studying simply meant reading textbooks for hours and trying to memorize every detail before an exam. For her first two semesters, this method barely worked. She spent entire weekends in the library, yet her grades stayed disappointingly average. During a particularly difficult lecture on chemistry, she noticed something unusual: she understood almost nothing from the textbook alone, but the moment her professor drew a simple diagram on the board, everything suddenly made sense. Curious about this difference, she read about different learning styles and realized she was mainly a visual learner who needed pictures and colours to remember information properly. She decided that she must develop this skill deliberately instead of hoping it would improve on its own. Aigerim started rewriting her notes as colourful diagrams and short mind maps instead of long paragraphs copied from slides. She also began to revise for just twenty minutes every evening, rather than cramming everything the night before a test, as she always had before. At first, the new routine of daily practice felt strange, and she sometimes skipped a lecture out of tiredness, but she quickly returned to her plan. Within one semester, she felt far more motivated than she ever had in her first year, and her results improved just as noticeably. Her exam scores rose from barely passing to among the highest in her group, even though the curriculum itself had not changed at all. Looking back now, her advice to new students is simple: you do not have to study harder, but you do have to study in a way that actually fits how your brain works." } },
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
        { type: 'READING', title: 'How technology changes our day', content: { text: "When Elena's grandmother turned seventy, her family decided to buy her a few smart devices to make daily life easier. At first, the old woman was suspicious: she had never used anything more complicated than a basic mobile phone, and she worried that her privacy would be invaded by machines she could not fully understand. The first device installed in her flat was a smart speaker, which could be controlled simply by voice. Within a few weeks, lights were being switched on and off by a simple command, and reminders about her medicine were sent automatically every morning. Her family also decided to upgrade her old, unreliable heating system, replacing it with a new, more reliable thermostat that could be adjusted from a phone app. The old system used to break down every winter, but the new one has not failed once. Elena explained that most of these devices had actually been invented to help elderly people live independently for longer, not to replace human company. A neighbour who visited soon afterwards was amazed at how much had changed in such a small flat. Gradually, the grandmother began to see how convenient this technology really was, especially once she gained access to an app for ordering groceries online instead of carrying heavy bags up three flights of stairs. A reminder about a doctor's appointment, sent straight to her phone, even saved her from missing an important check-up. She still insists that paper calendars will never be fully replaced, but she now openly admits that her daily routine has been improved by technology she once distrusted. Her favourite feature, surprisingly, turned out to be the voice assistant that reads the weather forecast aloud every morning while she drinks her tea." } },
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
        { type: 'READING', title: 'Our growing waste problem', content: { text: "When Sofia decided to try a one-month 'zero-waste challenge', she had no idea how much it would change her daily habits. A photo of a sea turtle trapped in a plastic bag, which she had seen online around that time, finally pushed her to act. She had read that plastic pollution was one of the biggest environmental problems of the decade, but she had never personally done anything about it. On the first day, she was shocked to see how much waste her small flat produced just from packaging, coffee cups and plastic bags. She decided to reduce this by buying food from a local market that let customers bring their own containers, and by switching to a reusable water bottle instead of buying plastic ones. Have you ever tried to go a whole week without throwing anything into a normal bin? Sofia had never done it before, and the first few days were surprisingly difficult. She also started to recycle paper and glass properly, something she had always meant to do but had never organized at home. By the end of the month, she had reduced her household waste by almost sixty percent, which she found both encouraging and a little embarrassing, considering how easy some of the changes actually were. She has since discovered several local shops that sell sustainable products, from bamboo toothbrushes to refillable soap, and she now spends slightly more money but produces far less waste. Sofia says the experience taught her that natural resources are not unlimited, and that small, consistent choices matter more than one dramatic gesture. She has already convinced two of her neighbours to try the same challenge next month." } },
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
        { type: 'READING', title: 'Lessons from travelling', content: { text: "My friend Elif came back from her first trip to Japan with a long list of things that had surprised her. She told me that people there almost never raised their voices in public, even during a disagreement, which felt completely different from the loud arguments she was used to at home. She also noticed how diverse the country's regional customs were, since the manners expected in a quiet mountain village were not quite the same as those in busy Tokyo. On her second night, a waiter gently refused the tip she tried to leave, and later a local explained that tipping was actually considered slightly rude in many restaurants, because good service was simply expected, not rewarded separately. Elif said she had felt embarrassed at first, as if she had broken an unspoken rule without realizing it. A few days later, in a small town, an elderly woman invited her into her home for tea, and Elif told me that refusing would have seemed impolite, even though she was not thirsty at all. She learned quickly that local traditions and etiquette mattered far more than she had expected before the trip. Business culture surprised her too: a colleague she met at a conference told her that punctuality in Japan was treated almost as a form of respect, and arriving even two minutes late required a sincere apology. Elif compared this to a business trip she once took to Argentina, where a local partner had told her that starting a meeting exactly on time would actually seem a little strange. By the end of her journey, Elif realized that the most fascinating part of travelling abroad was not the places themselves, but learning how differently ordinary life could be organized from one culture to the next. She now tells every friend planning a trip abroad that a little research into local customs is worth far more than learning twenty new phrases in the language." } },
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
        { type: 'READING', title: 'Smart money habits', content: { text: "When Yerlan graduated from university, he was proud of his first real income, and for almost two years he spent it exactly as he pleased, without ever writing down where the money actually went. He assumed that because his salary covered his rent and his basic expenses, he was managing fine. The truth came out only when his car broke down unexpectedly and he realized he could not afford even a simple repair, despite earning a reasonable salary. Worse still, he had slowly built up a small debt on two different credit cards, without ever noticing how quickly the interest was growing. A friend who worked in finance told him that if he tracked every expense for just one month, he would be shocked by what he discovered. Yerlan reluctantly agreed, writing down every coffee, taxi ride and online purchase in a simple notes app. The results were, indeed, uncomfortable reading: almost a third of his income disappeared on small, forgettable purchases he barely remembered making. He decided to create his very first real budget, setting aside a fixed percentage of his income the moment it arrived, before he had the chance to spend it. If he continued this habit for a full year, he calculated, he would finally pay off his debt and still have money left over besides. He also started comparing prices before buying anything over a certain amount, a small habit that saved him more than he expected. Slowly, his bank balance started to grow instead of disappearing every month, and the constant low-level stress about money began to fade. Yerlan now jokes that learning to save did not make him rich overnight, but it gave him something almost as valuable: the ability to sleep without worrying about his expenses." } },
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
        { type: 'READING', title: 'Small habits, big results', content: { text: "Two years ago, Timur could barely run for ten minutes without stopping to catch his breath. He decided to start a simple fitness routine, promising himself he would run just a little further each week rather than aiming for anything dramatic. At first, progress felt painfully slow, and he often wondered whether the effort was even worth it. His trainer told him something that stuck in his mind: the more consistent he was, the better his results would be, even if each individual run felt unremarkable. Timur also had to relearn his approach to nutrition, since he used to skip breakfast and then feel exhausted by midday during training. The healthier his diet became, the faster his body seemed to recover after each session. About six months in, he pushed himself too hard during one particularly ambitious run and suffered a minor knee injury that forced him to rest for three weeks. Frustrated at first, he eventually realized that the harder he trained without proper rest, the greater his risk of injury had become, and that recovery was not optional. Once he returned to his routine, he balanced intense training days with lighter recovery sessions, something his trainer had been recommending from the very beginning. His endurance improved steadily: the more often he trained sensibly, the longer the distances he found himself able to cover without feeling truly tired. Last month, Timur finished his very first half-marathon, something he would never have believed possible two years earlier. His story is proof that small, repeated habits, not occasional bursts of effort, are what actually improve long-term fitness." } },
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
        { type: 'READING', title: 'What makes a relationship strong', content: { text: "When Olga and Marek started dating, they assumed that love alone would be enough to carry them through any disagreement. Their first real conflict came after only two months, over something that seemed almost embarrassingly small: a cancelled dinner plan that had actually been a simple misunderstanding. Olga, who tends to go quiet when she is upset, said nothing for two days, while Marek, who prefers to talk things through immediately, became increasingly frustrated by her silence. A friend who had been married for fifteen years gave them advice that neither of them forgot: the couples who talk openly about problems, instead of avoiding them, are usually the ones whose relationships last. Olga eventually apologized for shutting Marek out, and he admitted that he should have been more patient instead of demanding an instant conversation. They started a simple habit that many couples who struggle with communication never try: a short, honest check-in every Sunday evening, where each person names one thing that bothered them that week. It was not always comfortable, especially during weeks that had been genuinely difficult, but it slowly built a level of trust that neither of them had expected. Marek, who used to assume that bringing up problems would only cause more conflict, now believes that silence is actually far more dangerous than an honest conversation. Olga, for her part, learned that being honest about small irritations prevents them from becoming the kind of resentment that can quietly damage a relationship. They have also learned that a sincere apology, offered quickly, repairs far more damage than a long silence ever could. Three years later, they still keep their Sunday habit, a small routine that supports their marriage more than either of them expected it to. Their story suggests that honesty and small, repeated habits of communication matter more than any single romantic gesture." } },
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
        { type: 'READING', title: 'An unforgettable evening', content: { text: "Last summer, my friend Nazgul and I had an adventure we will never forget. We were driving through a quiet region of northern Spain when our car suddenly broke down, right in the middle of a tiny village we had never heard of. While we were trying to call for help, we realized that we had left our phone chargers at the last hotel, and both of our phones had almost no battery left. To make things worse, our luggage was still packed in the boot, and we had no idea how long we might be stuck there. A local farmer who was walking past with his dog noticed us standing helplessly by the road and offered to help. He explained that he had lived in the village his whole life and knew a mechanic nearby who could probably fix almost anything. While the mechanic was examining the engine, the farmer invited us to his house for dinner, because he had already finished his work for the day and seemed genuinely pleased to have visitors. We spent the evening listening to stories about the village, which, he told us, he had never left except for his military service many years earlier. His wife brought out homemade bread and cheese, and for an hour we completely forgot that we were supposed to be on a schedule at all. By the time the car was finally ready, it was almost midnight, but we had made a new friend and heard the most memorable story of our entire trip. We later realized, while repacking our luggage into the car, that the unexpected delay had quietly turned into the best part of our journey. Looking back now, we often say that the broken car was the most fortunate problem either of us has ever had while travelling." } },
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
