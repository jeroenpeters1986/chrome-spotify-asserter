document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('assertionSelect');
    const status = document.getElementById('status');

    // Get default
    chrome.storage.sync.get({ assertionValue: '1' }, (data) => {
        select.value = data.assertionValue;
    });

    // Save new preference
    document.getElementById('save').addEventListener('click', () => {
        const value = select.value;
        chrome.storage.sync.set({ assertionValue: value }, () => {
            status.textContent = 'Saved ✔';
            setTimeout(() => status.textContent = '', 2000);
        });
    });
});
