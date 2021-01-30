var wrap = document.querySelector('.wrap');

function go(v) {
  wrap.setAttribute('data-active', v);
}

function valid1() {
  if (document.form1.q1.value === "") {
    alert('고갱님 연령을 선택해주세요.');
    return false;
  } else if (document.form1.q2.value === "") {
    alert('고갱님 성별을 선택해주세요.');
    return false;
  } else if (document.form1.si.value === "") {
    alert('거주 지역(시)를 선택해주세요.');
    return false;
  } else if (document.form1.gu.value === "") {
    alert('거주 지역(구)를 선택해주세요.');
    return false;
  } else if (document.form1.dong.value === "") {
    alert('거주 지역(동)를 선택해주세요.');
    return false;
  } else if (document.form1.q4.value === "") {
    alert('고갱님이 이용하신 시설을 선택해주세요.');
    return false;
  }
  go(2);
}

function valid2() {
  if (document.form2.q5_1_1.value === "") {
    alert('보유하신 차량의 엔진타입을 선택해주세요.');
    return false;
  } else if (document.form2.q5_1_2.value === "") {
    alert('보유하신 차량의 메이커를을 선택해주세요.');
    return false;
  } else if (document.form2.carType.value === "") {
    alert('보유하신 차량의 차종(승용차,승합차,화물차)을 작성해 주세요.');
    document.form2.carType.focus();
    return false;
  } else if (document.form2.q5_2.value === "") {
    alert('전기차 구매 여부를 확인해주세요.');
    return false;
  } else if (document.form2.program.value === "") {
    alert('시승프로그램을 선택해주세요.');
    return false;
  } else if (document.form2.q5_4.value === "") {
    alert('시승프로그램 만족도를 선택해주세요.');
    return false;
  } else if (
    document.form2.q5_5[0].checked === false &&
    document.form2.q5_5[1].checked === false &&
    document.form2.q5_5[2].checked === false &&
    document.form2.q5_5[3].checked === false &&
    document.form2.q5_5[4].checked === false
  ) {
    alert('5-5번 질문을 확인해주세요.');
    return false;
  } else if (document.form2.q5_6.value === "") {
    alert('5-6번 질문을 확인해주세요.');
    return false;
  }
  go(3);
}


function valid3() {
  if (document.form3.q6_1.value === "") {
    alert('6-1번 질문을 확인해주세요.');
    return false;
  } else if (
    document.form3.q6_2[0].checked === false &&
    document.form3.q6_2[1].checked === false &&
    document.form3.q6_2[2].checked === false &&
    document.form3.q6_2[3].checked === false &&
    document.form3.q6_2[4].checked === false &&
    document.form3.q6_2[5].checked === false &&
    document.form3.q6_2[6].checked === false
  ) {
    alert('6-2번 질문을 확인해주세요.');
    return false;
  } else if (document.form3.q6_3.value === "") {
    alert('6-3번 질문을 확인해주세요.');
    return false;
  } else if (document.form3.q6_4.value === "") {
    alert('6-4번 질문을 확인해주세요.');
    return false;
  }
  go(4);
}

function valid4() {
  if (document.form4.q7.value === "") {
    alert('7번 질문을 확인해주세요.');
    return false;
  }
  go(5, alert('설문을 완료 하였습니다.'));
}

function valid5() {
  if (document.form5.agree.value === "n") {
    alert('수집 동의를 해주세요.');
    return false;
  } else if (document.form5.name.value === "") {
    alert('성함을 작성해 주세요.');
    return false;
  } else if (document.form5.phone.value === "") {
    alert('휴대전화 번호를 작성해 주세요');
  }
  init();
  // popupOpen();
}

function popupOpen() {
  window.open('/hyundai-test/coupon1.html','_self');
}

function init() {
  var getRadioAlls = document.querySelectorAll('input[type=radio]:checked');
  var getCheckboxAlls = document.querySelectorAll('input[type=checkbox]:checked');
  var getInputAlls = document.querySelectorAll('input[type=text]');
  var selectAlls = document.querySelectorAll('select');
  var textArea = document.querySelectorAll('textarea');

  [].forEach.call(getRadioAlls, function (e, i) {
    var radioData = e.value;
    localStorage.setItem(i, radioData);
  });
  [].forEach.call(getCheckboxAlls, function (e, i) {
    var checkData = e.value;
    localStorage.setItem(i, checkData);
  });
  [].forEach.call(getInputAlls, function (e, i) {
    var inputData = e.value;
    localStorage.setItem(i, inputData);
  });
  var vals = [];
  for (var i = 0; i < selectAlls.length; i++) {
    vals.push(selectAlls[i].options[selectAlls[i].selectedIndex].value);
  }
  localStorage.setItem(i, vals)
  var textData = textArea.value;
  localStorage.setItem(textData);
}
