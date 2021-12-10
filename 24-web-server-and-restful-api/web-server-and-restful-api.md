1.	Apa perbedaan antara static web server dan dynamic web server?
	Static web server, atau tumpukan, terdiri dari komputer (perangkat keras) dengan server HTTP (perangkat lunak). Disebut "statis" karena server mengirimkan file yang dihosting apa adanya ke browser sedangkan
	Dinamyc web server terdiri dari server web statis ditambah perangkat lunak tambahan, biasanya server aplikasi dan database. Disebut "dinamis" karena server aplikasi memperbarui file yang dihosting sebelum mengirim konten ke browser melalui server HTTP.


2.	Jelaskan arsitektur static site dan dynamic site
	- Arsitektur pada static site 
	Pada saat client (web browser) mengirimkan sebuah request (HTTP Request) kepada server, kemudian server akan mengirimkan kembali hasilnya kepada browser (HTTP Response) berupa halaman statis (HTML). Pada static site tidak membutuhkan sebuah database. Komunikasi keduanya hanya terjadi antara client (yaitu web browser) dan server (yaitu web server). Karena data tersebut telah disimpan di server tanpa menggunakan database. Data tersebut akan dirender menggunakan metode (HTTP Response) ketika user melakukan sebuah request (HTTP Request) ke server tersebut.

	- Arsitektur pada dinamyc site
	Permintaan untuk sumber daya statis ditangani dengan cara yang sama seperti untuk situs statis (sumber daya statis adalah file apa pun yang tidak berubah, biasanya: CSS, JavaScript, Gambar, file PDF yang dibuat sebelumnya, dll). Diagram sederhana dari server web yang menggunakan pemrograman sisi server untuk mendapatkan informasi dari database dan membuat HTML dari template. Ini adalah diagram yang sama seperti pada gambaran umum Client-Server. Permintaan untuk sumber daya dinamis malah diteruskan ke kode sisi server (ditunjukkan dalam diagram sebagai Aplikasi Web).Untuk "dinamyc request" server menafsirkan permintaan, membaca informasi yang diperlukan dari database. Menggabungkan data yang diambil dengan template HTML dan mengirimkan kembali respons yang berisi HTML yang dihasilkan.


3.	Apa saja yang dapat kita buat pada sisi server?
	a.	Efficient storage and delivery of information
	b.	Customised user experience
	c.	Controlled access to content
	d.	Store session/state information
	e.	Notifications and communication
	f.	Data analysis


4.	Mohon jelaskan apa itu RESTful?
REST (REpresentational State Transfer) merupakan standar arsitektur komunikasi berbasis web yang sering diterapkan dalam pengembangan layanan berbasis web. REST-compliant systems, sering disebut sistem RESTful, dicirikan oleh bagaimana mereka tidak memiliki kewarganegaraan dan memisahkan masalah klien dan server


5.	Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
	a.	GET – Berfungsi untuk mengambil sumber daya tertentu (berdasarkan id) atau kumpulan sumber daya
	b.	POST - Berfungsi untuk membuat sumber daya baru
	c.	PUT -  Berfungsi untuk memperbarui sumber daya tertentu (berdasarkan id)
	d.	DELETE - Berfungsi untuk menghapus sumber daya tertentu berdasarkan id


6.	 Apa fungsi dari Response Codes?
Response Code, berfungsi untuk mengindikasikan status server terhadap resource yang direquest. misal : 404, artinya resource tidak ditemukan dan 200 response OK.


