var event, ok;

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(vopros.a00 + vopros.a1 + vopros.a2 + vopros.a3 + vopros.a4 +'-1 - Выход из игры');
    alert (event);
    if (event == -1) {
        break;
    }
    else {
        alert ((vopros.a0,event));
        ok = isAnswer(vopros.a0,event); 
    }
} while (!ok);
switch (event) {
    case 1: 
        alert("это неверный ответ");
    break;
    case 2: // Второй вопрос   
            ok = false;
            event = +prompt(vopros.b00 + vopros.b1 + vopros.b2 + vopros.b3 + vopros.b4 +'-1 - Выход из игры');
            if (event == -1) {
                break;
                }
            else {
                ok = isAnswer(vopros.b0, event);
                 }
             } while (!ok);
            switch (event) {
                case 1: 
                alert("это неверный ответ");
                break;
                case 2: 
                alert("это неверный ответ");
                break;
                case 3:// Третий вопрос   
                ok = false;
                event = +prompt(vopros.с00 + vopros.с1 + vopros.с2 + vopros.с3 + vopros.с4 +'-1 - Выход из игры');
                if (event == -1) {
                    break;
                    }
                else {
                    ok = isAnswer(vopros.с0, event);
                    }
                    } while (!ok);
                    switch (event) {
                        case 1://Четвёртый вопрос
                        ok = false;
                        event = +prompt(vopros.d00 + vopros.d1 + vopros.d2 + vopros.d3 + vopros.d4 +'-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                        ok = isAnswer(vopros.d0, event);
                            }
                        } while (!ok);
                        switch (event) {
                            case 1: 
                                alert("это неверный ответ");
                            break;
                            case 2: // Пятый вопрос   
                            ok = false;
                            event = +prompt(vopros.e00 + vopros.e1 + vopros.e2 + vopros.e3 + vopros.e4 +'-1 - Выход из игры');
                            if (event == -1) {
                            break;
                                }
                            else {
                                ok = isAnswer(vopros.e0, event);
                                 }
                            } while (!ok);
                            switch (event) {
                                case 1: 
                                    alert("это неверный ответ");
                                break;
                                case 2: 
                                    alert("это неверный ответ");
                                break;
                                case 3:// Подведение итогов удачной игры  
                                    alert("Ваш выигрыш составил " + vopros.e5 + "рублей");

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
        }
    return true;
        }
