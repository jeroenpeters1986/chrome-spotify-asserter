// Set a default
let assertionValue = '1';

// Get the preference from storage
chrome.storage.sync.get({ assertionValue: '1' }, data => {
    assertionValue = data.assertionValue;
});

// Sync pferefence on change
chrome.storage.onChanged.addListener(changes => {
    if (changes.assertionValue) {
        assertionValue = changes.assertionValue.newValue;
    }
});

// After each click, check if the assertin field is present and prefill the solution :-)
document.addEventListener('click', () => {
    setTimeout(() => {
        const selector = `input[name="assertion"][id="${assertionValue}"][value="${assertionValue}"]`;
        const input = document.querySelector(selector);
        if (input) {

            // Try to click the label attribute for frontend-stuff
            let label = document.querySelector(`label[for="${input.id}"]`);

            if (!label && input.nextElementSibling?.tagName.toLowerCase() === 'label') {
                label = input.nextElementSibling;
            }
            if (label) {
                label.click();
            }
        }
    }, 0);
});
