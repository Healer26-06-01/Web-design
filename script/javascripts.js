function checkDN() {
    var tk = document.getElementById("tk").value;
    if (tk == "") {
        document.getElementById("hienLoi").style.display = 'block';
        document.getElementById("hienLoi").innerHTML = "Error: Yêu cầu tên tài khoản.";

    } else {
        document.getElementById("hienLoi").style.display = 'block';
        document.getElementById("hienLoi").innerHTML = "Lỗi: Xin điền mật khẩu.";
    }
}

function checkDK() {
    var email = document.getElementById("email").value;
    var mk = document.getElementById("mk").value;
    var nl_mk = document.getElementById("nl_mk").value;
    if (email == "") {
        document.getElementById("hienLoi").style.display = 'block';
        document.getElementById("hienLoi").innerHTML = "Error: Vui lòng cung cấp địa chỉ email hợp lệ.";

    } else {
        document.getElementById("hienLoi").style.display = 'block';
        document.getElementById("hienLoi").innerHTML = "Error: Vui lòng nhập mật khẩu tài khoản.";
    }

    if (mk != nl_mk) {
        document.getElementById("hienLoi").style.display = 'block';
        document.getElementById("hienLoi").innerHTML = "Error: Mật khẩu không khớp.";
    }
}