var wrap = document.querySelector('.wrap');

function go(v) {
  wrap.setAttribute('data-active', v);
}

function valid1() {
//   if (document.form1.q1.value == "") {
//     alert('고갱님 연령을 선택해주세요.');
//     return false;
//   } else if (document.form1.q2.value == "") {
//     alert('고갱님 성별을 선택해주세요.');
//     return false;
//   } else if (document.form1.si.value == "") {
//     alert('거주 지역(시)를 선택해주세요.');
//     return false;
//   } else if (document.form1.gu.value == "") {
//     alert('거주 지역(구)를 선택해주세요.');
//     return false;
//   } else if (document.form1.dong.value == "") {
//     alert('거주 지역(동)를 선택해주세요.');
//     return false;
//   } else if (document.form1.q4.value == "") {
//     alert('고갱님이 이용하신 시설을 선택해주세요.');
//     return false;
//   }
  go(2);
}

function valid2() {
  // if (document.form2.q5_1_1.value == "") {
  //   alert('보유하신 차량의 엔진타입을 선택해주세요.');
  //   return false;
  // } else if (document.form2.q5_1_2.value == "") {
  //   alert('보유하신 차량의 메이커를을 선택해주세요.');
  //   return false;
  // } else if (document.form2.carType.value == "") {
  //   alert('보유하신 차량의 차종(승용차,승합차,화물차)을 작성해 주세요.');
  //   document.form2.carType.focus();
  //   return false;
  // } else if (document.form2.q5_2.value == "") {
  //   alert('전기차 구매 여부를 확인해주세요.');
  //   return false;
  // } else if (document.form2.program.value == "") {
  //   alert('시승프로그램을 선택해주세요.');
  //   return false;
  // } else if (document.form2.q5_4.value == "") {
  //   alert('시승프로그램 만족도를 선택해주세요.');
  //   return false;
  // } else if (document.form2.q5_5.value == "") {
  //   alert('5-5번 질문을 확인해주세요.');
  //   return false;
  // } else if (document.form2.q5_6.value == "") {
  //   alert('5-6번 질문을 확인해주세요.');
  //   return false;
  // }
  go(3);
}

function valid3() {
  if (document.form3.q6_1.value == "") {
    alert('6-1번 질문을 확인해주세요.');
    return false;
  } else if (document.form3.q6_2.value == "") {
    alert('6-2번 질문을 확인해주세요.');
    return false;
  } else if (document.form3.q6_3.value == "") {
    alert('6-3번 질문을 확인해주세요.');
    document.form2.carType.focus();
    return false;
  } else if (document.form3.q6_4.value == "") {
    alert('6-4번 질문을 확인해주세요.');
    return false;
  }
  go(4);
}


// [].forEach.call(getCheckedAlls, function (e) {
// var checkData = e.value;
// var selectData = e.options[e.selectedIndex].value;
// console.log(checkData)
//     console.log(getCheckedAlls)
//   })


// [].forEach.call(getCheckeds, function(v, i) {
//   var chkData = v.value;
//   console.log(chkData)
// });
// [].forEach.call(getSelects, function(v) {
//   var selectedData = v.options[v.selectedIndex].value;
//   console.log(selectedData)
// });

}