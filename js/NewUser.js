//#region ニフクラエラーリスト
const nifcloudErrorList = [
    {"エラーコード":"E100001","エラーメッセージ":"Authentication error by response signature incorrect.","内容":"レスポンスシグネチャの不一致E404002,E404005,E405002,E415001ではレスポンスシグネチャがヘッダーに含まれないので、レスポンスの検証を有効にしていて上記エラーが発生しても、E100001が必ず返却される。（本エラーはレスポンスの検証を行った場合にSDK上で返却される）"}
    ,{"エラーコード":"E400000","エラーメッセージ":"Bad Request.","内容":"不正なリクエスト"}
    ,{"エラーコード":"E400001","エラーメッセージ":"JSON is invalid format.","内容":"JSON形式不正"},
    {"エラーコード":"E400002","エラーメッセージ":"{0} is invalid.","内容":"型が不正"},
    {"エラーコード":"E400003","エラーメッセージ":"{0} is empty.","内容":"必須項目で未入力"}
    ,{"エラーコード":"E400004","エラーメッセージ":"{0} is invalid format.","内容":"フォーマットが不正"}
    ,{"エラーコード":"E400005","エラーメッセージ":"{0} is not a valid value.","内容":"有効な値でない"}
    ,{"エラーコード":"E400006","エラーメッセージ":"{0} does not exist.","内容":"存在しない値"}
    ,{"エラーコード":"E400007","エラーメッセージ":"{0} is invalid format[lineNo:{1}].","内容":"インポートエラー"}
    ,{"エラーコード":"E400008","エラーメッセージ":"Either {0} or {1}.","内容":"相関関係でエラー"}
    ,{"エラーコード":"E400009","エラーメッセージ":"{0} size must be between {1} and {2}.","内容":"指定桁数を超えている"}
    ,{"エラーコード":"E401000","エラーメッセージ":"Unauthorized.","内容":"認証エラー"}
    ,{"エラーコード":"E401001","エラーメッセージ":"Authentication error by header incorrect.","内容":"Header不正による認証エラー"}
    ,{"エラーコード":"E401002","エラーメッセージ":"Authentication error with ID/PASS incorrect.","内容":"ID/Pass認証エラー"}
    ,{"エラーコード":"E401003","エラーメッセージ":"OAuth {0} authentication error.","内容":"OAuth認証エラー"}
    ,{"エラーコード":"E401004","エラーメッセージ":"No settlement for a free plan.","内容":"決済情報なしで有料プラン申込みによるエラー"}
    ,{"エラーコード":"E403000","エラーメッセージ":"Forbidden.","内容":"アクセス権なし"}
    ,{"エラーコード":"E403001","エラーメッセージ":"No access with ACL.","内容":"ACLによるアクセス権なし"}
    ,{"エラーコード":"E403002","エラーメッセージ":"Unauthorized operations for {0}.","内容":"コラボレータ/管理者（サポート）権限なしシグネチャなどの不正な操作エラー"}
    ,{"エラーコード":"E403003","エラーメッセージ":"Operation that are prohibited.","内容":"禁止されているオペレーション"}
    ,{"エラーコード":"E403004","エラーメッセージ":"One-Time-Token expired.","内容":"ワンタイムキー有効期限切れ"}
    ,{"エラーコード":"E403005","エラーメッセージ":"{0} must not be entered.","内容":"設定不可の項目"}
    ,{"エラーコード":"E403006","エラーメッセージ":"Invalid GeoPoint value.","内容":"GeoPoint型フィールドに対してGeoPoint型以外の値を登録／更新GeoPoint型以外のフィールドに対してGeoPoint型の値を登録／更新不正な位置検索を実施"},
    {"エラーコード":"E404001","エラーメッセージ":"No data available.","内容":"該当データなし"}
    ,{"エラーコード":"E404002","エラーメッセージ":"None service.","内容":"該当サービスなし"}
    ,{"エラーコード":"E404003","エラーメッセージ":"None field.","内容":"該当フィールドなし"}
    ,{"エラーコード":"E404004","エラーメッセージ":"None device token.","内容":"該当デバイストークンなし"}
    ,{"エラーコード":"E404005","エラーメッセージ":"No such application.","内容":"該当アプリケーションなし"}
    ,{"エラーコード":"E404006","エラーメッセージ":"No such user.","内容":"該当ユーザなし"}
    ,{"エラーコード":"E405001","エラーメッセージ":"Method not allowed.","内容":"リクエストURI/メソッドが不許可（サービス提供しているURI/メソッドでない）"}
    ,{"エラーコード":"E409001","エラーメッセージ":"{0} is duplication.","内容":"重複エラー。重複したデータが存在している。"}
    ,{"エラーコード":"E413001","エラーメッセージ":"File size Limit error.","内容":"1ファイルあたりのサイズ上限エラー"}
    ,{"エラーコード":"E413002","エラーメッセージ":"Request entity too large.","内容":"MongoDB1ドキュメントあたりのサイズ上限エラー（16MB）"}
    ,{"エラーコード":"E413003","エラーメッセージ":"Requests thread Limit error.","内容":"複数オブジェクト一括操作の上限エラー"}
    ,{"エラーコード":"E414000","エラーメッセージ":"Request-URI Too Large.","内容":"リクエストURI長の上限エラー"}
    ,{"エラーコード":"E415001","エラーメッセージ":"Unsupported media type.","内容":"サポート対象外のContent-Typeを指定"}
    ,{"エラーコード":"E429001","エラーメッセージ":"{0} have passed their limit.","内容":"使用制限（APIコール数、PUSH通知数、ストレージ容量）超過"}
    ,{"エラーコード":"E429002","エラーメッセージ":"Too many requests.","内容":"使用制限（過度な同時接続）"}
    ,{"エラーコード":"E500001","エラーメッセージ":"System error.","内容":"システムエラー ・DBエラー"}
    ,{"エラーコード":"E502001","エラーメッセージ":"Storage error.","内容":"ストレージエラー。NIFCLOUD ストレージでエラーが発生した場合のエラー。"}
    ,{"エラーコード":"E502002","エラーメッセージ":"Mail failure.","内容":"メール送信エラー"}
    ,{"エラーコード":"E503001","エラーメッセージ":"Service unavailable.","内容":"サービス利用不可"}
    ];
//#endregion

// ニフクラ設定
const ncmb = new NCMB("0578f008d529a2aac21c4ac90565de916d630496becf28ece0a97a1f2041cedf","fc224f4329c8e447d5ddc78992f054684d2cb587f0c4c9a2cf8181311ed7768c");
const ncmbUser = new ncmb.User();

// 警告modalセット
const warningLabel = document.getElementById("warningLabel");
const warningBody = document.getElementById("warningBody");
const myModal = new bootstrap.Modal(document.getElementById('warning'), { keyboard: false });
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
let isCreateUserOK = false;
function ShowWarningModal(label,body,isYesOnly) {
    warningLabel.innerText = label;
    warningBody.innerText = body;
    if(isYesOnly)
    {
        noButton.style.visibility = "hidden";
        isCreateUserOK = false;
    }
    else
    {
        noButton.style.visibility = "visible";
        isCreateUserOK = true;
    }
    myModal.show();
}

const userID = document.getElementById("userID");
const password = document.getElementById("password");
// userID.value password.value

const pwdCheck = document.getElementById('flexCheckDefault');
pwdCheck.addEventListener('change', function() {
    if(pwdCheck.checked) {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
}, false);

const createButton = document.getElementById("createButton");
createButton.addEventListener("click",()=>{
    if(userID.value == "" || password.value == "")
    {
        ShowWarningModal("注意","ユーザーIDまたはパスワードが入力されていません。",true);
    }
    else if(password.value.match(/^[0-9A-Za-z]+$/))
    {
        ShowWarningModal("注意","パスワードに日本語を使わないでください。",true);
    }
    else
    {
        ShowWarningModal("アカウント作成の確認","アカウントを作成します。",false);
    }
});

yesButton.addEventListener("click",()=>{
    if(isCreateUserOK){
        ncmbUser.set("userName",userID.value) /* ユーザー名 */
                .set("password",password.value); /* パスワード */
        ncmbUser.signUpByAccount()
                .then(function(){
                    /* 登録後処理 */
                    sessionStorage.setItem("UserID",userID.value);
                    sessionStorage.setItem("Password",password.value);
                    location.href = "NewUserCreated.html";
                })
                .catch(function (err) {
                    /* エラー処理 */
                    ShowWarningModal("アカウントを作成できませんでした。","Error Code:" + err.code + "\n" + nifcloudErrorList.find(value => value.エラーコード == err.code).内容 + "\n" + err.error, true);
                });
    }
});