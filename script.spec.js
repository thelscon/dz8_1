describe ('Написать ф-ю, принимающую объект и возвращающую число означающее максимальную глубину вложенности объектов в ней. Покрыть тестами', function () {
    describe ( 'В качестве объекта передается: ', function () {
        it ( 'Строка:', function () {
            assert.isNaN ( getMaxDeep ( 'text' ) ) ;
        } ) ;
        it ( 'Число:', function () {
            assert.isNaN ( getMaxDeep ( 123 ) ) ;
        } ) ;
        it ( 'Булево значение:', function () {
            assert.isNaN ( getMaxDeep ( true ) ) ;
        } ) ;
    } ) ;
}) ;