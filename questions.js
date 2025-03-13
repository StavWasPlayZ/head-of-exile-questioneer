/**
 * @typedef {Object} Question
 * 
 * @property {string} question The question title
 * 
 * @property {InputType} input_type
 * @property {string[]?} values The values to be used for the associated `input_type`
 */

/**
 * Contains all the questions of the questioneer.
 * 
 * @type {Question[]}
 */
const questions = [
    {
        "question": "עד כמה אתה מבין את המסורות הדתיות והתרבותיות של הקהילה היהודית?",

        "input_type": input_types.scale,
        "values": [
            "טוב מאוד",
            "טוב",
            "במידה מסויימת",
            "לא טוב",
            "כלל לא"
        ]
    },
    {
        "question": "איך תתאר את הניסיון שלך בתפקידי מנהיגות בקהילות או ארגונים אחרים?",

        "input_type": input_types.scale,
        "values": [
            "נרחב מאוד",
            "נרחב",
            "סביר",
            "נסיון מועט",
            "אין נסיון"
        ]
    },
    {
        "question": "כיצד אתה מתמודד עם החלטות מוסריות ואתיות קשות?",

        "input_type": input_types.radio,
        "values": [
            "אני מקבל החלטות המבוססות על עקרונות מוסריים חזקים.",
            "אני מבקש עצות והכוונה ממקורות מהימנים.",
            "אני שוקל את היתרונות והחסרונות ומחליט.",
            "אני הולך לפי דעת הרוב.",
            "אני מנסה להימנע מלקבל החלטות כאלה."
        ]
    },
    {
        "question": "איך אתה מתכנן לאחד ולעורר השראה בקהילה בתקופה מאתגרת כזו של גלות?",

        "input_type": input_types.radio,
        "values": [
            "באמצעות תקשורת ברורה וחזון משכנע.",
            "על ידי שמירה על מסורת והדגשת אחדות.",
            "על ידי שיתוף הקהילה בקבלת החלטות.",
            "אני לא בטוח."
        ]
    },
    {
        "question": "איך היית מנווט בקשרים עם רשויות חיצוניות המשפיעות על רווחת הקהילה שלנו?",

        "input_type": input_types.radio,
        "values": [
            "דיפלומטיה ומשא ומתן.",
            "הסברה אסרטיבית לצרכי הקהילה שלנו.",
            "גישה מאוזנת עם דיפלומטיה והסברה.",
            "אני לא בטוח."
        ]
    },
    {
        "question": "באיזו מידה אתה מוכן להקדיש כמות של זמן ומאמץ לשרת את טובת הקהילה במהלך הגלות?",

        "input_type": input_types.scale,
        "values": [
            "במידה רבה",
            "במידה מסויימת",
            "לא הרבה",
            "כלל לא",
            "לא בטוח"
        ]
    },

    {
        "question": "תאר את החזון שלך ואת התפקיד המיועד שלך.",
        "input_type": input_types.text
    }
];