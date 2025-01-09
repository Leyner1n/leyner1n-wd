const HTTPResponseStatus = {
    OK: 200, // все данные получены
    CREATED: 201, // сущность создана
    NO_CONTENT: 204, // нет контента (статус на del запрос)
    UNAUTHORIZED: 401, // не прошла авторизация
    FORBIDDEN: 403, // недостаточно прав доступа
    NOT_FOUND: 404, // не найдена
    METHOD_NOT_ALLOWED: 405, // для данного url метод не поддерживается
    UNPROCESSABLE_CONTENT: 422, // ошибка валидации
    INTERNAL_SERVER_ERROR: 500, // проблема на бэке
};

const Filter = {
    ALL: 'all',
    POPULAR: 'popular',
    NEW: 'new'
};

const Locale = {
    English: 'en',
    Russian: 'ru'
};

const Extention = {
    Jpg: '.jpg'
};

export {
    Filter,
    Locale,
    Extention,
    HTTPResponseStatus
};
