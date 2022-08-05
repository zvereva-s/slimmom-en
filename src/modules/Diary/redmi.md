<!-- /*

1. Заходим на дневник (user уже с историей)
2. Дата у нас есть автоматически по дефолту сегодня
3. UseEffect - fetch - dateInfo
         dateInfo = {
            date
            response = {
                        id (id of day)
                        eatenProducts [arr of products of CURRENT day]
                        daySummary ={
                                date
                                kcalLeft
                                kcalConsumed
                                dayliRate
                                percentOfDayliRate
                                userId
                                id
                            }
                        }
                    }

3. При первом запросе мы формируем стор - days - в него пушим с ответа по фетч и формируем [{dayId, eatenProducts[], date, daySummary{}}, {}, {}]
4. Когда добавляем продукт то добавляем по запросу - то получаем и можем
    -- локально в стор в days добавить полученый day
                                                                    {
                                                                    "eatenProduct": { },
                                                                    "day": {
                                                                        "id": "507f1f77bcf86cd799439011",
                                                                        "eatenProducts": [
                                                                        {
                                                                            "title": "Меланж яичный",
                                                                            "weight": 100,
                                                                            "kcal": 157,
                                                                            "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
                                                                        }
                                                                        ],
                                                                        "date": "2020-12-31",
                                                                        "daySummary": "507f1f77bcf86cd799439011"
                                                                    },
                                                                    "daySummary": {
                                                                        "date": "2020-12-31",
                                                                        "kcalLeft": 1194.5,
                                                                        "kcalConsumed": 157,
                                                                        "dailyRate": 1351.5,
                                                                        "percentsOfDailyRate": 11.616722160562338,
                                                                        "userId": "507f1f77bcf86cd799439012",
                                                                        "id": "507f1f77bcf86cd799439011"
                                                                    }
                                                                    }

5. daySummaruArr = это отдельный массив в сторе, который при фетче пушит в него daySummary{} где есть id и при добавлении товара, обновляется массив объектов с daysSummary

6. daySummary ищем по id и  дате внутри.
7. При удалении продукта удаляем с массива  в сторе days dayId и с массива dyasSummaryArr по id  daySummary
*/ -->
