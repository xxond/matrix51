function define_snow() {
        var all_array = [
            "point-01", "point-02", "point-03", "point-04", "point-05",
            "point-06", "point-07", "point-08", "point-09", "point-10",
            "point-11", "point-12", "point-13", "point-14", "point-15",
            "point-16", "point-17", "point-18", "point-19", "point-20",
            "point-21", "point-22",
        ]

        const dateString_1 = document.getElementById("birthday").value;
        const true_year_1 = parseInt(dateString_1.split('-')[0]);
        const true_month_1 = parseInt(dateString_1.split('-')[1]);
        const true_day_1 = parseInt(dateString_1.split('-')[2]);

        const dateString_2 = document.getElementById("birthday_2").value;
        const true_year_2 = parseInt(dateString_2.split('-')[0]);
        const true_month_2 = parseInt(dateString_2.split('-')[1]);
        const true_day_2 = parseInt(dateString_2.split('-')[2]);

        var temp = new Date(document.getElementById("birthday").value);
        var userTimezoneOffset = temp.getTimezoneOffset() * 60000;
        const date = new Date(temp.getTime() - userTimezoneOffset);

        
        const year_1 = correct(true_year_1)//correct(date.getFullYear())
        const month_1 = correct(true_month_1)//correct(date.getMonth() + 1)
        const day_1 = correct(true_day_1)//correct(date.getDate())

        const year_2 = correct(true_year_2)//correct(date.getFullYear())
        const month_2 = correct(true_month_2)//correct(date.getMonth() + 1)
        const day_2 = correct(true_day_2)//correct(date.getDate())

        //var arr = [];
        var arr_1 = [];
        var arr_2 = [];

        arr_1.push(day_1, month_1, year_1, correct(day_1 + month_1 + year_1)) // А0, Б1, В2, Г3
        arr_1.push(correct(arr_1[0] + arr_1[1] + arr_1[2] + arr_1[3])) // Д4
        arr_1.push(correct(arr_1[0] + arr_1[1]), correct(arr_1[1] + arr_1[2]), correct(arr_1[2] + arr_1[3]), correct(arr_1[3] + arr_1[0])) // E5 Ж6 И7 З8

        arr_2.push(day_2, month_2, year_2, correct(day_2 + month_2 + year_2)) // А0, Б1, В2, Г3
        arr_2.push(correct(arr_2[0] + arr_2[1] + arr_2[2] + arr_2[3])) // Д4
        arr_2.push(correct(arr_2[0] + arr_2[1]), correct(arr_2[1] + arr_2[2]), correct(arr_2[2] + arr_2[3]), correct(arr_2[3] + arr_2[0])) // E5 Ж6 И7 З8

        var arr = arr_1.map(function (num, idx) {
            return correct(num + arr_2[idx]);
          });


        //arr.push(day, month, year, correct(day + month + year)) // А0, Б1, В2, Г3
        //arr.push(correct(arr[0] + arr[1] + arr[2] + arr[3])) // Д4
        //arr.push(correct(arr[0] + arr[1]), correct(arr[1] + arr[2]), correct(arr[2] + arr[3]), correct(arr[3] + arr[0])) // E5 Ж6 И7 З8
        arr.push(correct(arr[3] + arr[4]), correct(arr[2] + arr[4])) // К9 Л10
        arr.push(correct(arr[9] + arr[10])) // M11
        arr.push(correct(arr[9] + arr[11]), correct(arr[10] + arr[11])) // Н12 О13

        arr.push(correct(arr[0] + arr[4])) // b5 14
        arr.push(correct(arr[1] + arr[4])) // b6 15

        arr.push(correct(arr[0] + arr[14])) // b7 16
        arr.push(correct(arr[1] + arr[15])) // b8 17

        arr.push(correct(arr[3] + arr[9])) // b9 18
        arr.push(correct(arr[2] + arr[10])) // c1 19

        arr.push(correct(arr[4] + arr[14])) // c2 20
        arr.push(correct(arr[4] + arr[15])) // c3 21

        //arr.push(correct(arr[4] + arr[5])) // c4 22
        arr.push(correct(arr[5] + correct(arr[5] + arr[6] + arr[7] + arr[8]))) // c4 22
        arr.push(correct(arr[5] + arr[22])) // c5 23

        //arr.push(correct(arr[4] + arr[6])) // c6 24
        arr.push(correct(arr[6] + correct(arr[5] + arr[6] + arr[7] + arr[8])))// c6 24
        arr.push(correct(arr[6] + arr[24])) // c7 25

        //arr.push(correct(arr[4] + arr[7])) // c8 26
        arr.push(correct(arr[7] + correct(arr[5] + arr[6] + arr[7] + arr[8]))) // c8 26
        arr.push(correct(arr[7] + arr[26])) // c9 27

        //arr.push(correct(arr[4] + arr[8])) // d1 28
        arr.push(correct(arr[8] + correct(arr[5] + arr[6] + arr[7] + arr[8]))) // d1 28
        arr.push(correct(arr[8] + arr[28])) // d2 29

        const final = arr

        var arrayLength = all_array.length;


        


        document.getElementById('nebo1').innerHTML = correct(arr[1] + arr[3])
        document.getElementById('zemlia1').innerHTML = correct(arr[0] + arr[2])
        document.getElementById('for_self1').innerHTML = correct(correct(arr[1] + arr[3]) + correct(arr[0] + arr[2]))

        document.getElementById('male1').innerHTML = correct(arr[5] + arr[7])
        document.getElementById('female1').innerHTML = correct(arr[6] + arr[8])
        document.getElementById('socium1').innerHTML = correct(correct(arr[5] + arr[7]) + correct(arr[6] + arr[8]))

        document.getElementById('duhovnoe1').innerHTML = correct(correct(correct(arr[1] + arr[3]) + correct(arr[0] + arr[2])) + correct(correct(arr[5] + arr[7]) + correct(arr[6] + arr[8])))
        document.getElementById('planetarnoe1').innerHTML = correct(correct(correct(arr[5] + arr[7]) + correct(arr[6] + arr[8])) + correct(correct(correct(arr[1] + arr[3]) + correct(arr[0] + arr[2])) + correct(correct(arr[5] + arr[7]) + correct(arr[6] + arr[8]))))


        for (var i = 0; i < arrayLength; i++) {
            document.getElementById(all_array[i]).innerHTML = final[i]
        }

        document.getElementById("buttons").style.visibility = "hidden";
        document.getElementById("whole").style.display = "contents";
        // document.getElementById("table1").style.visibility = "visible";
        // document.getElementById("table2").style.visibility = "visible";
        // document.getElementById("matrixL").style.visibility = "visible";

        return true
    };