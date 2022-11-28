# STRequestClient
## Клиентская часть системы тестирования запросов
- [Требования к серверу](#Requirements)
- [Начало работы](#Started)
     - [Подготовка клиента](#Client)

## Требования к серверу <a name="Requirements"></a>
- Node.js 16.14.0+
- axios 1.2.0+
- React 18.2.0+
- npm 8.3.1+

## Начало работы <a name="Started"></a>
### Подготовка сервера <a name="Client"></a>
1. Cклонировать репозиторий:
```
git clone https://github.com/KinzeI/STRequestClient.git
```
2. Перейти в папку ниже:
```
cd STRequestClient
```
3. Установить зависимости:
```
npm istall
```
4. Перейти в папку ниже:
```
cd src
```
6. Отредактировать App.js и заменить все exampleUrl на ваш адрес сервера:
```js
axios.post("exampleUrl", {
```
5. Собрать билд React:
```
npm run build
```
6. Портировать папку build на ваш клиентский хостинг
