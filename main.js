// Case1

// let lang = prompt('Введите целое число в диапазоне 1-7')
// switch (lang) {
//     case '1':
//         alert('Понедельник');
//         break;
//     case '2':
//         alert('Вторник');
//         break;
//     case '3':
//         alert('Среда');
//         break;
//     case '4':
//         alert('Четверг');
//         break;
//     case '5':
//         alert('Пятница');
//         break;
//     case '6':
//         alert('Суббота');
//         break;
//     case '7':
//         alert('Воскресенье');
//         break;
//     default:
//         alert('Ошибка');
//         break;
// }

// Case2

// let lang = prompt('Введите целое число в диапазоне 1-5')
// switch (lang) {
//     case '1':
//         alert('Плохо');
//         break;
//     case '2':
//         alert('Неудовлетворительно');
//         break;
//     case '3':
//         alert('Удовлетворительно');
//         break;
//     case '4':
//         alert('Хорошо');
//         break;
//     case '5':
//         alert('Отлично');
//         break;
//     default:
//         alert('Ошибка');
//         break;    
// }

// Case3

// let lang = prompt('Введите целое число в диапазоне 1-12')
// switch (lang) {
//     case '1':
//     case '2':
//     case '12':
//         alert('Зима');
//         break;
//     case '3':
//     case '4':
//     case '5':
//         alert('Весна');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         alert('Лето');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         alert('Осень');
//         break;
//     default:
//         alert('Ошибка');
//         break;    
// }

// Case4

// let lang = prompt('Введите целое число в диапазоне 1-12')
// switch (lang) {
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         alert('В этом месяце 31 день');
//         break;
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         alert('В этом месяце 30 день');
//         break;
//     case '2':
//         alert('В этом месяце 28 дней');
//         break;
//     default:
//         alert('Ошибка');
//         break;    
// }

// Case5

// let A = +prompt('Введите число А')
// let B = +prompt('Введите число B (не равное нулю!)')
// let lang = prompt('Введите целое число в диапазоне 1-4')
// switch (lang) {
//     case '1':
//         alert('A + B=' + (A+B));
//         break;
//     case '2':
//         alert('A - B=' + (A-B));
//         break;
//     case '3':
//         alert('A * B=' + (A*B));
//         break;
//     case '4':
//         alert('A / B=' + (A/B));
//         break;
//     default:
//         alert('Ошибка');
//         break;
// }

// Case6

// let l = +prompt('Введите длину отрезка')
// let lang = prompt('Введите единицу длины 1-дециметр, 2-километр, 3-метр, 4-миллиметр, 5-сантиметр')
// switch (lang) {
//     case '1':
//         alert(l + ' дм = ' + (l*0.1) + ' м');
//         break;
//     case '2':
//         alert(l + ' км = ' + (l*1000) + ' м');
//         break;
//     case '3':
//         alert(l + ' м = ' + l + ' м');
//         break;
//     case '4':
//         alert(l + ' мм = ' + (l*0.001) + ' м');
//         break;
//     case '5':
//         alert(l + ' см = ' + (l*0.01) + ' м');
//         break;
//     default:
//         alert('Ошибка');
//         break;
// }

// Case7

// let l = +prompt('Введите массу тела')
// let lang = prompt('Введите единицу массы 1-килограмм, 2-миллиграмм, 3-грамм, 4-тонна, 5-центнер')
// switch (lang) {
//     case '1':
//         alert(l + ' кг = ' + l + ' кг');
//         break;
//     case '2':
//         alert(l + ' мг = ' + (l*0.000001) + ' кг');
//         break;
//     case '3':
//         alert(l + ' г = ' + (l*0.001) + ' кг');
//         break;
//     case '4':
//         alert(l + ' т = ' + (l*1000) + ' кг');
//         break;
//     case '5':
//         alert(l + ' ц = ' + (l*100) + ' кг');
//         break;
//     default:
//         alert('Ошибка');
//         break;
// }

// Case8

// let D = prompt('Введите день 1-31')
// let M = prompt('Введите месяц 1-12')
// switch (D) {
//     case '1':
//                 switch (M) {
//                     case '2':
//                     case '4':
//                     case '6':
//                     case '8':
//                     case '9':
//                         alert(31 + '.0' + (M-1));
//                         break;
//                     case '1':
//                         alert(31 + '.12')
//                         break;
//                     case '3':
//                         alert(28 + '.02')
//                         break;
//                     case '11':
//                         alert(31 + '.' + (M-1));
//                         break;
//                     case '12':
//                         alert(31 + '.' + (M-1));
//                         break;
//                     default:
//                         alert(30 + '.0' + (M-1));
//                         break;
//                 }
//         break;
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//     case '9':
//     case '10':
//         switch (M) {
//             case '10':
//                 alert('0' + (D-1) + '.' + M);
//                 break;
//             case '11':
//                 alert('0' + (D-1) + '.' + M);
//                 break;
//             case '12':
//                 alert('0' + (D-1) + '.' + M);
//                 break; 
//             default:
//                 alert('0' + (D-1) + '.0' + M);
//                 break;
//         }
//     break;  
//     default:
//         switch (M) {
//             case '10':
//                 alert((D-1) + '.' + M);
//                 break;
//             case '11':
//                 alert((D-1) + '.' + M);
//                 break;
//             case '12':
//                 alert((D-1) + '.' + M);
//                 break;
//             default:
//                 alert((D-1) + '.0' + M);
//                 break;   
//         }
//         break;
// }

// Case9 

// let D = prompt('Введите день 1-31')
// let M = +prompt('Введите месяц 1-12')
// switch (D) {
//     case '31':
//                 switch (M) {
//                     case '10':
//                         alert('01' + '.' + (M+1));
//                         break;
//                     case '11':
//                         alert('01' + '.' + (M+1));
//                         break;
//                     case '12':
//                         alert('01.01');
//                         break;
//                     default:
//                         alert('01' + '.0' + (M+1));
//                         break;
//                 }
//         break;
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//         switch (M) {
//             case '10':
//                 alert('0' + (D+1) + '.' + M);
//                 break;
//             case '11':
//                 alert('0' + (D+1) + '.' + M);
//                 break;
//             case '12':
//                 alert('0' + (D+1) + '.' + M);
//                 break; 
//             default:
//                 alert('0' + (D+1) + '.0' + M);
//                 break;
//         }
//     break;  
//     default:
//         switch (M) {
//             case '10':
//                 alert((D+1) + '.' + M);
//                 break;
//             case '11':
//                 alert((D+1) + '.' + M);
//                 break;
//             case '12':
//                 alert((D+1) + '.' + M);
//                 break;
//             default:
//                 alert((D+1) + '.0' + M);
//                 break;   
//         }
//     break;
// }

// Case10

// let c = prompt('Укажите направление: С - север, З - запад, Ю - юг, В - восток')
// let N = +prompt('Укажите команду: 0 - продолжать движение, 1 - поворот налево, -1 - поворот направо')
// switch (c) {
//     case 'С':
//         switch (N) {
//             case (0):
//                 alert('Робот движется на север');
//                 break;
//             case (1):
//                 alert('Робот движется на запад');
//                 break;
//             case (-1):
//                 alert('Робот движется на восток');
//                 break;
//         }
//         break;
//     case 'З':
//         switch (N) {
//             case (0):
//                 alert('Робот движется на запад');
//                 break;
//             case (1):
//                 alert('Робот движется на юг');
//                 break;
//             case (-1):
//                 alert('Робот движется на север');
//                 break;
//         }
//         break;
//     case 'Ю':
//         switch (N) {
//             case (0):
//                 alert('Робот движется на юг');
//                 break;
//             case (1):
//                 alert('Робот движется на восток');
//                 break;
//             case (-1):
//                 alert('Робот движется на запад');
//                 break;
//         }
//         break;
//     case 'В':
//         switch (N) {
//             case (0):
//                 alert('Робот движется на восток');
//                 break;
//             case (1):
//                 alert('Робот движется на север');
//                 break;
//             case (-1):
//                 alert('Робот движется на юг');
//                 break;
//         }
//         break;
//     default:
//         alert('Ошибка')
//         break;
// }

// Case11

// let c = prompt('Укажите направление: С - север, З - запад, Ю - юг, В - восток')
// let N1 = +prompt('Укажите команду: 1 - поворот налево, -1 - поворот направо, 2 - поворот на 180 градусов')
// let N2 = +prompt('Укажите команду: 1 - поворот налево, -1 - поворот направо, 2 - поворот на 180 градусов')
// switch (c) {
//     case 'С':
//         switch (N1+N2) {
//             case (0):
//                 alert('Робот смотрит на север');
//                 break;
//             case (3):
//                 alert('Робот смотрит на восток');
//                 break;
//             case (1):
//                 alert('Робот смотрит на запад');
//                 break;
//         }
//         break;
//     case 'З':
//         switch (N1+N2) {
//             case (0):
//                 alert('Робот движется на запад');
//                 break;
//             case (3):
//                 alert('Робот смотрит на север');
//                 break;
//             case (1):
//                 alert('Робот смотрит на юг');
//                 break;
//         }
//         break;
//     case 'Ю':
//         switch (N1+N2) {
//             case (0):
//                 alert('Робот движется на юг');
//                 break;
//             case (3):
//                 alert('Робот движется на запад');
//                 break;
//             case (1):
//                 alert('Робот движется на восток');
//                 break;
//         }
//         break;
//     case 'В':
//         switch (N1+N2) {
//             case (0):
//                 alert('Робот движется на восток');
//                 break;
//             case (3):
//                 alert('Робот смотрит на юг');
//                 break;
//             case (1):
//                 alert('Робот смотрит на север');
//                 break;
//         }
//         break;
//     default:
//         alert('Ошибка')
//         break;
// }

// Case 12

// let A = prompt('Укажите элемент окружности: 1 - радиус, 2 - диаметр, 3 - длина, 4 - площадь')
// let B = prompt('Укажите значение элемента')
// let R 
// let D 
// let L 
// let S 
// switch (A) {
//     case '1':
//         R = B; D = 2*R; L = 2*3.14*R; S = 3.14*(R**2)
//         alert('R=' + R + ', D=' + D + ', L=' + L + ', S=' + S);
//         break;
//     case '2':
//         D = B; R = D/2; L = 2*3.14*R; S = 3.14*(R**2)
//         alert('R=' + R + ', D=' + D + ', L=' + L + ', S=' + S);
//         break;
//     case '3':
//         L = B; R = L/(2*3.14); D = 2*R; S = 3.14*(R**2)
//         alert('R=' + R + ', D=' + D + ', L=' + L + ', S=' + S);
//         break;
//     case '4':
//         S = B; R = Math.sqrt(S*3.14)/3.14 ; D = 2*R; L = 2*3.14*R
//         alert('R=' + R + ', D=' + D + ', L=' + L + ', S=' + S);
//         break;
// }


