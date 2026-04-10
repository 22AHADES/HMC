import { logout } from '../services/authService.js';
import { generateItem } from '../services/itemService.js';

document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("generateItemButton")
        .addEventListener("click", generateItem);
});
    
document.getElementById('logout-button').addEventListener('click', async () => {
    await logout();
    window.location.href = 'index.html';
});