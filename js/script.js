// モーダル
function openModal(title, text, imgSrc){
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    modal.style.display = "flex"; /*画面を出す*/ 
    modalImg.src = imgSrc;
    modalTitle.textContent = title; /*タイトルを差し替え*/
    modalText.textContent = text;
}

function closeModal(){
    document.getElementById("modal").style.display = "none"; /*閉じる*/
}

const modal = document.getElementById("modal");
const modalContent = document.querySelector("modal-content");

modal.addEventListener("click",()=>{ /*背景クリック*/
    closeModal();
});
modalContent.addEventListener("click",(e)=>{ /*本体クリック*/
    e.stopPropagation();
});
// ハンバーガーメニュー
function toggleMenu(){
    document.querySelector(".nav").classList.toggle("active");//クラスをON/OFFするスイッチ
}
document.querySelectorAll(".nav a").forEach(link => { 
    link.addEventListener("click",() =>{ //ナビのリンクをクリックすると
        document.querySelector(".nav").classList.remove("active"); //自動で閉じる
    });
});