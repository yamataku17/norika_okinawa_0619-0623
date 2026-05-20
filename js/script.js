const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.day-content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.tab;

        // ボタンの active を切り替え
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // コンテンツの active を切り替え
        contents.forEach(content => {
            content.classList.remove('active');

            if (content.id === target) {
                content.classList.add('active');
            }
        });
    });
});