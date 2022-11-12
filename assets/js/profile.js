
function LogoutAccount() {
  if (!confirm("Xác nhận đăng xuất?")) {
    return false;
  }
  //Logout action
  $.ajax({
    url: "/AccountMember/LogoutAccount",
    type: "POST",
    contentType: "json",
    data: {},
    success: function (result) {
      if (result.length > 0) {
        alert(result);
        location.href = "/AccountMember/Login";
      }
    },
    error: function () {
      alert("Không thực hiện được");
    },
  });
}

var myModal = new bootstrap.Modal(
  document.getElementById("deleteAccountModal"),
  {
    keyboard: false,
  }
);

$("#deleteAccount").click(function () {
  event.preventDefault();
  myModal.show();
});

$("#btnSendRequest").click(function () {
  event.preventDefault();
  var ReasonName = $("#ReasonName").val();
  if (ReasonName === "") {
    alert("Vui lòng nhập lý do");
  } else {
    $.ajax({
      url: "/Profile/DeleteAccount",
      type: "GET",
      /*contentType: 'json',*/
      data: {
        Reason: ReasonName,
      },
      success: function (result) {
        if (result.length > 0) {
          alert(result);
          location.href = "/AccountMember/Login";
        } else {
          alert("Xóa tài khoản không thành công");
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
});


function ChangeName() {
  var name = $("#Fullname").val();
  if (name == "") {
    alert("Tên không được để trống");
    return false;
  }
  if (confirm("Xác nhận thay đổi Họ và tên")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        Fullname: name,
        changeType: 1, //Fullname
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function ChangePhone() {
  var phone = $("#Telephone").val();
  if (phone == "") {
    alert("Số điện thoại không được để trống");
    return false;
  }
  if (confirm("Xác nhận thay đổi Số điện thoại")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        Telephone: phone,
        changeType: 2, //Telephone
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function ChangeBirthDay() {
  var day = parseInt($("#birthDay").val());
  var month = parseInt($("#birthMonth").val());
  var year = parseInt($("#birthYear").val());

  if (!(day > 1)) {
    alert("Kiểm tra thông tin ngày sinh");
    return false;
  }
  if (!(month > 1)) {
    alert("Kiểm tra thông tin tháng sinh");
    return false;
  }
  if (!(year > 1) || year.toString().length < 4) {
    alert("Kiểm tra thông tin năm sinh");
    return false;
  }

  var dateOfBirth = day + "/" + month + "/" + year;

  if (confirm("Xác nhận thay đổi Ngày sinh")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        DateOfBirth: dateOfBirth,
        changeType: 3, //BirthDay
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function ChangeGender() {
  var gender = $("#Gender").val();
  if (gender == "") {
    alert("Vui lòng chọn giới tính");
    return false;
  }
  if (confirm("Xác nhận thay đổi thông tin Giới tính")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        Gender: gender,
        changeType: 4, //Gender
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function ChangeNational() {
  var country = $("#CountryId").val();
  if (country == "") {
    alert("Vui lòng chọn quốc gia");
    return false;
  }
  if (confirm("Xác nhận thay đổi quốc tịch")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        CountryId: country,
        changeType: 5, //Country
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function ChangeAddress() {
  var address = $("#Address").val();
  var provinceId = $("#ProvinceId").val();
  var districtId = $("#DistrictId").val();
  if (address == "") {
    alert("Địa chỉ không được để trống");
    return false;
  }
  if (provinceId == "") {
    alert("Vui lòng chọn tỉnh/TP");
    return false;
  }
  if (districtId == "") {
    alert("Vui lòng chọn quận/huyện");
    return false;
  }
  if (confirm("Xác nhận thay đổi Họ và tên")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        Address: address,
        ProvinceId: provinceId,
        DistrictId: districtId,
        changeType: 6, //Address
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function ChangeIdCard() {
  var idCard = $("#IdCard").val();
  var dateOfIssueIdCard = $("#DateOfIssueIdCard").val();
  var placeOfIssueIdCard = $("#PlaceOfIssueIdCard").val();
  if (idCard == "") {
    alert("CCCD/CMND không được để trống");
    return false;
  }
  if (dateOfIssueIdCard == "") {
    alert("Ngày cấp không được để trống");
    return false;
  }
  if (placeOfIssueIdCard == "") {
    alert("Nơi cấp không được để trống");
    return false;
  }
  if (confirm("Xác nhận thay đổi thông tin CMND/CCCD")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        IdCard: idCard,
        DateOfIssueIdCard: dateOfIssueIdCard,
        PlaceOfIssueIdCard: placeOfIssueIdCard,
        changeType: 7, //IdCard
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function ChangePassport() {
  var passport = $("#Passport").val();
  var dateOfIssuePassport = $("#DateOfIssuePassport").val();
  var dateOfExpirationPassport = $("#DateOfExpirationPassport").val();
  if (passport == "") {
    alert("Passport không được để trống");
    return false;
  }
  if (dateOfIssuePassport == "") {
    alert("Ngày cấp không được để trống");
    return false;
  }
  if (dateOfExpirationPassport == "") {
    alert("Ngày hết hạn không được để trống");
    return false;
  }
  if (confirm("Xác nhận thay đổi thông tin Passport")) {
    $.ajax({
      url: "/Profile/ChangeProfile",
      type: "POST",
      data: {
        Passport: passport,
        DateOfIssuePassport: dateOfIssuePassport,
        DateOfExpirationPassport: dateOfExpirationPassport,
        changeType: 8, //Passport
      },
      success: function (result) {
        if (result.status == 1) {
          alert(result.msg);
          location.reload();
        } else {
          alert(result.msg);
        }
      },
      error: function () {
        alert("Không thực hiện được");
      },
    });
  }
}

function GetDistrict(element) {
  console.log(element.value);
  // Tương tác với server
  $.ajax({
    url: "/Ajax/GetDropdownDistrict",
    data: {
      provinceId: element.value,
    },
    success: function (result) {
      //Reset option Destination
      $("#DistrictId").empty();
      $("#DistrictId").append(
        $("<option></option>").val("").html("Chọn quận/huyện")
      );
      for (n = 0; n < result.length; n++) {
        $("#DistrictId").append(
          $("<option></option>")
            .val(result[n].Value)
            .html(result[n].Text)
        );
      }
    },
  });
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn1.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn1.textContent = 'Huỷ';
  } else {
    btn1.textContent = initialText;
  }
});

const btn2= document.getElementById('btn2');
btn2.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn2.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn2.textContent = 'Huỷ';
  } else {
    btn2.textContent = initialText;
  }
});

const btn3= document.getElementById('btn3');
btn3.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn3.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn3.textContent = 'Huỷ';
  } else {
    btn3.textContent = initialText;
  }
});

const btn4= document.getElementById('btn4');
btn4.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn4.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn4.textContent = 'Huỷ';
  } else {
    btn4.textContent = initialText;
  }
});

const btn5= document.getElementById('btn5');
btn5.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn5.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn5.textContent = 'Huỷ';
  } else {
    btn5.textContent = initialText;
  }
});

const btn6= document.getElementById('btn6');
btn6.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn6.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn6.textContent = 'Huỷ';
  } else {
    btn6.textContent = initialText;
  }
});

const btn7= document.getElementById('btn7');
btn7.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn7.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn7.textContent = 'Huỷ';
  } else {
    btn7.textContent = initialText;
  }
});

const btn8= document.getElementById('btn8');
btn8.addEventListener('click', function handleClick() {
  const initialText = 'Chỉnh sửa';
  if (btn8.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn8.textContent = 'Huỷ';
  } else {
    btn8.textContent = initialText;
  }
});

