'use strict' ;

alert ('Написать ф-ю, принимающую объект и возвращающую число означающее максимальную глубину вложенности объектов в ней.' +
        `\nПокрыть тестами`) ;

let itObject = {
    
    name : 'computer' ,
    
    motherboard : {                     //создан подобъект
        manufacturer : 'Asus' ,
        socket : 'AM4' ,
        
        memory : {                          //создан подобъект
            manufacturer : 'Kingston' ,
            type : 'DDR4' ,
            speed : 3200 ,

            cellMemory : {
                manufacturer : 'Hynix' ,
                a : {
                    a : {
                        a : {
                            a : {

                            }
                        }
                    }
                }        //создан подобъект
            }
        }
    } ,
    
    price : 1500 ,
    color : 'Black',
    
    videocard : {                       //создан подобъект
        manufacturer : 'Sapphire' ,
        memory : 8 ,
        gpu : 'Navi' ,
        generation : 'rdna2',
        a : {
            a : {
                a : {
                    a : {
                        a : {
                            a : {
                                a : {

                                }
                            }
                        }
                    } ,
                    a : {
                        a : {
                            a : {
                                a : {
                                    a : {
                                        a : {
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} ;

function getMaxDeep (inObject) {

    if ( typeof (inObject) === 'object' ) {
        let variableMaxDeep = 0 ;
        let maxDeep = 0 ;
        for (let key in inObject) { 
            if ( typeof (inObject[key]) === 'object' ) {
                ++variableMaxDeep ;
                variableMaxDeep += getMaxDeep ( inObject[key] ) ;
                if (maxDeep < variableMaxDeep) {
                    maxDeep = variableMaxDeep ;
                }
            }
            else {
                variableMaxDeep = 0 ;
            }

        }
        return maxDeep ;
    }
    else {
        return NaN ;
    }
}

console.log ( itObject ) ;

console.log ( 'Максимальная глубина вложенности - ', getMaxDeep ( itObject ) ) ;