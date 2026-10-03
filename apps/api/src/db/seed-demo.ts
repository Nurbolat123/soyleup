/**
 * Демо-контент: заглушки для проверки схемы и админки, не настоящий учебный материал.
 * Идемпотентно: перед вставкой удаляет прежние строки с isDemo = true.
 */
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { Pool } from 'pg';
import {
  courseModules, courses, exercises, lessonBlocks, lessons, questionBank, vocabularyWords,
} from './schema';

try { process.loadEnvFile(); } catch { /* optional */ }

const VOCAB_B1: {
  word: string; ru: string; kk?: string; def: string; transcription: string; example: string;
}[] = [
  { word: 'achieve', ru: 'достигать', def: 'to succeed in finishing something or reaching an aim', transcription: '/əˈtʃiːv/', example: 'She worked hard to achieve her goals.' },
  { word: 'balance', ru: 'баланс, равновесие', def: 'an even distribution of weight or importance', transcription: '/ˈbæləns/', example: 'It is hard to find a balance between work and life.' },
  { word: 'burnout', ru: 'выгорание', def: 'extreme tiredness caused by long-term stress', transcription: '/ˈbɜːnaʊt/', example: 'He took a break to avoid burnout.' },
  { word: 'career', ru: 'карьера', def: 'a job or profession over a long period of time', transcription: '/kəˈrɪə/', example: 'She started her career as a teacher.' },
  { word: 'colleague', ru: 'коллега', def: 'a person you work with', transcription: '/ˈkɒliːɡ/', example: 'My colleague helped me finish the report.' },
  { word: 'confident', ru: 'уверенный', def: 'feeling sure about your own abilities', transcription: '/ˈkɒnfɪdənt/', example: 'He felt confident before the interview.' },
  { word: 'deadline', ru: 'крайний срок', def: 'the latest time by which something must be finished', transcription: '/ˈdedlaɪn/', example: 'The deadline for the project is Friday.' },
  { word: 'decision', ru: 'решение', def: 'a choice you make after thinking', transcription: '/dɪˈsɪʒn/', example: 'It was a difficult decision to make.' },
  { word: 'deliver', ru: 'выполнять, доставлять', def: 'to produce or provide something promised', transcription: '/dɪˈlɪvə/', example: 'The team delivered the project on time.' },
  { word: 'employer', ru: 'работодатель', def: 'a person or company that pays others to work', transcription: '/ɪmˈplɔɪə/', example: 'Her employer offered her a promotion.' },
  { word: 'flexible', ru: 'гибкий', def: 'able to change or adapt easily', transcription: '/ˈfleksəbl/', example: 'The company offers flexible working hours.' },
  { word: 'goal', ru: 'цель', def: 'something you aim to achieve', transcription: '/ɡəʊl/', example: 'Her goal is to speak fluent English.' },
  { word: 'habit', ru: 'привычка', def: 'something you do regularly, often without thinking', transcription: '/ˈhæbɪt/', example: 'Reading before bed is a good habit.' },
  { word: 'improve', ru: 'улучшать', def: 'to make or become better', transcription: '/ɪmˈpruːv/', example: 'He wants to improve his speaking skills.' },
  { word: 'manage', ru: 'справляться, управлять', def: 'to succeed in doing something, or to control', transcription: '/ˈmænɪdʒ/', example: 'She manages a small team at work.' },
  { word: 'motivation', ru: 'мотивация', def: 'the reason or enthusiasm for doing something', transcription: '/ˌməʊtɪˈveɪʃn/', example: 'Lack of sleep affects his motivation.' },
  { word: 'negotiate', ru: 'договариваться', def: 'to discuss something to reach an agreement', transcription: '/nɪˈɡəʊʃieɪt/', example: 'They negotiated a better salary.' },
  { word: 'opportunity', ru: 'возможность', def: 'a chance to do something', transcription: '/ˌɒpəˈtjuːnəti/', example: 'Moving abroad was a great opportunity.' },
  { word: 'organise', ru: 'организовывать', def: 'to arrange or plan something', transcription: '/ˈɔːɡənaɪz/', example: 'She organised the whole event herself.' },
  { word: 'overtime', ru: 'сверхурочные', def: 'time worked beyond normal working hours', transcription: '/ˈəʊvətaɪm/', example: 'He often works overtime on weekends.' },
  { word: 'priority', ru: 'приоритет', def: 'something considered more important than others', transcription: '/praɪˈɒrəti/', example: 'Family is her top priority.' },
  { word: 'promotion', ru: 'повышение', def: 'a move to a higher position at work', transcription: '/prəˈməʊʃn/', example: 'He got a promotion after two years.' },
  { word: 'reliable', ru: 'надёжный', def: 'able to be trusted', transcription: '/rɪˈlaɪəbl/', example: 'She is a reliable colleague.' },
  { word: 'responsibility', ru: 'ответственность', def: 'a duty to deal with something', transcription: '/rɪˌspɒnsəˈbɪləti/', example: 'He took responsibility for the mistake.' },
  { word: 'schedule', ru: 'расписание, график', def: 'a plan of times when things will happen', transcription: '/ˈʃedjuːl/', example: 'My schedule is very busy this week.' },
  { word: 'skill', ru: 'навык', def: 'the ability to do something well', transcription: '/skɪl/', example: 'Communication is an important skill.' },
  { word: 'stressful', ru: 'напряжённый, стрессовый', def: 'causing mental or emotional pressure', transcription: '/ˈstresfl/', example: 'His job can be very stressful.' },
  { word: 'sustainable', ru: 'устойчивый', def: 'able to continue over a long period without harm', transcription: '/səˈsteɪnəbl/', example: 'The company follows sustainable practices.' },
  { word: 'task', ru: 'задача', def: 'a piece of work to be done', transcription: '/tɑːsk/', example: 'She finished all her tasks before lunch.' },
  { word: 'workload', ru: 'нагрузка (рабочая)', def: 'the amount of work to be done', transcription: '/ˈwɜːkləʊd/', example: 'His workload increased this month.' },
];

const VOCAB_A1: {
  word: string; ru: string; def: string; transcription: string; example: string;
}[] = [
  { word: 'family', ru: 'семья', def: 'a group of people related to each other, such as parents and children', transcription: '/ˈfæməli/', example: 'I love my family.' },
  { word: 'mother', ru: 'мама', def: 'a female parent', transcription: '/ˈmʌðə/', example: 'My mother is a teacher.' },
  { word: 'father', ru: 'папа', def: 'a male parent', transcription: '/ˈfɑːðə/', example: 'My father works in a hospital.' },
  { word: 'brother', ru: 'брат', def: 'a boy or man with the same parents as you', transcription: '/ˈbrʌðə/', example: 'I have one brother.' },
  { word: 'morning', ru: 'утро', def: 'the early part of the day', transcription: '/ˈmɔːnɪŋ/', example: 'I wake up in the morning.' },
  { word: 'school', ru: 'школа', def: 'a place where children go to learn', transcription: '/skuːl/', example: 'She goes to school every day.' },
  { word: 'friend', ru: 'друг', def: 'a person you know well and like', transcription: '/frend/', example: 'He is my best friend.' },
  { word: 'house', ru: 'дом', def: 'a building where people live', transcription: '/haʊs/', example: 'We live in a small house.' },
  { word: 'happy', ru: 'счастливый', def: 'feeling or showing pleasure', transcription: '/ˈhæpi/', example: 'The children are happy.' },
  { word: 'apple', ru: 'яблоко', def: 'a round fruit with red or green skin', transcription: '/ˈæpl/', example: 'I eat an apple every day.' },
  { word: 'water', ru: 'вода', def: 'a clear liquid that people drink', transcription: '/ˈwɔːtə/', example: 'Please give me some water.' },
  { word: 'like', ru: 'нравиться', def: 'to enjoy something or someone', transcription: '/laɪk/', example: 'I like pizza.' },
];

const VOCAB_A2: {
  word: string; ru: string; def: string; transcription: string; example: string;
}[] = [
  { word: 'ticket', ru: 'билет', def: 'a piece of paper that lets you travel or enter a place', transcription: '/ˈtɪkɪt/', example: 'I bought a ticket for the train.' },
  { word: 'airport', ru: 'аэропорт', def: 'a place where planes take off and land', transcription: '/ˈeəpɔːt/', example: 'We arrived at the airport early.' },
  { word: 'luggage', ru: 'багаж', def: 'the bags you take when you travel', transcription: '/ˈlʌɡɪdʒ/', example: 'Her luggage was very heavy.' },
  { word: 'passport', ru: 'паспорт', def: 'an official document you need to travel to another country', transcription: '/ˈpɑːspɔːt/', example: "Don't forget your passport." },
  { word: 'journey', ru: 'поездка', def: 'the act of travelling from one place to another', transcription: '/ˈdʒɜːni/', example: 'The journey took five hours.' },
  { word: 'price', ru: 'цена', def: 'the amount of money something costs', transcription: '/praɪs/', example: 'What is the price of this shirt?' },
  { word: 'expensive', ru: 'дорогой', def: 'costing a lot of money', transcription: '/ɪkˈspensɪv/', example: 'This hotel is too expensive.' },
  { word: 'cheap', ru: 'дешёвый', def: 'costing little money', transcription: '/tʃiːp/', example: 'I found a cheap flight.' },
  { word: 'receipt', ru: 'чек', def: 'a piece of paper that proves you paid for something', transcription: '/rɪˈsiːt/', example: 'Keep your receipt, please.' },
  { word: 'discount', ru: 'скидка', def: 'a reduction in the usual price', transcription: '/ˈdɪskaʊnt/', example: 'We got a 20% discount.' },
  { word: 'suitcase', ru: 'чемодан', def: 'a bag used for carrying clothes when travelling', transcription: '/ˈsuːtkeɪs/', example: 'My suitcase is red.' },
  { word: 'souvenir', ru: 'сувенир', def: 'an object you buy to remember a place you visited', transcription: '/ˌsuːvəˈnɪə/', example: 'She bought a souvenir for her friend.' },
];

const VOCAB_B2: {
  word: string; ru: string; def: string; transcription: string; example: string;
}[] = [
  { word: 'innovation', ru: 'инновация', def: 'a new idea, method or invention', transcription: '/ˌɪnəˈveɪʃn/', example: 'The company is known for innovation.' },
  { word: 'artificial', ru: 'искусственный', def: 'made by people, not occurring naturally', transcription: '/ˌɑːtɪˈfɪʃl/', example: 'Artificial intelligence is changing many industries.' },
  { word: 'convenient', ru: 'удобный', def: 'useful, easy or suitable for a particular purpose', transcription: '/kənˈviːniənt/', example: 'Online shopping is very convenient.' },
  { word: 'privacy', ru: 'приватность', def: 'the state of being free from public attention', transcription: '/ˈprɪvəsi/', example: 'People worry about their privacy online.' },
  { word: 'dependent', ru: 'зависимый', def: 'needing someone or something for support', transcription: '/dɪˈpendənt/', example: 'Many teenagers are dependent on their phones.' },
  { word: 'efficient', ru: 'эффективный', def: 'working well without wasting time or energy', transcription: '/ɪˈfɪʃnt/', example: 'The new system is much more efficient.' },
  { word: 'widespread', ru: 'широко распространённый', def: 'existing or happening in many places', transcription: '/ˈwaɪdspred/', example: 'Smartphone use is widespread nowadays.' },
  { word: 'impact', ru: 'воздействие', def: 'a powerful effect on someone or something', transcription: '/ˈɪmpækt/', example: 'Technology has a huge impact on daily life.' },
  { word: 'concern', ru: 'озабоченность', def: 'a feeling of worry about something', transcription: '/kənˈsɜːn/', example: 'There is growing concern about screen time.' },
  { word: 'accessible', ru: 'доступный', def: 'able to be easily reached, used or obtained', transcription: '/əkˈsesəbl/', example: 'Information is now more accessible than ever.' },
];

const VOCAB_C1: {
  word: string; ru: string; def: string; transcription: string; example: string;
}[] = [
  { word: 'sustainability', ru: 'устойчивость', def: 'the ability to continue over time without causing harm', transcription: '/səˌsteɪnəˈbɪləti/', example: 'Sustainability is now a key business priority.' },
  { word: 'mitigate', ru: 'смягчать', def: 'to make something less severe or serious', transcription: '/ˈmɪtɪɡeɪt/', example: 'Governments must act to mitigate climate change.' },
  { word: 'unprecedented', ru: 'беспрецедентный', def: 'never having happened or existed before', transcription: '/ʌnˈpresɪdentɪd/', example: 'The region faced unprecedented flooding this year.' },
  { word: 'biodiversity', ru: 'биоразнообразие', def: 'the variety of plant and animal life in an area', transcription: '/ˌbaɪəʊdaɪˈvɜːsəti/', example: 'Deforestation threatens biodiversity worldwide.' },
  { word: 'discrepancy', ru: 'несоответствие', def: 'a difference between things that should be the same', transcription: '/dɪˈskrepənsi/', example: 'There is a discrepancy between the two reports.' },
  { word: 'jeopardize', ru: 'подвергать риску', def: 'to put something at risk of being harmed or lost', transcription: '/ˈdʒepədaɪz/', example: 'Pollution jeopardizes marine life.' },
  { word: 'resilience', ru: 'устойчивость, стойкость', def: 'the ability to recover quickly from difficulties', transcription: '/rɪˈzɪliəns/', example: 'Coastal cities need resilience against rising seas.' },
  { word: 'advocate', ru: 'сторонник; отстаивать', def: 'to publicly support an idea, or a person who does this', transcription: '/ˈædvəkeɪt/', example: 'She advocates for renewable energy.' },
  { word: 'compelling', ru: 'убедительный', def: 'very convincing, making you want to agree', transcription: '/kəmˈpelɪŋ/', example: 'The report presents compelling evidence.' },
  { word: 'inevitable', ru: 'неизбежный', def: 'certain to happen and impossible to avoid', transcription: '/ɪˈnevɪtəbl/', example: 'Automation seems inevitable in many sectors.' },
];

const GRAMMAR_A1: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: 'I ___ a student.', options: ['am', 'is', 'are', 'be'], correct: 0, explanation: 'To be, 1-е лицо ед. числа: I am.' },
  { q: 'She ___ happy today.', options: ['am', 'is', 'are', 'be'], correct: 1, explanation: 'To be, 3-е лицо ед. числа: she/he/it is.' },
  { q: 'They ___ from Kazakhstan.', options: ['am', 'is', 'are', 'be'], correct: 2, explanation: 'To be, множественное число: we/you/they are.' },
  { q: 'This is ___ apple.', options: ['a', 'an', 'the', '—'], correct: 1, explanation: 'Неопределённый артикль an — перед словом, начинающимся с гласного звука.' },
  { q: 'I have two ___.', options: ['book', 'books', 'bookes', 'a book'], correct: 1, explanation: 'Множественное число существительных обычно образуется через -s.' },
];

const GRAMMAR_C1: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: 'Not only ___ late, but he also forgot the documents.', options: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'], correct: 1, explanation: 'Инверсия после "Not only" в начале предложения: вспомогательный глагол перед подлежащим.' },
  { q: 'Had I known about the traffic, I ___ earlier.', options: ['would leave', 'would have left', 'left', 'will leave'], correct: 1, explanation: 'Mixed/Third Conditional: Had + подлежащее..., would have + причастие прошедшего времени.' },
  { q: 'It was not until midnight ___ she finished the report.', options: ['when', 'that', 'then', 'which'], correct: 1, explanation: 'Cleft sentence "It was not until... that..." — конструкция для эмфазы.' },
  { q: 'Rarely ___ such dedication in a new employee.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], correct: 1, explanation: 'Инверсия после отрицательных наречий частоты (rarely, seldom, never) в начале предложения.' },
  { q: '___ for his support, the project would have failed.', options: ['Had it not been', 'If it was not', 'Was it not', 'If it has not been'], correct: 0, explanation: '"Had it not been for" — формальная инверсия вместо "If it had not been for".' },
];

const VOCAB_MC_A1: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: "Choose the opposite of 'happy'.", options: ['sad', 'big', 'fast', 'old'], correct: 0, explanation: '"Sad" — противоположность "happy".' },
  { q: "My mother's son is my ___.", options: ['father', 'brother', 'uncle', 'cousin'], correct: 1, explanation: 'Сын матери (не вы) — это ваш brother.' },
  { q: 'We eat breakfast in the ___.', options: ['morning', 'night', 'week', 'year'], correct: 0, explanation: 'Breakfast едят утром — in the morning.' },
  { q: "Choose the correct word: 'This is my ___.' (a place where you live)", options: ['house', 'book', 'car', 'dog'], correct: 0, explanation: '"House" — место, где живут.' },
  { q: "Choose the opposite of 'big'.", options: ['small', 'tall', 'long', 'new'], correct: 0, explanation: '"Small" — противоположность "big".' },
];

const VOCAB_MC_C1: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: "'Inevitable' is closest in meaning to ___.", options: ['avoidable', 'unavoidable', 'unlikely', 'optional'], correct: 1, explanation: 'Inevitable = unavoidable, неизбежный.' },
  { q: "'To mitigate' means ___.", options: ['to make worse', 'to reduce the severity of', 'to ignore', 'to celebrate'], correct: 1, explanation: 'Mitigate — смягчать, уменьшать серьёзность.' },
  { q: "'Discrepancy' refers to ___.", options: ['agreement', 'a difference between things that should match', 'a type of document', 'a celebration'], correct: 1, explanation: 'Discrepancy — несоответствие, расхождение.' },
  { q: "Choose closest in meaning to 'compelling'.", options: ['boring', 'convincing', 'confusing', 'short'], correct: 1, explanation: 'Compelling = convincing, убедительный.' },
  { q: "'To jeopardize' means ___.", options: ['to protect', 'to put at risk', 'to celebrate', 'to ignore'], correct: 1, explanation: 'Jeopardize — подвергать риску, ставить под угрозу.' },
];

const READING_A1: { passage: string; q: string; options: string[]; correct: number }[] = [
  { passage: 'Anna is a student. She is ten years old. She likes cats.', q: 'How old is Anna?', options: ['8', '9', '10', '11'], correct: 2 },
  { passage: 'Tom has a red car. He drives to work every day.', q: "What colour is Tom's car?", options: ['Red', 'Blue', 'Green', 'Black'], correct: 0 },
  { passage: 'My sister is a teacher. She works at a big school.', q: "What is my sister's job?", options: ['Doctor', 'Teacher', 'Nurse', 'Cook'], correct: 1 },
  { passage: 'We have breakfast at seven o\'clock every morning.', q: 'What time do they have breakfast?', options: ['6', '7', '8', '9'], correct: 1 },
  { passage: 'The cat is black and white. It sleeps all day.', q: 'What colour is the cat?', options: ['Black and white', 'Brown', 'Grey', 'Orange'], correct: 0 },
];

const READING_C1: { passage: string; q: string; options: string[]; correct: number }[] = [
  { passage: 'While proponents of automation argue it enhances productivity, critics contend that the resulting job displacement warrants urgent policy intervention.', q: 'What do critics argue?', options: ['Automation always helps', 'Job displacement needs policy action', 'Automation should be banned', 'Productivity will decrease'], correct: 1 },
  { passage: "The committee's reluctance to adopt the proposal stemmed not from its merits, but from concerns over its long-term fiscal implications.", q: 'Why was the committee reluctant?', options: ['The proposal had no merit', 'Concerns over fiscal implications', 'Lack of time', 'Political disagreement'], correct: 1 },
  { passage: 'Notwithstanding the setbacks encountered during the initial phase, the research team remained resolute in pursuing their hypothesis.', q: 'How did the team react to setbacks?', options: ['They gave up', 'They remained determined', 'They changed their hypothesis', 'They asked for more funding'], correct: 1 },
  { passage: 'The discrepancy between projected and actual outcomes prompted a thorough reassessment of the underlying methodology.', q: 'What prompted the reassessment?', options: ['A discrepancy between projections and actual results', 'A change in staff', 'A lack of funding', 'A new regulation'], correct: 0 },
  { passage: 'Far from being a peripheral concern, biodiversity loss is increasingly recognised as central to global economic stability.', q: 'How is biodiversity loss now seen?', options: ['As unimportant', 'As central to economic stability', 'As a local issue only', 'As solved'], correct: 1 },
];

const LISTENING_A1: { transcript: string; q: string; options: string[]; correct: number }[] = [
  { transcript: 'Hello, my name is Ben. I am seven years old.', q: 'How old is Ben?', options: ['6', '7', '8', '9'], correct: 1 },
  { transcript: 'This is my dog. His name is Max.', q: "What is the dog's name?", options: ['Max', 'Rex', 'Buddy', 'Spot'], correct: 0 },
  { transcript: 'I like apples and bananas.', q: 'What fruit does the speaker like?', options: ['Apples and bananas', 'Oranges and grapes', 'Apples only', 'Bananas only'], correct: 0 },
  { transcript: 'We go to school by bus.', q: 'How do they go to school?', options: ['By car', 'By bus', 'By bike', 'On foot'], correct: 1 },
  { transcript: 'My favourite colour is blue.', q: "What is the speaker's favourite colour?", options: ['Red', 'Blue', 'Green', 'Yellow'], correct: 1 },
];

const LISTENING_C1: { transcript: string; q: string; options: string[]; correct: number }[] = [
  { transcript: "Notwithstanding the committee's initial reservations, the proposal was ultimately ratified following extensive deliberation.", q: 'What happened to the proposal?', options: ['It was rejected', 'It was ratified', 'It was postponed', 'It was withdrawn'], correct: 1 },
  { transcript: 'The speaker underscored the imperative of fostering interdisciplinary collaboration to address increasingly complex global challenges.', q: 'What did the speaker emphasise?', options: ['Working in isolation', 'Interdisciplinary collaboration', 'Avoiding challenges', 'Reducing funding'], correct: 1 },
  { transcript: 'Despite mounting evidence, a vocal minority continues to dispute the scientific consensus on the matter.', q: 'What does the minority do?', options: ['Accept the consensus', 'Dispute the consensus', 'Ignore the matter', 'Fund more research'], correct: 1 },
  { transcript: 'The ramifications of the policy extend far beyond its immediate economic impact.', q: 'What does the speaker say about the ramifications?', options: ['They are limited to economics', 'They extend beyond economic impact', 'They are minimal', 'They are unknown'], correct: 1 },
  { transcript: 'It would be remiss not to acknowledge the contribution of the entire team to this endeavor.', q: 'What does the speaker want to acknowledge?', options: ['Only their own effort', "The entire team's contribution", 'A single person', 'External partners'], correct: 1 },
];

const GRAMMAR_B1: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: 'She ___ in this company for five years.', options: ['works', 'is working', 'has worked', 'worked'], correct: 2, explanation: 'Present Perfect для действия, длящегося до настоящего момента.' },
  { q: 'If I ___ more free time, I would learn Spanish.', options: ['have', 'had', 'will have', 'having'], correct: 1, explanation: 'Second Conditional: if + Past Simple, would + infinitive.' },
  { q: 'This exercise is much ___ than the last one.', options: ['difficult', 'more difficult', 'most difficult', 'difficulter'], correct: 1, explanation: 'Сравнительная степень многосложных прилагательных: more + adjective.' },
  { q: 'By the time we arrived, the meeting ___.', options: ['already started', 'had already started', 'has already started', 'already starts'], correct: 1, explanation: 'Past Perfect для действия, завершившегося до другого действия в прошлом.' },
  { q: 'You ___ study harder if you want to pass the exam.', options: ['should', 'would', 'might', 'could'], correct: 0, explanation: 'Should — совет/рекомендация.' },
  { q: 'The report ___ by the team yesterday.', options: ['finished', 'was finished', 'has finished', 'is finished'], correct: 1, explanation: 'Passive Voice, Past Simple: was/were + past participle.' },
  { q: 'I ___ to the gym since Monday.', options: ['didn\'t go', 'haven\'t gone', 'don\'t go', 'wasn\'t going'], correct: 1, explanation: 'Present Perfect + since для периода, начавшегося в прошлом.' },
  { q: 'She asked me where ___.', options: ['do I live', 'did I live', 'I lived', 'I live'], correct: 2, explanation: 'Косвенная речь: прямой порядок слов, согласование времён.' },
  { q: 'We ___ dinner when the phone rang.', options: ['have', 'had', 'were having', 'has had'], correct: 2, explanation: 'Past Continuous для длительного действия, прерванного другим.' },
  { q: 'This is the man ___ helped me yesterday.', options: ['who', 'whom', 'whose', 'which'], correct: 0, explanation: 'Who — относительное местоимение для людей в роли подлежащего.' },
];

const VOCAB_MC_B1: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: 'Choose the word closest in meaning to "achieve".', options: ['fail', 'accomplish', 'avoid', 'delay'], correct: 1, explanation: '"Achieve" значит "accomplish" — успешно завершить что-либо.' },
  { q: 'A person you work with is called a ___.', options: ['stranger', 'colleague', 'neighbour', 'relative'], correct: 1, explanation: 'Colleague — человек, с которым вы работаете.' },
  { q: 'If something can change easily, it is ___.', options: ['flexible', 'strict', 'fixed', 'rigid'], correct: 0, explanation: 'Flexible — способный легко меняться/приспосабливаться.' },
  { q: 'Choose the correct meaning of "deadline".', options: ['a type of meeting', 'the latest time to finish something', 'a job title', 'a work schedule'], correct: 1, explanation: 'Deadline — крайний срок выполнения.' },
  { q: '"Reliable" is closest in meaning to ___.', options: ['untrustworthy', 'dependable', 'lazy', 'careless'], correct: 1, explanation: 'Reliable = dependable, на кого можно положиться.' },
  { q: 'Choose the opposite of "stressful".', options: ['relaxing', 'tiring', 'difficult', 'busy'], correct: 0, explanation: 'Stressful (напряжённый) — противоположность relaxing (расслабляющий).' },
  { q: 'A "priority" is something that is ___.', options: ['unimportant', 'more important than other things', 'forbidden', 'optional'], correct: 1, explanation: 'Priority — то, что важнее остального.' },
  { q: 'Choose the correct meaning of "negotiate".', options: ['to argue angrily', 'to discuss in order to reach an agreement', 'to refuse completely', 'to ignore'], correct: 1, explanation: 'Negotiate — обсуждать, чтобы прийти к соглашению.' },
  { q: 'A "promotion" at work means ___.', options: ['losing your job', 'moving to a higher position', 'taking a holiday', 'working overtime'], correct: 1, explanation: 'Promotion — повышение в должности.' },
  { q: 'Choose the word that means "the amount of work you have".', options: ['workload', 'workout', 'workshop', 'workforce'], correct: 0, explanation: 'Workload — объём/нагрузка работы.' },
];

const READING_B1: { passage: string; q: string; options: string[]; correct: number }[] = [
  { passage: 'Maria works as a nurse in a busy city hospital. She usually starts her shift at 7 a.m. and finishes at 3 p.m., but sometimes she has to work overtime.', q: 'What time does Maria usually finish work?', options: ['7 a.m.', '3 p.m.', '9 p.m.', 'She never finishes'], correct: 1 },
  { passage: 'Tom decided to change his career after ten years in banking. He felt his job was too stressful and wanted more free time for his family.', q: 'Why did Tom change his career?', options: ['He lost his job', 'He wanted a higher salary', 'His job was too stressful', 'He moved to another city'], correct: 2 },
  { passage: 'Many companies now offer flexible working hours. Employees can choose when to start and finish, as long as they complete their tasks.', q: 'What do employees need to do under flexible hours?', options: ['Work exactly 9 to 5', 'Complete their tasks', 'Ask permission every day', 'Work only in the morning'], correct: 1 },
  { passage: 'Anna set a goal to learn English in one year. She practised every day, even for just fifteen minutes, and slowly improved her skills.', q: 'How often did Anna practise English?', options: ['Once a week', 'Every day', 'Only on weekends', 'Once a month'], correct: 1 },
  { passage: 'The team missed the deadline because of a technical problem with their software. They explained the situation to their manager and asked for two more days.', q: 'Why did the team miss the deadline?', options: ['They forgot about it', 'A technical problem', 'They were on holiday', 'The manager cancelled it'], correct: 1 },
  { passage: 'Good communication skills are important in any career. Employers often look for people who can explain their ideas clearly and listen to others.', q: 'What do employers look for, according to the text?', options: ['People who work alone', 'People who can communicate clearly', 'People who never disagree', 'People with the most experience'], correct: 1 },
  { passage: 'David negotiated a better salary with his employer after receiving a job offer from another company.', q: 'What helped David negotiate a better salary?', options: ['A job offer from another company', 'A long holiday', 'A promotion', 'His manager\'s advice'], correct: 0 },
  { passage: 'Burnout happens when people work too hard for too long without enough rest. Experts recommend regular breaks and a healthy work-life balance.', q: 'What do experts recommend to avoid burnout?', options: ['Working harder', 'Regular breaks and balance', 'Changing jobs', 'Working overtime'], correct: 1 },
  { passage: 'Lena organised a small team event to celebrate finishing a big project. Everyone was happy to relax after weeks of hard work.', q: 'Why did Lena organise the event?', options: ['To find new colleagues', 'To celebrate finishing a project', 'To discuss a deadline', 'To ask for a promotion'], correct: 1 },
  { passage: 'A reliable colleague is someone who finishes tasks on time and keeps their promises. This builds trust within a team.', q: 'What does a reliable colleague do?', options: ['Finishes tasks on time', 'Works alone', 'Avoids responsibility', 'Changes jobs often'], correct: 0 },
];

const LISTENING_B1: { transcript: string; q: string; options: string[]; correct: number }[] = [
  { transcript: 'Hi, this is a reminder that the team meeting has been moved from 10 a.m. to 2 p.m. today. Please update your schedule.', q: 'What time is the meeting now?', options: ['10 a.m.', '2 p.m.', '12 p.m.', 'It was cancelled'], correct: 1 },
  { transcript: 'I\'ve been working on this project for three weeks now, and I think we can deliver it a few days before the deadline.', q: 'How does the speaker feel about the deadline?', options: ['Worried they will miss it', 'Confident they will finish early', 'Unsure', 'Already late'], correct: 1 },
  { transcript: 'Welcome to the office! Your desk is on the third floor, and your manager will introduce you to the team this afternoon.', q: 'When will the new employee meet the team?', options: ['This morning', 'This afternoon', 'Tomorrow', 'Next week'], correct: 1 },
  { transcript: 'I really need a day off. I\'ve been working overtime every day this week and I\'m exhausted.', q: 'How does the speaker feel?', options: ['Excited', 'Exhausted', 'Bored', 'Confident'], correct: 1 },
  { transcript: 'Could you send me the report by Friday? I need it before the client meeting on Monday.', q: 'When does the speaker need the report?', options: ['By Friday', 'By Monday', 'By Wednesday', 'Today'], correct: 0 },
  { transcript: 'She got the promotion because she always delivers her tasks on time and helps her colleagues.', q: 'Why did she get the promotion?', options: ['She works alone', 'She is reliable and helpful', 'She asked for it', 'She has worked there the longest'], correct: 1 },
  { transcript: 'Let\'s negotiate a new schedule — maybe you can start later and finish later, if that works for the team.', q: 'What is being discussed?', options: ['A salary increase', 'A new schedule', 'A holiday', 'A new office'], correct: 1 },
  { transcript: 'Our main priority this month is finishing the website redesign before the new product launch.', q: 'What is the main priority this month?', options: ['Hiring new staff', 'Finishing the website redesign', 'Taking a break', 'Changing offices'], correct: 1 },
  { transcript: 'I try to keep a good work-life balance by leaving the office on time and not checking emails in the evening.', q: 'How does the speaker keep a work-life balance?', options: ['Working overtime', 'Leaving on time and avoiding evening emails', 'Working from home always', 'Taking long holidays'], correct: 1 },
  { transcript: 'The manager said the team should focus on quality rather than speed for this particular project.', q: 'What should the team focus on?', options: ['Speed', 'Quality', 'Cost', 'Marketing'], correct: 1 },
];

const SPEAKING_B1: string[] = [
  'What does a typical work day look like for you?',
  'Describe a time when you had to meet a difficult deadline.',
  'What makes a good colleague, in your opinion?',
  'How do you keep a healthy balance between work and free time?',
  'Talk about a skill you would like to improve and why.',
  'Describe your ideal job.',
  'What is more important to you: salary or job satisfaction? Why?',
  'Talk about a time you had to solve a problem at work or school.',
  'How do you usually organise your daily tasks?',
  'What advice would you give to someone starting their first job?',
];

// Уровни A2 и B2 — чтобы полуадаптивная лестница могла реально двигаться вверх/вниз
// при проверке Шага 3, а не оставаться на одном B1. По 5 вопросов на навык, тоже демо.
const GRAMMAR_A2: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], correct: 1, explanation: 'Present Simple, 3-е лицо ед. числа: -s.' },
  { q: 'Yesterday, we ___ to the cinema.', options: ['go', 'goes', 'went', 'going'], correct: 2, explanation: 'Past Simple неправильного глагола go.' },
  { q: 'There ___ a book on the table.', options: ['is', 'are', 'am', 'be'], correct: 0, explanation: 'There is + единственное число.' },
  { q: 'He is ___ than his brother.', options: ['tall', 'taller', 'tallest', 'more tall'], correct: 1, explanation: 'Сравнительная степень короткого прилагательного: +er.' },
  { q: 'I ___ TV every evening.', options: ['watch', 'watches', 'watching', 'watched'], correct: 0, explanation: 'Present Simple, 1-е лицо.' },
];

const GRAMMAR_B2: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: 'If she had studied harder, she ___ the exam.', options: ['would pass', 'would have passed', 'will pass', 'passes'], correct: 1, explanation: 'Third Conditional: if + Past Perfect, would have + participle.' },
  { q: 'The bridge ___ in 1932.', options: ['built', 'was built', 'has built', 'building'], correct: 1, explanation: 'Passive Voice, Past Simple.' },
  { q: 'He said that he ___ tired.', options: ['is', 'was', 'were', 'be'], correct: 1, explanation: 'Косвенная речь: согласование времён.' },
  { q: 'Despite ___ hard, he failed.', options: ['work', 'working', 'worked', 'to work'], correct: 1, explanation: 'Despite + герундий.' },
  { q: 'By next year, I ___ here for a decade.', options: ['will work', 'will have worked', 'work', 'worked'], correct: 1, explanation: 'Future Perfect для действия, завершённого к моменту в будущем.' },
];

const VOCAB_MC_A2: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: 'Choose the correct word: "I ___ breakfast at 7am."', options: ['have', 'has', 'having', 'had'], correct: 0, explanation: 'Present Simple, 1-е лицо.' },
  { q: 'Choose the opposite of "big".', options: ['large', 'small', 'huge', 'tall'], correct: 1, explanation: '"Small" — противоположность "big".' },
  { q: 'A place where you buy food is a ___.', options: ['school', 'shop', 'hospital', 'bank'], correct: 1, explanation: '"Shop" — место, где покупают еду.' },
  { q: '"Yesterday" means ___.', options: ['tomorrow', 'today', 'the day before today', 'next week'], correct: 2, explanation: '"Yesterday" — день перед сегодняшним.' },
  { q: 'Choose the correct word: "She is my ___ (father\'s sister)."', options: ['aunt', 'uncle', 'cousin', 'sister'], correct: 0, explanation: 'Сестра отца — "aunt".' },
];

const VOCAB_MC_B2: { q: string; options: string[]; correct: number; explanation: string }[] = [
  { q: '"Reluctant" is closest in meaning to ___.', options: ['eager', 'unwilling', 'happy', 'certain'], correct: 1, explanation: 'Reluctant = unwilling, не желающий.' },
  { q: 'Choose closest in meaning to "meticulous".', options: ['careless', 'careful and precise', 'fast', 'lazy'], correct: 1, explanation: 'Meticulous — очень внимательный к деталям.' },
  { q: '"To postpone" means ___.', options: ['to cancel', 'to delay', 'to start', 'to finish'], correct: 1, explanation: 'Postpone = отложить.' },
  { q: '"Ambiguous" is closest to ___.', options: ['clear', 'unclear, with more than one meaning', 'simple', 'correct'], correct: 1, explanation: 'Ambiguous — двусмысленный.' },
  { q: 'Choose the correct collocation: "make a ___."', options: ['homework', 'decision', 'housework', 'cook'], correct: 1, explanation: '"Make a decision" — устойчивое сочетание.' },
];

const READING_A2: { passage: string; q: string; options: string[]; correct: number }[] = [
  { passage: 'Tom has a dog. The dog is brown and small. Tom walks the dog every morning.', q: 'What colour is the dog?', options: ['Black', 'Brown', 'White', 'Grey'], correct: 1 },
  { passage: 'Maria likes pizza. She eats it every Friday with her family.', q: 'When does Maria eat pizza?', options: ['Monday', 'Friday', 'Sunday', 'Saturday'], correct: 1 },
  { passage: 'The shop opens at 9am and closes at 6pm.', q: 'What time does the shop close?', options: ['9am', '12pm', '6pm', '8pm'], correct: 2 },
  { passage: 'John is a teacher. He teaches math at a school in London.', q: 'What does John teach?', options: ['English', 'Math', 'Science', 'Art'], correct: 1 },
  { passage: 'It is raining today, so Anna takes her umbrella.', q: 'Why does Anna take her umbrella?', options: ["It's sunny", "It's raining", "It's cold", "It's windy"], correct: 1 },
];

const READING_B2: { passage: string; q: string; options: string[]; correct: number }[] = [
  { passage: 'Despite the initial scepticism from investors, the startup managed to secure funding after presenting a compelling business plan.', q: 'How did the startup secure funding?', options: ['By ignoring investors', 'By presenting a compelling plan', 'By reducing costs', 'By merging with another company'], correct: 1 },
  { passage: 'The committee postponed the decision, citing the need for further research before implementation.', q: 'Why was the decision postponed?', options: ['Lack of funding', 'Need for more research', 'Committee disagreement', 'Legal issues'], correct: 1 },
  { passage: 'Although the novel received mixed reviews upon release, it has since become regarded as a modern classic.', q: 'How is the novel regarded now?', options: ['Poorly', 'As a modern classic', 'As forgotten', 'As controversial'], correct: 1 },
  { passage: "The company's quarterly earnings exceeded analysts' expectations, causing its stock price to surge.", q: 'What happened to the stock price?', options: ['It fell', 'It stayed the same', 'It surged', 'It was suspended'], correct: 2 },
  { passage: 'Critics argue that the policy, while well-intentioned, fails to address the root causes of the problem.', q: 'What do critics say about the policy?', options: ["It's perfect", "It's well-intentioned but doesn't fix root causes", "It's poorly designed", "It's too expensive"], correct: 1 },
];

const LISTENING_A2: { transcript: string; q: string; options: string[]; correct: number }[] = [
  { transcript: 'Hi, my name is Peter. I am from Canada. I like playing football.', q: 'Where is Peter from?', options: ['USA', 'Canada', 'UK', 'France'], correct: 1 },
  { transcript: 'The train leaves at 10 o\'clock from platform 2.', q: 'What platform does the train leave from?', options: ['1', '2', '3', '4'], correct: 1 },
  { transcript: 'I usually wake up at seven and have breakfast at half past seven.', q: 'What time does the speaker wake up?', options: ['6', '7', '7:30', '8'], correct: 1 },
  { transcript: "Can you close the window, please? It's cold in here.", q: 'What does the speaker want?', options: ['Open window', 'Close window', 'Turn on heat', 'Leave'], correct: 1 },
  { transcript: 'My sister is a doctor and my brother is an engineer.', q: "What is the speaker's brother?", options: ['Doctor', 'Engineer', 'Teacher', 'Nurse'], correct: 1 },
];

const LISTENING_B2: { transcript: string; q: string; options: string[]; correct: number }[] = [
  { transcript: 'Unfortunately, due to unforeseen circumstances, the conference has been rescheduled to next month.', q: 'What happened to the conference?', options: ['Cancelled', 'Rescheduled', 'Extended', 'Moved online'], correct: 1 },
  { transcript: "I'd like to bring up a point that hasn't been addressed yet in our discussion.", q: 'What does the speaker want to do?', options: ['End the discussion', 'Raise a new point', 'Agree with everyone', 'Leave the meeting'], correct: 1 },
  { transcript: 'The proposal has significant merit, but we need to consider the budget implications more carefully.', q: 'What concern does the speaker raise?', options: ['The idea is bad', 'Budget implications', 'Timing', 'Staff availability'], correct: 1 },
  { transcript: 'On reflection, I think we should have consulted the team before making that decision.', q: 'What does the speaker regret?', options: ['Not consulting the team', 'Making the decision too slowly', 'Consulting too many people', 'Nothing'], correct: 0 },
  { transcript: 'The results were inconclusive, so further research is warranted before drawing any firm conclusions.', q: 'What does the speaker suggest?', options: ['Stop research', 'Further research is needed', 'The results are final', 'Nothing more to do'], correct: 1 },
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  console.log('Очищаю прежние демо-данные…');
  await db.delete(questionBank).where(eq(questionBank.isDemo, true));
  await db.delete(vocabularyWords).where(eq(vocabularyWords.isDemo, true));
  await db.delete(courses).where(eq(courses.isDemo, true)); // модули/уроки/блоки/упражнения удалятся каскадом

  console.log('Создаю курс, модуль, уроки…');
  const [course] = await db.insert(courses).values({
    title: 'Work & Life — демо-курс (B1)',
    description: 'Демонстрационный курс для проверки конструктора уроков. Не настоящая учебная программа.',
    level: 'B1',
    audience: 'ADULTS',
    isDemo: true,
  }).returning();

  const [module1] = await db.insert(courseModules).values({
    courseId: course.id,
    title: 'Модуль 1: Работа и карьера',
    order: 0,
  }).returning();

  const [lesson1] = await db.insert(lessons).values({
    moduleId: module1.id,
    title: 'Work-Life Balance',
    description: 'Пример урока из лендинга — грамматика, лексика, чтение, говорение.',
    order: 0,
    estimatedMinutes: 25,
  }).returning();

  const introBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Сегодня поговорим о балансе между работой и личной жизнью: полезная лексика, грамматика Present Perfect Continuous и практика говорения.' },
  }).returning())[0];

  const vocabBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'VOCABULARY', order: 1, title: 'Новые слова',
    content: { words: ['sustainable', 'deadline', 'burnout', 'workload', 'flexible'] },
  }).returning())[0];

  const grammarBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'GRAMMAR', order: 2, title: 'Present Perfect Continuous',
    content: { explanation: 'Present Perfect Continuous используется для действий, начавшихся в прошлом и продолжающихся сейчас: I have been working here for three years.' },
  }).returning())[0];

  const readingBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'READING', order: 3, title: 'Интервью о рабочем дне',
    content: { text: READING_B1[1].passage },
  }).returning())[0];

  const exerciseBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'EXERCISE', order: 4, title: 'Упражнения',
  }).returning())[0];
  await db.insert(exercises).values([
    { lessonBlockId: exerciseBlock.id, type: 'MULTIPLE_CHOICE', order: 0, content: { question: GRAMMAR_B1[0].q, options: GRAMMAR_B1[0].options, correctIndex: GRAMMAR_B1[0].correct, explanation: GRAMMAR_B1[0].explanation } },
    { lessonBlockId: exerciseBlock.id, type: 'FILL_BLANK', order: 1, content: { text: 'She ___ (work) at this company for five years.', answers: ['has worked', 'has been working'] } },
  ]);

  const speakingBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'SPEAKING', order: 5, title: 'Говорение',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: speakingBlock.id, type: 'SPEAKING', order: 0,
    content: { prompt: 'What makes a person successful?', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' },
  });

  const miniTestBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'MINI_TEST', order: 6, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTestBlock.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_B1[2].q, options: VOCAB_MC_B1[2].options, correctIndex: VOCAB_MC_B1[2].correct, explanation: VOCAB_MC_B1[2].explanation },
  });

  await db.insert(lessonBlocks).values({
    lessonId: lesson1.id, type: 'HOMEWORK', order: 7, title: 'Домашнее задание',
    content: { text: 'Напишите 5 предложений о своём балансе между работой и личной жизнью, используя новые слова.' },
  });

  const [lesson2] = await db.insert(lessons).values({
    moduleId: module1.id,
    title: 'Job Interview Basics',
    description: 'Короткий второй демо-урок.',
    order: 1,
    estimatedMinutes: 20,
  }).returning();

  await db.insert(lessonBlocks).values({
    lessonId: lesson2.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Базовая лексика и вопросы для собеседования на английском.' },
  });
  const lesson2VocabBlock = (await db.insert(lessonBlocks).values({
    lessonId: lesson2.id, type: 'VOCABULARY', order: 1, title: 'Лексика',
    content: { words: ['employer', 'career', 'opportunity', 'confident', 'skill'] },
  }).returning())[0];
  const lesson2MiniTest = (await db.insert(lessonBlocks).values({
    lessonId: lesson2.id, type: 'MINI_TEST', order: 2, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: lesson2MiniTest.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_B1[4].q, options: VOCAB_MC_B1[4].options, correctIndex: VOCAB_MC_B1[4].correct, explanation: VOCAB_MC_B1[4].explanation },
  });
  void lesson2VocabBlock; void introBlock; void vocabBlock; void grammarBlock; void readingBlock;

  console.log('Создаю курс A1…');
  const [courseA1] = await db.insert(courses).values({
    title: 'Daily Life — демо-курс (A1)',
    description: 'Демонстрационный курс уровня A1. Не настоящая учебная программа.',
    level: 'A1',
    audience: 'ADULTS',
    isDemo: true,
  }).returning();
  const [moduleA1] = await db.insert(courseModules).values({
    courseId: courseA1.id, title: 'Модуль 1: Повседневная жизнь', order: 0,
  }).returning();

  const [lesson1A1] = await db.insert(lessons).values({
    moduleId: moduleA1.id, title: 'My Family and Daily Routine',
    description: 'Семья, утренний распорядок, простые предложения.', order: 0, estimatedMinutes: 20,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Сегодня говорим о семье и повседневных делах: новая лексика и Present Simple.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'VOCABULARY', order: 1, title: 'Новые слова',
    content: { words: ['family', 'mother', 'father', 'brother', 'morning'] },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'GRAMMAR', order: 2, title: 'Present Simple',
    content: { explanation: 'Present Simple: I/you/we/they + глагол, he/she/it + глагол+s. Пример: She works every day. I live in Almaty.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'READING', order: 3, title: 'Текст про Анну',
    content: { text: READING_A1[0].passage },
  });
  const exBlockA1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'EXERCISE', order: 4, title: 'Упражнения',
  }).returning())[0];
  await db.insert(exercises).values([
    { lessonBlockId: exBlockA1.id, type: 'MULTIPLE_CHOICE', order: 0, content: { question: GRAMMAR_A1[0].q, options: GRAMMAR_A1[0].options, correctIndex: GRAMMAR_A1[0].correct, explanation: GRAMMAR_A1[0].explanation } },
    { lessonBlockId: exBlockA1.id, type: 'FILL_BLANK', order: 1, content: { text: 'My father ___ (work) in a hospital.', answers: ['works'] } },
  ]);
  const speakingA1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'SPEAKING', order: 5, title: 'Говорение',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: speakingA1.id, type: 'SPEAKING', order: 0,
    content: { prompt: 'Talk about your family.', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' },
  });
  const miniTestA1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'MINI_TEST', order: 6, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTestA1.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_A1[1].q, options: VOCAB_MC_A1[1].options, correctIndex: VOCAB_MC_A1[1].correct, explanation: VOCAB_MC_A1[1].explanation },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A1.id, type: 'HOMEWORK', order: 7, title: 'Домашнее задание',
    content: { text: 'Напишите 5 предложений о своей семье, используя новые слова.' },
  });

  const [lesson2A1] = await db.insert(lessons).values({
    moduleId: moduleA1.id, title: 'Food and Drinks', description: 'Короткий второй урок.', order: 1, estimatedMinutes: 15,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson2A1.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Простая лексика про еду и напитки.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson2A1.id, type: 'VOCABULARY', order: 1, title: 'Лексика',
    content: { words: ['apple', 'water', 'like', 'house', 'happy'] },
  });
  const miniTest2A1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson2A1.id, type: 'MINI_TEST', order: 2, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTest2A1.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_A1[4].q, options: VOCAB_MC_A1[4].options, correctIndex: VOCAB_MC_A1[4].correct, explanation: VOCAB_MC_A1[4].explanation },
  });

  console.log('Создаю курс A2…');
  const [courseA2] = await db.insert(courses).values({
    title: 'Travel & Shopping — демо-курс (A2)',
    description: 'Демонстрационный курс уровня A2. Не настоящая учебная программа.',
    level: 'A2',
    audience: 'ADULTS',
    isDemo: true,
  }).returning();
  const [moduleA2] = await db.insert(courseModules).values({
    courseId: courseA2.id, title: 'Модуль 1: Путешествия и покупки', order: 0,
  }).returning();

  const [lesson1A2] = await db.insert(lessons).values({
    moduleId: moduleA2.id, title: 'Planning a Trip',
    description: 'Лексика путешествий, Past Simple.', order: 0, estimatedMinutes: 25,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Сегодня говорим о планировании поездки: лексика и Past Simple.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'VOCABULARY', order: 1, title: 'Новые слова',
    content: { words: ['ticket', 'airport', 'luggage', 'passport', 'journey'] },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'GRAMMAR', order: 2, title: 'Past Simple',
    content: { explanation: 'Past Simple для завершённых действий в прошлом: правильные глаголы +ed (travelled), неправильные — особые формы (went, bought). Пример: We travelled to Istanbul last year.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'READING', order: 3, title: 'Текст про магазин',
    content: { text: READING_A2[2].passage },
  });
  const exBlockA2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'EXERCISE', order: 4, title: 'Упражнения',
  }).returning())[0];
  await db.insert(exercises).values([
    { lessonBlockId: exBlockA2.id, type: 'MULTIPLE_CHOICE', order: 0, content: { question: GRAMMAR_A2[1].q, options: GRAMMAR_A2[1].options, correctIndex: GRAMMAR_A2[1].correct, explanation: GRAMMAR_A2[1].explanation } },
    { lessonBlockId: exBlockA2.id, type: 'FILL_BLANK', order: 1, content: { text: 'We ___ (travel) to Istanbul last year.', answers: ['travelled', 'traveled'] } },
  ]);
  const speakingA2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'SPEAKING', order: 5, title: 'Говорение',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: speakingA2.id, type: 'SPEAKING', order: 0,
    content: { prompt: 'Describe a trip you would like to take.', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' },
  });
  const miniTestA2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'MINI_TEST', order: 6, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTestA2.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_A2[1].q, options: VOCAB_MC_A2[1].options, correctIndex: VOCAB_MC_A2[1].correct, explanation: VOCAB_MC_A2[1].explanation },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1A2.id, type: 'HOMEWORK', order: 7, title: 'Домашнее задание',
    content: { text: 'Напишите короткий текст о планировании поездки, используя новые слова.' },
  });

  const [lesson2A2] = await db.insert(lessons).values({
    moduleId: moduleA2.id, title: 'At the Shop', description: 'Короткий второй урок.', order: 1, estimatedMinutes: 15,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson2A2.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Лексика для похода в магазин: цена, скидка, чек.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson2A2.id, type: 'VOCABULARY', order: 1, title: 'Лексика',
    content: { words: ['price', 'expensive', 'cheap', 'receipt', 'discount'] },
  });
  const miniTest2A2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson2A2.id, type: 'MINI_TEST', order: 2, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTest2A2.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_A2[4].q, options: VOCAB_MC_A2[4].options, correctIndex: VOCAB_MC_A2[4].correct, explanation: VOCAB_MC_A2[4].explanation },
  });

  console.log('Создаю курс B2…');
  const [courseB2] = await db.insert(courses).values({
    title: 'Technology & Society — демо-курс (B2)',
    description: 'Демонстрационный курс уровня B2. Не настоящая учебная программа.',
    level: 'B2',
    audience: 'ADULTS',
    isDemo: true,
  }).returning();
  const [moduleB2] = await db.insert(courseModules).values({
    courseId: courseB2.id, title: 'Модуль 1: Технологии и общество', order: 0,
  }).returning();

  const [lesson1B2] = await db.insert(lessons).values({
    moduleId: moduleB2.id, title: 'The Impact of Technology',
    description: 'Passive Voice, Reported Speech, лексика о технологиях.', order: 0, estimatedMinutes: 30,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Сегодня говорим о влиянии технологий на общество: Passive Voice, Reported Speech и новая лексика.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'VOCABULARY', order: 1, title: 'Новые слова',
    content: { words: ['innovation', 'artificial', 'convenient', 'impact', 'efficient'] },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'GRAMMAR', order: 2, title: 'Passive Voice и Reported Speech',
    content: { explanation: 'Passive Voice и Reported Speech помогают описывать технологии объективно и пересказывать чужие слова: "Many jobs are being automated." / "She said that AI was changing everything."' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'READING', order: 3, title: 'Текст про стартап',
    content: { text: READING_B2[0].passage },
  });
  const exBlockB2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'EXERCISE', order: 4, title: 'Упражнения',
  }).returning())[0];
  await db.insert(exercises).values([
    { lessonBlockId: exBlockB2.id, type: 'MULTIPLE_CHOICE', order: 0, content: { question: GRAMMAR_B2[1].q, options: GRAMMAR_B2[1].options, correctIndex: GRAMMAR_B2[1].correct, explanation: GRAMMAR_B2[1].explanation } },
    { lessonBlockId: exBlockB2.id, type: 'FILL_BLANK', order: 1, content: { text: 'Many jobs ___ (replace) by automation in the next decade.', answers: ['will be replaced'] } },
  ]);
  const speakingB2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'SPEAKING', order: 5, title: 'Говорение',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: speakingB2.id, type: 'SPEAKING', order: 0,
    content: { prompt: 'Do you think technology makes life better or worse? Why?', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' },
  });
  const miniTestB2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'MINI_TEST', order: 6, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTestB2.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_B2[1].q, options: VOCAB_MC_B2[1].options, correctIndex: VOCAB_MC_B2[1].correct, explanation: VOCAB_MC_B2[1].explanation },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1B2.id, type: 'HOMEWORK', order: 7, title: 'Домашнее задание',
    content: { text: 'Напишите абзац о влиянии технологий на общество, используя новые слова.' },
  });

  const [lesson2B2] = await db.insert(lessons).values({
    moduleId: moduleB2.id, title: 'Social Media Debate', description: 'Короткий второй урок.', order: 1, estimatedMinutes: 20,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson2B2.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Споры о социальных сетях: приватность и зависимость от технологий.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson2B2.id, type: 'VOCABULARY', order: 1, title: 'Лексика',
    content: { words: ['privacy', 'dependent', 'widespread', 'concern', 'accessible'] },
  });
  const miniTest2B2 = (await db.insert(lessonBlocks).values({
    lessonId: lesson2B2.id, type: 'MINI_TEST', order: 2, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTest2B2.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_B2[3].q, options: VOCAB_MC_B2[3].options, correctIndex: VOCAB_MC_B2[3].correct, explanation: VOCAB_MC_B2[3].explanation },
  });

  console.log('Создаю курс C1…');
  const [courseC1] = await db.insert(courses).values({
    title: 'Global Issues — демо-курс (C1)',
    description: 'Демонстрационный курс уровня C1. Не настоящая учебная программа.',
    level: 'C1',
    audience: 'ADULTS',
    isDemo: true,
  }).returning();
  const [moduleC1] = await db.insert(courseModules).values({
    courseId: courseC1.id, title: 'Модуль 1: Глобальные проблемы', order: 0,
  }).returning();

  const [lesson1C1] = await db.insert(lessons).values({
    moduleId: moduleC1.id, title: 'Climate Change and Sustainability',
    description: 'Mixed Conditionals, инверсия, академическая лексика.', order: 0, estimatedMinutes: 35,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Сегодня говорим об изменении климата и устойчивом развитии: Mixed Conditionals, инверсия и академическая лексика.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'VOCABULARY', order: 1, title: 'Новые слова',
    content: { words: ['sustainability', 'mitigate', 'biodiversity', 'jeopardize', 'resilience'] },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'GRAMMAR', order: 2, title: 'Mixed Conditionals и инверсия',
    content: { explanation: 'Mixed Conditionals и инверсия используются в формальном/академическом стиле: "Had governments acted sooner, the crisis would be less severe."' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'READING', order: 3, title: 'Текст про биоразнообразие',
    content: { text: READING_C1[4].passage },
  });
  const exBlockC1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'EXERCISE', order: 4, title: 'Упражнения',
  }).returning())[0];
  await db.insert(exercises).values([
    { lessonBlockId: exBlockC1.id, type: 'MULTIPLE_CHOICE', order: 0, content: { question: GRAMMAR_C1[1].q, options: GRAMMAR_C1[1].options, correctIndex: GRAMMAR_C1[1].correct, explanation: GRAMMAR_C1[1].explanation } },
    { lessonBlockId: exBlockC1.id, type: 'FILL_BLANK', order: 1, content: { text: 'Had the policy ___ (implement) earlier, the outcome would have been different.', answers: ['been implemented'] } },
  ]);
  const speakingC1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'SPEAKING', order: 5, title: 'Говорение',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: speakingC1.id, type: 'SPEAKING', order: 0,
    content: { prompt: 'What should governments do to address climate change?', rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' },
  });
  const miniTestC1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'MINI_TEST', order: 6, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTestC1.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_C1[1].q, options: VOCAB_MC_C1[1].options, correctIndex: VOCAB_MC_C1[1].correct, explanation: VOCAB_MC_C1[1].explanation },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson1C1.id, type: 'HOMEWORK', order: 7, title: 'Домашнее задание',
    content: { text: 'Напишите эссе (100–150 слов) о путях смягчения последствий изменения климата, используя новые слова.' },
  });

  const [lesson2C1] = await db.insert(lessons).values({
    moduleId: moduleC1.id, title: 'The Future of Work', description: 'Короткий второй урок.', order: 1, estimatedMinutes: 25,
  }).returning();
  await db.insert(lessonBlocks).values({
    lessonId: lesson2C1.id, type: 'INTRO', order: 0, title: 'Введение',
    content: { text: 'Автоматизация и будущее рынка труда: ключевая лексика.' },
  });
  await db.insert(lessonBlocks).values({
    lessonId: lesson2C1.id, type: 'VOCABULARY', order: 1, title: 'Лексика',
    content: { words: ['unprecedented', 'advocate', 'compelling', 'inevitable', 'discrepancy'] },
  });
  const miniTest2C1 = (await db.insert(lessonBlocks).values({
    lessonId: lesson2C1.id, type: 'MINI_TEST', order: 2, title: 'Мини-тест',
  }).returning())[0];
  await db.insert(exercises).values({
    lessonBlockId: miniTest2C1.id, type: 'MULTIPLE_CHOICE', order: 0, skill: 'VOCABULARY',
    content: { question: VOCAB_MC_C1[3].q, options: VOCAB_MC_C1[3].options, correctIndex: VOCAB_MC_C1[3].correct, explanation: VOCAB_MC_C1[3].explanation },
  });

  console.log('Заполняю словарь (84 слова, уровни A1–C1)…');
  const vocabByLevel: { level: string; words: typeof VOCAB_B1 }[] = [
    { level: 'A1', words: VOCAB_A1 },
    { level: 'A2', words: VOCAB_A2 },
    { level: 'B1', words: VOCAB_B1 },
    { level: 'B2', words: VOCAB_B2 },
    { level: 'C1', words: VOCAB_C1 },
  ];
  await db.insert(vocabularyWords).values(
    vocabByLevel.flatMap(({ level, words }) => words.map((w) => ({
      word: w.word,
      translationRu: w.ru,
      definition: w.def,
      level,
      transcription: w.transcription,
      examples: [w.example],
      isDemo: true,
    }))),
  );

  console.log('Заполняю банк вопросов (уровни A1–C1)…');
  await db.insert(questionBank).values([
    ...GRAMMAR_A1.map((item, i) => ({
      skill: 'GRAMMAR' as const, level: 'A1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...GRAMMAR_A2.map((item, i) => ({
      skill: 'GRAMMAR' as const, level: 'A2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...GRAMMAR_B1.map((item, i) => ({
      skill: 'GRAMMAR' as const, level: 'B1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...GRAMMAR_B2.map((item, i) => ({
      skill: 'GRAMMAR' as const, level: 'B2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...GRAMMAR_C1.map((item, i) => ({
      skill: 'GRAMMAR' as const, level: 'C1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...VOCAB_MC_A1.map((item, i) => ({
      skill: 'VOCABULARY' as const, level: 'A1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...VOCAB_MC_A2.map((item, i) => ({
      skill: 'VOCABULARY' as const, level: 'A2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...VOCAB_MC_B1.map((item, i) => ({
      skill: 'VOCABULARY' as const, level: 'B1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...VOCAB_MC_B2.map((item, i) => ({
      skill: 'VOCABULARY' as const, level: 'B2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...VOCAB_MC_C1.map((item, i) => ({
      skill: 'VOCABULARY' as const, level: 'C1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { question: item.q, options: item.options, correctIndex: item.correct, explanation: item.explanation }, isDemo: true,
    })),
    ...READING_A1.map((item, i) => ({
      skill: 'READING' as const, level: 'A1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { passage: item.passage, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...READING_A2.map((item, i) => ({
      skill: 'READING' as const, level: 'A2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { passage: item.passage, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...READING_B1.map((item, i) => ({
      skill: 'READING' as const, level: 'B1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { passage: item.passage, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...READING_B2.map((item, i) => ({
      skill: 'READING' as const, level: 'B2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { passage: item.passage, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...READING_C1.map((item, i) => ({
      skill: 'READING' as const, level: 'C1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { passage: item.passage, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...LISTENING_A1.map((item, i) => ({
      skill: 'LISTENING' as const, level: 'A1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { transcript: item.transcript, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...LISTENING_A2.map((item, i) => ({
      skill: 'LISTENING' as const, level: 'A2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { transcript: item.transcript, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...LISTENING_B1.map((item, i) => ({
      skill: 'LISTENING' as const, level: 'B1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      // audioUrl не заполнен — в демо-сиде нет учебного аудио, только транскрипт текстом
      content: { transcript: item.transcript, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...LISTENING_B2.map((item, i) => ({
      skill: 'LISTENING' as const, level: 'B2', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { transcript: item.transcript, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...LISTENING_C1.map((item, i) => ({
      skill: 'LISTENING' as const, level: 'C1', difficulty: (i % 5) + 1, type: 'MULTIPLE_CHOICE' as const,
      content: { transcript: item.transcript, question: item.q, options: item.options, correctIndex: item.correct }, isDemo: true,
    })),
    ...SPEAKING_B1.map((prompt, i) => ({
      skill: 'SPEAKING' as const, level: 'B1', difficulty: (i % 5) + 1, type: 'SPEAKING' as const,
      content: { prompt, rubric: 'vocabulary, grammar, fluency, pronunciation — 1–5' }, isDemo: true,
    })),
  ]);

  await pool.end();
  console.log('Демо-контент готов: 5 курсов (A1–C1), 10 уроков, 84 слова, банк вопросов на все уровни A1–C1.');
}

main().catch((e) => { console.error(e); process.exit(1); });
