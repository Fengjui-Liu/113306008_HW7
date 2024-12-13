// 編輯名稱功能
const editBtn = document.getElementById('edit-btn');
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');

editBtn.addEventListener('click', () => {
    if (editBtn.textContent === 'edit') {
        nameInput.value = nameDisplay.textContent;
        nameDisplay.style.display = 'none';
        nameInput.style.display = 'block';
        editBtn.textContent = 'save';
    } else {
        nameDisplay.textContent = nameInput.value;
        nameDisplay.style.display = 'block';
        nameInput.style.display = 'none';
        editBtn.textContent = 'edit';
    }
});

// 選取 DOM 元素
const addBtn = document.getElementById('add-btn');
const musicForm = document.getElementById('music-form');
const submitBtn = document.getElementById('submit-btn');
const musicList = document.querySelector('.albums');

// 顯示表單
addBtn.addEventListener('click', () => {
    musicForm.style.display = 'block';
});

// 提交表單
submitBtn.addEventListener('click', () => {
    const musicLink = document.getElementById('music-link').value.trim();
    const musicName = document.getElementById('music-name').value.trim();

    if (musicLink && musicName) {
        // 新增音樂項目
        const newMusicItem = `
            <div class="album-item">
                <a href="${musicLink}" target="_blank">
                    <img src="https://github.com/Fengjui-Liu/Photo/raw/main/youtube_music_icon.jpg" alt="${musicName}">
                </a>
                <p>${musicName}</p>
            </div>`;
        musicList.innerHTML += newMusicItem;

        // 清空表單並隱藏
        document.getElementById('music-link').value = '';
        document.getElementById('music-name').value = '';
        musicForm.style.display = 'none';
    } else {
        alert('請填寫完整的音樂名稱和連結！');
    }
});