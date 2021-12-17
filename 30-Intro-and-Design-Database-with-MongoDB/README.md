1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi _Skiljek_ dan relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:

- **Full Name**
- **Email**
- **Phone Number**

> **Relasi: One to One dengan Embedded**

```js

// Skema Relasi

{
  _id: "<ObjectId>",
  full_name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "022123456789"
  }
}

```

2. Buatlah skema untuk kebutuhan data alamat pengguna _SkilShop_ dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:

- **Full Name**
- **Phone Number**
- **Address (Max 2)**

> **Relasi: One to Few/Many dengan Embedded**

```js

// Skema Relasi

{
  _id: "<ObjectId>",
  full_name: "Alice",
  phone: "022123456789",
  addresses: [
    {
      street: "Jl. Soekarno-Hatta",
      city: "Surabaya"
    },
    {
      street: "Jl. Soepomo",
      city: "Makassar"
    }
  ]
}

```

3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi _SkilShop_. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Contoh data yang dibutuhkan adalah:

- **Product**

  - Product Name: Kaos Polos
  - Brand Name: SkilShirt

- **Varian Pertama**

  - Varian Name 1: Kaos Polos Hitam
  - Color: Hitam
  - Quantity: 12
  - Price: Rp 99.000

- **Varian Kedua**
  - Varian Name 2: Kaos Polos Navy
  - Color: Navy
  - Quantity: 10
  - Price: Rp 99.000

> **Relasi: One to Many dengan Reference**

```js

// Skema Relasi

// products

{
  _id: "product1",
  name: "Kaos Polos",
  brand_name: "SkilShirt"
}

```

```js

// variants

{
  _id: "variant1",
  product_id: "product1",
  variant_name: "Kaos Polos Hitam",
  color: "Hitam",
  quantity: 12,
  price: 99.000
}

{
  _id: "variant2",
  product_id: "product1",
  variant_name: "Kaos Polos Navy",
  color: "Navy",
  quantity: 10,
  price: 99.000
}

```

4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama _SkilFlix_. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Contoh Data yang dibutuhkan:

- **Cinemas**

  - _First Cinema_

    - Cinema Name: CGF
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Pondok Indah Mall

  - _Second Cinema_

    - Cinema Name: Cinema31
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Mall Kelapa Gading

> **Relasi: Many to Many dengan Reference**

```js

// Skema Relasi

// films

{
  _id: "filmA",
  name: "Venom 2",
  cinemas: ["cinemaA", "cinemaB"]
}

{
  _id: "filmB",
  name: "Spiderman No Way Home",
  cinemas: ["cinemaA", "cinemaB"]
}


```

```js

// cinemas

{
  _id: "cinemaA",
  name: "CGF",
  location: "Pondok Indah Mall",
  films: ["filmA", "filmB"]
}

{
  _id: "cinemaB",
  name: "Cinema31",
  location: "Mall Kelapa Gading",
  films: ["filmA", "filmB"]
}

```
