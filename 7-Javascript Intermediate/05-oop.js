// SOAL 01

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// Output yang terjadi ketika baris kode dibawah dijalankan adalah
// fun1 akan mengembalikan object sedangkan fun2 tidak mengembalikan apa-apa.

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// Tidak sama

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// karena Pada baris kode dibawah, this keyword mengembalikan nilai objeknya sendiri. yang mana this ini bisa dipakai untuk mengurus properti pada objeknya.
// Tetapi bila fungsi dipanggil tanpa memakai keyword new, this akan mempunyai nilai global object (Window bila di browser).

const obj = {
  fun1: function () {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  },
};

obj.fun1();
obj.fun2();

// SOAL 02

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// Encapsulation atau pengkapsulan adalah konsep tentang pengikatan data atau metode yang berbeda yang disatukan atau “dikapsulkan” menjadi satu unit data
// Encapsulation dibutuhkan karena dapat mempermudah dalam pembacaan code karena informasi yang disajikan tidak perlu dibaca secara rinci dan sudah merupakan satu kesatuan.

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// Abstraction adalah class-class yang memiliki informasi abstrak dan metode-metode dari sekumpulan data.
// Abstraction dibutuhkan karena memiliki informasi dan metode yang dapat diturunkan ke subclassnya, dan seluruh subclass akan mengikuti apa saja metode yang akan diturunkan oleh Abstract Class.

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// Inheritance adalah konsep OOP di mana kita dapat membentuk class baru yang “mewarisi” atau memiliki bagian-bagian dari class yang sudah ada sebelumnya.
// Inheritance dibutuhkan karena mengurangi pengulangan penulisan kode.

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// Polymorphism adalah konsep di mana suatu objek yang berbeda-beda dapat diakses melalui interface yang sama.
// Polymorphism dibutuhkan karena Sebuah objek yang polymorphic dapat beradaptasi dengan metode apapun yang diimplementasikan pada objek tersebut, dan setiap class memiliki interpretasinya tersendiri terhadap interfacenya.

// SOAL 03

class Phone {
  #brand = "";
  #storage = 0;
  #ram = 0;

  constructor(brand, storage, ram) {
    this.#brand = brand;
    this.#storage = storage;
    this.#ram = ram;
  }

  setBrandName(brand) {
    this.#brand = brand;
  }

  getBrandName() {
    return this.#brand;
  }

  setSpecification(storage, ram) {
    this.#storage = storage;
    this.#ram = ram;
  }

  printSpecification() {
    console.log("Ponsel ini memiliki storage : " + this.#storage + " GB dan RAM : " + this.#ram + " GB");
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co");
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// SOAL 04

class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.courseOfferings = [];
  }

  takeNewCourse(course) {
    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (course.getSubject() === this.courseOfferings[i].subject) {
        return;
      }
    }

    course.decreaseQuota();
    this.courseOfferings.push(new CourseOffering(course));
  }

  courseAttendance(course) {
    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (course.getSubject() === this.courseOfferings[i].subject) {
        this.courseOfferings[i].attendance += 1;
        return;
      }
    }
  }

  takeATest(course) {
    let index = null;

    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (course.getSubject() === this.courseOfferings[i].subject) {
        index = i;
        break;
      }
    }

    if (typeof index === "null") {
      return;
    }

    if (this.courseOfferings[index].attendance >= course.minAttendance) {
      this.courseOfferings[index].grade = Math.ceil(Math.random() * 100);
    } else {
      console.log("Please fill your absen");
    }
  }
}

class Course {
  constructor(subject, quota, minAttendance) {
    this.subject = subject;
    this.quota = quota;
    this.minAttendance = minAttendance;
  }

  getSubject() {
    return this.subject;
  }

  getAttendance() {
    return this.minAttendance;
  }

  decreaseQuota() {
    return (this.quota -= 1);
  }
}

class CourseOffering extends Course {
  constructor(course, grade = 0, attendance = 0) {
    super(course.subject, course.quota, course.minAttendance);
    this.grade = grade;
    this.attendance = attendance;
  }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
