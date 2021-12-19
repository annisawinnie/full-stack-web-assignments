1. Jelaskan apa yang dimaksud dengan **Container** pada Docker!  
   Container pada Docker adalah tempat untuk mengemas kode aplikasi kita beserta komponen pendukungnya seperti moduls, settings, dan database. Container merupakan perwujudan dari Docker Image.

2. Jelaskan apa perbedaan antara konsep **Container** dengan **Virtual Machine**!  
   Perbedaanya yaitu Container pada Docker tidak mengemas Guest OS untuk berjalan karena melakukan virtualisasi pada Host OS-nya. Sedangkan Virtual Machine melakukan virtualisasi pada Host Hardware-nya untuk berjalan sehingga memakan lebih banyak resource dan waktu untuk booting dibanding Container.

3. Apa yang dimaksud dengan **Docker File**?  
   Docker File adalah file teks yang berisi semua perintah yang mencakup semua instruksi yang diperlukan oleh Docker untuk membuat Image.

4. Apa yang dimaksud dengan **Docker Registry** ?  
   Docker Registry adalah layanan berbasis cloud-storage tempat penyimpanan Image Docker. Kita bisa mendownload Image milik orang lain untuk digunakan di aplikasi kita atau kita bisa mengupload Image buatan sendiri.

5. Jelaskan bagaimana cara untuk menjalankan lebih dari satu Docker Container secara bersamaan dan saling terhubung!  
   Kita dapat menggunakan Docker Compose untuk mengemas dan menjalankan secara bersamaan lebih dari satu Container yang saling terhubung. Caranya yaitu:
   - Buat file NAMA_FILE.yaml di dalam project yang dibuat
   - Tulis beberapa perintah di dalam file tersebut
   - Jalankan menggunakan perintah `docker-compose NAMA_FILE.yaml up`
