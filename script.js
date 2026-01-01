function showContactForm() {
    const modal = document.getElementById('contact-form');
    modal.classList.add('active');
}

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('contact-form');
    modal.classList.remove('active');
});

document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim pesan
    alert('Pesan telah dikirim!');
    document.getElementById('contact-form').classList.remove('active');
});

// Menutup modal ketika mengklik di luar modal
window.addEventListener('click', function(e) {
    const modal = document.getElementById('contact-form');
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});